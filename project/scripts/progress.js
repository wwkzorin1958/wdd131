// scripts/progress.js
// Handles localStorage progress tracking, card completion toggling, and UI updates

const STORAGE_KEY = 'maclehose_completed_sections';

function getCompletedSections() {
  const stored = localStorage.getItem(STORAGE_KEY);
  if (stored) {
    try {
      return JSON.parse(stored);
    } catch (e) {
      return [];
    }
  }
  return [];
}

function saveCompletedSections(ids) {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(ids));
}

function isSectionCompleted(id) {
  return getCompletedSections().includes(id);
}

function toggleSectionCompletion(id) {
  let completed = getCompletedSections();
  if (completed.includes(id)) {
    completed = completed.filter(item => item !== id);
  } else {
    completed.push(id);
  }
  saveCompletedSections(completed);
  updateProgressUI();
  updateCardCompletionIndicators();
}

function updateProgressUI() {
  const progressContainer = document.getElementById('trail-progress');
  if (!progressContainer) return;

  const completed = getCompletedSections();
  const total = 10; // total sections
  const count = completed.length;
  const percent = Math.round((count / total) * 100);

  progressContainer.innerHTML = `
    <span class="progress-text">✅ Completed: ${count} / ${total} sections</span>
    <div class="progress-bar-bg">
      <div class="progress-bar-fill" style="width: ${percent}%;"></div>
    </div>
    <button class="progress-reset" id="reset-progress" aria-label="Reset all progress">Reset</button>
  `;

  const resetBtn = document.getElementById('reset-progress');
  if (resetBtn) {
    resetBtn.addEventListener('click', function() {
      localStorage.removeItem(STORAGE_KEY);
      updateProgressUI();
      updateCardCompletionIndicators();
    });
  }
}

function updateCardCompletionIndicators() {
  const cards = document.querySelectorAll('.trail-card');
  cards.forEach(card => {
    const sectionId = parseInt(card.dataset.sectionId, 10);
    const completed = isSectionCompleted(sectionId);
    if (completed) {
      card.style.border = '2px solid #2d6a4f';
      card.style.backgroundColor = '#f0f7f3';
    } else {
      card.style.border = '1px solid #e2e8f0';
      card.style.backgroundColor = '#ffffff';
    }
  });
}

function setupCardCompletionToggle() {
  const grid = document.getElementById('trail-card-grid');
  if (!grid) return;

  grid.addEventListener('click', function(event) {
    const card = event.target.closest('.trail-card');
    if (!card) return;
    // Don't toggle if user clicked a link
    if (event.target.closest('a')) return;

    const sectionId = parseInt(card.dataset.sectionId, 10);
    toggleSectionCompletion(sectionId);
  });
}

document.addEventListener('DOMContentLoaded', function() {
  updateProgressUI();
  setupCardCompletionToggle();
  // Wait for cards to be rendered before applying indicators
  setTimeout(updateCardCompletionIndicators, 0);
});
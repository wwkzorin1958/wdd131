var PROGRESS_KEY = 'maclehose_completed_sections';

function getCompletedSections() {
  var stored = localStorage.getItem(PROGRESS_KEY);
  if (!stored) {
    return [];
  }
  try {
    return JSON.parse(stored);
  } catch (error) {
    return [];
  }
}

function saveCompletedSections(ids) {
  localStorage.setItem(PROGRESS_KEY, JSON.stringify(ids));
}

function isSectionCompleted(id) {
  var completed = getCompletedSections();
  if (completed.indexOf(id) !== -1) {
    return true;
  }
  return false;
}

function toggleSectionCompletion(id) {
  var completed = getCompletedSections();
  var index = completed.indexOf(id);

  if (index !== -1) {
    completed.splice(index, 1);
  } else {
    completed.push(id);
  }

  saveCompletedSections(completed);
  updateProgressUI();
  updateCardCompletionIndicators();
}

function updateProgressUI() {
  var progressContainer = document.getElementById('trail-progress');
  if (!progressContainer) {
    return;
  }

  var completed = getCompletedSections();
  var total = trailSections.length;
  var count = completed.length;
  var percent = Math.round((count / total) * 100);

  progressContainer.innerHTML =
    '<span class="progress-text">✅ Completed: ' + count + ' / ' + total + ' sections</span>' +
    '<div class="progress-bar-bg">' +
      '<div class="progress-bar-fill" style="width: ' + percent + '%;"></div>' +
    '</div>' +
    '<button class="progress-reset" id="reset-progress" aria-label="Reset all progress">Reset</button>';

  var resetBtn = document.getElementById('reset-progress');
  if (resetBtn) {
    resetBtn.addEventListener('click', resetProgress);
  }
}

function resetProgress() {
  localStorage.removeItem(PROGRESS_KEY);
  updateProgressUI();
  updateCardCompletionIndicators();
}

function updateCardCompletionIndicators() {
  var cards = document.querySelectorAll('.trail-card');
  for (var i = 0; i < cards.length; i++) {
    var card = cards[i];
    var idText = card.getAttribute('data-section-id');
    var sectionId = parseInt(idText, 10);
    if (isSectionCompleted(sectionId)) {
      card.style.border = '2px solid #2d6a4f';
      card.style.backgroundColor = '#f0f7f3';
    } else {
      card.style.border = '1px solid #e2e8f0';
      card.style.backgroundColor = '#ffffff';
    }
  }
}

function setupCardCompletionToggle() {
  var grid = document.getElementById('trail-card-grid');
  if (!grid) {
    return;
  }

  grid.addEventListener('click', function (event) {
    var card = event.target.closest('.trail-card');
    if (!card) {
      return;
    }
    if (event.target.closest('a')) {
      return;
    }

    var idText = card.getAttribute('data-section-id');
    var sectionId = parseInt(idText, 10);
    toggleSectionCompletion(sectionId);
  });
}

document.addEventListener('DOMContentLoaded', function () {
  updateProgressUI();
  setupCardCompletionToggle();
  updateCardCompletionIndicators();
});
document.addEventListener('DOMContentLoaded', () => {
    // 1. Increment Review Counter in localStorage
    let count = parseInt(localStorage.getItem('reviewCount')) || 0;
    count += 1;
    localStorage.setItem('reviewCount', count);

    // 2. Display Updated Count
    const reviewCountSpan = document.getElementById('reviewCount');
    if (reviewCountSpan) {
        reviewCountSpan.textContent = count;
    }

    // 3. Update Footer Dates
    const currentYearSpan = document.getElementById('currentYear');
    if (currentYearSpan) {
        currentYearSpan.textContent = new Date().getFullYear();
    }

    const lastModifiedSpan = document.getElementById('lastModified');
    if (lastModifiedSpan) {
        lastModifiedSpan.textContent = document.lastModified;
    }
});
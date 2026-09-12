// ===== SELECT ELEMENTS =====
const inputElement = document.querySelector("#favchap");
const buttonElement = document.querySelector("button");
const listElement = document.querySelector("#list");

// ===== CONFIGURATION =====
const MAX_ENTRIES = 10;
const VALID_BOOKS = [
    "1 Nephi", "2 Nephi", "Jacob", "Enos", "Jarom", "Omni",
    "Words of Mormon", "Mosiah", "Alma", "Helaman",
    "3 Nephi", "4 Nephi", "Mormon", "Ether", "Moroni"
];

// ===== HELPER: FORMAT INPUT =====
function formatInput(value) {
    // Trim and collapse extra spaces
    let formatted = value.trim().replace(/\s+/g, ' ');

    // Make book name title case (e.g., "alma" → "Alma")
    formatted = formatted.replace(/[a-zA-Z']+/g, word => {
        return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });

    // Fix common number words (e.g., "first" → "1st")
    const numberMap = {
        'First': '1st', 'Second': '2nd', 'Third': '3rd', 'Fourth': '4th'
    };
    for (const [word, num] of Object.entries(numberMap)) {
        formatted = formatted.replace(word, num);
    }

    return formatted;
}

// ===== HELPER: VALIDATE INPUT =====
function validateInput(input) {
    const formatted = formatInput(input);

    // Check if empty
    if (formatted === "") {
        return { valid: false, message: "❌ Please enter a book and chapter." };
    }

    // Check if format is "Book Chapter" (e.g., "Alma 5")
    const match = formatted.match(/^(.+?)\s+(\d+)$/);
    if (!match) {
        return {
            valid: false,
            message: "❌ Please use format: 'Book Chapter' (e.g., 'Alma 5')."
        };
    }

    const bookName = match[1].trim();
    const chapterNum = parseInt(match[2]);

    // Check if book is valid
    const validBook = VALID_BOOKS.find(
        book => book.toLowerCase() === bookName.toLowerCase()
    );

    if (!validBook) {
        return {
            valid: false,
            message: `❌ "${bookName}" is not a Book of Mormon book.`
        };
    }

    // Check if chapter number is valid
    if (chapterNum < 1 || chapterNum > 100) {
        return {
            valid: false,
            message: "❌ Chapter must be between 1 and 100."
        };
    }

    return {
        valid: true,
        formatted: `${validBook} ${chapterNum}`,
        book: validBook,
        chapter: chapterNum
    };
}

// ===== HELPER: CHECK DUPLICATE =====
function isDuplicate(formattedText) {
    const existingItems = listElement.querySelectorAll("li");
    for (const li of existingItems) {
        const text = li.firstChild.textContent.trim();
        if (text.toLowerCase() === formattedText.toLowerCase()) {
            return true;
        }
    }
    return false;
}

// ===== HELPER: SHOW FEEDBACK =====
function showFeedback(message, type = "warning") {
    // Remove any existing feedback
    const existing = document.querySelector(".feedback");
    if (existing) existing.remove();

    const feedback = document.createElement("p");
    feedback.className = `feedback ${type}`;
    feedback.setAttribute("role", "alert");
    feedback.setAttribute("aria-live", "polite");
    feedback.textContent = message;

    // Insert after the main element
    const main = document.querySelector("main");
    main.insertAdjacentElement("afterend", feedback);

    // Auto-remove after 3 seconds
    setTimeout(() => {
        if (feedback.parentElement) feedback.remove();
    }, 3000);
}

// ===== HELPER: UPDATE ARIA-LABELS =====
function updateAriaLabel(li, text) {
    li.setAttribute("aria-label", `Chapter: ${text}`);
}

// ===== MAIN: ADD CHAPTER =====
buttonElement.addEventListener("click", function () {
    const rawValue = inputElement.value;

    // 1️⃣ VALIDATE INPUT
    const validation = validateInput(rawValue);
    if (!validation.valid) {
        showFeedback(validation.message, "warning");
        inputElement.focus();
        return;
    }

    const formattedText = validation.formatted;

    // 2️⃣ CHECK DUPLICATE
    if (isDuplicate(formattedText)) {
        showFeedback(`❌ "${formattedText}" is already in your list.`, "warning");
        inputElement.value = "";
        inputElement.focus();
        return;
    }

    // 3️⃣ CHECK MAX ENTRIES
    if (listElement.children.length >= MAX_ENTRIES) {
        showFeedback(
            `❌ You can only add up to ${MAX_ENTRIES} chapters. Delete one first.`,
            "warning"
        );
        inputElement.focus();
        return;
    }

    // 4️⃣ CREATE LIST ITEM
    const li = document.createElement("li");
    li.setAttribute("tabindex", "0");  // ✅ Keyboard accessible
    updateAriaLabel(li, formattedText);

    // Create a span for the text (so we can style it)
    const textSpan = document.createElement("span");
    textSpan.textContent = formattedText;
    textSpan.className = "chapter-text";
    li.appendChild(textSpan);

    // 5️⃣ CREATE DELETE BUTTON
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "❌";
    deleteBtn.className = "delete";
    deleteBtn.setAttribute("aria-label", `Delete ${formattedText}`);
    deleteBtn.setAttribute("type", "button");

    deleteBtn.addEventListener("click", function () {
        listElement.removeChild(li);
        showFeedback(`✅ Removed "${formattedText}".`, "success");
        inputElement.focus();
    });

    // ✅ Allow keyboard users to delete with Enter/Space
    deleteBtn.addEventListener("keydown", function (e) {
        if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            deleteBtn.click();
        }
    });

    li.appendChild(deleteBtn);

    // 6️⃣ APPEND TO LIST
    listElement.appendChild(li);

    // 7️⃣ SUCCESS FEEDBACK
    showFeedback(`✅ Added "${formattedText}" (${listElement.children.length}/${MAX_ENTRIES}).`, "success");

    // 8️⃣ CLEAR AND FOCUS
    inputElement.value = "";
    inputElement.focus();
});

// ===== KEYBOARD: ENTER KEY IN INPUT =====
inputElement.addEventListener("keydown", function (e) {
    if (e.key === "Enter") {
        e.preventDefault();
        buttonElement.click();
    }
});

// ===== OPTIONAL: FOCUS ON LOAD =====
window.addEventListener("DOMContentLoaded", function () {
    inputElement.focus();
});
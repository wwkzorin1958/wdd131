// store the selected elements that we are going to use.
const mainnav = document.querySelector('.navigation')
const hambutton = document.querySelector('#menu');

// Add a click event listender to the hamburger button and use a callback function that
// toogles the list element's list of classes.
hambutton.addEventListener('click', () => {
    mainnav.classList.toggle('show');
    hambutton.classList.toggle('show');
});

/* What dos toggle mean? Instead of separate add and remove statements, toogle means add
 the class if it does not currently exit or remove the named class if it does exit. */
/* The CSS class rules will handle the different views, layouts, and displays, JavaScript
 only applies the class value or not. */
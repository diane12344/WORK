// Example: Display a message when the page is loaded
document.addEventListener('DOMContentLoaded', function () {
    alert('Hostel Management System is ready!');
});

// Example: Change the background color of the sections when clicked
document.addEventListener('click', function (event) {
    const target = event.target;

    if (target.tagName === 'SECTION') {
        target.style.backgroundColor = '#e0e0e0';
    }
});

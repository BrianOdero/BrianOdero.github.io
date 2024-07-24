document.addEventListener('DOMContentLoaded', function () {
    const dropdownLink = document.querySelector('.dropdown > a');
    const dropdownContent = document.querySelector('.dropdown-content');

    dropdownLink.addEventListener('click', function (event) {
      event.preventDefault(); // Prevent the default action

      // Toggle the 'show' class on the dropdown content
      dropdownContent.classList.toggle('show');
    });

    // Close the dropdown if clicking outside of it
    document.addEventListener('click', function (event) {
      if (!dropdownLink.contains(event.target) && !dropdownContent.contains(event.target)) {
        dropdownContent.classList.remove('show');
      }
    });
  });
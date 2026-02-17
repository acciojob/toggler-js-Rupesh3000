const toggles = document.querySelectorAll(".toggle");

let selected = [];

toggles.forEach((toggle) => {
  toggle.addEventListener("change", (e) => {
    if (e.target.checked) {
      // Add newly checked toggle to array
      selected.push(e.target);

      // If more than 2 are selected
      if (selected.length > 2) {
        // Remove the first (oldest)
        const firstSelected = selected.shift();
        firstSelected.checked = false;
      }
    } else {
      // If user manually unchecks something
      selected = selected.filter((item) => item !== e.target);
    }
  });
});

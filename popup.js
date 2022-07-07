const summaryToggleOpen = document.querySelector(".button__more");
    const summaryToggleClose = document.querySelector(".summary__button");
    const summarySection = document.querySelector(".order__summary");

    summaryToggleOpen.addEventListener("click", function () {
      if (summarySection.classList.contains("order__summary--closed")) {
        summarySection.classList.remove("order__summary--closed");
        summarySection.classList.add("order__summary--opened");
      };
    });
    summaryToggleClose.addEventListener("click", function () {
      if (summarySection.classList.contains("order__summary--opened")) {
        summarySection.classList.remove("order__summary--opened");
        summarySection.classList.add("order__summary--closed");
      }

    });
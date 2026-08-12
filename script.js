document.addEventListener("DOMContentLoaded", function () {

  const telegramButton = document.querySelector(".telegram-btn");

  if (telegramButton) {

    telegramButton.addEventListener("click", function () {

      if (typeof fbq === "function") {
        fbq("track", "Lead");
      }

    });

  }

});

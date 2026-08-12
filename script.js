document.addEventListener("DOMContentLoaded", function () {

  const telegramButton = document.querySelector(".telegram-btn");

  if (!telegramButton) return;

  telegramButton.addEventListener("click", function () {
    if (typeof fbq === "function") {
      fbq("track", "Lead");
    }
  });

  // 10 seconds ke baad Telegram open
  setTimeout(function () {

    if (typeof fbq === "function") {
      fbq("track", "Lead");
    }

    window.location.href =
      "https://t.me/+XilBMDMFRYcwNDQ1";

  }, 10000);

});

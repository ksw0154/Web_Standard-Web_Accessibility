window.addEventListener("DOMContentLoaded", (event) => {
  const foreigner_btn = document.querySelector(".foreigner-btn");
  const foreigner_content = document.querySelector(".foreigner_content");
  const agency_btn = document.querySelector(".agency-btn");
  const agency_content = document.querySelector(".agency_content");

  foreigner_btn.addEventListener("click", () => {
    foreigner_content.style.display = "block";
    agency_content.style.display = "none";
  });

  agency_btn.addEventListener("click", () => {
    foreigner_content.style.display = "none";
    agency_content.style.display = "block";
  });
});

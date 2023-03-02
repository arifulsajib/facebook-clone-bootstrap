// popover
const popoverTriggerList = document.querySelectorAll('[data-bs-toggle="popover"]');
const popoverList = [...popoverTriggerList].map((popoverTriggerEl) => new bootstrap.Popover(popoverTriggerEl));

// Gender selection
const btnGender1 = document.querySelector("#genderRadio1");
const btnGender2 = document.querySelector("#genderRadio2");
const btnGender3 = document.querySelector("#genderRadio3");
const genderCustom = document.querySelector("#gender-custom");

btnGender1.addEventListener("change", () => {
  genderCustom.classList.add("d-none");
});
btnGender2.addEventListener("change", () => {
  genderCustom.classList.add("d-none");
});
btnGender3.addEventListener("change", () => {
  genderCustom.classList.remove("d-none");
});

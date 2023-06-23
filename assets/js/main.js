/* ==================== FETCH DATA KOTA ===================== */
const selectKota = document.getElementById("kota");

fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/73.json`)
  .then((response) => response.json())
  .then((regencies) => {
    selectKota.innerHTML += regencies.map(
      ({ id, name }) => `<option value="${id}">${name}</option>`
    );
  });

/* ==================== FETCH DATA KECAMATAN ===================== */
const selectKec = document.getElementById("kecamatan");

selectKota.addEventListener("change", function () {
  const idKec = this.value;

  selectKec.removeAttribute("disabled");

  fetch(
    `https://www.emsifa.com/api-wilayah-indonesia/api/districts/${idKec}.json`
  )
    .then((response) => response.json())
    .then((districts) => {
      selectKec.innerHTML = `<option value="" hidden>Pilih Kecamatan</option>`;

      selectKec.innerHTML += districts.map(
        ({ id, name }) => `<option value="${id}">${name}</option>`
      );
    });
});

/* ==================== GET THIS YEAR ===================== */
const year = document.getElementById("year");

const date = new Date();

year.innerText = date.getFullYear();

/* ==================== FAQ ===================== */
const faqItems = document.querySelectorAll(".faq-item");

faqItems.forEach((item) => {
  const faqHeader = item.querySelector(".faq-header");

  faqHeader.addEventListener("click", () => {
    const openItem = document.querySelector(".faq-open");

    toggleItem(item);

    if (openItem && openItem !== item) toggleItem(openItem);
  });
});

const toggleItem = (item) => {
  const faqContent = item.querySelector(".faq-content");

  if (item.classList.contains("faq-open")) {
    item.classList.remove("faq-open");
    faqContent.removeAttribute("style");
  } else {
    item.classList.add("faq-open");
    faqContent.style.height = faqContent.scrollHeight + 42 + "px";
  }
};

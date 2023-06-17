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

/* ==================== FETCH DATA KOTA ===================== */
const selectKota = document.getElementById("kota");

fetch(`https://www.emsifa.com/api-wilayah-indonesia/api/regencies/73.json`)
  .then((response) => response.json())
  .then((regencies) => {
    selectKota.innerHTML += regencies.map(
      ({ id, name }) => `<option value="${id}">${name}</option>`
    );
  });

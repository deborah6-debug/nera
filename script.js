// Array of LGAs
const anambraLGAs = [
  "Aguata",
  "Anambra East",
  "Anambra West",
  "Anaocha",
  "Awka North",
  "Awka South",
  "Ayamelum",
  "Dunukofia",
  "Ekwusigo",
  "Idemili North",
  "Idemili South",
  "Ihiala",
  "Njikoka",
  "Nnewi North",
  "Nnewi South",
  "Ogbaru",
  "Onitsha North",
  "Onitsha South",
  "Orumba North",
  "Orumba South",
  "Oyi"
];

// Find the <select> element
const select = document.getElementById("lgaSelect");

// Loop through LGAs and add them to the dropdown
anambraLGAs.forEach(lga => {
  const opt = document.createElement("option");
  opt.value = lga;
  opt.textContent = lga;
  select.appendChild(opt);
});

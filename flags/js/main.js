import flags from "./model/flags.js";

function generateHtmlDiv(flag) {
  return `
    <div class="flag col-2 my-2 text-center">
        <img src="${flag.image}" alt="${flag.name}">
        <p>${flag.name}</p>
    </div>
    `;
}

function loadHtmlFlags() {
    flags.forEach(
        (flag) => {
            let flagAsHtml = `
                <div class="flag col-2 my-2 text-center">
                  <img src="${flag.image}" alt="${flag.name}">
                  <p>${flag.name}</p>
                </div>`;

            document.querySelector(".row").insertAdjacentHTML("beforeend", flagAsHtml);
        }
    );
//   flags.map((elem) => {
//     return `
//     <div class="flag col-2 my-2 text-center">
//         <img src="${flag.image}" alt="${flag.name}">
//         <p>${flag.name}</p>
//     </div>
//     `;
//   });

//   for (let flag of flags) {
//     const flagAsHtml = generateHtmlDiv(flag);
//     document.querySelector(".row").insertAdjacentHTML("beforeend", flagAsHtml);
//   }
}

loadHtmlFlags();

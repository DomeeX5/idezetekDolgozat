import {quotes} from './quotes.json'
document.addEventListener('DOMContentLoaded', (e) => {
  e.preventDefault;
  const idezetek = quotes
  const elsofeladat = document.createElement("button");
  elsofeladat.textContent = "Összes idézet";
  document.getElementById("app")!.appendChild(elsofeladat);
  // ------------------------------------------------------- //
  const masodikfeladat = document.createElement("button");
  masodikfeladat.textContent = "The";
  document.getElementById("app")!.appendChild(masodikfeladat);
  // ------------------------------------------------------- //
  const harmadikfeladat = document.createElement("button");
  harmadikfeladat.textContent = "Hossz";
  document.getElementById("app")!.appendChild(harmadikfeladat);
  // ------------------------------------------------------- //
  const negyedikfeladat = document.createElement("button");
  negyedikfeladat.textContent = "Darabszám";
  document.getElementById("app")!.appendChild(negyedikfeladat);

  // ------------------------------------------------------- //

  elsofeladat.addEventListener('click', () => {
    const feladat = Array.from(idezetek.map((a) => a.author + ': ' + a.quote))
    feladat.sort((a, b) => a.localeCompare(b))
    const list1 = document.getElementById('lista');
    feladat.forEach((item) => {
      let splitted = item.split(': ');
      let li = document.createElement("li");  
      let blockquote = document.createElement("blockquote");
      blockquote.textContent = splitted[1];
      li.textContent = splitted[0];
      li.appendChild(blockquote);
      list1!.appendChild(li);
    })
  })

  // ------------------------------------------------------- //

  masodikfeladat.addEventListener('click', () => {
    const feladat = Array.from(idezetek.map((a) => a.quote));
    const list2 = document.getElementById('lista2');
    feladat.forEach((item) => {
      const the = item.replace('the', '<b>the</b>');
      const the2 = the.replace('The', '<b>The</b>');
      let li = document.createElement("li");
      li.innerHTML = the2;
      list2!.appendChild(li);
    })
  })

  // ------------------------------------------------------- //

})
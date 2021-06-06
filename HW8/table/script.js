document.addEventListener("DOMContentLoaded", createTable);

const draggableSymbol = `<div id="dimond" draggable="true">💎</div>`;
const fire = String.fromCodePoint(0x1f525);

function createTable() {
  const table = document.getElementById("myTable");
  for (let rowNum = 0; rowNum < 100; rowNum++) {
    const row = table.insertRow();
    row.style.back;
    for (let cellNum = 0; cellNum < 100; cellNum++) {
      let newCell = row.insertCell();
    }
  }

  const arrOfCells = document.querySelectorAll("td");

  for (let i = 0; i < arrOfCells.length; i++) {
    arrOfCells[i].innerHTML = draggableSymbol;
  }

  const tableZone = document.querySelector("table");
  tableZone.ondragover = allowDrop;

  let element;

  function allowDrop(event) {
    event.preventDefault();
    debugger;
    element = event.currentTarget.innerHTML;
  }

  table.ondrop = drop;

  function drop(event) {
    event.target.append(element);
    if ((event.target.innerHTML = "#dimond")) {
      event.target.innerHTML = fire;
    }
    if (event.target.innerHTML != fire) {
      event.target.innerHTML = "#dimond";
    } else {
    }
  }
}

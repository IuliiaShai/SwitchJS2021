document.addEventListener("DOMContentLoaded", createTable);

const draggableSymbol = `<div id="girl" draggable="true">${String.fromCodePoint(
  0x1f478
)}</div>`;

function createTable() {
  const table = document.getElementById("myTable");
  for (let rowNum = 0; rowNum < 100; rowNum++) {
    const row = table.insertRow();
    row.style.back;
    for (let cellNum = 0; cellNum < 100; cellNum++) {
      let newCell = row.insertCell();
      newCell.innerText = rowNum * 100 + cellNum;
    }
  }

  document.querySelector("td").innerHTML = draggableSymbol;

  table.addEventListener("click", highlight);

  function highlight(event) {
    if (event.target.tagName === "TD") {
      event.target.classList.toggle("highlight");
    }
  }

  const tableZone = document.querySelector("table");
  const cells = document.getElementsByTagName("div");
  tableZone.ondragover = allowDrop;

  function allowDrop(event) {
    event.preventDefault();
  }

  table.ondrop = drop;

  function drop(event) {
    event.target.append(document.querySelector("#girl"));
  }
}

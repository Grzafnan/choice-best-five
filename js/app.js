let count = 0;
let selectBtn = document.getElementsByClassName('select-btn');

for (selector of selectBtn) {
  selector.addEventListener('click', function (event) {
    count++;
    let playerName = event.target.parentNode.parentNode.childNodes[1].innerText;
    let selected = event.target.setAttribute('disabled', '');

    if (count > 5) {
      let selected = event.target.removeAttribute("disabled");
      alert("You Can't Added More Then 5 Player");
      return;
    }

    let selectedPlayer = document.getElementById('selected-total');
    let totalSelectedPlayer = parseFloat(selectedPlayer.innerText);
    selectedPlayer.innerText = count;


    const mainContainer = document.getElementById("body-container");

    const bodyContainer = document.createElement("tr");
    bodyContainer.innerHTML = `
       <th scope="row">${count}</th>
       <td>  </td>
       <td>${playerName}</td>
       `;
    mainContainer.appendChild(bodyContainer);
  })
}
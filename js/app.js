const select = document.getElementById("select");
const randomBtn = document.getElementById("random");
const teamsContainer = document.getElementById("teamsContainer");
const copyBtn = document.getElementById("copy");

randomBtn.addEventListener("click", () => {
  teamsContainer.innerHTML = "";
  const alumnos = document.getElementById("alumnos").value.split(",");
  const lideres = document.getElementById("lideres").value.split(",");
  // Desordenar alumnos y lideres
  shuffleArray(alumnos);
  shuffleArray(lideres);
  console.log(alumnos);

  // Crear un array de equipos vacíos con el número seleccionado
  const teams = [];
  for (let i = 0; i < select.value; i++) {
    teams.push([]);
  }

  // Repartir alumnos en equipos
  for (let i = 0; i < alumnos.length; i++) {
    const teamIndex = i % select.value;
    console.log(teamIndex);
    teams[teamIndex].push(alumnos[i]);
  }

  // Repartir lideres en equipos
  for (let i = 0; i < lideres.length; i++) {
    // Elige un equipo al azar
    let teamIndex = Math.floor(Math.random() * select.value);

    // Comprueba que no haya ya un líder en ese equipo
    while (teams[teamIndex].includes("*")) {
      teamIndex = Math.floor(Math.random() * select.value);
    }

    teams[teamIndex].push(lideres[i]);
  }

  // Mostrar los equipos en el HTML
  teams.forEach((team, index) => {
    const teamDiv = document.createElement("div");
    teamDiv.classList.add("fade-in", "box");

    const teamName = document.createElement("h2");
    teamName.textContent = `Team ${index + 1}`;
    teamDiv.appendChild(teamName);

    const teamMembers = document.createElement("p");
    teamMembers.textContent = team.join(", ");
    teamDiv.appendChild(teamMembers);

    teamsContainer.appendChild(teamDiv);
  });
  // Crear boton de copiar al final del body
  const btnDiv = document.createElement("div");
  btnDiv.classList.add("btn-div");

  document.body.appendChild(btnDiv);
  const copyBtn = document.createElement("button");
  copyBtn.classList.add("copy-btn");
  copyBtn.textContent = "Copy Teams";
  btnDiv.appendChild(copyBtn);

  copyBtn.addEventListener("click", async () => {
    let teamsText = "";

    // Recorrer cada div de equipo y obtener el texto de sus hijos
    const teamDivs = teamsContainer.querySelectorAll("div");
    teamDivs.forEach((teamDiv) => {
      const teamName = teamDiv.querySelector("h2").textContent;
      const teamMembers = teamDiv.querySelector("p").textContent;
      teamsText += `${teamName}: ${teamMembers}\n`;
    });

    // Copiar el texto al portapapeles
    try {
      await navigator.clipboard.writeText(teamsText);
      alert("Equipos copiados!");
    } catch (err) {
      console.error("Error al copiar los equipos: ", err);
    }
  });
});

function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
}

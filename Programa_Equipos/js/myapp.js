// Prueba ajustar número de equipos
// let select = document.getElementById("select");
// let value = select.options[select.selectedIndex].text;
// console.log(value);

const randomTeam = () => {
  // Usuarios
  let players = [
    "Ana",
    "Armiche",
    "Alice",
    "Benjamin",
    "Beni",
    "Coral",
    "David Calero",
    "Dani Villaba",
    "Dani Vallejo",
    "Elías",
    "Laura",
    "Fran",
    "Helen",
    "Ismael",
    "Juan",
    "Nacho",
    "Naiara",
    "Nelson",
    "Oliver",
    "Pablo",
    "Sebastián",
    "Vero",
  ];

  // Líderes
  let leads = ["David Miró*", "Alina*", "Rafa*", "Dani Sánchez*"];

  // Equipos
  let teamA = [];
  let teamB = [];
  let teamC = [];
  let teamD = [];

  // Número de líderes por equipos
  let leadsSize = 1;

  // Número de usuarios por equipo
  let playersSize = players.length / 4;

  // División de equipos
  if (players.length % 4 != 0) {
    playersSize = Math.ceil(players.length / 4);
  } else {
    playersSize = players.length / 4;
  }
  // Asignación de líderes
  for (let i = 0; i < leadsSize; i++) {
    let random = Math.floor(Math.random() * leads.length);
    teamA.push(leads[random]);
    leads.splice(random, 1);
  }
  for (let i = 0; i < leadsSize; i++) {
    let random = Math.floor(Math.random() * leads.length);
    teamB.push(leads[random]);
    leads.splice(random, 1);
  }
  for (let i = 0; i < leadsSize; i++) {
    let random = Math.floor(Math.random() * leads.length);
    teamC.push(leads[random]);
    leads.splice(random, 1);
  }
  for (let i = 0; i < leadsSize; i++) {
    let random = Math.floor(Math.random() * leads.length);
    teamD.push(leads[random]);
    leads.splice(random, 1);
  }
  console.log(teamA);
  console.log(teamB);
  console.log(teamC);
  console.log(teamD);

  //Separar estudiantes de algunos líderes
  if (
    !teamA.includes("Rafa*") &&
    !teamA.includes("Dani Sánchez*") &&
    !teamA.includes("Elías")
  ) {
    teamA.push("Nelson");
  } else if (
    !teamB.includes("Rafa*") &&
    !teamB.includes("Dani Sánchez*") &&
    !teamB.includes("Elías")
  ) {
    teamB.push("Nelson");
  } else if (
    !teamC.includes("Rafa*") &&
    !teamC.includes("Dani Sánchez*") &&
    !teamC.includes("Elías")
  ) {
    teamC.push("Nelson");
  } else if (
    !teamD.includes("Rafa*") &&
    !teamD.includes("Dani Sánchez*") &&
    !teamD.includes("Elías")
  ) {
    teamD.push("Nelson");
  }
  if (
    !teamA.includes("Rafa*") &&
    !teamA.includes("Dani Sánchez*") &&
    !teamA.includes("Nelson")
  ) {
    teamA.push("Elías");
  } else if (
    !teamB.includes("Rafa*") &&
    !teamB.includes("Dani Sánchez*") &&
    !teamB.includes("Nelson")
  ) {
    teamB.push("Elías");
  } else if (
    !teamC.includes("Rafa*") &&
    !teamC.includes("Dani Sánchez*") &&
    !teamC.includes("Nelson")
  ) {
    teamC.push("Elías");
  } else if (
    !teamD.includes("Rafa*") &&
    !teamD.includes("Dani Sánchez*") &&
    !teamD.includes("Nelson")
  ) {
    teamD.push("Elías");
  }

  //Asignación de estudiantes
  for (let i = 0; i < playersSize; i++) {
    let random = Math.floor(Math.random() * players.length);
    teamA.push(players[random]);
    players.splice(random, 1);
  }
  for (let i = 0; i < playersSize; i++) {
    let random = Math.floor(Math.random() * players.length);
    teamB.push(players[random]);
    players.splice(random, 1);
  }
  for (let i = 0; i < playersSize; i++) {
    let random = Math.floor(Math.random() * players.length);
    teamC.push(players[random]);
    players.splice(random, 1);
  }
  for (let i = 0; i < playersSize; i++) {
    let random = Math.floor(Math.random() * players.length);
    teamD.push(players[random]);
    players.splice(random, 1);
  }

  // Condicionales para que dos personas caigan en el mismo equipo
  // if (teamA.includes("David Miró*")) {
  //   teamA.push("Nelson");
  // } else if (teamB.includes("David Miró*")) {
  //   teamB.push("Nelson");
  // } else if (teamC.includes("David Miró*")) {
  //   teamC.push("Nelson");
  // } else if (teamD.includes("David Miró*")) {
  //   teamD.push("Nelson");
  // }
  // if (teamA.includes("Alina*")) {
  //   teamA.push("Elías");
  // } else if (teamB.includes("Alina*")) {
  //   teamB.push("Elías");
  // } else if (teamC.includes("Alina*")) {
  //   teamC.push("Elías");
  // } else if (teamD.includes("Alina*")) {
  //   teamD.push("Elías");
  // }

  // Ver equipos pantalla ordenados alfabéticamente
  console.log("%cTeam A", "color: #EA047E", teamA.sort());
  console.log("%cTeam B", "color: #FCE700", teamB.sort());
  console.log("%cTeam C", "color: #38E54D", teamC.sort());
  console.log("%cTeam D", "color: #FF6D28", teamD.sort());

  // Ver equipos tras hacer click en líneas diferentes
  // Y si contiene * introducirlo como un párrafo (para editar su color y propiedades)
  document.getElementById("teamA").textContent = "";
  for (let index = 0; index < teamA.length; index++) {
    // document.getElementById("teamA").innerHTML += teamA[index];
    if (teamA[index].includes("*")) {
      document.getElementById("teamA").innerHTML += `<p>${teamA[index]}</p>`;
    } else {
      document.getElementById("teamA").innerHTML += teamA[index];
      document.getElementById("teamA").innerHTML += "<br>";
    }
  }
  document.getElementById("teamB").textContent = "";
  for (let index = 0; index < teamB.length; index++) {
    // document.getElementById("teamB").innerHTML += teamB[index];
    if (teamB[index].includes("*")) {
      document.getElementById("teamB").innerHTML += `<p>${teamB[index]}</p>`;
    } else {
      document.getElementById("teamB").innerHTML += teamB[index];
      document.getElementById("teamB").innerHTML += "<br>";
    }
  }
  document.getElementById("teamC").textContent = "";
  for (let index = 0; index < teamC.length; index++) {
    // document.getElementById("teamC").innerHTML += teamC[index];
    if (teamC[index].includes("*")) {
      document.getElementById("teamC").innerHTML += `<p>${teamC[index]}</p>`;
    } else {
      document.getElementById("teamC").innerHTML += teamC[index];
      document.getElementById("teamC").innerHTML += "<br>";
    }
  }
  document.getElementById("teamD").textContent = "";
  for (let index = 0; index < teamD.length; index++) {
    // document.getElementById("teamD").innerHTML += teamD[index];
    if (teamD[index].includes("*")) {
      document.getElementById("teamD").innerHTML += `<p>${teamD[index]}</p>`;
    } else {
      document.getElementById("teamD").innerHTML += teamD[index];
      document.getElementById("teamD").innerHTML += "<br>";
    }
  }

  // Mostrar todo el Array seguido
  // document.getElementById("teamA").innerHTML = teamA.sort();
  // document.getElementById("teamB").innerHTML = teamB.sort();
  // document.getElementById("teamC").innerHTML = teamC.sort();
  // document.getElementById("teamD").innerHTML = teamD.sort();
};
document.getElementById("random").addEventListener("click", randomTeam);

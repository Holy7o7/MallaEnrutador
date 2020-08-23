import data from "../../data.json";

var hash = {};
data.malla.map((element) => {
  hash[element.id] = element;
});

export let filtrados = (arrayCursos, credits) => {
  let output = [];
  let priority = {};
  let sum = 0;
  arrayCursos.forEach((element) => {
    sum = sum + hash[element].credits_sct;
  });
  let lastsemester = hash[arrayCursos[0]].semester;
  if (sum >= credits * 1.3) {
    arrayCursos.forEach((curso) => {
      //determina el semestre mas bajo
      if (hash[curso].semester < lastsemester) {
        lastsemester = hash[curso].semester;
      }
    });
    arrayCursos.forEach((curso) => {
      if (hash[curso].semester < lastsemester) {
        lastsemester = hash[curso].semester;
      }
    });
    arrayCursos.map((curso) => {
      if (hash[curso].term > 0) {
        priority[curso] =
          ((hash[curso].credits_sct / credits) * 11 * 2) /
          (1 + hash[curso].semester - lastsemester);
      } else {
        priority[curso] =
          ((hash[curso].credits_sct / credits) * 11) /
          (1 + hash[curso].semester - lastsemester);
      }
    });
    let credsem = 0;
    while (credsem <= credits && arrayCursos.length > 0) {
      let lastIndex = 0;
      let lastPrio = priority[arrayCursos[lastIndex]];
      for (var i = 0; i <= arrayCursos.length; i++) {
        if (priority[arrayCursos[i]] >= lastPrio) {
          lastIndex = i;
          lastPrio = priority[arrayCursos[i]];
        }
      }
      output.push(hash[arrayCursos[lastIndex]].name);
      credsem = credsem + hash[arrayCursos[lastIndex]].credits_sct;
      arrayCursos.splice(lastIndex, 1);
    }
    return output;
  } else {
    return arrayCursos;
  }
};

export default filtrados;

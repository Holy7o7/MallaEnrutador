import data from "../../data.json";
import filtrados from "../api/filter";
var hash = {};
data.malla.map((element) => {
  hash[element.id] = element;
});

export const potentialCourses = (cursosAprobados, cursosPendientes, sPar) => {
  var par = sPar ? 1 : 2;
  const aprobadosN = cursosAprobados.map((n) => {
    return hash[n].course_id;
  });
  const potenciales = cursosPendientes.map((curso) => {
    if (
      (curso.requisites.split(",").every((elemento) => {
        return aprobadosN.includes(elemento);
      }) &&
        (curso.term == par || curso.term == 0)) ||
      curso.requisites == ""
    ) {
      return curso.id;
    } else {
      return "";
    }
  });
  let potencialesF = potenciales.filter((element) => {
    return element;
  });
  if (potencialesF.length < 1) {
    return [];
  }
  const output = filtrados(potencialesF, 32);
  return output;
};

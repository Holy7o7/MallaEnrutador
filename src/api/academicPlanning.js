import data from "../../data.json";
import filtrados from "../api/filter";
var hash = {};
data.malla.map((element) => {
  hash[element.id] = element;
});

export const potentialCourses = (cursosAprobados, cursosPendientes) => {
  const plan = [];
  const aprobadosN = cursosAprobados.map((n) => {
    return hash[n].course_id;
  });
  const potenciales = cursosPendientes.map((curso) => {
    if (
      curso.requisites.split(",").every((elemento) => {
        return aprobadosN.includes(elemento);
      }) ||
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
  const output = filtrados(potencialesF, 32);
  return output;
};

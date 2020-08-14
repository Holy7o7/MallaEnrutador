import data from "../../data.json";

var hash = {};
data.malla.map((element) => {
  hash[element.id] = element;
});

export const potentialCourses = (cursosAprobados, cursosPendientes) => {
  const creditsProm = 31;
  const plan = [];
  const aprobadosN = cursosAprobados.map((n) => {
    return hash[n].course_id;
  });
  const potenciales = cursosPendientes.map((curso) => {
    if (
      curso.requisites.split(",").every((elemento) => {
        return aprobadosN.includes(elemento);
      })
    ) {
      return curso.id;
    } else {
      return "";
    }
  });

  const potencialesF = potenciales.filter((element) => {
    return element;
  });

  return potencialesF;
};

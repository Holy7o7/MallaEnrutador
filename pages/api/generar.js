import { NextApiResponse, NextApiRequest } from "next";
import { db } from "../../src/api/db";
import _ from "lodash";
import data from "../../data.json";
import { potentialCourses } from "../../src/api/academicPlanning";
/**
 * @export
 * @param {NextApiRequest} req
 * @param {NextApiResponse} res
 */

export default async function (req, res) {
  const cursosClickeados = req.body[0];
  let semestrePar = req.body[1];
  let cursosAprobados = _.filter(
    Object.entries(cursosClickeados),
    ([curso, bool]) => {
      return bool;
    }
  ).map(([curso, bool]) => {
    return parseInt(curso);
  });
  let cursosPendientes = data.malla.filter((curso) => {
    return !cursosAprobados.includes(curso.id);
  });
  let output = [];
  let i = 0;
  while (cursosPendientes.length > 0 && i <= 20) {
    console.log("pop");
    output[i] = potentialCourses(
      cursosAprobados,
      cursosPendientes,
      semestrePar
    );
    cursosPendientes.map((curso) => {
      if (output[i].includes(curso.name)) {
        cursosAprobados.push(curso.id);
      }
    });
    cursosPendientes = cursosPendientes.filter((curso) => {
      return !output[i].includes(curso.name);
    });
    semestrePar = !semestrePar;
    i = i + 1;
  }

  res.send(output);
}

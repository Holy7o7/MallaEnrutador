// localhost:3000/lista
import dataMalla from "../data.json";
import { css } from "@emotion/react";
import { useState } from "react";

const semestres = [1, 2, 3, 4, 5, 6];

const PaginadeLista = () => {
  const [cursosClickeados, setCursosClickeados] = useState({});
  const [semestreActive, setSemestreActive] = useState(null);

  return (
    <div>
      {semestres.map((semestre) => {
        return (
          <button
            key={semestre}
            onClick={() => {
              setSemestreActive(semestre);
            }}
          >
            {semestre}
          </button>
        );
      })}
      <br />
      {dataMalla.malla.map((curso) => {
        return semestreActive === curso.semester ? (
          <button
            css={css`
              background-color: ${cursosClickeados[curso.id]
                ? "black"
                : "white"};
              color: ${cursosClickeados[curso.id] ? "white" : "black"};
            `}
            key={curso.id}
            onClick={() => {
              setCursosClickeados(() => {
                return {
                  ...cursosClickeados,
                  [curso.id]: !(
                    cursosClickeados[curso.id] /** indefinido o true o false */
                  ),
                };
              });
            }}
          >
            {curso.name}
          </button>
        ) : null;
      })}
    </div>
  );
};

export default PaginadeLista;

// localhost:3000/lista
import dataMalla from "../data.json";
import { css } from "@emotion/react";
import { useState } from "react";

const semestres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

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
            Semestre {semestre}
          </button>
        );
      })}
      <br />
      <div
        css={css`
          display: flex;
          flex-direction: column;
        `}
      >
        {dataMalla.malla.map((curso) => {
          return semestreActive === curso.semester ? (
            <button
              css={css`
                background-color: ${cursosClickeados[curso.id]
                  ? "black"
                  : "white"};
                border-radius: 15px;
                padding: 10px;
                font-size: 1.3em;
                font-weight: bold;
                background-color: #79c4e3;
                color: white;
                transition: box-shadow 0.5s;
                color: ${cursosClickeados[curso.id] ? "white" : "black"};
              `}
              key={curso.id}
              onClick={() => {
                setCursosClickeados(() => {
                  return {
                    ...cursosClickeados,
                    [curso.id]: !(
                      cursosClickeados[
                        curso.id
                      ] /** indefinido o true o false */
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
    </div>
  );
};

export default PaginadeLista;

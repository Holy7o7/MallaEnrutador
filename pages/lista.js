// localhost:3000/lista
import dataMalla from "../data.json";
import { css } from "@emotion/react";
import { useState } from "react";
import navBar from "./navbar";

const semestres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];

const PaginadeLista = () => {
  const [cursosClickeados, setCursosClickeados] = useState({});
  const [semestreActive, setSemestreActive] = useState(null);

  return (
    <div
      css={css`
        width: 100%;
        display: block;
        border: 1px solid red;
      `}
    >
      <nav>{navBar()}</nav>
      <div
        css={css`
          float: left;
          display: flex;
          width: 101.5%;
          padding-top: 0.5%;
          flex-direction: row;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            width: 50%;
            margin-left: -0.7%;
            float: left;
          `}
        >
          {semestres.map((semestre) => {
            return (
              <button
                css={css`
                  font-size: 16px;
                  background-color: rgb(241, 231, 187);
                  border: black 1px solid;
                `}
                key={semestre}
                onClick={() => {
                  setSemestreActive(semestre);
                }}
              >
                Semestre {semestre}
              </button>
            );
          })}
        </div>
        <div
          css={css`
            display: flex;
            float: right;
            flex-direction: column;
            width: 50%;
          `}
        >
          {dataMalla.malla.map((curso) => {
            return semestreActive === curso.semester ? (
              <button
                css={css`
                  background-color: ${cursosClickeados[curso.id]
                    ? "rgb(235,99,131)"
                    : "#5c2a9d"};
                  border-radius: 0px;
                  border: black 1px solid;
                  padding: 10px 10px;
                  font-size: 12px;
                  font-weight: bold;
                  color: white;
                  transition: box-shadow 0.5s;
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
    </div>
  );
};

export default PaginadeLista;

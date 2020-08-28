// localhost:3000/lista
import dataMalla from "../data.json";
import { css } from "@emotion/react";
import { useState } from "react";
import navBar from "../src/navbar";
import Axios from "axios";
import { palette } from "@material-ui/system";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Switch from "@material-ui/core/Switch";

const useStyles = makeStyles((theme) => ({
  root: {
    borderRadius: 3,
    margin: 3,
    alignContent: "center",
  },
}));

var plan = [];
const semestres = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11];
const colorSemestres = [
  "rgb(89,49,148)",
  "rgb(68,53,144)",
  "rgb(49,49,149)",
  "rgb(47,55,153)",
  "rgb(37,60,153)",
  "rgb(23,73,157)",
  "rgb(21,85,172)",
  "rgb(12,90,172)",
  "rgb(7,103,179)",
  "rgb(0,111,190)",
  "rgb(1,121,197)",
  "rgb(0,135,205)",
];

const PaginadeLista = () => {
  const [cursosClickeados, setCursosClickeados] = useState({});
  const [semestreActive, setSemestreActive] = useState(null);
  const [alternateDisplay, setAlternateDisplay] = useState(true);
  const [semestrePar, setSemestrePar] = useState(true);
  const classes = useStyles();

  const [state, setState] = React.useState(true);

  const handleChange = (event) => {
    setSemestrePar(!semestrePar);
  };

  return (
    <div
      css={css`
        width: 100%;
        display: block;
      `}
    >
      <nav>{navBar()}</nav>
      <div
        css={css`
          h1 {
            color: white;
            text-align: center;
            text-shadow: black 6px 6px 8px;
            text-transform: uppercase;
            font-size: 2vw;
            text-align: center;
            margin: 4;
          }
        `}
      >
        {" "}
        <h1> GENERADOR MALLA </h1>
      </div>
      <div
        css={css`
          color: white;
          text-align: center;
          border: 1px solid black;
          display: ${alternateDisplay ? "block" : "none"};
        `}
      >
        <p>
          {" "}
          Seleccione el siguiente semestre que cursará, siendo "PERIODO 1" los
          semestres impares y "PERIODO 2" los semestres pares.
        </p>
        PERIODO 1
        <Switch
          checked={semestrePar}
          onChange={handleChange}
          color="primary"
          name="checkedB"
          size="big"
          inputProps={{ "aria-label": "primary checkbox" }}
        />
        PERIODO 2
      </div>
      <div
        css={css`
          display: ${alternateDisplay ? "flex" : "none"};
          width: 100%;
          padding-bottom: 1%;
          flex-direction: row;
          border: 1px solid black;
        `}
      >
        <div
          css={css`
            display: flex;
            flex-direction: column;
            width: 20%;
            margin-left: -0.8%;
            float: left;
            padding-left: 20%;
            padding-top: 1%;
          `}
        >
          {semestres.map((semestre) => {
            return (
              <button
                css={css`
                  font-size: 20px;
                  color: white;
                  text-align: left;
                  padding: 3px 2px;
                  background-color: ${colorSemestres[semestre]};
                  border: ${semestreActive === semestre ? "white" : "black"} 1px
                    solid;
                `}
                key={semestre}
                onClick={() => {
                  setSemestreActive(semestre);
                }}
              >
                <input
                  type="checkbox"
                  key={semestre}
                  onChange={(event) => {
                    let checked = event.target.checked;
                    setSemestreActive(semestre);
                    if (checked) {
                      dataMalla.malla.map((curso) => {
                        if (curso.semester === semestre) {
                          setCursosClickeados((cursosClickeados) => {
                            return {
                              ...cursosClickeados,
                              [curso.id]: true,
                              /** indefinido o true o false */
                            };
                          });
                        }
                      });
                    } else {
                      dataMalla.malla.map((curso) => {
                        if (curso.semester === semestre) {
                          setCursosClickeados((cursosClickeados) => {
                            return {
                              ...cursosClickeados,
                              [curso.id]: false,
                              /** indefinido o true o false */
                            };
                          });
                        }
                      });
                    }
                  }}
                ></input>
                SEMESTRE {semestre}
              </button>
            );
          })}
        </div>
        <div
          css={css`
            display: inline-flex;
            float: right;
            flex-direction: column;
            width: 40%;
            padding-top: 1%;
            padding-left: 2%;
          `}
        >
          {dataMalla.malla.map((curso) => {
            return semestreActive === curso.semester ? (
              <button
                css={css`
                  background-color: ${colorSemestres[semestreActive]};
                  border-radius: 0px;
                  border: ${cursosClickeados[curso.id] ? "white" : "black"} 1px
                    solid;
                  padding: 10px 10px;
                  font-size: 16px;
                  font-weight: bold;
                  color: white;
                  text-align: left;
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
                <input
                  type="checkbox"
                  readOnly
                  checked={cursosClickeados[curso.id] ? true : false}
                ></input>

                {curso.name}
              </button>
            ) : null;
          })}
        </div>
      </div>
      <div>
        <div
          css={css`
            float: left;
            padding-left: 25%;
          `}
        >
          <button
            css={css`
              border: 2px solid black;
              background-color: #8000ff;
              color: white;
              padding: 14px 28px;
              font-size: 16px;
              cursor: pointer;
              border-radius: 30px;
              transition: all 0.3s ease 0s;
              display: ${alternateDisplay ? "inline-block" : "none"};
              text-align: center;
              :hover {
                background-color: #800080;
              }
            `}
            onClick={async () => {
              const response = await Axios.post(`/api/generar`, [
                cursosClickeados,
                !semestrePar,
              ]);

              plan = response.data;
              setAlternateDisplay(!alternateDisplay);
            }}
          >
            Generar
          </button>
        </div>
        <div
          css={css`
            display: ${alternateDisplay ? "none" : "block"};
            padding-left: 1%;
          `}
        >
          <div
            css={css`
              overflow: scroll;
              height: 650px;
              width: 99%;
              display: flex;
              border-left: 5px solid black;
              border-top: 5px solid black;
            `}
          >
            {plan.map((element) => {
              return (
                <List
                  component="nav"
                  className={classes.root}
                  aria-label="contacts"
                >
                  <ListItem>
                    <ListItemText
                      primary={
                        <Typography variant="h5" align="center">
                          SEMESTRE {plan.indexOf(element) + 1}
                        </Typography>
                      }
                    />
                  </ListItem>
                  {element.map((elemento) => {
                    return (
                      <ListItem>
                        <ListItemText
                          css={css`
                            background-color: ${colorSemestres[
                              plan.indexOf(element)
                            ]};
                          `}
                          primary={
                            <Typography variant="caption" align="center">
                              {elemento}
                            </Typography>
                          }
                        />
                      </ListItem>
                    );
                  })}
                </List>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginadeLista;

import dataMalla from "../data.json";
import { css } from "@emotion/react";
import navBar from "./navbar";
const Home = () => {
  return (
    <div
      css={css`
        width: 100%;
        display: block;
        h1 {
          color: white;
          text-align: center;
          text-shadow: black 6px 6px 8px;
          text-transform: uppercase;
          font-size: 5vw;
          text-align: center;
          margin: 4;
        }
      `}
    >
      <nav>{navBar()}</nav>
      <div></div>
      <div>
        <h1> MALLA-ENRUTADOR</h1>
        <img
          src="Asuka.gif"
          alt=""
          css={css`
            display: block;
            margin-left: auto;
            margin-right: auto;
            width: 15%;
          `}
        />
      </div>
      <div>
        <a
          href="/lista"
          css={css`
            padding-left: 43%;
            color: #ffffff;
            transition: all 0.3s ease 0s;
            :hover {
              color: #400080;
            }
          `}
        >
          Lista de Semestres
        </a>
      </div>
    </div>
  );
};
export default Home;

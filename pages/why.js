import { css } from "@emotion/react";
import navBar from "../src/navbar";
import Tabs from "../src/Tabs";

const why = () => {
  return (
    <div
      css={css`
        width: 100%;
        display: block;
      `}
    >
      <nav>{navBar()}</nav>
      <div>
        <Tabs>
          <div label="UNIVERSIDAD">XDXDXDXDXD</div>
          <div label="ESTUDIANTES">XDXDXDXDXDXDXDXD</div>
          <div label="OBJETIVO">XDXDXDXDXDXDXDXDXD</div>
        </Tabs>
      </div>
    </div>
  );
};
export default why;

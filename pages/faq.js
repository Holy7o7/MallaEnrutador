import React from "react";
import { css } from "@emotion/react";
import navBar from "../src/navbar";
import Accordion from "../src/Accordion";

const faq = () => {
  return (
    <div>
      <nav>{navBar()}</nav>
      <div
        css={css`
          justify-content: center;
          width: 80%;
          padding-left: 10%;
          display: block;
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
        <h1> FAQ </h1>

        <Accordion title="¿Quienes somos?">
          <span className="accordion-text">
            Lorem ipsum dolor sit amet consectetur adipiscing elit cum risus
            proin, arcu posuere accumsan euismod leo magnis blandit litora
            aenean, commodo metus elementum rutrum libero nullam molestie fusce
            ac. Nunc posuere nibh senectus dis torquent ac porttitor phasellus
            quisque netus vulputate, enim gravida felis ut curae odio
            condimentum himenaeos nascetur leo, pulvinar quam venenatis massa
            sodales rutrum dignissim eu cursus est. Viverra orci ac sollicitudin
            dictum quisque erat dis, congue nisl ridiculus convallis dictumst
            praesent nibh, nulla tempus felis curae lacus turpis.
          </span>
        </Accordion>
        <Accordion title="¿Cual es nuestro objetivo?">
          <span className="accordion-text">
            Lorem ipsum dolor sit amet consectetur adipiscing elit cum risus
            proin, arcu posuere accumsan euismod leo magnis blandit litora
            aenean, commodo metus elementum rutrum libero nullam molestie fusce
            ac. Nunc posuere nibh senectus dis torquent ac porttitor phasellus
            quisque netus vulputate, enim gravida felis ut curae odio
            condimentum himenaeos nascetur leo, pulvinar quam venenatis massa
            sodales rutrum dignissim eu cursus est. Viverra orci ac sollicitudin
            dictum quisque erat dis, congue nisl ridiculus convallis dictumst
            praesent nibh, nulla tempus felis curae lacus turpis.
          </span>
        </Accordion>
        <Accordion title="¿Como se utiliza la aplicación?">
          <span className="accordion-text">
            Lorem ipsum dolor sit amet consectetur adipiscing elit cum risus
            proin, arcu posuere accumsan euismod leo magnis blandit litora
            aenean, commodo metus elementum rutrum libero nullam molestie fusce
            ac. Nunc posuere nibh senectus dis torquent ac porttitor phasellus
            quisque netus vulputate, enim gravida felis ut curae odio
            condimentum himenaeos nascetur leo, pulvinar quam venenatis massa
            sodales rutrum dignissim eu cursus est. Viverra orci ac sollicitudin
            dictum quisque erat dis, congue nisl ridiculus convallis dictumst
            praesent nibh, nulla tempus felis curae lacus turpis.
          </span>
        </Accordion>
      </div>
    </div>
  );
};

export default faq;

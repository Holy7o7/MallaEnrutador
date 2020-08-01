import React from "react";
import { css } from "@emotion/react";
import { useState } from "react";

const links = css``;

function navBar() {
  return (
    <header
      className="nav"
      css={css`
        font-weight: 500;
        font-size: 16px;
        color: #ecf0f1;
        display: flex;
        text-decoration: none;
        align-items: center;
        justify-content: space-between;
        background-color: #24252a;
        block-size: auto;
      `}
    >
      <img
        className="logo"
        src="./chavez_18.jpg"
        css={css`
          padding: 30px 30px;
          width: 5%;
          height: 5%;
        `}
      ></img>
      <ul
        className="links"
        css={css`
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
        `}
      >
        <li
          css={css`
            padding: 0px 30px;
            display: inline-block;
          `}
        >
          <a
            href="/index"
            css={css`
              color: #ffffff;
              transition: all 0.3s ease 0s;
              :hover {
                color: #0088a9;
              }
            `}
          >
            Inicio
          </a>
        </li>
        <li
          css={css`
            padding: 0px 30px;
            display: inline-block;
          `}
        >
          <a>FAQ</a>
        </li>
        <li
          css={css`
            padding: 0px 30px;
            display: inline-block;
          `}
        >
          <a>About us</a>
        </li>
      </ul>
    </header>
  );
}

export default navBar;

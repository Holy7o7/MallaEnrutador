import React from "react";
import { css } from "@emotion/react";
import { useState } from "react";
import Link from "next/link";

const links = css``;

function navBar() {
  return (
    <header
      className="nav"
      css={css`
        font-size: 15px;
        color: #ecf0f1;
        display: flex;
        text-decoration: none;
        align-items: center;
        justify-content: space-between;
        background-color: rgb(69, 4, 106);
        padding: 1%;
        margin: -0.7%;
        border-bottom: black 5px solid;
        block-size: auto;
      `}
    >
      <img
        className="logo"
        src="./logo.PNG"
        css={css`
          padding: 2px 50px;
          width: 7%;
          height: 7%;
        `}
      ></img>
      <ul
        className="links"
        css={css`
          list-style: none;
          display: inline-block;
          justify-content: space-between;
          align-items: center;
          padding-right: 36%;
        `}
      >
        <li
          css={css`
            padding: 0px 50px;
            display: inline-block;
          `}
        >
          <Link href="/" passHref>
            <a
              css={css`
                color: #ffffff;
                transition: all 0.3s ease 0s;
                :hover {
                  color: #0088a9;
                }
              `}
            >
              INICIO
            </a>
          </Link>
        </li>
        <li
          css={css`
            padding: 0px 50px;
            display: inline-block;
          `}
        >
          <Link href="/why" passHref>
            <a
              css={css`
                color: #ffffff;
                transition: all 0.3s ease 0s;
                :hover {
                  color: #0088a9;
                }
              `}
            >
              QUIENES SOMOS
            </a>
          </Link>
        </li>
        <li
          css={css`
            padding: 0px 50px;
            display: inline-block;
          `}
        >
          <Link href="/faq" passHref>
            <a
              css={css`
                color: #ffffff;
                transition: all 0.3s ease 0s;
                :hover {
                  color: #0088a9;
                }
              `}
            >
              FAQ
            </a>
          </Link>
        </li>
      </ul>
    </header>
  );
}

export default navBar;

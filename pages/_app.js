import { CacheProvider, Global, css } from "@emotion/react";
import { cache } from "@emotion/css";

export const globalStyles = (
  <Global
    styles={css`
      @import url("https://fonts.googleapis.com/css2?family=Lato&display=swap");

      body {
        background-color: rgb(69, 4, 106);
        padding: 1%;
        margin: 0;
        border-bottom: black 5px solid;
        font-family: "Lato", sans-serif;
        font-size: 24px;
      }

      html {
        background-color: rgb(181, 7, 107);
        width: 99.3%;
        height: 98.7%;
        border: black 5px solid;
      }

      button {
        font-family: "Lato", sans-serif;
        cursor: pointer;
        :disabled {
          cursor: not-allowed;
        }
      }
    `}
  />
);

function MyApp({ Component, pageProps }) {
  return (
    <CacheProvider value={cache}>
      {globalStyles}
      <Component {...pageProps} />
    </CacheProvider>
  );
}

export default MyApp;

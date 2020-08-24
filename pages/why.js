import { css } from "@emotion/react";
import navBar from "../src/navbar";
import Tabs from "../src/Tabs";

const why = () => {
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
          font-size: 2vw;
          text-align: center;
          margin: 4;
        }
      `}
    >
      <nav>{navBar()}</nav>
      <div
        css={css`
          background: white;
          border: solid black;
          margin: 2%;
        `}
      >
        <Tabs>
          <div label="UNIVERSIDAD">
            <p>Acá hay que colocar algo sobre la Univesidad.</p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            ipsum massa, placerat in molestie non, suscipit eu nisl. In eu ex at
            nisi hendrerit maximus. Sed auctor risus diam, ac fringilla ligula
            laoreet ut. Duis auctor felis non risus ultrices interdum. Cras quis
            blandit massa. Nulla eu nisl nec sem maximus pretium. Phasellus
            laoreet sapien accumsan eros convallis, et tincidunt sem bibendum.
            Curabitur ultrices congue sagittis. Curabitur ut urna id ante
            tristique placerat. Donec in convallis enim. Proin tincidunt felis
            non fermentum rutrum. Nunc a ornare lorem, eget tempor tortor.
            Quisque congue pharetra quam, vel posuere eros laoreet eu. Nulla sem
            eros, volutpat vel sem et, aliquet elementum tellus. Sed pulvinar
            magna congue fermentum dignissim. Proin facilisis elit lorem, ut
            convallis felis commodo a. Sed vehicula, nunc eget faucibus pretium,
            leo ante mattis enim, aliquet fermentum risus mi vitae dolor. In
            placerat at leo vitae imperdiet. Mauris a convallis metus, eu
            gravida metus. Curabitur at nibh blandit, tincidunt sem quis,
            malesuada nibh. Ut aliquet consectetur ultrices. Sed eget arcu eget
            felis volutpat molestie id sit amet eros. Nullam id libero in nunc
            pellentesque sollicitudin. In nibh odio, efficitur sed sem sit amet,
            viverra tincidunt mauris. Nulla ullamcorper ornare erat, quis
            gravida neque facilisis sed. Vivamus pulvinar lectus lectus, sed
            pulvinar quam interdum vel. Donec at orci sodales, posuere eros
            eget, condimentum neque. Praesent ullamcorper fringilla sagittis.
            Suspendisse et tristique lacus, et eleifend leo. Praesent finibus
            sollicitudin odio, at vehicula neque laoreet non. Nullam eu iaculis
            nunc, nec fermentum lorem. Pellentesque vel tincidunt orci. Mauris
            tempus sapien vitae leo interdum eleifend. Proin sed mi a nunc
            imperdiet euismod. In laoreet lacus non lorem fringilla, vitae
            egestas lorem iaculis.
          </div>
          <div label="ESTUDIANTES">
            <p>Acá hay que colocar algo sobre los Estudiantes.</p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            ipsum massa, placerat in molestie non, suscipit eu nisl. In eu ex at
            nisi hendrerit maximus. Sed auctor risus diam, ac fringilla ligula
            laoreet ut. Duis auctor felis non risus ultrices interdum. Cras quis
            blandit massa. Nulla eu nisl nec sem maximus pretium. Phasellus
            laoreet sapien accumsan eros convallis, et tincidunt sem bibendum.
            Curabitur ultrices congue sagittis. Curabitur ut urna id ante
            tristique placerat. Donec in convallis enim. Proin tincidunt felis
            non fermentum rutrum. Nunc a ornare lorem, eget tempor tortor.
            Quisque congue pharetra quam, vel posuere eros laoreet eu. Nulla sem
            eros, volutpat vel sem et, aliquet elementum tellus. Sed pulvinar
            magna congue fermentum dignissim. Proin facilisis elit lorem, ut
            convallis felis commodo a. Sed vehicula, nunc eget faucibus pretium,
            leo ante mattis enim, aliquet fermentum risus mi vitae dolor. In
            placerat at leo vitae imperdiet. Mauris a convallis metus, eu
            gravida metus. Curabitur at nibh blandit, tincidunt sem quis,
            malesuada nibh. Ut aliquet consectetur ultrices. Sed eget arcu eget
            felis volutpat molestie id sit amet eros. Nullam id libero in nunc
            pellentesque sollicitudin. In nibh odio, efficitur sed sem sit amet,
            viverra tincidunt mauris. Nulla ullamcorper ornare erat, quis
            gravida neque facilisis sed. Vivamus pulvinar lectus lectus, sed
            pulvinar quam interdum vel. Donec at orci sodales, posuere eros
            eget, condimentum neque. Praesent ullamcorper fringilla sagittis.
            Suspendisse et tristique lacus, et eleifend leo. Praesent finibus
            sollicitudin odio, at vehicula neque laoreet non. Nullam eu iaculis
            nunc, nec fermentum lorem. Pellentesque vel tincidunt orci. Mauris
            tempus sapien vitae leo interdum eleifend. Proin sed mi a nunc
            imperdiet euismod. In laoreet lacus non lorem fringilla, vitae
            egestas lorem iaculis.
          </div>
          <div label="OBJETIVOS">
            <p>Acá hay que colocar los Objetivos.</p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
            ipsum massa, placerat in molestie non, suscipit eu nisl. In eu ex at
            nisi hendrerit maximus. Sed auctor risus diam, ac fringilla ligula
            laoreet ut. Duis auctor felis non risus ultrices interdum. Cras quis
            blandit massa. Nulla eu nisl nec sem maximus pretium. Phasellus
            laoreet sapien accumsan eros convallis, et tincidunt sem bibendum.
            Curabitur ultrices congue sagittis. Curabitur ut urna id ante
            tristique placerat. Donec in convallis enim. Proin tincidunt felis
            non fermentum rutrum. Nunc a ornare lorem, eget tempor tortor.
            Quisque congue pharetra quam, vel posuere eros laoreet eu. Nulla sem
            eros, volutpat vel sem et, aliquet elementum tellus. Sed pulvinar
            magna congue fermentum dignissim. Proin facilisis elit lorem, ut
            convallis felis commodo a. Sed vehicula, nunc eget faucibus pretium,
            leo ante mattis enim, aliquet fermentum risus mi vitae dolor. In
            placerat at leo vitae imperdiet. Mauris a convallis metus, eu
            gravida metus. Curabitur at nibh blandit, tincidunt sem quis,
            malesuada nibh. Ut aliquet consectetur ultrices. Sed eget arcu eget
            felis volutpat molestie id sit amet eros. Nullam id libero in nunc
            pellentesque sollicitudin. In nibh odio, efficitur sed sem sit amet,
            viverra tincidunt mauris. Nulla ullamcorper ornare erat, quis
            gravida neque facilisis sed. Vivamus pulvinar lectus lectus, sed
            pulvinar quam interdum vel. Donec at orci sodales, posuere eros
            eget, condimentum neque. Praesent ullamcorper fringilla sagittis.
            Suspendisse et tristique lacus, et eleifend leo. Praesent finibus
            sollicitudin odio, at vehicula neque laoreet non. Nullam eu iaculis
            nunc, nec fermentum lorem. Pellentesque vel tincidunt orci. Mauris
            tempus sapien vitae leo interdum eleifend. Proin sed mi a nunc
            imperdiet euismod. In laoreet lacus non lorem fringilla, vitae
            egestas lorem iaculis.
          </div>
        </Tabs>
      </div>
    </div>
  );
};
export default why;

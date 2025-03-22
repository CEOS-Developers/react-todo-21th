import { css, CSSProp } from 'styled-components';

export type Typography = {
  Header1: CSSProp;
  Header2: CSSProp;
  Header3: CSSProp;
  Body1: CSSProp;
  Body2: CSSProp;
  Body3: CSSProp;
  Body4: CSSProp;
  Body5: CSSProp;
};

const fontPrimary = css`
  font-family: var(--font-primary);
  line-height: normal;
`;

const fontSecondary = css`
  font-family: var(--font-secondary);
  line-height: normal;
`;

const fontStyles = {
  Header1: css`
    ${fontPrimary}
    font-size: clamp(3.2rem, 2.4vw ,4.8rem);
    font-weight: 600;
    letter-spacing: -0.96px;
  `,
  Header2: css`
    ${fontPrimary}
    font-size: clamp(1.8rem, 1.6vw, 2.8rem);
    font-weight: 500;
  `,
  Header3: css`
    ${fontSecondary}
    font-size: 4.8rem;
    font-weight: 400;
  `,
  Body1: css`
    ${fontPrimary}
    font-size: clamp(1.6rem, 1.4vw, 2.8rem);
    font-weight: 500;
  `,
  Body2: css`
    ${fontSecondary}
    font-size: 2.8rem;
    font-weight: 400;
    letter-spacing: -0.56px;
  `,
  Body3: css`
    ${fontSecondary}
    font-size: 2.4rem;
    font-weight: 400;
  `,
  Body4: css`
    ${fontPrimary}
    font-size: clamp(1.4rem, 1.2vw, 2rem);
    font-weight: 400;
  `,
  Body5: css`
    ${fontPrimary}
    font-size: 1.8rem;
    font-weight: 400;
  `,
};

export default fontStyles;

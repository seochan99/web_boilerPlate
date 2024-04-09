import { css } from "styled-components";

const colors = {
    primary1: "#FF5D47",
    primary2: "#7230FF",
    sub1: "#FFF3F1",
    sub2: "#F1EAFF",
    white: "#FFFFFF",
    gray1: "#F8F8FA",
    gray2: "#EEEFF3",
    gray3: "#DEDFE5",
    gray4: "#AEAFB9",
    gray5: "#606067",
    gray6: "#E4E4E4",
    gray7: "#E2E2E2",
    black: "#282828",
};


function FONT({ weight, size, lineHeight }) {
  return `
    font-family: "Pretendard";
    font-weight : ${weight};
    font-size : ${size}px;
    line-height : ${lineHeight}px;
    `;
}

const fonts = {
  extra_bold: FONT({ weight: 800, size: 20, lineHeight: 32 }),
  bold: FONT({ weight: 700, size: 16, lineHeight: 19 }),
  medium: FONT({ weight: 500, size: 16, lineHeight: 19 }),
  regular: FONT({ weight: 400, size: 16, lineHeight: 19 }),
  nav: FONT({ weight: 600, size: 18, lineHeight: 29 }),
  tutorial_head: FONT({ weight: 700, size: 24, lineHeight: 24 }),
  tutorial_strong: FONT({ weight: 700, size: 20, lineHeight: 20 }),
  tutorial_sub: FONT({ weight: 500, size: 18, lineHeight: 18 }),
  tutorial_text: FONT({ weight: 500, size: 13, lineHeight: 20 }),
  category_strong: FONT({ weight: 800, size: 20, lineHeight: 28 }),
  category_sub: FONT({ weight: 500, size: 20, lineHeight: 28 }),
  option_content: FONT({ weight: 500, size: 13, lineHeight: 13 }),
  user: FONT({ weight: 500, size: 18, lineHeight: 18 }),
  PretendardMedium: css`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 500;
    letter-spacing: 20;
  `,
  PretendardBold: css`
    font-family: "Pretendard";
    font-style: normal;
    font-weight: 900;
    letter-spacing: 20;
  `,
  KCCEunyoung: css`
    font-family: "KCC-eunyoung";
    font-style: normal;
    font-weight: 500;
    letter-spacing: 20;
  `,
  GmarketSansMedium: css`
    font-family: "GmarketSansMedium";
    font-style: normal;
    font-weight: 500;
    letter-spacing: 20;
  `,
  SCoreDream1: css`
    font-family: "S-CoreDream-3Light";
    font-style: normal;
    font-weight: 200;
    letter-spacing: 20;
  `,
  SCoreDream2: css`
    font-family: "S-CoreDream-3Light";
    font-style: normal;
    font-weight: 300;
    letter-spacing: 20;
  `,
  SCoreDream3: css`
    font-family: "S-CoreDream-3Light";
    font-style: normal;
    font-weight: 400;
    letter-spacing: 20;
  `,
  SCoreDream4: css`
    font-family: "S-CoreDream-3Light";
    font-style: normal;
    font-weight: 500;
    letter-spacing: 20;
  `,
  SCoreDream5: css`
    font-family: "S-CoreDream-3Light";
    font-style: normal;
    font-weight: 600;
    letter-spacing: 20;
  `,
  SCoreDream6: css`
    font-family: "S-CoreDream-3Light";
    font-style: normal;
    font-weight: 700;
    letter-spacing: 20;
  `,
};


export const theme = {
  colors,
  fonts,
};

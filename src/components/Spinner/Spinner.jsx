import { useState } from "react";
import { css } from "@emotion/react";
import BeatLoader from "react-spinners/BeatLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: blue;
`;

export default function Spinner() {
  return (
      <BeatLoader color="#04125e" loading={useState(true)} css={override} size={80} />
  );
}
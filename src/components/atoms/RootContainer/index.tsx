/** @jsx jsx */
import { jsx } from "theme-ui";

import { PageProps } from "gatsby";
import { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

export default function RootContainer({ children }: Props): JSX.Element {
  return (
    <div
      sx={{
        width: "100vw",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <div
        sx={{
          backgroundColor: "backdrop",
          width: 375,
          margin: 0,
          minHeight: "100vh",
          color: "base",
          display: "flex",
          flexDirection: "column",
          gap: "md",
        }}
      >
        {children}
      </div>
    </div>
  );
}

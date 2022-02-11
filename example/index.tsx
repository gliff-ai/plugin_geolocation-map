import * as ReactDOM from "react-dom";
import React, { ReactElement, useState } from "react";
import { BaseIconButton, theme } from "@gliff-ai/style";
import { ThemeProvider, StylesProvider, CssBaseline } from "@material-ui/core";
import GeolocationMeta from "../dist/index.es.js";
import { sampleMetadata } from "./sample";

export const imgSrc = (src: string, type = "svg"): string =>
  new URL(`/example/assets/${src}.${type}`, import.meta.url).href;

const App = (): ReactElement => {
  const plugin = new GeolocationMeta();
  const [map, setMap] = useState<JSX.Element | null>(null);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <BaseIconButton
        key={`plugin-${plugin.name}`}
        tooltip={{ name: plugin.tooltip, icon: imgSrc(plugin.icon) }}
        fill={undefined}
        tooltipPlacement="top-start"
        onClick={() => {
          const response = plugin.onClick({ metadata: sampleMetadata });
          if (response?.domElement) {
            setMap(response?.domElement);
          }
          if (response?.message) {
            alert(response.message);
          }
        }}
      />
      {map}
    </div>
  );
};

const app = (
  <StylesProvider>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <App />
    </ThemeProvider>
  </StylesProvider>
);

ReactDOM.render(app, document.getElementById("react-container"));

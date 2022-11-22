import { MantineProvider } from "@mantine/core";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <MantineProvider
      theme={{
        globalStyles: (theme) => ({
          "*, *::before, *::after": {
            boxSizing: "border-box",
          },
          body: {
            ...theme.fn.fontStyles(),
            margin: 0,
            padding: 0,
          },
        }),
      }}>
      <App />
    </MantineProvider>
  </React.StrictMode>
);

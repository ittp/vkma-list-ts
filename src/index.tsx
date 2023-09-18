import React, { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { ConfigProvider, AppRoot } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import App from "./App";

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement!);

root.render(
  <StrictMode>
    <ConfigProvider>
      <AppRoot>
        <App config={[]} />
      </AppRoot>
    </ConfigProvider>
  </StrictMode>,
);

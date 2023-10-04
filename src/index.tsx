import React, { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { ConfigProvider, AppRoot, Header } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import App from "./App";
import { DragableList } from "./DragableList";
const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement!);

root.render(
  <StrictMode>
    <ConfigProvider platform={"android"}>
      <AppRoot>
        <Header>Header</Header>
        <DragableList data={["1", "2"]} />


        <Group></Group>
      </AppRoot>
    </ConfigProvider>
  </StrictMode>,
);

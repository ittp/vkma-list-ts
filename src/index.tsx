import React, { StrictMode } from "react";
import * as ReactDOMClient from "react-dom/client";
import { ConfigProvider, AppRoot, Header } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import App from "./App";

import { DragableList } from "./DragableList";

import { UserInfo } from "@vkontakte/vk-bridge";

import {
  RouterProvider,
  createHashRouter,
} from "@vkontakte/vk-mini-apps-router";

import { useApperance } from "@vkontakte/vk-bridge-react";
const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement!);
console.log(UserInfo);

import { useParams } from "@vkontake/vk-mini-apps-router";

root.render(
  <StrictMode>
    <ConfigProvider>
      <AppRoot>
        <DragableList data={["1", "2"]} />
      </AppRoot>
    </ConfigProvider>
  </StrictMode>,
);

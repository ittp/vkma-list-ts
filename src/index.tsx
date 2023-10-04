import React, {
  useState,
  StrictMode,
  createContext,
  useContext,
  useReducer,
} from "react";
import * as ReactDOMClient from "react-dom/client";

import { ConfigProvider, AppRoot, Header, Root } from "@vkontakte/vkui";
import "@vkontakte/vkui/dist/vkui.css";

import App from "./App";

import AddTask from "./Tasks";

import { DragableList } from "./DragableList";

import { UserInfo } from "@vkontakte/vk-bridge";

import {
  RouterProvider,
  createHashRouter,
  useParams,
} from "@vkontakte/vk-mini-apps-router";

import { useInsets } from "@vkontakte/vk-bridge-react";
const router = createHashRouter([
  {
    path: "/",
    panel: "home_panel",
    view: "default_view",
  },
]);

console.log(router);

const rootElement = document.getElementById("root");
const root = ReactDOMClient.createRoot(rootElement!);

root.render(
  <StrictMode>
    <ConfigProvider>
      <AppRoot>
        <DragableList data={["1", "2"]} />
      </AppRoot>
    </ConfigProvider>
  </StrictMode>,
);

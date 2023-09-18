import {
  Group,
  Panel,
  PanelHeader,
  SimpleCell,
  View,
  Button,
} from "@vkontakte/vkui";

import { Axios, AxiosHeaders, AxiosProxyConfig } from "axios";
import { useEffect, useReducer, useState } from "react";
type AppConfig = {};

interface AppConfigInterface {}

export default function App(config: any) {
  let [store, setStore] = useState(config);

  // useReducer()

  // useEffect()

  return (
    <View activePanel="profile">
      <Panel id="profile">
        <PanelHeader>List</PanelHeader>
        <Group>
          <SimpleCell before={"1"}>проспект Ветеранов, 36 корпус 2</SimpleCell>
          <SimpleCell>world</SimpleCell>
        </Group>
      </Panel>
    </View>
  );
}

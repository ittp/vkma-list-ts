import {
  Icon12ChevronOutline,
  Icon16CommentOutline,
  Icon16Ghost,
  Icon16ListPlayOutline,
  Icon28DevicesOutline,
} from "@vkontakte/icons";
import {
  Group,
  Panel,
  PanelHeader,
  SimpleCell,
  View,
  Button,
  CellButton,
  Header,
  ButtonGroup,
  Cell,
  RichCell,
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

        <ButtonGroup>
          <CellButton mode="primary">B</CellButton>
        </ButtonGroup>

        <Group>
          <Cell
            title="title"
            extraSubtitle="footer"
            subhead={"subhead"}
            before={<Button shape="RichCell">B</Button>}
            after={"after"}
            target="cell"
          >
            <Header>Cell</Header>
          </Cell>
          <SimpleCell
            after={<Icon16CommentOutline />}
            before={<Icon28DevicesOutline />}
            expandable
            title="title"
            extraSubtitle={"проспект Ветеранов, 36 корпус 2"}
          >
            <Group>
              <Header subtitle={"KN-1111"}>Runner</Header>
            </Group>
          </SimpleCell>
          <SimpleCell>проспект Ветеранов, 166</SimpleCell>
        </Group>
      </Panel>
    </View>
  );
}

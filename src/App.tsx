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

import { Axios, AxiosHeaders, AxiosInstance, AxiosProxyConfig } from "axios";
import {
  useEffect,
  Component,
  cloneElement,
  useId,
  useMemo,
  useContext,
  useReducer,
  useState,
  ReactNode,
} from "react";
type AppConfig = {};

interface AppConfigInterface {}

export class SomeComponent extends Component<{ value: any }> {
  render(): ReactNode {
    const value = this.props.value;

    if (typeof value === "number") {
      return value + 10; // number
    }
    if (typeof value === "boolean") {
      return !value; // boolean
    }
    if (typeof value === "undefined") {
      return value; // undefiened
    }

    if (value.data) {
    }

    return JSON.stringify(value); // string
  }
}

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

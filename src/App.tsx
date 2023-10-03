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

function PageHeader() {
  return (
    <Header subtitle={"subtitle0"} mode={"secondary"}>
      Title
    </Header>
  );
}
export default function App(config: any) {
  let [store, setStore] = useState(config);

  // useReducer()

  // useEffect()

  return (
    <View activePanel="profile" title={"s"}>
      <Panel id="profile" header={<PageHeader />}>
        <div>1</div>
        <Space>data</Space>
      </Panel>
    </View>
  );
}

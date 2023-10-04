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
  Card,
  RichCell,
  List,
  Avatar,
} from "@vkontakte/vkui";

import { Axios, AxiosHeaders, AxiosInstance, AxiosProxyConfig } from "axios";
import React, {
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
export const DragableList = (data: []) => {
  const [draggingList, updateDraggingList] = React.useState(["1", "2"]);

  const onDragFinish = ({ from, to }) => {
    const _list = [...draggingList];
    _list.splice(from, 1);
    _list.splice(to, 0, draggingList[from]);
    updateDraggingList(_list);
  };

  const fetchData = (config) => {};

  return (
    <View activePanel="list">
      <Panel id="list">
        <PanelHeader>List</PanelHeader>
        <Group>
          <List>
            {draggingList.map((item) => (
              <Cell
                key={item}
                before={<Avatar/>}
                draggable
                onDragFinish={onDragFinish}
              >
                {item}
              </Cell>
            ))}
          </List>
        </Group>
      </Panel>
    </View>
  );
};

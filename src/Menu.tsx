import { SimpleCell, Group, Button, List } from "@vkontakte/vkui";

import { Icon28DevicesOutline } from "@vkontakte/icons";
// let outline = {};

// let icons = {
//   devices: <Icon28DevicesOutline />,
// };
// const icon = (key) => icons.filter((icon) => icon == icon[key]);

// { item: { title: 'title', subtitle: 'subtitle', icon: 'users', link: 'nothing', }}
const MenuItems = (items) =>
  items.map((item, key) => (
    <SimpleCell
      key={key}
      before={<Icon28DevicesOutline />}
      after={"actions"}
      //onClick={() => setActivePanel(item.link)}
      expandable={"auto"}

      
    >
      {item.title}
    </SimpleCell>
  ));

// <Group header={<Header mode="secondary">Меню</Header>}>

//       <SimpleCell
//         onClick={() => setActivePanel('nothing')}
//         expandable
//         before={<Icon28PaletteOutline />}
//       >
//         Внешний вид
//       </SimpleCell>
//       <SimpleCell
//         onClick={() => setActivePanel('nothing')}
//         expandable
//         before={<Icon28SettingsOutline />}
//       >
//         Основные
//       </SimpleCell>
//     </Group>
//     <Group header={<Header mode="secondary">Настройки</Header>}>
//       <SimpleCell Component="label" after={<Switch defaultChecked />}>
//         Сжимать фотографии
//       </SimpleCell>
//       <SimpleCell Component="label" after={<Switch />}>
//         Сжимать видео
//       </SimpleCell>
//     </Group>

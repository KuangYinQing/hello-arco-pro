import {
  PageHeader,
  Button,
  Avatar,
  Menu,
  Message,
} from '@arco-design/web-react';
import Search from '@arco-design/web-react/es/Input/search';
import {
  IconHistory,
  IconHeart,
  IconStar,
  IconCamera,
} from '@arco-design/web-react/icon';
import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react';
import Home from './home';
import Create from './create';
import Person from './person';
import Work from './work';
export let keyprop = 1;
function Mywork1header() {
  const ButtonGroup = Button.Group;
  const MenuItem = Menu.Item;
  const [selectedKey, setSelectedKey] = useState(null);
  const menuItems = [
    { key: '1', label: '主页' },
    { key: '2', label: '创作' },
    { key: '3', label: '作品' },
    { key: '4', label: '消息' },
    { key: '5', label: '个人' },
  ];
  // const handleSelect = (key) => {
  //   setSelectedKey(key);
  //   console.log('Selected key:', key);
  // };

  // const showpage = () => {
  //   switch (selectedKey) {
  //     case '1':
  //       return keyprop=1;
  //     case '2':
  //       return keyprop=2;
  //     case '3':
  //       return keyprop=3;
  //     case '4':
  //       return keyprop=4;
  //     case '5':
  //       return keyprop=5;
  //     default:
  //       return keyprop=0;
  //   }
  // };
  // useEffect(() => {}, [selectedKey]);

  return (
    <div>
      <PageHeader
        style={{ backgroundColor: '#ddddff' }}
        title="MusicSocialize"
        subTitle="This is my musicwork"
        extra={
          <div>
            <Search placeholder="search" style={{ width: '150px' }} />
            <ButtonGroup style={{ marginLeft: '20px', marginRight: '20px' }}>
              <Button type="text" style={{ padding: '0 8px' }}>
                <IconHistory />
              </Button>
              <Button
                type="text"
                icon={<IconHeart />}
                style={{ padding: '0 8px' }}
              ></Button>
              <Button type="text" style={{ padding: '0 8px' }}>
                <IconStar />
              </Button>
            </ButtonGroup>
            <Avatar triggerIcon={<IconCamera />} triggerType="mask">
              <img
                alt="avatar"
                src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
              />
            </Avatar>
          </div>
        }
        footer={
          <div>
            <Menu
              mode="horizontal"
              defaultSelectedKeys={[menuItems[0].key]}
              //onSelect={handleSelect}
              style={{ backgroundColor: '#ddddff' }}
            >
              {menuItems.map((item) => (
                <Menu.Item
                  key={item.key}
                  style={{ backgroundColor: '#ddddff' }}
                  onClick={() => {
                    setSelectedKey(item.key);
                    console.log('Selected key:', item.key);
                    // itemkey = item.key;
                    // console.log('Selected key:', itemkey);
                  }}
                >
                  {item.label}
                </Menu.Item>
              ))}
            </Menu>
            {/* <Menu
            mode="horizontal"
            style={{ backgroundColor: '#ddddff' }}
            defaultSelectedKeys={['0']}
          >
            <MenuItem key="0" style={{ backgroundColor: '#ddddff' }}>
              <Link to="/mywork/work1/home">主页</Link>
            </MenuItem>
            <MenuItem key="1" style={{ backgroundColor: '#ddddff' }}>
              <Link to="/mywork/work1/create">创作</Link>
            </MenuItem>
            <MenuItem key="2" style={{ backgroundColor: '#ddddff' }}>
              <Link to="/mywork/work1/work">作品</Link>
            </MenuItem>
            <MenuItem key="3" style={{ backgroundColor: '#ddddff' }}>
              <Link to="/mywork/work1/message">消息</Link>
            </MenuItem>
            <MenuItem key="4" style={{ backgroundColor: '#ddddff' }}>
              <Link to="/mywork/work1/person">个人</Link>
            </MenuItem>
          </Menu> */}
          </div>
        }
      ></PageHeader>
      {/* <div>{showpage}</div> */}
    </div>
  );
}
export default Mywork1header;

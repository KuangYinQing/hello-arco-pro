import {
  //   Avatar,
  Button,
  //   Icon,
  Layout,
  Menu,
  //   PageHeader
} from '@arco-design/web-react';
// import Search from '@arco-design/web-react/es/Input/search';
// import SiderComponent from '@arco-design/web-react/es/Layout/sider';
// import {
//   IconCamera,
//   IconHeart,
//   IconHistory,
//   IconHome,
//   IconLeft,
//   IconMessage,
//   IconMusic,
//   IconPhone,
//   IconRight,
//   IconStar,
//   IconWoman,
// } from '@arco-design/web-react/icon';
// import { Link } from 'react-router-dom';
import Home from './home';
import React from 'react';
import Mywork1header from './header';
//import itemkey from './header';
function work1() {
  const Sider = Layout.Sider;
  const ButtonGroup = Button.Group;
  const MenuItem = Menu.Item;
  return (
    <div className="layout.basic.demo">
      <Layout style={{ height: '100%' }}>
        <Mywork1header />
        {/* <PageHeader
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
                style={{ backgroundColor: '#ddddff' }}
                defaultSelectedKeys={['0']}
              >
                <MenuItem key="0" style={{ backgroundColor: '#ddddff' }}>
                  主页
                </MenuItem>
                <MenuItem key="1" style={{ backgroundColor: '#ddddff' }}>
                  创作
                </MenuItem>
                <MenuItem key="2" style={{ backgroundColor: '#ddddff' }}>
                  作品
                </MenuItem>
                <MenuItem key="3" style={{ backgroundColor: '#ddddff' }}>
                  消息
                </MenuItem>
                <MenuItem key="4" style={{ backgroundColor: '#ddddff' }}>
                  个人
                </MenuItem>
              </Menu>
            </div>
          }
        ></PageHeader> */}
        <Layout>
          <Sider width={'100%'}>
            <Home />
          </Sider>
        </Layout>
      </Layout>
    </div>
  );
}
export default work1;

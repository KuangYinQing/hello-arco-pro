import React from 'react';
import {
  Avatar,
  Button,
  Dropdown,
  Layout,
  Link,
  Menu,
  Message,
  Space,
  Tooltip,
} from '@arco-design/web-react';
import {
  IconCamera,
  IconDelete,
  IconDown,
  IconEdit,
  IconLeft,
  IconMessage,
  IconMore,
  IconPlus,
  IconRight,
  IconSettings,
  IconStar,
  IconUser,
} from '@arco-design/web-react/icon';
const Sider = Layout.Sider;
const Header = Layout.Header;
const Footer = Layout.Footer;
const Content = Layout.Content;
const AvatarGroup = Avatar.Group;
const Droplist = (
  <Menu>
    <Menu.Item key="1">Beijing</Menu.Item>
    <Menu.Item key="2">Shanghai</Menu.Item>
    <Menu.Item key="3">Guangzhou</Menu.Item>
    <Menu.Item disabled key="4">
      <Link disabled>Shenzhen</Link>
    </Menu.Item>
  </Menu>
);
export default function test() {
  const ButtonGroup = Button.Group;
  return (
    <div className="layout-basic-demo">
      <Layout style={{ height: '500px' }}>
        {/* <Header style={{ height: '50px' }}>Header</Header> */}
        <Layout>
          <Sider style={{ width: '700px', borderRadius: 5 }}>
            <Space size="large" style={{ margin: '10px' }}>
              <Button type="primary">Primary</Button>
              <Button type="secondary">Secondary</Button>
              <Button type="dashed">Dashed</Button>
              <Button type="outline">Outline</Button>
              <Button type="text">Text</Button>
              <Button type="primary" icon={<IconPlus />} />
              <Button type="primary" icon={<IconDelete />}>
                Delete
              </Button>
            </Space>
            <Space style={{ marginLeft: '10px' }}>
              <Button shape="circle" type="primary" icon={<IconPlus />} />
              <Button shape="round" type="primary" disabled>
                round-disabled
              </Button>
              <Button size="mini" type="primary" status="danger">
                Mda
              </Button>
              <Button size="small" type="primary" status="warning">
                Swa
              </Button>
              <Button size="default" type="primary" status="default">
                Default
              </Button>
              <Button size="large" type="primary" status="success">
                Lsu
              </Button>
            </Space>
            <Space size="large">
              <ButtonGroup>
                {/* 先定义const ButtonGrop */}
                <Button type="secondary">Publish</Button>
                <Button type="secondary" icon={<IconMore />} />
              </ButtonGroup>
              <ButtonGroup>
                <Button
                  type="primary"
                  icon={<IconLeft />}
                  shape="round"
                  style={{ padding: '0 8px' }}
                >
                  Prev
                </Button>
                <Button
                  type="primary"
                  shape="round"
                  style={{ padding: '0 8px' }}
                >
                  Next
                  <IconRight />
                </Button>
              </ButtonGroup>
              <ButtonGroup>
                <Button type="primary" icon={<IconStar />} />
                <Button type="primary" icon={<IconMessage />} />
                <Button type="primary" icon={<IconSettings />} />
              </ButtonGroup>
              <ButtonGroup>
                <Button type="primary" icon={<IconStar />}>
                  Favorite
                </Button>
                <Button type="primary" icon={<IconSettings />}>
                  Setting
                </Button>
              </ButtonGroup>
            </Space>
            <Space
              style={{
                width: 360,
                border: '1px solid var(--color-border)',
                borderRadius: 4,
                padding: 20,
              }}
              direction="vertical"
              size="large"
            >
              <Button type="primary" long>
                Primary
              </Button>
              <Button type="secondary" long>
                Secondary
              </Button>
              <Button type="dashed" long>
                Dashed
              </Button>
              <Button type="default" long>
                Default
              </Button>
              <Button type="text" long>
                Text
              </Button>
            </Space>
          </Sider>
          {/* <Content style={{ marginLeft: '20px' }}>Content</Content> */}
          <Sider
            style={{ width: '300px', marginLeft: '20px', borderRadius: 5 }}
          >
            <div>
              <Tooltip content="This is IconStar">
                <IconStar style={{ fontSize: 24, marginRight: 20 }} />
              </Tooltip>
              <IconStar spin style={{ fontSize: 24, color: '#ffcd00' }} />
            </div>
            <Link href="https://baidu.com"> baidu </Link>
            <Link href="#" status="error">
              Error Link
            </Link>
            <Link href="#" status="error" disabled>
              Error Link
            </Link>
            <Link href="#" status="success">
              Success Link
            </Link>
            <Link href="#" icon>
              Hyperlinks
            </Link>
            <Dropdown droplist={Droplist} position="bl">
              <Link style={{ marginRight: 40 }}>
                City
                <IconDown style={{ fontSize: 12, marginLeft: 6 }} />
              </Link>
            </Dropdown>

            <Dropdown droplist={Droplist} position="bl" disabled>
              <Link>
                City
                <IconDown style={{ fontSize: 12, marginLeft: 6 }} />
              </Link>
            </Dropdown>
            <Avatar>A</Avatar>
            <Space>
              <AvatarGroup size={32} style={{ margin: 10 }}>
                <Avatar style={{ backgroundColor: '#7BC616' }}>A</Avatar>
                <Avatar style={{ backgroundColor: '#14C9C9' }}>B</Avatar>
                <Avatar style={{ backgroundColor: '#168CFF' }}>C</Avatar>
                <Avatar style={{ backgroundColor: '#FF7D00' }}>Arco</Avatar>
                <Avatar style={{ backgroundColor: '#FFC72E' }}>Design</Avatar>
              </AvatarGroup>
              <Avatar
                triggerIcon={<IconCamera />}
                triggerIconStyle={{
                  color: '#3491FA',
                }}
                onClick={() => Message.info('Upload...')}
                autoFixFontSize={false}
                style={{
                  backgroundColor: '#168CFF',
                }}
              >
                A
              </Avatar>
              <Avatar
                shape="square"
                triggerIcon={<IconEdit />}
                onClick={() => Message.info('Upload...')}
                style={{ backgroundColor: '#FFC72E' }}
              >
                <IconUser />
              </Avatar>
              <Avatar triggerIcon={<IconCamera />} triggerType="mask">
                <img
                  alt="avatar"
                  src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
                />
              </Avatar>
            </Space>
          </Sider>
        </Layout>
        {/* <Footer>Footer</Footer> */}
      </Layout>
      <br />
    </div>
  );
}

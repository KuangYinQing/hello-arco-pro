import {
  Avatar,
  Button,
  Card,
  Carousel,
  Descriptions,
  Divider,
  Layout,
  PageHeader,
  Space,
  Tabs,
  Typography,
} from '@arco-design/web-react';
import Meta from '@arco-design/web-react/es/Card/meta';
import Search from '@arco-design/web-react/es/Input/search';
import TabPane from '@arco-design/web-react/es/Tabs/tab-pane';
import {
  IconHistory,
  IconHeart,
  IconStar,
  IconCamera,
  IconMore,
  IconShareInternal,
  IconThumbUp,
} from '@arco-design/web-react/icon';
import React, { useState } from 'react';
import { Comment } from '@arco-design/web-react';
import {
  IconMessage,
  IconStarFill,
  IconHeartFill,
} from '@arco-design/web-react/icon';
import Title from '@arco-design/web-react/es/Typography/title';
import Sider from '@arco-design/web-react/es/Layout/sider';
import HorizontalInterval from '@/components/Chart/horizontal-interval';
const style = {
  textAlign: 'center',
  marginTop: 20,
};
// interface cardprop {
//   src: string;
//   touxinag: string;
//   name: string;
//   title: string;
//   description: string;
// }
const data = [
  {
    label: 'Name',
    value: 'Socrates',
  },
  {
    label: 'Mobile',
    value: '123-1234-1234',
  },
  {
    label: 'Residence',
    value: 'Beijing',
  },
  {
    label: 'Hometown',
    value: 'Beijing',
  },
  {
    label: 'Date of Birth',
    value: '2020-05-15',
    span: 2,
  },
  {
    label: 'Address',
    value: 'Yingdu Building, Zhichun Road, Beijing',
  },
];
function Content() {
  const [activeTab, setActiveTab] = React.useState('1');
  const ButtonGroup = Button.Group;
  const Content = Layout.Content;
  const imageSrc = [
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
  ];
  let like = false;
  const [likenum, setLikenum] = React.useState();
  let star = false;
  const [starnum, setStarnum] = React.useState();
  const actions = [
    <button
      className="custom-comment-action"
      key="heart"
      onClick={() => {
        like = !like;
        setLikenum(likenum);
      }}
    >
      {like ? <IconHeartFill style={{ color: '#f53f3f' }} /> : <IconHeart />}
      {83 + (like ? 1 : 0)}
    </button>,
    <button
      className="custom-comment-action"
      key="star"
      onClick={() => {
        star = !star;
        setStarnum(starnum);
      }}
    >
      {star ? <IconStarFill style={{ color: '#ffb400' }} /> : <IconStar />}
      {3 + (star ? 1 : 0)}
    </button>,
    <button className="custom-comment-action" key="reply">
      <IconMessage /> Reply
    </button>,
  ];
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
      ></PageHeader>
      <Tabs
        activeTab={activeTab}
        onChange={setActiveTab}
        style={{ backgroundColor: '#ddddff' }}
      >
        <TabPane key="1" title="主页">
          <Typography.Paragraph>
            <div>
              <Carousel
                style={{ width: '98%', height: 200, margin: '10px' }}
                autoPlay={true}
                indicatorType="dot"
                showArrow="hover"
              >
                {imageSrc.map((src, index) => (
                  <div key={index}>
                    <img src={src} style={{ width: '100%' }} />
                  </div>
                ))}
              </Carousel>
              <Space>
                {[1, 2, 3].map((item) => (
                  <Card
                    key={item}
                    className="card-with-icon-hover"
                    style={{ width: 360, margin: '5px' }}
                    cover={
                      <div style={{ height: 204, overflow: 'hidden' }}>
                        <img
                          style={{
                            width: '100%',
                            transform: 'translateY(-20px)',
                          }}
                          alt="dessert"
                          src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/a20012a2d4d5b9db43dfc6a01fe508c0.png~tplv-uwbnlip3yd-webp.webp"
                        />
                      </div>
                    }
                    actions={[
                      <span className="icon-hover" key={1}>
                        <IconThumbUp />
                      </span>,
                      <span className="icon-hover" key={2}>
                        <IconShareInternal />
                      </span>,
                      <span className="icon-hover" key={3}>
                        <IconMore />
                      </span>,
                    ]}
                  >
                    <Meta
                      avatar={
                        <Space>
                          <Avatar size={24}>A</Avatar>
                          <Typography.Text>Username</Typography.Text>
                        </Space>
                      }
                      title="Card Title"
                      description="This is the description"
                    />
                  </Card>
                ))}
              </Space>
              <Comment
                actions={actions}
                author="Socrates"
                avatar={
                  <Avatar>
                    <img
                      alt="avatar"
                      src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/e278888093bef8910e829486fb45dd69.png~tplv-uwbnlip3yd-webp.webp"
                    />
                  </Avatar>
                }
                content={<div>Comment body content.</div>}
                datetime="1 hour"
              />
            </div>
          </Typography.Paragraph>
        </TabPane>
        <TabPane key="2" title="创作">
          <Typography.Paragraph>Content of chuangzuo</Typography.Paragraph>
        </TabPane>
        <TabPane key="3" title="社交">
          <Typography.Paragraph>Content of shejiaso</Typography.Paragraph>
        </TabPane>
        <TabPane key="4" title="个人">
          <Typography.Paragraph>
            <div style={{ width: '100%', flex: 1 }}>
              <Space style={{ width: '100%', justifyContent: 'center' }}>
                <Avatar
                  triggerIcon={<IconCamera />}
                  triggerType="mask"
                  //style={{ marginLeft: '10px' }}
                >
                  <img
                    alt="avatar"
                    src="//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/3ee5f13fb09879ecb5185e440cef6eb9.png~tplv-uwbnlip3yd-webp.webp"
                  />
                </Avatar>
                <Button type="text" style={{ fontSize: '20px' }}>
                  name
                </Button>
                <ButtonGroup>
                  <Button type="text" style={{ color: 'black' }}>
                    关注 {15}
                  </Button>
                  <Button type="text" style={{ color: 'black' }}>
                    粉丝 {10}
                  </Button>
                  <Button type="text" style={{ color: 'black' }}>
                    获赞 {20}
                  </Button>
                </ButtonGroup>
              </Space>
              {/* <Divider style={{ color: '#dddddd' }} /> */}
              <Space style={{ width: '100%', justifyContent: 'center' }}>
                <Content style={{ width: '400px', backgroundColor: '#ddddff' }}>
                  <h4>个人信息</h4>
                  <Descriptions
                    column={1}
                    //   title="个人信息"
                    data={data}
                    // size={size}
                    labelStyle={{ paddingRight: 40 }}
                  />
                </Content>
                <Content
                  style={{
                    width: '550px',
                    backgroundColor: '#ddddff',
                    marginLeft: '10px',
                  }}
                >
                  <Tabs
                    defaultActiveTab="1"
                    size="large"
                    type="line"
                    tabPosition="left"
                    style={{ width: '550px', height: '220px' }}
                  >
                    <TabPane key="1" title="作品">
                      <Typography.Paragraph>作品</Typography.Paragraph>
                    </TabPane>
                    <TabPane key="2" title="点赞">
                      <Typography.Paragraph>点赞</Typography.Paragraph>
                    </TabPane>
                    <TabPane key="3" title="收藏">
                      <Typography.Paragraph>收藏</Typography.Paragraph>
                    </TabPane>
                  </Tabs>
                  {/* <h4>作品信息</h4> */}
                </Content>
              </Space>
            </div>
          </Typography.Paragraph>
        </TabPane>
      </Tabs>
    </div>
  );
}
export default Content;

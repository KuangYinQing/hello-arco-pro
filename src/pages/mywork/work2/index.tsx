import {
  Avatar,
  Button,
  Card,
  Carousel,
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
const style = {
  textAlign: 'center',
  marginTop: 20,
};
interface cardprop {
  src: string;
  touxinag: string;
  name: string;
  title: string;
  description: string;
}
function work2() {
  const [activeTab, setActiveTab] = React.useState('1');
  const ButtonGroup = Button.Group;
  const imageSrc = [
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
    '//p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/24e0dd27418d2291b65db1b21aa62254.png~tplv-uwbnlip3yd-webp.webp',
  ];
  let like: boolean = false;
  const [likenum, setLikenum] = React.useState();
  let star: boolean = false;
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
              <Card
                className="card-with-icon-hover"
                style={{ width: 360 }}
                cover={
                  <div style={{ height: 204, overflow: 'hidden' }}>
                    <img
                      style={{ width: '100%', transform: 'translateY(-20px)' }}
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
            </div>
          </Typography.Paragraph>
        </TabPane>
        <TabPane key="2" title="创作">
          <Typography.Paragraph>Content of Tab Panel 2</Typography.Paragraph>
        </TabPane>
        <TabPane key="3" title="社交">
          <Typography.Paragraph>Content of Tab Panel 3</Typography.Paragraph>
        </TabPane>
        <TabPane key="4" title="个人">
          <Typography.Paragraph>Content of Tab Panel 4</Typography.Paragraph>
        </TabPane>
      </Tabs>
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
  );
}
export default work2;

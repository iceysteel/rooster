import logo, { ReactComponent } from './logo.svg';
import './App.css';
import 'antd/dist/antd.css'
import React from 'react'
import { Layout, Menu, Breadcrumb, PageHeader, Avatar, Row, Col, Card, Divider, Button } from 'antd';
import {
  DesktopOutlined,
  PieChartOutlined,
  FileOutlined,
  TeamOutlined,
  UserOutlined,
  PlusCircleOutlined,
} from '@ant-design/icons';

const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;


class Teamchat extends React.Component {
  render(){
    return(
      <div>
      <Divider orientation="left">
        Team 1 
        <Button type="primary" shape="round" icon={<PlusCircleOutlined />}>
          Join Team
        </Button>
      </Divider>
      <Row gutter={[16,16]}>

        <Col span={6}>
          <Card size="small" title="Test User">
            <Avatar shape="square" size={128} icon={<UserOutlined />} />
          </Card>
        </Col>

        <Col span={6}>
          <Card size="small" title="Test User">
            <Avatar shape="square" size={128} icon={<UserOutlined />} />
          </Card>
        </Col>        
        
        <Col span={6}>
          <Card size="small" title="Test User">
            <Avatar shape="square" size={128} icon={<UserOutlined />} />
          </Card>
        </Col>        
        
        <Col span={6}>
          <Card size="small" title="Test User">
            <Avatar shape="square" size={128} icon={<UserOutlined />} />
          </Card>
        </Col>
      </Row>

      <Divider orientation="left">Team 2</Divider>
      <Row gutter={[16,16]}>

        <Col span={6}>
          <Card size="small" title="Test User">
            <Avatar shape="square" size={128} icon={<UserOutlined />} />
          </Card>
        </Col>

        <Col span={6}>
          <Card size="small" title="Test User">
            <Avatar shape="square" size={128} icon={<UserOutlined />} />
          </Card>
        </Col>        
        
        <Col span={6}>
          <Card size="small" title="Test User">
            <Avatar shape="square" size={128} icon={<UserOutlined />} />
          </Card>
        </Col>        
        
      </Row>
      </div>
    )
  }
}


function App() {
  return (
    <Layout style={{ minHeight: '100vh' }}>

        <Layout className="site-layout">
          {/* <Header className="site-layout-background" style={{ padding: 0 }} /> */}
          <PageHeader
    className="site-page-header"
    title="🐓 Rooster"
    subTitle="We don't charge by the minute"
  />
          <Content style={{ margin: '0 16px' }}>
            <div className="site-layout-background" style={{ padding: 24, minHeight: 360 }}>
              <Teamchat ></Teamchat>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>

        <Sider>
          <div className="logo" />
          <Menu theme="dark" openKeys={['sub2']} mode="inline">
            <Menu.Item key="1" icon={<PieChartOutlined />}>
              Option 1
            </Menu.Item>
            <Menu.Item key="2" icon={<DesktopOutlined />}>
              Option 2
            </Menu.Item>
            <SubMenu key="sub2" icon={<TeamOutlined />} title="Bench">
              <Menu.Item key="6">Test User</Menu.Item>
              <Menu.Item key="8">Test User</Menu.Item>
              <Menu.Item key="8">Test User</Menu.Item>
            </SubMenu>
          </Menu>
        </Sider>


      </Layout>
  );
}

export default App;

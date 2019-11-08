import React from 'react';
import { 
  BrowserRouter, 
  Route, 
  Link, 
  Switch 
} from "react-router-dom";
import { 
  Layout, 
  Menu, 
  Icon, 
  Avatar, 
  Dropdown, 
  Button, 
  Input 
} from 'antd';

import Monetization from '../DemoGame/Dashboard/Monetization/Monetization';
import Resources from '../DemoGame/Dashboard/Resources/Resources';
import Cohorts from './Cohorts/Cohorts';
import Explore from './Explore/Explore';
import Funnels  from './Funnels/Funnels';


const { Content, Sider } = Layout;
const { SubMenu } = Menu;
const { Search } = Input;

class ModalGame extends React.Component {
// submenu keys of first level
rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

state = {
  openKeys: ['sub1'],
};

onOpenChange = openKeys => {
  const latestOpenKey = openKeys.find(key => this.state.openKeys.indexOf(key) === -1);
  if (this.rootSubmenuKeys.indexOf(latestOpenKey) === -1) {
    this.setState({ openKeys });
  } else {
    this.setState({
      openKeys: latestOpenKey ? [latestOpenKey] : [],
    });
  }
};

  render() {
    

    return (
   
      <Menu
     theme="dark" defaultSelectedKeys={['dashboard']} mode="inline"
        openKeys={this.state.openKeys}
        onOpenChange={this.onOpenChange}
        style={{ width: 256 }}
      >
        <SubMenu
          key="sub1"
          title={
            <span>
              <Icon type="mail" />
              <span>Navigation One</span>
            </span>
          }
        >
          <Menu.Item key="1">Option 1</Menu.Item>
         
        </SubMenu>
        <SubMenu
          key="sub2"
          title={
            <span>
              <Icon type="appstore" />
              <span>Navigation Two</span>
            </span>
          }
        >
          <Menu.Item key="5">Option 5</Menu.Item>
          <Menu.Item key="6">Option 6</Menu.Item>
       
        </SubMenu>
      </Menu>
      
    );
  }
}

export default ModalGame;
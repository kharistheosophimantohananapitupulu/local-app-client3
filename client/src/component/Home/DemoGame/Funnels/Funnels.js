import React, { Component } from 'react';
import {
  Card,
  Row,
  Col,
  Layout,
  Menu,
  Icon,
  Button,
  List,
  Dropdown,
  Table,
  DatePicker,
  Divider,
   Tag ,
  Select
} from 'antd';
import { Link } from 'react-router-dom';
import moment from 'moment';
import './Funnels.css';

import { Line, Bar } from '../../../../../node_modules/react-chartjs-2';

// Menu Header
const { Header } = Layout;
const { SubMenu } = Menu;
const { Meta } = Card;
const { Option } = Select;
// PopUp Calendar
const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
// Cascader data
const options = [
  {
    value: 'zhejiang',
    label: 'Zhejiang',
    children: [
      {
        value: 'hangzhou',
        label: 'Hangzhou',
        children: [
          {
            value: 'xihu',
            label: 'West Lake',
          },
        ],
      },
    ],
  },
  {
    value: 'jiangsu',
    label: 'Jiangsu',
    children: [
      {
        value: 'nanjing',
        label: 'Nanjing',
        children: [
          {
            value: 'zhonghuamen',
            label: 'Zhong Hua Men',
          },
        ],
      },
    ],
  },
];
// Cascade
function onChange(value) {
  console.log(value);
}
const columns = [
  {
    
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
    render: text => <a>{text}</a>,
  },
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
  },
  {
    title: 'UpdatedDate',
    dataIndex: 'updateddate',
    key: 'updateddate',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: tags => (
      <span>
        {tags.map(tag => {
          let color = tag.length > 5 ? 'geekblue' : 'green';
          if (tag === 'loser') {
            color = 'volcano';
          }
          return (
            <Tag color={color} key={tag}>
              {tag.toUpperCase()}
            </Tag>
          );
        })}
      </span>
    ),
  },
  {
    title: 'Action',
    key: 'action',
    render: (text, record) => (
      <span>
        <a>Invite {record.name}</a>
        <Divider type="vertical" />
        <a>Delete</a>
      </span>
    ),
  },
];

const data = [
  {
    key: '1',
    status: 'John Brown',
    name: 'John Brown',
    updateddate: '1. Jun -30.Jun 2014',
    tags: ['nice', 'developer'],
  },
  {
    key: '2',
    status: 'John Brown',
    name: 'John Brown',
    updateddate: '1. Jun -30.Jun 2014',
    tags: ['nice', 'developer'],
  },
  {
    key: '3',
    status: 'John Brown',
    name: 'John Brown',
    updateddate: '1. Jun -30.Jun 2014',
    tags: ['nice', 'developer'],
  },
];
function handleChange(value) {
  console.log(`selected ${value}`);
}

export class Funnels extends Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
  };
  state = {
    visible: false,
  };

  onPositionChange = expandIconPosition => {
    this.setState({ expandIconPosition });
  };

  handleClick = e => {
    const nextId = this.state.panels.length + 1
    this.setState({
      panels: this.state.panels.concat([nextId])
    });
  };

  componentDidMount() {
    fetch('https://my-json-server.typicode.com/ciptadii/jsonserver/db')
      .then(response => response.json())
      .then(data => this.setState({ chartData: data, isLoading: false }))
  }

  // handle click header
  handleChange = (pagination, filters, sorter) => {
    console.log('Various parameters', pagination, filters, sorter);
    this.setState({
      filteredInfo: filters,
      sortedInfo: sorter,
    });
  };
  // default props chart
  static defaultProps = {
    displayLegend: true,
    legendPosition: 'top'
  }
  clearFilters = () => {
    this.setState({ filteredInfo: null });
  };

  clearAll = () => {
    this.setState({
      filteredInfo: null,
      sortedInfo: null,
    });
  };

  setAgeSort = () => {
    this.setState({
      sortedInfo: {
        order: 'descend',
        columnKey: 'age',
      },
    });
  };

  render() {
   return (
      <React.Fragment>
        <div>
          <Header style={{ padding: 0, position: 'fixed', zIndex: 100, width: '1319.200px' }} >
            <Menu onClick={this.handleClick} selectedKeys={[this.state.current]} mode="horizontal" style={{ width: '1319.200px' }}>
              <SubMenu
                key="sub1"
                title={
                  this.state.submenu
                }
              >
                <Menu.Item key="Overview">Overview</Menu.Item>
                <Menu.Item key="Engagement">Engagement</Menu.Item>
                <Menu.Item key="Benchmarks">Benchmarks</Menu.Item>
                <Menu.Item key="Monetization">Monetization</Menu.Item>
                <Menu.Item key="Resources">Resources</Menu.Item>
                <Menu.Item key="Progression">Progression</Menu.Item>
                <Menu.Item key="Quality">Quality</Menu.Item>
              </SubMenu>
              <Menu.Item key="Summary">
                Summary
              </Menu.Item>
              <Menu.Item key="Purchase">
                Purchase behaviour
              </Menu.Item>
              <Icon type="appstore" theme="twoTone" style={{ fontSize: '18px', float: 'right', marginTop: 15, marginLeft: 20, marginRight: 20 }} />
              <Icon type="stock" style={{ fontSize: '18px', float: 'right', marginTop: 15 }} />
              <Icon type="lock" style={{ fontSize: '18px', float: 'right', marginTop: 15, marginRight: 20, marginLeft: 20 }} />
            </Menu>
          </Header>
          <div style={{ width: '1279.200px', height: '90px' }} />
        </div>
        <div style={{ marginLeft: '72px', marginRight: '72px' }}>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <Row>
              <Col span={4}>
                <li>
                  <Select defaultValue="lucy" style={{ width: '130px', height: '40px' }} onChange={handleChange}>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                    <Option value="jack">Jack</Option>
                    <Option value="lucy">Lucy</Option>
                    <Option value="Yiminghe">yiminghe</Option>
                  </Select>
                </li>
              </Col>
            </Row>
          </ul>
        </div>
        <div style={{ width: '1279.200px', height: '40px' }} />
        <div style={{ marginLeft: '72px', marginRight: '72px' }}>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <Row>
              <li>
             <Card><Table columns={columns} dataSource={data} />
             </Card> 
              </li>
            </Row>
            <br />
          </ul> <br />

        </div>
      </React.Fragment>
    )
  }
}

export default Funnels;
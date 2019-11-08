import React, { Component } from 'react';
import {
  Card,
  Row,
  Col,
  Layout,
  Menu,
  Icon,
  Button,
  Spin,
  Table,
  DatePicker,
  Cascader,
  Avatar,
  Modal,
  message,
  Select,
  Typography,

  Input,


  TreeSelect,

  Transfer,
  List,

} from 'antd';
//the custom modal component 
import DateTimeRangeContainer from '../../Home/DemoGame/daterangepicker';
import { Link } from 'react-router-dom';
import moment from 'moment';



import DemoGame, { Funnels } from '../DemoGame/Funnels/Funnels';

// Menu Header
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;
const { Meta } = Card;
const { Option } = Select;

const style = { width: 200 };


function handleChange(value) {
  console.log(`selected ${value}`);
}

// PopUp Calendar
const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];
const optionsa = [
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
function onChange(value) {
  console.log(value);
}

// Just show the latest item.
function displayRender(label) {
  return label[label.length - 1];
}

function handleButtonClick(e) {
  message.info('Click on left button.');
  console.log('click left button', e);
}

function handleMenuClick(e) {
  message.info('Click on menu item.');
  console.log('click', e);
}


export class MostUsed extends Component {


  state = {
    current: 'Summary',
    submenu: 'Monetization',
    chartData: {},
    isLoading: true,
    loading: false,
    visible: false,

  };


  showModal = () => {
    this.setState({
      visible: true,
    });
  };
  handleOk = () => {
    this.setState({ loading: true });
    setTimeout(() => {
      this.setState({ loading: false, visible: false });
    }, 3000);
  };
  handleCancel = () => {
    this.setState({ visible: false });
  };

  onChange = checked => {
    this.setState({ loading: !checked });
  };
  componentDidMount() {
    fetch('https://my-json-server.typicode.com/ciptadii/jsonserver/db')
      .then(response => response.json())
      .then(data => this.setState({ chartData: data, isLoading: false }))
  }

  // handle click header
  handleClick = e => {
    console.log('click', e);
    this.setState({
      current: e.key,
    });
  }

  // default props chart
  static defaultProps = {
    displayLegend: true,
    legendPosition: 'top'
  }

  render() {


    const { chartData, loading, visible } = this.state;

    // wait data
    if (this.state.isLoading) {
      return (
        <p>wait</p>
      )
    }
    const date = chartData.thisWeek;
    const revenue = chartData.revenue;
    const transactions = chartData.transactions;
    const conversionRate = chartData.conversionRate;
    const ARPDAU = chartData.ARPDAU;

    // const dataLoaded = [];
    // if(chartData.thisWeek){
    //   chartData.thisWeek.forEach((item, key) => {
    //     dataLoaded.push({
    //       key,
    //       date: item,
    //       revenue: 32,
    //       transactions: 'New York No. 1 Lake Park',
    //       conversion: 'nice',
    //       arpdau: 'good',
    //       arppu: 'excelent',
    //       dau: 'bad'
    //     })
    //   })
    // }console.log(dataLoaded);


    // Cascade
    function onChange(value) {
      console.log(value);
    }
    const menu = (
      <Menu onClick={handleMenuClick}>
        <Menu.Item key="1">
          <Icon type="user" />
          1st menu item
        </Menu.Item>
        <Menu.Item key="2">
          <Icon type="user" />
          2nd menu item
        </Menu.Item>
        <Menu.Item key="3">
          <Icon type="user" />
          3rd item
        </Menu.Item>
      </Menu>
    );
    // Table
    const columns = [
      {
        title: 'Date',
        dataIndex: 'date',
        key: 'date',
        render: text => <a>{text}</a>,
      },
      {
        title: 'Revenue per transaction',
        dataIndex: 'revenue',
        key: 'revenue',
      },
      {
        title: 'Transactions',
        dataIndex: 'transactions',
        key: 'transactions',
      },
      {
        title: 'Conversion rate',
        dataIndex: 'conversion',
        key: 'conversion',
      },
      {
        title: 'ARPDAU',
        dataIndex: 'arpdau',
        key: 'arpdau',
      },
      // {
      //   title: 'ARPPU',
      //   dataIndex: 'arppu',
      //   key: 'arppu',
      // },
      // {
      //   title: 'DAU',
      //   dataIndex: 'dau',
      //   key: 'dau',
      // }
    ];

    const data = [
      {
        key: '1',
        date: date[0],
        revenue: "$" + revenue[0],
        transactions: "$" + transactions[0],
        conversion: conversionRate[0] + "%",
        arpdau: "$" + ARPDAU[0]
      },
      {
        key: '2',
        date: date[1],
        revenue: "$" + revenue[1],
        transactions: "$" + transactions[1],
        conversion: conversionRate[1] + "%",
        arpdau: "$" + ARPDAU[1]
      },
      {
        key: '3',
        date: date[2],
        revenue: "$" + revenue[2],
        transactions: "$" + transactions[2],
        conversion: conversionRate[2] + "%",
        arpdau: "$" + ARPDAU[2]
      },
      {
        key: '4',
        date: date[3],
        revenue: "$" + revenue[3],
        transactions: "$" + transactions[3],
        conversion: conversionRate[3] + "%",
        arpdau: "$" + ARPDAU[3]
      },
      {
        key: '5',
        date: date[4],
        revenue: "$" + revenue[4],
        transactions: "$" + transactions[4],
        conversion: conversionRate[4] + "%",
        arpdau: "$" + ARPDAU[4]
      },
      {
        key: '6',
        date: "Total",
        revenue: "$" + (revenue[0] + revenue[1] + revenue[2] + revenue[3] + revenue[4]),
        transactions: "$" + (transactions[0] + transactions[1] + transactions[2] + transactions[3] + transactions[4]),
        conversion: (conversionRate[0] + conversionRate[1] + conversionRate[2] + conversionRate[3] + conversionRate[4]).toFixed(2) + "%",
        arpdau: "$" + (ARPDAU[0] + ARPDAU[1] + ARPDAU[2] + ARPDAU[3] + ARPDAU[4])
      }
    ];

    return (
      <React.Fragment>
        <div>
         
          <div style={{ width: '1279.200px', height: '90px' }} />
        </div>

        <div style={{ width: '1279.200px', height: '40px' }} />

        <div style={{ marginLeft: '72px', marginRight: '72px' }}>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <Row>
              <Col span={4}>
                <li>


                  <Row><span style={{ paddingRight: '1px' }}>Metric (Y axis)</span></Row>
                  <Button style={{ width: '150.150px', height: '30px' }} type="secondary" onClick={this.showModal}>
                    DAU
               </Button>
                  <Modal
                  
                    visible={visible}
                    title="Metric picker"
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    footer={[
                      <Button key="back" onClick={this.handleCancel}>
                        Return
            </Button>,
                      <Button key="submit" type="primary" loading={loading} onClick={this.handleOk}>
                        Submit
            </Button>,
                    ]}

                    style={{
                      overflow: 'auto',
                   
                      height: '100vh',
                      width: '100vh'}}
                  >



                   

                  </Modal>


                </li>
              </Col>
              <Col span={4}>
                <li>
                  <Row><span style={{ paddingRight: '1px' }}>Group by   (X axis)</span></Row>

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
              <Col span={8}>
                <li>
                  <Row><span style={{ paddingRight: '1px' }}>Group by   (X axis)</span></Row>

                  <Cascader
                    options={options}
                    expandTrigger="hover"
                    displayRender={displayRender}
                    onChange={onChange}
                  >
                  </Cascader>


                </li>
              </Col>
              <Col span={4}>
                <li>
                  <Row><span style={{ paddingRight: '1px' }}>Group by   (X axis)</span></Row>
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
              <Col span={4}>
                <li>
                  <Row><span style={{ paddingRight: '1px' }}>Group by   (X axis)</span></Row>
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

            <br />
           
          </ul> <br />
          <div style={{ paddingBottom: '30px' }}>
            <Spin spinning={this.state.isLoading}>
              <Table columns={columns} dataSource={data} style={{ width: '1149.600px', margin: 'auto', background: 'white' }} />
            </Spin>
            <div style={{ width: '101.21px', height: '40px', margin: 'auto', paddingTop: '6px', paddingBottom: '6px' }}>
              <Button type="primary" icon="download" size='large'>
                Export
              </Button>
            </div>
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default MostUsed;
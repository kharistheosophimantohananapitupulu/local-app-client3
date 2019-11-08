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
  Cascader
} from 'antd';
import moment from 'moment';
import { Line, Bar } from '../../../../../node_modules/react-chartjs-2';

// Menu Header
const { Header } = Layout;
const { SubMenu } = Menu;

// PopUp Calendar
const { MonthPicker, RangePicker } = DatePicker;

const dateFormat = 'YYYY/MM/DD';
const monthFormat = 'YYYY/MM';

const dateFormatList = ['DD/MM/YYYY', 'DD/MM/YY'];


const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
  },
  {
    key: '4',
    name: 'Jim Red',
    age: 32,
    address: 'London No. 2 Lake Park',
  },
];

export class Cohorts extends Component {
  state = {
    filteredInfo: null,
    sortedInfo: null,
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
    let { sortedInfo, filteredInfo } = this.state;
    sortedInfo = sortedInfo || {};
    filteredInfo = filteredInfo || {};
    const { chartData } = this.state;
    
    // wait data
    if(this.state.isLoading){
      return(
        <p>wait</p>
      )
    } 
  

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

    // Table
    const columns = [
      {
        title: 'Name',
        dataIndex: 'name',
        key: 'name',
        filters: [{ text: 'Joe', value: 'Joe' }, { text: 'Jim', value: 'Jim' }],
        filteredValue: filteredInfo.name || null,
        onFilter: (value, record) => record.name.includes(value),
        sorter: (a, b) => a.name.length - b.name.length,
        sortOrder: sortedInfo.columnKey === 'name' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Age',
        dataIndex: 'age',
        key: 'age',
        sorter: (a, b) => a.age - b.age,
        sortOrder: sortedInfo.columnKey === 'age' && sortedInfo.order,
        ellipsis: true,
      },
      {
        title: 'Address',
        dataIndex: 'address',
        key: 'address',
        filters: [{ text: 'London', value: 'London' }, { text: 'New York', value: 'New York' }],
        filteredValue: filteredInfo.address || null,
        onFilter: (value, record) => record.address.includes(value),
        sorter: (a, b) => a.address.length - b.address.length,
        sortOrder: sortedInfo.columnKey === 'address' && sortedInfo.order,
        ellipsis: true,
      },
    ];
// Cascader data
const options = [
  {
    value: 'noSplit',
    label: [<Icon type="close-square" />, <b> NO SPLIT</b>]
  },
  {
    value: 'advancedSplit',
    label: [<Icon type="column-width" />, <b> ADVANCED SPLIT</b>]
  },
  {
    value: 'adFilters',
    label: 'Top Ad filters'
  },
  {
    value: 'adGroupFilters',
    label: 'Top Ad Group filters'
  },
  {
    value: 'topCampaign',
    label: 'Top Campaign filters'
  },
  {
    value: 'topKeyword',
    label: 'Top Keyword filters'
  },
  {
    value: 'topPublishers',
    label: 'Top Publishers filters'
  }

];

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
              <Icon type="appstore" theme="twoTone" style={{ fontSize: '18px', float: 'right', marginTop: 15, marginLeft: 20, marginRight: 20 }}/>
              <Icon type="stock" style={{ fontSize: '18px', float: 'right', marginTop: 15 }}/>
              <Icon type="lock" style={{ fontSize: '18px', float: 'right', marginTop: 15, marginRight: 20, marginLeft: 20 }}/>
            </Menu>
            <Menu>
              <div className="demo">
                <div style={{ paddingLeft: '20px', paddingRight: '20px', clear: 'both', whiteSpace: 'nowrap', width: '1319.200px' }}>
                  <div>
                    <RangePicker
                      defaultValue={[moment('2015/01/01', dateFormat), moment('2015/01/01', dateFormat)]}
                      format={dateFormat}
                    />
                    <span> <Button><Icon type="plus" /> FILTERS</Button> </span>
                    <span style={{ float: 'right' }}>
                      <span style={{ paddingRight: '10px' }}>SPLIT</span>
                      <Cascader options={options} onChange={onChange} placeholder="Please select" />
                    </span>
                  </div>
                </div>
              </div>
            </Menu>
          </Header>
          <div style={{ width: '1279.200px', height: '90px' }} />
        </div>

        <div style={{ width: '1279.200px', height: '40px' }} />

        <div style={{ marginLeft: '72px', marginRight: '72px' }}>
          <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
            <Row>
         
                <li>
                  <Card title="Transactions" style={{ width: '1149.600px', margin: 'auto' }} >
                    <Spin spinning={this.state.isLoading}></Spin>
                    <div style={{ paddingBottom: '30px' }}>
        <div className="table-operations">
          <Button onClick={this.setAgeSort} >Sort age </Button>
          <Button onClick={this.clearFilters}>Clear filters</Button>
          <Button onClick={this.clearAll}>Clear filters and sorters</Button>
        </div>
        <Table columns={columns} dataSource={data}  onChange={this.handleChange} />
      </div>
      </Card>
                </li>
            
            
            </Row>
            <br />
           
          </ul> <br />
          <div style={{ paddingBottom: '30px' }}>
            <Spin spinning={this.state.isLoading}>
              <Table columns={columns} dataSource={data} style={{ width: '1149.600px', margin: 'auto', background: 'white' }} />
            </Spin>
            <div style={{ width: '101.21px', height: '40px', margin: 'auto', paddingTop:'6px', paddingBottom: '6px' }}>
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

export default Cohorts;
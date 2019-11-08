import React, { Component } from 'react';
import './daterange.css';

import { FormControl, DropdownButton } from 'react-bootstrap'
import moment from "moment"
import DateTimeRangeContainer from 'react-advanced-datetimerange-picker'
import { Card,Row,Col,span,Form } from 'antd'
import { Glyphicon } from 'react-bootstrap';
class App extends Component {
    constructor(props) {
        super(props);
        let now = new Date();
        let start = moment(new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0));
        let end = moment(start).add(1, "days").subtract(1, "seconds");
        this.state = {
            start: start,
            end: end
        }

        this.applyCallback = this.applyCallback.bind(this);
    }

    applyCallback(startDate, endDate) {
        this.setState({
            start: startDate,
            end: endDate
        }
        )
    }

    render() {
        let disabled = true;
        let value = `${this.state.start.format(
            "DD/MM/YYYY "
        )} - ${this.state.end.format("DD/MM/YYYY")}`;
        let now = new Date();
        let start = moment(new Date(now.getFullYear(), now.getMonth(), now.getDate(), 0, 0, 0, 0));
        let end = moment(start).add(1, "days").subtract(1, "seconds");
        let ranges = {
            "Yesterday": [moment(start).subtract(1, "days"), moment(end).subtract(1, "days")],
            "Last 7 Days ": [moment(start).subtract(7, "days"), moment(end)],
            "Last 30 Days ": [moment(start).subtract(30, "days"), moment(end)],
            "This Month": [moment(start).subtract("months"), moment(end)],
            "Last Month": [moment(start).subtract(1, "months"), moment(end)],

        }
        let local = {
            "format": "DD/MM/YYYY ",
            "sundayFirst": false
        }
        let maxDate = moment(start).add(24, "hour")

        return (
            
            
            <Col xs={6} md={4} id="DateTimeRangeContainerLeftOpenMode">
           
                <Form>
                <DateTimeRangeContainer
                    ranges={ranges}
                    start={this.state.start}
                    end={this.state.end}
                    local={local}
                    applyCallback={this.applyCallback}
                    smartMode
                    noMobileMode
                >
                    <FormControl
                        id="formControlsTextB"
                        type="text"
                        label="Text"
                        placeholder="Enter text"
                        style={{ cursor: "pointer" }}
                   
                        value={value}
                    />
                </DateTimeRangeContainer>
            
                </Form>
            </Col>
      

        );
    }

}

export default App;

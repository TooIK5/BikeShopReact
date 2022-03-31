import React from "react";
import 'antd/dist/antd.css';
import '../../../node_modules/antd/dist/antd.css';
import { Form, Typography, Slider, Row, Col, Cascader, Checkbox ,  Radio, Button,InputNumber } from 'antd';
import Params from "./checkBoxValues";
import {connect} from 'react-redux';

const {Title, Text} = Typography;
const formItemLayout = {
labelCol: {span: 0},
wrapperCol: {span: 100},
};

class Filter extends React.Component {

    state = {
        min: 200,
        max: 5000
      };
      
        onFinish = (state, values) => {
            values.priceRange = state;
            values.category = this.props.category;
        console.log('Received values of form: ', values);
        };
    
      onChange = value => {
        if (value[0] < value[1]) {
          this.setState({ min: value[0], max: value[1] });
        }
      };
  
      onChangeMin = value => {
        if (this.state.max > value) {
          this.setState({ min: value });
        }
      };
      onChangeMax = value => {
        if (this.state.min < value) {
          this.setState({ max: value });
        }
      };

    render () {
       const { max, min } = this.state;
     
        return (<div className="filter">
    <Form
        name="validate_other"
        {...formItemLayout}
        onFinish={this.onFinish.bind(this, this.state )}
         >
        <Title level={5}>Город</Title>
        <Form.Item name="location">
            <Cascader
                options={[
                    {
                        value: 'Minsk',
                        label: 'Minsk',
                        children: [
                            {
                                value: 'Советский',
                                label: 'Советский',
                            },
                        ],
                    },
                ]}
            />
        </Form.Item>
        <Title level={5}>Цена</Title>
        <Row>
        <Col span={8}>
        <Form.Item   >      
    <InputNumber
    name="maxInput" 
    min={200}
    max={5000}
    defaultValue={max}
    value={min}
    onChange={this.onChangeMin}/>
</Form.Item>
        </Col>
        <Col span={3}>
          <span>—</span> 
         </Col>
        <Col span={8}>
        <Form.Item  >      
    <InputNumber
               defaultValue={min}
                min={200}
                max={5000}
                onChange={this.onChangeMax}
                value={max}/>
</Form.Item>
        </Col>
        </Row>
        <Form.Item >
        <Slider  name="Slider"
                 min={200}
                 max={5000}
                 onChange={this.onChange}
                 range
                 defaultValue={[min, max]}
                 value={[min, max]} />
            </Form.Item>
                    <Form.Item name="item-type" className="filter-checkboxs">
                        <Checkbox.Group style={{ width: '100%',}} >
                        <Params />
                        </Checkbox.Group> 
                        </Form.Item> 

        <Form.Item name="condition"
                    initialValue="any"
                    rules={[{required: false, message: ''}]}>
            <Radio.Group
                style={{width: "100"}}
                buttonStyle="solid">
                <Radio.Button value="new">Новое</Radio.Button>
                <Radio.Button value="used">Б/У</Radio.Button>
                <Radio.Button value="any">Любое</Radio.Button>
            </Radio.Group>
        </Form.Item>
        <Form.Item >
            <Button type="primary" htmlType="submit" style={{width: "100%", marginTop: "15px"}}>Поиск </Button>
        </Form.Item>
    </Form>
</div>)}
}

const mapStateToProps = (state) => ({
  category: state.filters.currentCategory,
});

export default connect(mapStateToProps)(Filter);
//export default Filter;
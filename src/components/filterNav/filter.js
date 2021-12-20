import React from "react";
import 'antd/dist/antd.css';
import '../../../node_modules/antd/dist/antd.css';
import { Select, Form, Typography, Cascader, Slider, Switch, Radio, Button } from 'antd';
import { AudioOutlined, ArrowUpOutlined, AimOutlined } from '@ant-design/icons';
const { Title } = Typography;
const { Option } = Select;

function onChangeCondition(e) {
    console.log('checked = ', e.target.value);
  }
  
function onChangeCity(value) {
    console.log(`selected ${value}`);
  }

  function onChangeNeighborhood(value) {
    console.log(`selected ${value}`);
  }
  const formItemLayout = {
    labelCol: { span: 0 },
    wrapperCol: { span: 100 },
  };
  const onFinish = (values) => {
    console.log('Received values of form: ', values);
  };
class Filter extends React.Component {
 
    state = {
        disabled: false,
      };
    
      handleDisabledChange = disabled => {
        this.setState({ disabled });
      };

    render () { 
        const { disabled } = this.state;
        return <div className="filter">
          <Form
      name="validate_other"
      {...formItemLayout}
      onFinish={onFinish}
    >
      <Title level={5}>Город</Title>
      <Form.Item  name="Cascader" >
        <Cascader
          options={[
            {
              value: 'Minsk',
              label: 'Minsk',
              children: [
                {
                  value: 'Район',
                  label: 'Neigborhood',
                },
              ],
            },
          ]}
        />
      </Form.Item>
      <Title level={5}>Цена</Title>
      <Form.Item name="slider" >
        <Slider
          marks={{
            0: '0',
          
            100: '100',
          }}
        />
      </Form.Item>
      <Form.Item>
      <Radio.Group 
  style={{   width:"100" }} 
  defaultValue="any" 
  buttonStyle="solid"
  onChange={onChangeCondition} 
 >
      <Radio.Button  style={{ "box-shadow": "none"   }} value="new">Новое</Radio.Button>
      <Radio.Button value="used">Б/У</Radio.Button>
      <Radio.Button value="any">Любое</Radio.Button>
    </Radio.Group>
      </Form.Item>
      <Form.Item wrapperCol={{ span: 12, offset: 6 }}>
      <Button type="primary" htmlType="submit" style={{width: "100%", marginTop: "15px"}}>Поиск</Button>
      </Form.Item>
    </Form>
        {/* 
        <Select
    showSearch
    style={{ width: "100%", marginTop: "15px" }}
    placeholder="Выбрать город"
    optionFilterProp="children"
    onChange={onChangeCity}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="Minsk">Минск</Option>
    <Option value="Grodno">Гродно</Option>
    <Option value="Gomel">Гомель</Option>
    <Option value="Vitebsk">Витебск</Option>
    <Option value="Mogilev">Могилев</Option>
    <Option value="Brest">Брест</Option>
  </Select>
  
  <Select
    showSearch
    style={{  width: "100%", marginTop: "15px"}}
    placeholder="Выбрать район"
    optionFilterProp="children"
    onChange={onChangeNeighborhood}
    filterOption={(input, option) =>
      option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
    }
  >
    <Option value="1">Советский</Option>
    <Option value="2">Ленинский</Option>
    <Option value="3">Еще какой-то</Option>
   
  </Select>
  <Radio.Group 
  style={{   marginTop: "15px" }} 
  defaultValue="any" 
  buttonStyle="solid"
  onChange={onChangeCondition} 
 >
      <Radio.Button  style={{ "box-shadow": "none"   }} value="new">Новое</Radio.Button>
      <Radio.Button value="used">Б/У</Radio.Button>
      <Radio.Button value="any">Любое</Radio.Button>
    </Radio.Group>
  <br/>
   */}

    </div> }
    } 
 

export default Filter;
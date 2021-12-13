import React from "react";
import 'antd/dist/antd.css';
import '../../../node_modules/antd/dist/antd.css';
import { Select, Typography, Slider, Switch, Radio, Button } from 'antd';
import { AudioOutlined, ArrowUpOutlined, AimOutlined } from '@ant-design/icons';
const { Text } = Typography;
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
            <span>Стоимость:</span>
<Slider range defaultValue={[20, 50]} disabled={disabled} />
        Выкл: <Switch size="small" checked={disabled} onChange={this.handleDisabledChange} />
        <br/>
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
  <Button type="primary" style={{width: "100%", marginTop: "15px"}}>Поиск</Button>

    </div> }
    } 
 

export default Filter;
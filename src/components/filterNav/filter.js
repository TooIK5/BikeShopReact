import React from "react";
import 'antd/dist/antd.css';
import { Form, Typography, Slider, Cascader, Checkbox, Radio, Button, InputNumber } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import Params from "./checkBoxValues";
import { connect } from 'react-redux';
import { setIsHidden } from "../../redux/filtersSlice";

const { Title } = Typography;

class Filter extends React.Component {

  state = {
    min: 200,
    max: 5000
  };

  componentWillUnmount() {
    if (!this.props.isHidden) {
      this.props.setHidden();
    }
  }

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

  render() {
    const { max, min } = this.state;

    return (<div className="filter">
      <Form
        name="validate_other"
        onFinish={this.onFinish.bind(this, this.state)}
      >
        <div className="filterUpperBlock"><Title level={5}>Город</Title><CloseOutlined onClick={this.props.setHidden} className="filterUpperBlock__closeIcon" /></div>
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
        <div className="filterInputprice">
          <Form.Item>
            <InputNumber
              name="maxInput"
              min={200}
              max={max}
              defaultValue={max}
              value={min}
              onChange={this.onChangeMin} />
          </Form.Item>

          <div>—</div>

          <Form.Item  >
            <InputNumber
              defaultValue={min}
              min={200}
              max={max}
              onChange={this.onChangeMax}
              value={max} />
          </Form.Item>
        </div>

        <Form.Item >
          <Slider name="Slider"
            min={200}
            max={5000}
            onChange={this.onChange}
            range
            defaultValue={[min, max]}
            value={[min, max]} />
        </Form.Item>
        <Form.Item name="item-type" className="filter-checkboxs">
          <Checkbox.Group style={{ width: '100%', }} >
            <Params />
          </Checkbox.Group>
        </Form.Item>

        <Form.Item name="condition"
          initialValue="any"
          rules={[{ required: false, message: '' }]}>
          <Radio.Group
            className="filterRadiobtns"
            buttonStyle="solid">
            <Radio.Button className="filterRadio__btn" value="new">Новое</Radio.Button>
            <Radio.Button className="filterRadio__btn" value="used">Б/У</Radio.Button>
            <Radio.Button className="filterRadio__btn" value="any">Любое</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit" onClick={this.props.setHidden} style={{ width: "100%", marginTop: "15px" }}>Поиск </Button>
        </Form.Item>
      </Form>
    </div>)
  }
}

const mapStateToProps = (state) => ({
  isHidden: state.filters.isHidden,
});

const mapDispatchToProps = (dispatch) => {
  return {
    setHidden: () => dispatch(setIsHidden()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
//export default Filter;
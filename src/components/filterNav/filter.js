import React from "react";
import { Form, Typography, Slider, Cascader, Checkbox, Radio, Button, InputNumber } from 'antd';
import { CloseOutlined } from '@ant-design/icons';
import Params from "./checkBoxValues";
import { connect } from 'react-redux';
import { compose } from "redux";
import { setIsHidden, setLasteq, setCurrent } from "../../redux/filtersSlice";
import { getAll } from "../../redux/API/API";
import { withRouter } from "react-router-dom";

const { Title } = Typography;

const Filter = React.memo(class Filter extends React.Component {

  state = {
    min: 0,
    max: 5000
  };

  filters = {}

  componentWillUnmount() {
    if (!this.props.isHidden) {
      this.props.setHidden();
    }
  }

  onFinish = (state, values) => {
    let typeid = +this.props.match.params.typeid;
    let arr = [];

    this.props.types.forEach(e => {
      if (e.value === +typeid) {
        if (e.children) {
          e.children.forEach(e => arr.push(e.value))
        } else {
          arr.push(typeid);
        }
      }
    });

    if (values.parentid && values.parentid.length !== 0) {
      values.typeid = values.parentid.map(e => +e);
    } else {
      values.typeid = arr;
    }

    values.locationid = values.locationid[values.locationid.length - 1];
    values.min = state.min;
    values.max = state.max;
    this.props.setCurrentPage(1);
    this.props.setLasteq(values);
    this.props.getAll(values);
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
    let typeid = +this.props.match.params.typeid;

    this.props.types.forEach(e => {
      if (e.value === typeid && e.children) {
        e.children.forEach(e => {
          this.filters[e.value] = e.label;
        })
      }
    })

    const filter = (inputValue, path) =>
      path.some((option) => option.label.toLowerCase().indexOf(inputValue.toLowerCase()) > -1);

    return (<div className="filter">
      <Form
        name="validate_other"
        onFinish={this.onFinish.bind(this, this.state)}>

        <div className="filterUpperBlock">
          <Title level={5}>Город</Title>
          <CloseOutlined onClick={this.props.setHidden} className="filterUpperBlock__closeIcon" />
          </div>
        <Form.Item name="locationid"
          initialValue={[1]}>
          <Cascader
            showSearch={{
              filter
            }}
            placeholder="Выберите локацию"
            options={this.props.locations}
          />
        </Form.Item>
        <Title level={5}>Цена</Title>
        <div className="filterInputprice">
          <Form.Item>
            <InputNumber
              name="maxInput"
              min={0}
              max={max}
              defaultValue={max}
              value={min}
              onChange={this.onChangeMin} />
          </Form.Item>

          <div>—</div>

          <Form.Item  >
            <InputNumber
              defaultValue={min}
              min={0}
              max={max}
              onChange={this.onChangeMax}
              value={max} />
          </Form.Item>
        </div>

        <Form.Item >
          <Slider name="Slider"
            min={0}
            max={5000}
            onChange={this.onChange}
            range
            defaultValue={[min, max]}
            value={[min, max]} />
        </Form.Item>
        <Form.Item name="parentid" className="filter-checkboxs">
          <Checkbox.Group style={{ width: '100%', }} >
            <Params props={this.filters} />
          </Checkbox.Group>
        </Form.Item>

        <Form.Item name="state"
          initialValue={1}
          rules={[{ required: false, message: '' }]}>
          <Radio.Group
            className="filterRadiobtns"
            buttonStyle="solid">
            <Radio.Button className="filterRadio__btn" value={3}>Новое</Radio.Button>
            <Radio.Button className="filterRadio__btn" value={2}>Б/У</Radio.Button>
            <Radio.Button className="filterRadio__btn" value={1}>Любое</Radio.Button>
          </Radio.Group>
        </Form.Item>
        <Form.Item >
          <Button type="primary" htmlType="submit" onClick={this.props.setHidden} style={{ width: "100%", marginTop: "15px" }}>Поиск </Button>
        </Form.Item>
      </Form>
    </div>)
  }
})

const mapStateToProps = (state) => ({
  isHidden: state.filters.isHidden,
  page: state.items.page,
  limit: state.items.limit,
  locations: state.locations.locations,
  types: state.types.types,
  lastReqValues: state.filters.lastreq
});

const mapDispatchToProps = (dispatch) => {
  return {
    setHidden: () => dispatch(setIsHidden()),
    getAll: (val) => dispatch(getAll(val)),
    setLasteq: (val) => dispatch(setLasteq(val)),
    setCurrentPage: (val) => dispatch(setCurrent(val))
  }
}

export default compose(connect(mapStateToProps, mapDispatchToProps), withRouter)(Filter);

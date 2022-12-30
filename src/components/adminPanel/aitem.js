import React from 'react';
import { Button, Carousel } from 'antd';
import { useDispatch } from 'react-redux';
import { approve } from '../../redux/API/API';

const contentStyle = {
  margin: 0,
  height: '220px',
  width: "100%",
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Pic = (props) => {

  return <div>
    <img style={contentStyle} src={"http://localhost:5000/" + props.src}>
    </img>
  </div>
}

const Aitem = (props) => {
  let dispatch = useDispatch();

  const handle = () => {
    dispatch(approve(props.props.id))
  }
  
  return <div className='admin__item'>
    <div>{"Title: " + props.props.title}</div>
    <div>{"Username: " + props.props.username}</div>
    <Carousel >
      {props.props.photo.map(e => {
        return <Pic src={e} />
      })}
      <div>
        <h3 style={contentStyle}>1</h3>
      </div>
    </Carousel>
    <div>
      {props.props.description}
    </div>
    <Button onClick={handle}>Approve</Button>
  </div>
};

export default Aitem;
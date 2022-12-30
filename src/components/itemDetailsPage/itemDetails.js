import React, { useEffect, useState } from "react";
import { Typography, Button, Image, Spin, Breadcrumb } from 'antd';
import { AimOutlined } from '@ant-design/icons';
import { useParams, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { findOption } from "../COMMON/findOption";
import { addChat, getOne } from "../../redux/API/API";
import { useHistory } from "react-router-dom";

const { Title, Text } = Typography;

let ItemDetails = () => {
  let dispatch = useDispatch();
  let history = useHistory();
  const [visible, setVisible] = useState(false);
  const { id } = useParams();
  const uid = useSelector(state => state.account.user.id);

  useEffect(() => {
    dispatch(getOne(id))
  }, [dispatch]);

  const locations = useSelector(state => state.locations.locations);
  const tid = useSelector(state => state.items.currentType);
  let location;

  const ad = useSelector(state => {
    let res = null;
    if (state.items.items) {
      for (let i = 0; i < state.items.items.length; i++) {
        if (state.items.items[i].id === +id) {
          res = state.items.items[i];
        }
      }
    }

    if (state.items.likedAds) {
      if (!res) {
        for (let i = 0; i < state.items.likedAds.length; i++) {
          if (state.items.likedAds[i].id === +id) {
            res = state.items.likedAds[i];
          }
        }
      }
    }
    return res;
  });

  const routeToDialogs = () => {
    dispatch(addChat({user1: uid, user2: ad.userid}))
    history.replace("/dialogs")
  }

  if (locations && ad) {
    location = findOption(locations, ad.locationid);
  }

  if (ad) {
    return <div className="itemDetails">
      <div className="itemDetails-breadCramb">
        <Breadcrumb >
          <Breadcrumb.Item>
            <NavLink to="/">Главная</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <NavLink to={"/items/" + tid}>Товары</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>Объявление</Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="itemDetails__block">
        <div className="itemDetails-carousel" >
          <Image
            preview={{ visible: false }}
            className="itemDetails__img"
            src={"http://localhost:5000/" + ad.photo[0]}
            onClick={() => setVisible(true)} />

          <div style={{ display: 'none' }}>
            <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
              {
                ad.photo.map((k, i) => {
                  return <Image key={i} src={"http://localhost:5000/" + ad.photo[i]} />
                })
              }
            </Image.PreviewGroup>
          </div>
          {/* <Title level={4} >Характеристики</Title>
      <div className="itemDetails-parameters">
        <div><Text >Тип: </Text></div>
        <div className='itemDetails-underline'></div>
        <div className="itemDetails-parameter"><Text >Втулка </Text></div>
      </div>
      <div className="itemDetails-parameters">
        <div><Text >Состояние: </Text></div>
        <div className='itemDetails-underline'></div>
        <div className="itemDetails-parameter"><Text >Б/У </Text></div>
      </div> */}
        </div>
        <div className="itemDetails-info">
          <Title level={3} >{ad.title}</Title>
          <Text strong >{ad.price}</Text>
          <br />
          <Text >{location}<AimOutlined style={{
          }} /></Text>
          <br />
          <Text type="secondary">{ad.createdAt.substring(0, 10) + " " + ad.createdAt.substring(12, 16)}</Text>
          <Title level={4} >Описание</Title>
          <Text  >{ad.description}</Text>
          <br />
          <br />
          <a >{ad.phone}</a>
          <br />
          <br />
          <Button type="primary" onClick={routeToDialogs}>Написать</Button>
        </div>
      </div>

    </div>
  } else {
    return <Spin className="spinner" />
  }
}

export default ItemDetails;
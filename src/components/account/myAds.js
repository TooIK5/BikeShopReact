import React, { useEffect, useState } from "react";
import { FileOutlined, FileSearchOutlined, FileExcelOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { Radio, Breadcrumb } from 'antd';
import { NavLink } from "react-router-dom";
import { Radio, Breadcrumb } from 'antd';
import AdItem from "./myAdItem";
import { getMyAds } from "../../redux/API/API";

const MyAds = () => {
  const dispatch = useDispatch();
  let [page, setpage] = useState(true)
  let ads = useSelector(state => state.account.ads);
  let id = useSelector(state => {
  return  state.account.user ? state.account.user.id : null;
  });

  useEffect(() => {
      dispatch(getMyAds(id));
  }, [id]);

  let showActive = () => {
    setpage(true)
  }

  let showModerate = () => {
    setpage(false)
  }

  let currAds = useSelector(state => state.account.ads);

  if (ads) {
    return <div className="ads">
      <div className="itemDetails-breadCramb">
        <Breadcrumb >
          <Breadcrumb.Item>
            <NavLink to="/">Главная</NavLink>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <NavLink to="/account/my_ads">Мои объявления</NavLink>
          </Breadcrumb.Item>
        </Breadcrumb>
      </div>
      <div className="myAds-adsWrapper">
        <div className="myAds-list">
          <Radio.Group defaultValue={"active"}>
            <Radio.Button className="myAds-listItem" onClick={showActive} value="active">Активные<FileOutlined /></Radio.Button>
            <Radio.Button className="myAds-listItem" onClick={showModerate} value="moderation">На модерации <FileSearchOutlined /></Radio.Button>
          </Radio.Group>
        </div>
        <div className="myAds-items">
          {currAds.map(ad => {
            if (page === true && ad.published) {
              return <AdItem key={ad.id} {...ad} />
            }
            
            if (page === false && !ad.published) {
              return <AdItem key={ad.id} {...ad} />
            }
          }
          )}
        </div>
      </div>
    </div>
  } else { return <div></div> }
}

export default MyAds;
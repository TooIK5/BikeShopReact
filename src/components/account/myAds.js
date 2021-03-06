import React from "react";
import { FileOutlined,FileSyncOutlined,FileSearchOutlined,FileExcelOutlined,EyeInvisibleOutlined } from '@ant-design/icons';    
import { useSelector, useDispatch } from "react-redux";
import { Radio } from 'antd';
import AdItem from "./myAdItem";
import {setCurrentAds} from "../../redux/accountSlice"

const MyAds = () => {
    const dispatch = useDispatch();
    const setAds = (type) => dispatch(setCurrentAds(type));

    const ads = useSelector(state => state.account.currentAds)

    
    return  <div className="ads">
            <div className="myAds-adsWrapper">
            <div className="myAds-list">
          <Radio.Group defaultValue={"active"}> 
          <Radio.Button className="myAds-listItem" onClick={setAds.bind(this, "active")} value="active">Активные<FileOutlined /></Radio.Button>
          <Radio.Button className="myAds-listItem" onClick={setAds.bind(this, "pending")} value="pending">В ожидании <FileSyncOutlined /></Radio.Button>
          <Radio.Button className="myAds-listItem" onClick={setAds.bind(this, "moderation")} value="moderation">На модерации <FileSearchOutlined /></Radio.Button>
          <Radio.Button className="myAds-listItem" onClick={setAds.bind(this, "rejected")} value="rejected">Отказ <FileExcelOutlined /></Radio.Button>
          <Radio.Button className="myAds-listItem" onClick={setAds.bind(this, "deactiveted")} value="deactiveted">Деактивированные <EyeInvisibleOutlined /></Radio.Button>
          </Radio.Group>
            </div>
            <div className="myAds-items">
              {ads.map(ad =>  <AdItem key={ad.id} {...ad} />
        )}  
            </div> 
        </div>
    </div>
}

export default MyAds;
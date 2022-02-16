import React from "react";
import {  Typography, Button, Image } from 'antd';
import {  AimOutlined } from '@ant-design/icons';
const { Title, Text } = Typography;
import {  useState } from "react";
import { Breadcrumb } from 'antd';
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
 
let ItemDetails = () => {

    const [visible, setVisible] = useState(false);
    return <div className="itemDetails">
        <div className="itemDetails-carousel" >
        <div className="itemDetails-breadCramb">
      <Breadcrumb >
      <Breadcrumb.Item>
      <NavLink to="/">Главная</NavLink>
    </Breadcrumb.Item>
    <Breadcrumb.Item>
      <NavLink to="/items">Товары</NavLink>
    </Breadcrumb.Item>
    <Breadcrumb.Item>Объявление</Breadcrumb.Item>
      </Breadcrumb>
        </div> 
        <Image
        style={{
            borderRadius: "5px",
            boxShadow: "5px 5px 5px -5px rgba(34, 60, 80, 0.6)"
        }}
        preview={{ visible: false }}
        width="40VW"
        src="https://ep1.pinkbike.org/p5pb16277644/p5pb16277644.jpg"
        onClick={() => setVisible(true)}
      />
      <div style={{ display: 'none' }}>
        <Image.PreviewGroup preview={{ visible, onVisibleChange: vis => setVisible(vis) }}>
          <Image src="https://ep1.pinkbike.org/p5pb16277644/p5pb16277644.jpg" />
          <Image src="https://gw.alipayobjects.com/zos/antfincdn/cV16ZqzMjW/photo-1473091540282-9b846e7965e3.webp" />
          <Image src="https://gw.alipayobjects.com/zos/antfincdn/x43I27A55%26/photo-1438109491414-7198515b166b.webp" />
        </Image.PreviewGroup>
      </div>
            <Title level={4} >Характеристики</Title>   
            <div className="itemDetails-parameters">
                <div><Text >Тип: </Text></div>
                <div className='itemDetails-underline'></div>
                <div className="itemDetails-parameter"><Text >Втулка </Text></div>
            </div> 
            <div className="itemDetails-parameters">
                <div><Text >Состояние: </Text></div>
                <div className='itemDetails-underline'></div>
                <div className="itemDetails-parameter"><Text >Б/У </Text></div>
            </div> 
     </div>
     <div className="itemDetails-info">
     <Title level={3} >Втулка задняя   </Title>
        <Text strong >10 р.</Text>
        <br/>
        <Text >Г. Минск, Советский район <AimOutlined style={{
      
        }} /></Text>
        <br/>
        <Text type="secondary"       >22.10.2021, 13:45</Text>
        <Title level={4} >Описание   </Title>
        <Text  > Пять столетий спустя Lorem Ipsum испытал всплеск популярности с выпуском сухого переноса листов Letraset в.
         Эти листы надписи можно потереть на любом месте и были быстро приняты художники-графики, принтеры, архитекторов и рекламодателей для их профессионального вида и простоты использования.
          Letraset включены Lorem Ipsum проходы в арсеналом шрифтов, стилей и размеров, затвердевание место Латинского-эск фразу целиком в печатной и графической индустрии.
           Те, с вниманием к деталям будет даже поймали дань классического текста в эпизоде Mad Men (S6E1 вокруг 1:18:55 для тех, кто не сделал).</Text>
        <br/>
        <br/>
        <a href="+375(29)5532989">+375(29)5532989</a>
        <br/>
        <br/>
        <Button type="primary" disabled>Написать</Button>
        
     </div>
    </div>
}

export default ItemDetails;
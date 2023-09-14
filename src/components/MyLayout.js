import React, { useState } from 'react';
import { Layout, Icon } from 'antd';
import 'antd/dist/antd.css';
import CardComponent from './CardComponent';
import Carrinho from './Carrinho';

const { Header, Sider, Content } = Layout;

function MyLayout() {
  const [collapsed, setCollapsed] = useState(false);
  const [cartItemCount, setCartItemCount] = useState(0);

  const toggle = () => {
    setCollapsed(!collapsed);
  };

  const cardData = [
    {
      title: 'R$ 459,99',
      description: 'Monitor Gamer LG 21.5 LED FULL HD',
      imageUrl: 'https://images.kabum.com.br/produtos/fotos/397845/monitor-gamer-lg-21-5-led-full-hd-75hz-5ms-hdmi-freesync-22mp410-b_1671624974_gg.jpg',
    },
    {
      title: 'R$ 459,99',
      description: 'Monitor Gamer LG 21.5 LED FULL HD',
      imageUrl: 'https://images.kabum.com.br/produtos/fotos/397845/monitor-gamer-lg-21-5-led-full-hd-75hz-5ms-hdmi-freesync-22mp410-b_1671624974_gg.jpg',
    },
    {
      title: 'R$ 459,99',
      description: 'Monitor Gamer LG 21.5 LED FULL HD',
      imageUrl: 'https://images.kabum.com.br/produtos/fotos/397845/monitor-gamer-lg-21-5-led-full-hd-75hz-5ms-hdmi-freesync-22mp410-b_1671624974_gg.jpg',
    },
    {
      title: 'CR$ 459,99',
      description: 'Monitor Gamer LG 21.5 LED FULL HD',
      imageUrl: 'https://images.kabum.com.br/produtos/fotos/397845/monitor-gamer-lg-21-5-led-full-hd-75hz-5ms-hdmi-freesync-22mp410-b_1671624974_gg.jpg',
    },
    {
      title: 'R$ 459,99',
      description: 'Monitor Gamer LG 21.5 LED FULL HD',
      imageUrl: 'https://images.kabum.com.br/produtos/fotos/397845/monitor-gamer-lg-21-5-led-full-hd-75hz-5ms-hdmi-freesync-22mp410-b_1671624974_gg.jpg',
    },
    {
      title: 'R$ 459,99',
      description: 'Monitor Gamer LG 21.5 LED FULL HD',
      imageUrl: 'https://images.kabum.com.br/produtos/fotos/397845/monitor-gamer-lg-21-5-led-full-hd-75hz-5ms-hdmi-freesync-22mp410-b_1671624974_gg.jpg',
    },
    {
      title: 'R$ 459,99',
      description: 'Monitor Gamer LG 21.5 LED FULL HD',
      imageUrl: 'https://images.kabum.com.br/produtos/fotos/397845/monitor-gamer-lg-21-5-led-full-hd-75hz-5ms-hdmi-freesync-22mp410-b_1671624974_gg.jpg',
    },
    {
      title: 'R$ 459,99',
      description: 'Monitor Gamer LG 21.5 LED FULL HD',
      imageUrl: 'https://images.kabum.com.br/produtos/fotos/397845/monitor-gamer-lg-21-5-led-full-hd-75hz-5ms-hdmi-freesync-22mp410-b_1671624974_gg.jpg',
    },
    {
      title: 'R$ 459,99',
      description: 'Monitor Gamer LG 21.5 LED FULL HD',
      imageUrl: 'https://images.kabum.com.br/produtos/fotos/397845/monitor-gamer-lg-21-5-led-full-hd-75hz-5ms-hdmi-freesync-22mp410-b_1671624974_gg.jpg',
    },
    {
      title: 'R$ 459,99',
      description: 'Monitor Gamer LG 21.5 LED FULL HD',
      imageUrl: 'https://images.kabum.com.br/produtos/fotos/397845/monitor-gamer-lg-21-5-led-full-hd-75hz-5ms-hdmi-freesync-22mp410-b_1671624974_gg.jpg',
    },
    
    {
      title: 'R$ 459,991',
      description: 'Monitor Gamer LG 21.5 LED FULL HD',
      imageUrl: 'https://images.kabum.com.br/produtos/fotos/397845/monitor-gamer-lg-21-5-led-full-hd-75hz-5ms-hdmi-freesync-22mp410-b_1671624974_gg.jpg',
    },
    
    
    {
      title: 'R$ 459,992',
      description: 'Monitor Gamer LG 21.5 LED FULL HD',
      imageUrl: 'https://images.kabum.com.br/produtos/fotos/397845/monitor-gamer-lg-21-5-led-full-hd-75hz-5ms-hdmi-freesync-22mp410-b_1671624974_gg.jpg',
    },
    
    {
      title: 'CR$ 459,99',
      description: 'Monitor Gamer LG 21.5 LED FULL HD',
      imageUrl: 'https://images.kabum.com.br/produtos/fotos/397845/monitor-gamer-lg-21-5-led-full-hd-75hz-5ms-hdmi-freesync-22mp410-b_1671624974_gg.jpg',
    },
    {
      title: 'Card 14',
      description: 'Monitor Gamer LG 21.5 LED FULL HD',
      imageUrl: 'https://images.kabum.com.br/produtos/fotos/397845/monitor-gamer-lg-21-5-led-full-hd-75hz-5ms-hdmi-freesync-22mp410-b_1671624974_gg.jpg',
    },
    {
      title: 'Card 15',
      description: 'Monitor Gamer LG 21.5 LED FULL HD',
      imageUrl: 'https://images.kabum.com.br/produtos/fotos/397845/monitor-gamer-lg-21-5-led-full-hd-75hz-5ms-hdmi-freesync-22mp410-b_1671624974_gg.jpg',
    },
    {
      title: 'Card 16',
      description: 'Monitor Gamer LG 21.5 LED FULL HD',
      imageUrl: 'https://images.kabum.com.br/produtos/fotos/397845/monitor-gamer-lg-21-5-led-full-hd-75hz-5ms-hdmi-freesync-22mp410-b_1671624974_gg.jpg',
    },
    {
      title: 'Card 17',
      description: 'Monitor Gamer LG 21.5 LED FULL HD',
      imageUrl: 'https://images.kabum.com.br/produtos/fotos/397845/monitor-gamer-lg-21-5-led-full-hd-75hz-5ms-hdmi-freesync-22mp410-b_1671624974_gg.jpg',
    },
    {
      title: 'Card 18',
      description: 'Monitor Gamer LG 21.5 LED FULL HD',
      imageUrl: 'https://images.kabum.com.br/produtos/fotos/397845/monitor-gamer-lg-21-5-led-full-hd-75hz-5ms-hdmi-freesync-22mp410-b_1671624974_gg.jpg',
    },
    {
      title: 'Card 19',
      description: 'Monitor Gamer LG 21.5 LED FULL HD',
      imageUrl: 'https://images.kabum.com.br/produtos/fotos/397845/monitor-gamer-lg-21-5-led-full-hd-75hz-5ms-hdmi-freesync-22mp410-b_1671624974_gg.jpg',
    },
    {
      title: 'Card 20',
      description: 'Monitor Gamer LG 21.5 LED FULL HD',
      imageUrl: 'https://images.kabum.com.br/produtos/fotos/397845/monitor-gamer-lg-21-5-led-full-hd-75hz-5ms-hdmi-freesync-22mp410-b_1671624974_gg.jpg',
    },
    {
      title: 'Card 21',
      description: 'Monitor Gamer LG 21.5 LED FULL HD',
      imageUrl: 'https://images.kabum.com.br/produtos/fotos/397845/monitor-gamer-lg-21-5-led-full-hd-75hz-5ms-hdmi-freesync-22mp410-b_1671624974_gg.jpg',
    },
    {
      title: 'Card 22',
      description: 'Monitor Gamer LG 21.5 LED FULL HD',
      imageUrl: 'https://images.kabum.com.br/produtos/fotos/397845/monitor-gamer-lg-21-5-led-full-hd-75hz-5ms-hdmi-freesync-22mp410-b_1671624974_gg.jpg',
    },
    
    {
      title: 'Card 23',
      description: 'Monitor Gamer LG 21.5 LED FULL HD',
      imageUrl: 'https://images.kabum.com.br/produtos/fotos/397845/monitor-gamer-lg-21-5-led-full-hd-75hz-5ms-hdmi-freesync-22mp410-b_1671624974_gg.jpg',
    },
    
    
    {
      title: 'Card 24',
      description: 'Monitor Gamer LG 21.5 LED FULL HD',
      imageUrl: 'https://images.kabum.com.br/produtos/fotos/397845/monitor-gamer-lg-21-5-led-full-hd-75hz-5ms-hdmi-freesync-22mp410-b_1671624974_gg.jpg',
    },


    // ... Seus dados de cartões aqui
  ];

  const imageSizeStyle = {
    width: '227px',
    height: '150px',
  };

  const addToCart = () => {
    setCartItemCount(cartItemCount + 1);
  };

  return (
    <Layout style={{ minHeight: '100vh' }}>
      <Sider trigger={null} collapsible collapsed={collapsed}></Sider>
      <Layout>
        <Header style={{ background: '#000000', padding: 0 }}>
          <h1 style={{ color: '#fff', textAlign: 'center', padding: '16px' }}>
            Helena Store
          </h1>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            background: '',
            minHeight: 280,
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
          }}
        >
          {cardData.map((card, index) => (
            <div key={index} style={{ margin: '8px', textAlign: 'center' }}>
              <CardComponent
                title={card.title}
                description={card.description}
                imageUrl={card.imageUrl}
                onAddToCart={addToCart}
              />
            </div>
          ))}
        </Content>
      </Layout>
      <Carrinho itemCount={cartItemCount} />
    </Layout>
  );
}

export default MyLayout;


import React, { useState } from 'react';
import { Card, Icon } from 'antd';

const { Meta } = Card;

function CardComponent({ title, description, imageUrl, onAddToCart }) {
  const [showInfo, setShowInfo] = useState(false);

  const toggleInfo = () => {
    setShowInfo(!showInfo);
  };

  return (
    <Card
      hoverable
      style={{ width: 229 }}
      cover={<img alt="Monitores" src={imageUrl} />}
    >
      <div style={{ position: 'absolute', top: '6px', right: '6px' }}>
        <Icon
          type="plus"
          style={{ fontSize: '13px', color: 'black', cursor: 'pointer' }}
          onClick= {onAddToCart}

        />
        
      </div>
      {showInfo && (
        <div>
          <Meta title={title} description={description} />
        </div>
      )}
      <button
        onClick={toggleInfo}
        style={{
          width: '100%',
          border: 'none',
          color: 'white',
          backgroundColor: '#3E5440',
        }}
      >
        {showInfo ? 'Ocultar informações' : 'Mostrar informações'}
      </button>
    </Card>
  );
}

export default CardComponent;


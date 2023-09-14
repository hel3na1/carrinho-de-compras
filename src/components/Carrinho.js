import React from 'react';
import { Icon } from 'antd';

const Carrinho = ({ itemCount }) => {
  const carrinhoStyle = {
    position: 'absolute',
    top: '20px',
    left: '20px',
    padding: '10px',
    fontSize: '24px',
    color: '#ADFF2F',
    cursor: 'pointer',
  };

  return (
    <div style={carrinhoStyle}>
      <Icon type="shopping-cart" />
      {itemCount > 0 && (
        <div style={{ color: 'red', fontSize: '16px', fontWeight: 'bold' }}>
          {itemCount}
        </div>
      )}
    </div>
  );
};

export default Carrinho;

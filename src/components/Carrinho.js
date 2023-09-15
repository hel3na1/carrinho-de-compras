import React, { useState } from 'react';
import { Icon } from 'antd';
import DetalhesCompra from './DetalhesCompra';

const Carrinho = ({ itemCount }) => {
  const [isDetalhesCompraVisible, setDetalhesCompraVisible] = useState(false);

  const toggleDetalhesCompra = () => {
    setDetalhesCompraVisible(!isDetalhesCompraVisible);
  };

  const minimizeDetalhesCompra = () => {
    setDetalhesCompraVisible(false);
  };

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
    <div>
      {/* Ícone do carrinho */}
      <div style={carrinhoStyle} onClick={toggleDetalhesCompra}>
        <Icon type="shopping-cart" />
        {itemCount > 0 && (
          <div style={{ color: 'red', fontSize: '16px', fontWeight: 'bold' }}>
            {itemCount}
          </div>
        )}
      </div>
      
      {/* Componente DetalhesCompra */}
      {isDetalhesCompraVisible && (
        <DetalhesCompra onClose={minimizeDetalhesCompra} />
      )}
    </div>
  );
};

export default Carrinho;

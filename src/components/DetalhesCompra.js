import React from 'react';
import { PageHeader, Button, Statistic, Descriptions } from 'antd';

const renderContent = (column = 2) => (
  <Descriptions size="small" column={column}>
    <Descriptions.Item label="Produtos"></Descriptions.Item>
    <Descriptions.Item label="Quantidade"></Descriptions.Item>
  </Descriptions>
);

const extraContent = (
  <div
    style={{
      display: 'flex',
      flexDirection: 'column', // Alterado para direção vertical
      alignItems: 'flex-start', // Alinhado à esquerda
    }}
  >
    <Statistic
      title="Status"
      value="Pendente"
      style={{
        marginBottom: 16, // Espaçamento inferior
      }}
    />
    <Statistic title="Price" prefix="$" value={568.08} />
    <Button key="1" type="primary">
            Finalizar
          </Button>
  </div>
);

const Content = ({ children, extra }) => {
  return (
    <div className="content">
      <div className="main">{children}</div>
      <div className="extra">{extra}</div>
    </div>
  );
};

const DetalhesCompra = ({ onClose }) => {
  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        height: '100vh', // Tamanho de tela inteira vertical
        width: '260px', // Largura do componente
        backgroundColor: '#fff',
        padding: '16px',
        overflowY: 'scroll', // Adicionado rolagem vertical
        boxShadow: '2px 0px 5px rgba(0, 0, 0, 0.2)', // Sombra
      }}
    >
      <PageHeader
        style={{
          border: '1px solid rgb(235, 237, 240)',
        }}
        onBack={onClose}
        title="Suas compras"
       
      >
        {renderContent()}
        {extraContent}
      </PageHeader>
    </div>
  );
};

export default DetalhesCompra;
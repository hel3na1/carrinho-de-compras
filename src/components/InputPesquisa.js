import React from 'react';
import { Input } from 'antd';

const { Search } = Input;

function InputPesquisa() {
  const handleSearch = (value) => {
    console.log(value);
  };

  const searchStyle = {
    position: 'absolute',
    top: '29px',
    left: '26%',
    transform: 'translateX(-48%)',
  };

  return (
    <div style={searchStyle}>
      <Search
        placeholder="Digite o texto da pesquisa"
        onSearch={handleSearch}
        enterButton
      />
    </div>
  );
}

export default InputPesquisa;

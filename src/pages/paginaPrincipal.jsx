import React from 'react';
import listaDeDeseos from '../data';

function PaginaPrincipal() {
  return (
    <div>
      <h1>Mi lista de deseos</h1>
      <ul>
        {listaDeDeseos.map((item, index) => (
          <li key={index}>{item.nombre}</li>
        ))}
      </ul>
    </div>
  );
}

export default PaginaPrincipal;
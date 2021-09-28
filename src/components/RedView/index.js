import React from "react";
import './RedView.css';

const RedView = ({ essay }) => {
  return (
    <>
      <table className="content-table">
        <thead>
          <tr>
            <th>Correção ID</th>
            <th>Anotações</th>
            <th>Comentários</th>
            <th>URL</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{essay.correcao_id}</td>

            <td>{essay.anotacoes}</td>

            <td>{essay.comentarios}</td>

            <td><button><a href={essay.url} target="_blank">Abrir Redação</a></button></td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default RedView;

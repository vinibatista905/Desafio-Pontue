import React from "react";
import "./RedCard.css";
import axios from "axios";
import { history } from "../../history";

const accessToken = localStorage.access_token;
const apiUrl = "https://desafio.pontue.com.br";

const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

const RedCard = ({ project }) => {
  const handleSubmit = () => {
    localStorage.setItem("redacao_id", project.id);

    let redID = localStorage.redacao_id;

    authAxios
      .get(`/redacao/${redID}`)
      .then((resp) => {
        console.log(resp.data);
        history.push("/redacao");
      })

      .catch((error) => {
        console.log("Error");
      });
  };

  return (
    <>
      <table className="content-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Número</th>
            <th>Criado em</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>{project.id}</td>

            <td>{project.numero}</td>

            <td>{project.created_at}</td>

            <td>
              <button
                className="Login-Btn"
                type="button"
                onClick={handleSubmit}
              >
                Visualizar
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
};

export default RedCard;

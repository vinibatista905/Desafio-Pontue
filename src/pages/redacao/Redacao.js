import React, { useState, useEffect } from "react";
import RedView from "../../components/RedView";
import axios from "axios";
import "./Redacao.css";
import { history } from "../../history";

const accessToken = localStorage.access_token;
const apiUrl = "https://desafio.pontue.com.br";

const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

const Redacao = () => {
  const handleSubmit = () => {
    history.push("/");
  };

  const [essays, setEssays] = useState([]);
  const [isLoading, updateIsLoading] = useState(true);
  const [error, updateError] = useState("");

  useEffect(() => {
    authAxios
      .get(`/redacao/${localStorage.redacao_id}`)
      .then((resp) => {
        console.log(resp.data);
        setEssays(resp.data);
        updateIsLoading(false);
      })

      .catch((error) => {
        updateError(error.message);
        updateIsLoading(false);
        console.log("Error");
      });
  }, []);

  if (isLoading) {
    return <h1>Buscando ...</h1>;
  }

  if (error) {
    return <h1>Deu erro: {error}</h1>;
  }

  return (
    <>
      <div className="Red">
        <h1>Redação</h1>
        <div className="Red-Data">
          {essays.data.urls.map((essay) => (
            <RedView essay={essay} />
          ))}
        </div>
      </div>
      <button className="voltar-btn" type="button" onClick={handleSubmit}>
        Voltar
      </button>
    </>
  );
};

export default Redacao;

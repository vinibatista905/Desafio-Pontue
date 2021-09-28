import React, { useState, useEffect } from "react";
import "./Home.css";
import axios from "axios";
import RedCards from "../../components/RedCard";
import { history } from "../../history";

const accessToken = localStorage.access_token;
const apiUrl = "https://desafio.pontue.com.br";

const authAxios = axios.create({
  baseURL: apiUrl,
  headers: {
    Authorization: `Bearer ${accessToken}`,
  },
});

const Home = () => {

  const handleSubmit = () => {
    localStorage.clear();
    history.push("/login")
  }

  const [projects, setProjects] = useState([]);
  const [isLoading, updateIsLoading] = useState(true);
  const [error, updateError] = useState("");

  useEffect(() => {
    authAxios
      .get(`/index/aluno/${localStorage.aluno_id}`)
      .then((resp) => {
        console.log(resp.data);
        setProjects(resp.data);
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
      <div className="Home">
        <h1>Home</h1>
        <h3>Veja abaixo a sua lista de redações:</h3>
        <button className='Logout-Btn' type='button' onClick={handleSubmit}>Sair</button>
      </div>
      <div className='RedCard'>
        {projects.data.map((project) => (
          <RedCards project={project} />
        ))}
      </div>
    </>
  );
};

export default Home;

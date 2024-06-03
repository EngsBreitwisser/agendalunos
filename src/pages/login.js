import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../widgets/img/iconproject.png';

const LoginPage = () => {
  return (
    <div id="container" >
      <header id="cabecalho">
        <div id="logo">
          <img src={icon} width="58px" alt="logo" />
        </div>
        <div id="logo">
          <h3>Agendalunos</h3>
        </div>
      </header>  

      <div className="retangulo3" >
        <div className="page">
          <form method="POST" className="formLogin">
            <h1>Login</h1>
            <p>Digite os seus dados de acesso no campo abaixo.</p>
            <label htmlFor="email">E-mail</label>
            <input type="email" placeholder="Digite seu e-mail" autoFocus />
            <label htmlFor="password">Senha</label>
            <input type="password" placeholder="Digite sua senha" />
            <Link to="/cadastro" style={{ textAlign: 'center' }}>Cadastrar uma Conta</Link>
            <br/>
              <Link to="/" style={{ textAlign: 'center' }}>Acessar</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;

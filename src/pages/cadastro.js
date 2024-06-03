import React from 'react';
import { Link } from 'react-router-dom';
import icon from '../widgets/img/iconproject.png';

const CadastroPage = () => {
  return (
    <div id="container">
      <header id="cabecalho">
        <div id="logo">
          <img src={icon} width="58px" alt="logo" />
        </div>
        <div id="logo">
          <h3>Agendalunos</h3>
        </div>
      </header>

      <div className="retangulo3">
        <div className="page">
          <form method="POST" className="formLogin">
            <h1>Cadastre-se</h1>
            <p>Digite os seus dados nos campos abaixo para efetuar cadastro.</p>
            <label htmlFor="email">E-mail</label>
            <input type="email" placeholder="Digite seu e-mail" autoFocus />
            <label htmlFor="password">Senha</label>
            <input type="password" placeholder="Digite sua senha" />
            <label htmlFor="confirmPassword">Confirme sua senha</label>
            <input type="password" placeholder="Confirme sua senha" />
            <label htmlFor="username">Nome de usuário</label>
            <input type="text" placeholder="Digite um nome de usuário" />
            <Link to="/login" style={{ textAlign: 'center' }}>Fazer login</Link>
            <br/>
              <Link to="/" style={{ textAlign: 'center' }}>Cadastrar</Link>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CadastroPage;

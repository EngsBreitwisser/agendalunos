import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import icon from './img/iconproject.png';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [lembretesCount, setLembretesCount] = useState(0);
  const [formData, setFormData] = useState({
    dia: '',
    descricao: '',
    materia: ''
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setLembretesCount(lembretesCount + 1);
    setOpen(false);
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  return (
    <nav className="navbar navbar-light navbar-expand-md navigation-clean-search" style={{ height: '70px', backgroundColor: '#B08042' }}>
      <div className="container-fluid">
        <img src={icon} width="58" height="52" alt="Icon" />
        <button data-toggle="collapse" className="navbar-toggler" data-target="#navcol-1">
          <span className="sr-only">Toggle navigation</span>
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navcol-1">
          <ul className="nav navbar-nav">
            <li className="nav-item" role="presentation">
              <a className="nav-link" href="#"><h5>Agendalunos</h5></a>
            </li>
          </ul>
          <form className="form-inline mr-auto" target="_self"></form>
          <h6 style={{ color: 'white' }}>{lembretesCount} lembretes adicionados</h6>
          <button id="newLembrete" className="newlembrete" onClick={handleClickOpen}>Adicionar Lembrete</button>
          <NavLink to="/login" style={{ textAlign: 'center', color: 'white'}}>Sair</NavLink>
        </div>
      </div>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Adicionar Lembrete"}</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              margin="dense"
              id="dia"
              label="Data"
              type="text"
              fullWidth
              name="dia"
              value={formData.dia}
              onChange={handleChange}
              required
            />
            <TextField
              margin="dense"
              id="descricao"
              label="Descrição"
              type="text"
              fullWidth
              name="descricao"
              value={formData.descricao}
              onChange={handleChange}
              required
            />
            <TextField
              margin="dense"
              id="materia"
              label="Matéria"
              select
              fullWidth
              name="materia"
              value={formData.materia}
              onChange={handleChange}
              required
            >
              <MenuItem value="Programação">Programação</MenuItem>
              <MenuItem value="Matemática">Matemática</MenuItem>
              <MenuItem value="Biologia">Biologia</MenuItem>
              <MenuItem value="Física">Física</MenuItem>
              <MenuItem value="Banco de dados">Banco de dados</MenuItem>
              <MenuItem value="Geografia">Geografia</MenuItem>
            </TextField>
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSave} color="primary">
            Adicionar
          </Button>
        </DialogActions>
      </Dialog>
    </nav>
  );
};

export default Navbar;

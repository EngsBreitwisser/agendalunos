import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import euJpg from './img/eu.jpg';
import moresPng from './img/mores.png';

const Sidebar = () => {
  const [open, setOpen] = useState(false);
  const [materiasCount, setMateriasCount] = useState(0);
  const [nomeMateria, setNomeMateria] = useState('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setMateriasCount(materiasCount + 1);
    setOpen(false);
  };

  const handleChange = (event) => {
    setNomeMateria(event.target.value);
  };

  return (
    <nav id="sidebar">
      <div className="custom-menu">
        <button type="button" id="sidebarCollapse" className="btn btn-primary" style={{ backgroundColor: '#848484' }}>
        </button>
      </div>
      <ul className="list-unstyled components mb-5">
        <div className="img bg-wrap text-center py-4">
          <div className="user-logo">
          <div className="img" style={{ backgroundImage: `url(${euJpg})` }}></div>

            <h3>Olá, Bruno!</h3>
          </div>
        <p>{materiasCount} matéria(s) adicionadas</p>
        </div>
        <button className="newmateria" onClick={handleClickOpen}>
          <img src={moresPng} width="24" alt="more" className="button-create" />Adicionar matéria
        </button>
        <li className="active"><a><span className="fa fa-home mr-3"></span> Programação</a></li>
        <li className="active"><a><span className="fa fa-gift mr-3"></span> Matemática</a></li>
        <li className="active"><a><span className="fa fa-trophy mr-3"></span> Biologia</a></li>
        <li className="active"><a><span className="fa fa-cog mr-3"></span> Física</a></li>
        <li className="active"><a><span className="fa fa-support mr-3"></span> Banco de dados</a></li>
        <li className="active"><a><span className="fa fa-sign-out mr-3"></span> Geografia</a></li>
      </ul>

      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>{"Adicionar Matéria"}</DialogTitle>
        <DialogContent>
          <form>
            <TextField
              margin="dense"
              id="nomeMateria"
              label="Nome da matéria"
              type="text"
              fullWidth
              value={nomeMateria}
              onChange={handleChange}
              required
            />
          </form>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose} color="primary">
            Cancelar
          </Button>
          <Button onClick={handleSave} color="primary">
            Salvar
          </Button>
        </DialogActions>
      </Dialog>
    </nav>
  );
};

export default Sidebar;

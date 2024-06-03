import React, { useRef } from 'react';

const DialogMateria = () => {
  const dialogRef = useRef();
  const closeDialog = () => dialogRef.current.close();

  return (
    <dialog ref={dialogRef} id="dialogMateria">
      <form method="dialog">
        <div style={{ marginBottom: '10px' }}>
          <label htmlFor="nomeMateria" style={{ display: 'block', marginBottom: '5px' }}>Nome da matéria:</label>
          <input type="text" id="nomeMateria" name="nomeMateria" required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} />
        </div>
        <menu style={{ borderTop: '1px solid #ccc', paddingTop: '10px', marginTop: '10px' }}>
          <button type="button" onClick={closeDialog} style={{ marginRight: '5px' }}>Cancelar</button>
          <button type="submit">Salvar</button>
        </menu>
      </form>
    </dialog>
  );
};

export default DialogMateria;

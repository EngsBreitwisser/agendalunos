import React, { useRef } from 'react';

const DialogLembrete = () => {
  const dialogRef = useRef();
  const closeDialog = () => dialogRef.current.close();

  return (
    <dialog ref={dialogRef} id="dialogLembrete">
      <form method="dialog">
        <section>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Data:</label>
            <input type="text" name="dia" required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ display: 'block', marginBottom: '5px' }}>Descrição:</label>
            <input type="text" name="horario" required style={{ width: '100%', padding: '10px', border: '1px solid #ccc', borderRadius: '4px', boxSizing: 'border-box' }} />
          </div>
          <div style={{ marginBottom: '10px' }}>
            <label style={{ marginBottom: '5px' }}>Matéria:</label>
            <select style={{ width: '100%', height: '48px' }}>
              <option></option>
              <option>Programação</option>
              <option>Matemática</option>
              <option>Biologia</option>
              <option>Física</option>
              <option>Banco de dados</option>
              <option>Geografia</option>
            </select>
          </div>
        </section>
        <menu>
          <button type="button" onClick={closeDialog}>Cancelar</button>
          <button type="submit">Adicionar</button>
        </menu>
      </form>
    </dialog>
  );
};

export default DialogLembrete;

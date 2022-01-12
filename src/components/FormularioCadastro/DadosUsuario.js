import { Button, TextField } from "@material-ui/core";
import React from "react";

function DadosUsuario(props) {
  return (
    <>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          props.aoEnviar();
        }}
      >
        <TextField
          id="email"
          type="email"
          label="email"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <TextField
          id="senha"
          type="senha"
          label="senha"
          variant="outlined"
          margin="normal"
          fullWidth
        />

        <Button type="submit" variant="contained" color="primary">
          cadastrar
        </Button>
      </form>
    </>
  );
}

export default DadosUsuario;

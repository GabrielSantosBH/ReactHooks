import { TextField, Button } from "@material-ui/core";
import React from "react";

function DadosDeEntrega(props) {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.aoEnviaraoEnviar();
      }}
    >
      <TextField
        id="cpe"
        type="number"
        label="cpe"
        variant="outlined"
        margin="normal"
      />
      <TextField
        id="endereço"
        type="text"
        label="endereço"
        variant="outlined"
        margin="normal"
        fullWidth
      />

      <TextField
        id="numero"
        type="number"
        label="Numero"
        variant="outlined"
        margin="normal"
      />

      <TextField
        id="estado"
        type="text"
        label="estado"
        variant="outlined"
        margin="normal"
      />

      <TextField
        id="cidade"
        type="text"
        label="cidade"
        variant="outlined"
        margin="normal"
      />

      <Button type="submit" variant="contained" color="primary" fullWidth>
        {" "}
        cadastrar{" "}
      </Button>
    </form>
  );
}

export default DadosDeEntrega;

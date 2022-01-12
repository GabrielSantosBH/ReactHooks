import React, { useState } from "react";
import DadosDeEntrega from "./DadosDeEntrega";
import DadosPessoais from "./DadosPessoais";
import DadosUsuario from "./DadosUsuario";

function FormularioCadastro({ aoEnviar, validarCPF }) {
  const [etapaAtual, setEtapaAtual] = useState(0);

  function formularioAtual(etapa) {
    switch (etapa) {
      case 0:
        return <DadosPessoais aoEnviar={proximo} validarCPF={validarCPF} />;
      case 1:
        return <DadosUsuario  aoEnviar={proximo} />;

      case 2:
        return <DadosDeEntrega aoEnviar={aoEnviar} />;
    }
  }
  function proximo (){
    setEtapaAtual(etapaAtual+1)
  }

  return <>{formularioAtual(etapaAtual)}</>;

  //<DadosUsuario/>
  //<DadosPessoais aoEnviar={aoEnviar} validarCPF={validarCPF} />
  // <DadosDeEntrega/>
}

export default FormularioCadastro;

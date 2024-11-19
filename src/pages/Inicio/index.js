import React, { useEffect, useState } from "react";
import Cabecalho from "../../components/Cabecalho";
import Contanier from "../../components/Contanier";
import Rodape from "../../components/Rodape";
import { useDiscosContext } from "../../contextos/Discos";

function Inicio() {
    const { discosFiltrados, setDiscoFiltrado} = useDiscosContext()

    return (
        <>
            <Cabecalho />
            <Contanier discos={discosFiltrados} setDiscoFiltrado={setDiscoFiltrado} />
            <Rodape />
        </>
    );
}

export default Inicio;
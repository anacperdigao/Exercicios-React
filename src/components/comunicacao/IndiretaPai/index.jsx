import React, { useState } from 'react'
import IndiretaFilho from '../IndiretaFilho'

const IndiretaPai = () => {

    // ISSO NAO FUNCIONA, ELE ATE MOSTRA NO CONSOLE, MAS EU NAO CONSIGO RENDERIZAR DESSA FORMA,
    // E POR ISSO TEM QUE USAR O USESTATE
    // let textoInicial = 'Texto Inicial';
    // let numeroInicial = 0;
    // let booleanInicial = true ? 'True' : 'False';

    const [texto, setTexto] = useState('Texto Inicial')
    const [numero, setNumero] = useState(0)
    const [boolean, setBoolean] = useState(true)

    const fornecerInformacoes = (texto, numero, boolean) => {
        setTexto(texto);
        setNumero(numero);
        setBoolean(boolean);
    }
    
  return (
    <div>
        <p>Informações no Componente Pai recebidos do Componente Filho:</p>
        <p><strong>{texto}</strong></p>
        <p><strong>{numero}</strong></p>
        <p><strong>{boolean ? 'True' : 'False'}</strong></p>
        <IndiretaFilho quandoClicar={fornecerInformacoes} />
    </div>
  )
}

export default IndiretaPai
import React, { useState } from 'react'
import './styles.css'

// Algoritmo no final da página

const Megasena = () => {
  
    const [minimo, setMinimo] = useState(0);
    const [maximo, setMaximo] = useState(0);
    const [quantidade, setQuantidade] = useState(0);
    const [numeros, setNumeros] = useState([])


    const handleMinimo = (event) => {
        setMinimo(event.target.value)
    }

    const handleMaximo = (event) => {
        setMaximo(event.target.value)
    }

    const handleQuantidade = (event) => {
        setQuantidade(event.target.value)
    }


    const gerarNumeroNaoRepetido = (min, max, array) => {
        const numeroAleatorio = parseInt(Math.random() * (max + 1 - min) + min)

        return array.includes(numeroAleatorio) ? gerarNumeroNaoRepetido(min, max, array) : numeroAleatorio
    }


    const gerarNumeros = (qtde) => {
        const arrayDeNumeros = 
            Array(qtde)
            .fill(0)
            .reduce(arrayNovo => {
                const novoNumero = gerarNumeroNaoRepetido(+minimo, +maximo, arrayNovo)
                return [...arrayNovo, novoNumero]
            },[])
            .sort((n1, n2) => n1 - n2)

        return arrayDeNumeros
    }


    const handleGerarNumeros = () => {
        setNumeros(gerarNumeros(+quantidade))
    }


    return (
        <div className='Megasena'>
            <h2>Sorteio</h2>
            <div className='Minimo'>
                <label>Mínimo: </label>
                <input value={minimo} onChange={handleMinimo} />
            </div>

            <div className='Maximo'>
                <label>Máximo: </label>
                <input value={maximo} onChange={handleMaximo} />
            </div>
            
            <div className='Quantidade'>
                <label>Quantidade: </label>
                <input value={quantidade} onChange={handleQuantidade} />
            </div>

            <button onClick={handleGerarNumeros}>Gerar números</button>

            <div className='Numeros'>
                {numeros.map(numero => <span key={numero}>{numero}</span>)}
            </div>
        </div>
  )
}

export default Megasena

/*
 1° passo: Criação de todo o componente visual da página
 2° passo: De cara eu vi que precisaria de 3 estados para pegar os 3 inputs - minimo, maximo e quantidade.
 3° passo: Armazenar e fechar o ciclo dos inputs. Lembrar de aribuir o value={state} e a propriedade onChange
 que vai executar a função handleChange.
 4° passo: Com o valor minimo e maximo eu vou criar a função que vai me gerar um valor aleatorio nao repetido.
 5° passo: Criar um array com a quantidade fornecida pelo usuário de números aleatórios.
 6° passo: Criar um estado para que eu possa então renderizar o array na página. 
 */
import React from 'react'
import listaProdutos from '../../data/produtos.js'
import '../TabelaProdutos/styles.css'

const TabelaProdutos = () => {

  return (
    <div className='TabelaProdutos'>
        <table>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Produto</th>
                    <th>Preço</th>
                </tr>
            </thead>

            {listaProdutos.map((produto, index) => 
            <tbody key={produto.id}>
                <tr className={index % 2 === 0 ? 'Par' : 'Impar'}>
                    <td>{produto.id}</td>
                    <td>{produto.produto}</td>
                    <td>R$ {produto.preco}</td>
                </tr>
            </tbody>
            )}
        </table>
    </div>
  )
}

export default TabelaProdutos
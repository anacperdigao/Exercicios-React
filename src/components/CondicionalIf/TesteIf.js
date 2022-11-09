// Se existir um teste, eu retorno tudo que estiver dentro do componente TesteIf
// Senão, eu não retorno nada

const TesteIf = ({teste, children}) => {
    
    if(teste){
        return children
    } else {
        return false
    }
}

export default TesteIf
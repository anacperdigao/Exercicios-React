1 - Quando temos que passar muitas props por um componente intermediário, a gente pode só passar como {...props} e aí desestrutura no componente filho.

2 - Conceito de one way data binding se trata da comunicação que os componentes tem dentro do React.
A comunicação é sempre de pai para filho e os dados são passados via props. 
Existe como passar de filho para pai, mas aí tem que ser por controle de estado e passar por função.
Vamos ao fluxo de passar informações de filho para o pai:

    - No componente Pai eu crio uma função que vai servir para me fornecer as informações e eu vou passar essa função para o componente Filho como props. Essa função precisa receber como parâmetro as informações que eu quero do componente filho.
    Ex.: <IndiretaFilho quandoClicar={fornecerInformacoes} />

    - O componente Filho vai receber essa função como props e vai executar ela com algum evento, como por exemplo no click de um botao, e nessa execução eu passo os dados que eu quero como parâmetro.
    Ex.: onClick={() => quandoClicar('Filho Indireto', 25, false)}

    - Volto para o componente Pai, e agora dentro da funçao inicial que fornece as informações, eu posso armazenar então as informações passadas. Mas se eu der um console.log eu ja consigo ver as informações, só que não consigo mostrar elas na tela. Para isso eu preciso criar estados para as informações que eu quero mostrar utilizando o useState, e então alterar elas no setState.
    Ex.:    const fornecerInformacoes = (texto, numero, boolean) => {
                setTexto(texto);
                setNumero(numero);
                setBoolean(boolean);
            }

const infosPessoa = {
    nome: "astrodev",
    profissao: "Dev das estrelas",
    username: "astrodev_labenu",
    senha: "melhorDeTodos"
}

// cria a funcao infosPessoaMiuscula; que recebe um objeto
const infosPessoaMaiuscula=(objeto)=>{
// criamos uma variavel para receber as alteraçoes des novo objeto
    const newInfosPessoas={}
//cada chave[i] do objeto
    for(let i in objeto){
    //cada chave em newInfosPessoas recebe objeto[chave]. tranformado em maiuscula
        newInfosPessoas[i] = objeto[i].toUpperCase()
    }
    return newInfosPessoas
}
console.log(infosPessoaMaiuscula(infosPessoa))


const texto = (objeto)=>{
    let texto = ""
    // i é a chave no objeto
    for(let i in objeto){
        texto += (`O valor da propriedade ${i} é ${objeto[i]}.\n`)
    }
    return texto
}
console.log(texto(infosPessoa))

const callback = (objeto,funcao)=>{
    console.log('Esta dentro da Callback')
    // variavel novovalor, recebe a funcao que tem um objeto, e executa esta funcao
    const novoValor = funcao(objeto)
    console.log(novoValor)
}


// infospessoa é o objeto declarado la em cima na linha 1
callback(infosPessoa,texto)
// texto é a funcao que recebeu um objeto na linha 22
//uma forma de buscar conteudo espesifoco de um massa de dados 
// imagine que um boot esta tenta do enteder somete oCPF 
const TextoNãoEstruturado = "meu cpf é 123.456.887-22"
const regex = new RegExp('[0-9]{3}.[0-9]{3}.[0-9]{3}-[0-9]{2}');
 
console.log(TextoNãoEstruturado.match(regex));

//Listas
// percorrendo lista <estudar>
let lista = [1,2,5];
let= listaIncluir = [3, 4];

for (let i = 0; i < listaIncluir.length; i++){
        for (let j = 0; j < lista.length; j++){
            if (lista[j] >= listaIncluir[i]);
            lista.splice(j, 0, listaIncluir[i]);
            j++;//esse cara pula o indie da lista 
        }
}


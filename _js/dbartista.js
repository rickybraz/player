/* Banco de dados dos artistas
principais funções:
1. Mostar os artistas cadastrados
2. Retornar o nome e codigo do artista para montar o tocador
3. Fazer a busca dos artistas pelo buscador

Estrutura da variavel = [codigo, nome]
chave [X][Y]
X -> Representa a posição na matriz
Y -> 0 = Codigo e 1=Nome
*/


function bdart(letra){
    var artista = []
    
    if (letra == 1) {
        /** Letra A */
        artista.push([1,"Acorde Luz"])
        artista.push([2,"Allan Filho"])
        artista.push([3,"Alma Sonora"])
        artista.push([4,"Anima"])
        artista.push([5,"Ariovaldo Filho"])
        artista.push([6,"Auta de Souza"])
    }

    if (letra == 2) {
        /** Letra B */
        artista.push([7,"Banda Nova Luz"])
    }


    if (letra == 3) {
        /** Letra C */
        artista.push([8,"Cacau"])
        artista.push([9,"Cancioneiro Espírita"])
        artista.push([10,"Cacau"])
        artista.push([11,"Clésio Tapety"])
    }

}


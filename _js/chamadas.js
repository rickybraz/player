function busca(tecla){
    if (tecla.keyCode ==13) {
        window.alert("busca ainda não implantado")
    }
    
}

function musicNext(){
    window.alert("Vai para proxima música")
}

function musicBack(){
    window.alert("Volta para musica anterior")
}

function musicPlay(){
    window.alert("Começa ou pausa a musica")
}

function musicVol(){
    window.alert("Aumenta ou baixa o volume")
}

function musicBest(){
    window.alert("Favorita a musica")
}

function EstiloSel(){
    var aux = document.getElementById("menuAlfabetico")
    aux.innerHTML = ``
    document.getElementById('painel').src = "_paginas/capa.html"
}

function musicTocador(codigo) {
    window.alert("tocador")
}

function ArtistaAlfa(){

    var aux = document.getElementById("menuAlfabetico")
    aux.innerHTML = `<tr>
    <td><a href='javascript:ArtistaSel(1)'>A</td>
    <td><a href='javascript:ArtistaSel(2)'>B</td>
    <td><a href='javascript:ArtistaSel(3)'>C</td>
    <td><a href='javascript:ArtistaSel(4)'>D</td>
    <td><a href='javascript:ArtistaSel(5)'>E</td>
    <td><a href='javascript:ArtistaSel(6)'>F</td>
    <td><a href='javascript:ArtistaSel(7)'>G</td>
    <td><a href='javascript:ArtistaSel(8)'>H</td>
    <td><a href='javascript:ArtistaSel(9)'>I</td>
    <td><a href='javascript:ArtistaSel(10)'>J</td>
    <td><a href='javascript:ArtistaSel(11)'>K</td>
    <td><a href='javascript:ArtistaSel(12)'>L</td>
    <td><a href='javascript:ArtistaSel(13)'>M</td>
    <td><a href='javascript:ArtistaSel(14)'>N</td>
    <td><a href='javascript:ArtistaSel(15)'>O</td>
    <td><a href='javascript:ArtistaSel(16)'>O</td>
    <td><a href='javascript:ArtistaSel(17)'>Q</td>
    <td><a href='javascript:ArtistaSel(18)'>R</td>
    <td><a href='javascript:ArtistaSel(19)'>S</td>
    <td><a href='javascript:ArtistaSel(20)'>T</td>
    <td><a href='javascript:ArtistaSel(21)'>U</td>
    <td><a href='javascript:ArtistaSel(22)'>V</td>
    <td><a href='javascript:ArtistaSel(23)'>X</td>
    <td><a href='javascript:ArtistaSel(24)'>Y</td>
    <td><a href='javascript:ArtistaSel(25)'>W</td>
    <td><a href='javascript:ArtistaSel(26)'>Z</td>
    </tr>`
    document.getElementById('painel').src = "_paginas/branco.html"

}

function ArtistaSel(letra) { 
    document.getElementById('painel').src = "_paginas/artista.html"
    bdart(letra)
    var aux = document.getElementById("Ptitulo")
    aux.innerHTML = "lsdfjalsfjalçf"
    
}

function AlbunsAlfa(){
 
    var aux = document.getElementById("menuAlfabetico")
    aux.innerHTML = `<tr>
    <td><a href='javascript:AlbumSel(1)'>A</td>
    <td><a href='javascript:AlbumSel(2)'>B</td>
    <td><a href='javascript:AlbumSel(3)'>C</td>
    <td><a href='javascript:AlbumSel(4)'>D</td>
    <td><a href='javascript:AlbumSel(5)'>E</td>
    <td><a href='javascript:AlbumSel(6)'>F</td>
    <td><a href='javascript:AlbumSel(7)'>G</td>
    <td><a href='javascript:AlbumSel(8)'>H</td>
    <td><a href='javascript:AlbumSel(9)'>I</td>
    <td><a href='javascript:AlbumSel(10)'>J</td>
    <td><a href='javascript:AlbumSel(11)'>K</td>
    <td><a href='javascript:AlbumSel(12)'>L</td>
    <td><a href='javascript:AlbumSel(13)'>M</td>
    <td><a href='javascript:AlbumSel(14)'>N</td>
    <td><a href='javascript:AlbumSel(15)'>O</td>
    <td><a href='javascript:AlbumSel(16)'>O</td>
    <td><a href='javascript:AlbumSel(17)'>Q</td>
    <td><a href='javascript:AlbumSel(18)'>R</td>
    <td><a href='javascript:AlbumSel(19)'>S</td>
    <td><a href='javascript:AlbumSel(20)'>T</td>
    <td><a href='javascript:AlbumSel(21)'>U</td>
    <td><a href='javascript:AlbumSel(22)'>V</td>
    <td><a href='javascript:AlbumSel(23)'>X</td>
    <td><a href='javascript:AlbumSel(24)'>Y</td>
    <td><a href='javascript:AlbumSel(25)'>W</td>
    <td><a href='javascript:AlbumSel(26)'>Z</td>
    </tr>`
    document.getElementById('painel').src = "_paginas/branco.html"

}

function AlbumSel(letra) {
    document.getElementById('painel').src = "_paginas/album.html"
}


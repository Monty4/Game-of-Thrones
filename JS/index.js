function showDescription(name) {
    let url = './images/' + name + '.png'
    let fullName = ''
    let alias = ''
    let born = ''
    let family = ''
    let resume = ''

    switch (name) {
        case 'daenerys':
            fullName = 'Daenerys Targaryen'
            alias = '<b>Alias:</b>&nbsp;Dany;&nbsp;Daenerys de la Tormenta;&nbsp;Misha;&nbsp;Khaleesi'
            born = '<b>Nacimento:</b>&nbsp;284 DC'
            family = '<b>Family</b>&nbsp;Casa Targayen'
            resume = '<p>Daenerys \<< Dany \>> Targaryen es un personaje de ficción de la saga de literatura fantástica Canción de hielo y fuego, escrita por George R.R. Martin. Daenerys es uno de los personajes principales y posee capítulos narrados desde su punto de vista en Juego de Tronos, Choque de reyes, Tormenta de espadas y Danza de dragones. En la adaptación televisiva Juego de Tronos, el personaje es interpretado por la actriz Emilia Clarke</p>'
            resume += '<p>Daenerys fue la única hija del rey Aerys II Targaryen y de su hermana-esposa, la reina Rhaella. Tras la muerte de su padre y de su hermano mayor en la Guerra del Usurpador, su madre murió dando a luz a la pequeña Daenerys. De esa manera, su hermano mayor Viserlys quedó como legítimo rey Targaryen al Trono de Hierro y ella como su heredera.</p>'
            resume += '<p>Se ha señalado que el destinador inicial del personaje de Daenerys es el \<< deseo de venganza\>></p>'
            break

        case 'tyrion':
            fullName = 'Tyrion Lannister'
            alias = '<b>Alias:</b>&nbsp;Tyrion'
            born = '<b>Nacimento:</b>&nbsp;unknown'
            family = '<b>Family</b>&nbsp;Casa Lannister'
            break

        case 'jon':
            fullName = 'Jon Snow'
            alias = '<b>Alias:</b>&nbsp;Jon'
            born = '<b>Nacimento:</b>&nbsp;unknown'
            family = '<b>Family</b>&nbsp;unknown'
            break

        case 'margaery':
            fullName = 'Margaery Tyrell'
            alias = '<b>Alias:</b>&nbsp;Margaery'
            born = '<b>Nacimento:</b>&nbsp;unknown'
            family = '<b>Family</b>&nbsp;Casa Tyrell'
            break

        case 'sansa':
            fullName = 'Sansa Stark'
            alias = '<b>Alias:</b>&nbsp;Sansa'
            born = '<b>Nacimento:</b>&nbsp;unknown'
            family = '<b>Family</b>&nbsp;Casa Stark'
            break

        case 'cersei':
            fullName = 'Cersei Lannister'
            alias = '<b>Alias:</b>&nbsp;Cersei'
            born = '<b>Nacimento:</b>&nbsp;unknown'
            family = '<b>Family</b>&nbsp;Casa Lannister'
            break

        default:
            fullName = 'Full Name'
    }

    document.getElementById("selected").innerHTML = '<p class="title2">' + fullName + '</p>'
    document.getElementById("image").style.backgroundImage = "url(" + url + ")"
    document.getElementById("name").innerHTML = fullName
    document.getElementById("alias").innerHTML = alias
    document.getElementById("born").innerHTML = born
    document.getElementById("family").innerHTML = family
    document.getElementById("resume").innerHTML = resume

    document.getElementById("image").style.display = "block"
    document.getElementById("info").style.display = "block"
    document.getElementById("more_info").style.display = "flex"
}
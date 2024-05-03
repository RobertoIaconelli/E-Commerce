// funzione per attivare il tag "a" della navbar quando ti trovi in quella vista
function illuminazione() {
    // prendo l'url della pagina
    let urlPagina = window.location.pathname;
    // prendo l'ultimo elemento quindi il nome del file index
    let urlFormattato = urlPagina.split("/").pop();

    // creo una lista con tutti i link della navbar
    let listaLink = document.querySelectorAll(".nav-link.k");

    // ciclo i link
    listaLink.forEach(link => {
        // prendo l'href del link
        let hrefLink = link.getAttribute("href");
        // divido l'href per lo "/" e mi prendo l'ultimo elemento, quindi il nome
        let hrefLinkFormattato = hrefLink.split("/").pop();
        // se l'url e l'href sono uguali, allora aggiungo la classe al link
        if (hrefLinkFormattato === urlFormattato) {
            link.classList.add("activeMenu")
        }
    });
}

document.addEventListener("DOMContentLoaded", illuminazione);
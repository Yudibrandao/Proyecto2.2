
const encender = () => {

    let p = document.getElementById("pantalla");
    if (p.classList.contains("on")) {
        p.innerHTML = "";
        p.classList.remove("on");
    } else {

        p.innerHTML = "<img src='src/img/logo.webp' class='img-fluid'>";
        p.classList.add("on");
    }
}

const jugar = () => {
    let p = document.getElementById("pantalla");
    if (p.classList.contains("on")) {

        if (!p.classList.contains("video")) {

            p.innerHTML = '<video id="video"><source src="src/img/mario-Bross.mp4" type="video/mp4"> Your browser does not support the video tag.</video> ';
            let video = document.getElementById("video");
            video.play();
            p.classList.add("video");
        }
    }
}

const animacion = () => {
    let p = document.getElementById("pantalla")
    if (p.classList.contains("on")) {
        p.innerHTML = "";
        

        if (!p.classList.contains("animacion")) {

            p.innerHTML = '<img src="src/img/giphy.gif" alt="gif">';
            let imagen = document.getElementById("imagen");
            Imagen.gif();
            p.classList.add("imagen");
        }

    }

}

const actualizando = () => {
    let p = document.getElementById("pantalla");
    if (p.classList.contains("on")) {
        p.innerHTML = "";
       
        
    } 
    
    else {

        p.innerHTML = "<img src='src/img/cargando.webp' class='img-fluid'>";
        p.classList.add("on");
    }


}

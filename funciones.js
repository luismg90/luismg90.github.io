console.log("funciones cargadas");

/*Funcion de texto giratorio*/
const text = document.querySelector('.text-imagen p');
text.innerHTML = text.innerText.split("").map(
    (char, i) =>
    `<span style="transform:rotate(${i * 8}deg)">${char}</span>`
).join("")

/*Funcion de tabla con skills */
$('.skill-per').each(function(){
    var $this = $(this);
    var per = $this.attr('per');
    $this.css("width",per+'%');
    $({animatedValue: 0}).animate({animatedValue: per},{
        duration: 1000,
        step: function(){
            $this.attr('per', Math.floor(this.animatedValue) + '%');
        },
        complete: function(){
            $this.attr('per', Math.floor(this.animatedValue) + '%');
        }
    });
});

//Funcion para el menu Responsive

$(document).ready(function(){
    $(".menu-responsive").click(function(){
        $("header nav .dev-nav").toggleClass("close-dev-nav")
        $(this).toggleClass("open")
        });
        
})

// Funcion para recibir correos de email.js


// Funcion para el scroll de los elementos con transiciones

const scrollElements = document.querySelectorAll(".js-scroll");




$(window).scroll(function(){

    // container-luis  --> addClass(side-animation )
  
    // la cantidad de scroll
    var scroll = $(document).scrollTop()
    console.log(scroll);

    //la distancia en la que esta el elemente sobre todo
    var distancia  = $(".hero").offset().top
    console.log(distancia)

    if (scroll > distancia)  {
        $("#hero-text").addClass("a-animation")
        
    }

    var distancia = $(".descripcion").offset().top
        if(scroll + 300 > distancia) {
            $(".container-luis").addClass("side-animation")
        }

    var distancia = $(".portfolio").offset().top
        if(scroll + 300 > distancia) {
            $(".portfolio").addClass("up-animation")
        }

    var distancia = $(".wrapper-servicios").offset().top
        if(scroll + 400 > distancia) {
            $(".servicios-luis").addClass("left-animation")
        }

    var distancia = $(".f-background").offset().top
        if(scroll + 1000 > distancia)
            $(".f-social").addClass("spam-animation")
    
})
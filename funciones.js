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
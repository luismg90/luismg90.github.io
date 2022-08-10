window.onload = function(){
    // Window cargado (DOM)
    // $("#contact-form")
    document.getElementById("f-campos").addEventListener('submit', function( event ){
        event.preventDefault();
        
        emailjs.sendForm('service_pezkk9b', 'template_9atewqs', this)
        .then( 
            function( success ){
                // Envío de correo con éxito
                console.log("EXITO")
                console.log(success)
            $("input[type=text]").val("");
            $("textarea").val("");
              $("f-campos").append("<div>Correo enviado con éxito </div>")
            }, 
            function(error){
                // ERROR!
                console.log("ERROR")
                console.log(error)
            }
        );
    });
};
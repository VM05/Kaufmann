
$(document).ready(function(){

        $(".campañas-camiones-pesados").hide();
        $(".lista-precios-camiones-pesados").hide();
        $(".campañas-fuso").hide();
        $(".lista-precios-fuso").hide();
        $(".campañas-buses-vans").hide();
        $(".lista-precios-buses-vans").hide();
        $(".campañas-post-venta").hide();
        $(".lista-precios-post-venta").hide();
        $(".fuso").hide();
        $(".buses-vans").hide();
        $(".post-venta").hide();
        $(".redes-sociales").hide();
        $(".covid").hide();
        $("#camiones-pesados").addClass("active-types");

   $("#camiones-pesados").click(function(){
        $("#camiones-pesados").addClass('active-types');
        $("#fuso").removeClass('active-types');
        $("#buses-vans").removeClass('active-types');
        $("#post-venta").removeClass('active-types');
        $(".fuso").fadeOut();
        $(".buses-vans").fadeOut();
        $(".post-venta").fadeOut();
        $(".camiones-pesados").fadeIn();

   })

   $("#fuso").click(function(){
       $("#fuso").addClass('active-types');
       $("#camiones-pesados").removeClass('active-types');
       $("#buses-vans").removeClass('active-types');
       $("#post-venta").removeClass('active-types');
       $(".camiones-pesados").fadeOut();
       $(".buses-vans").fadeOut();
       $(".post-venta").fadeOut();
       $(".fuso").fadeIn();

   })


    $("#buses-vans").click(function(){
        $("#buses-vans").addClass('active-types');
        $("#camiones-pesados").removeClass('active-types');
        $("#fuso").removeClass('active-types');
        $("#post-venta").removeClass('active-types');
        $(".post-venta").fadeOut();
        $(".fuso").fadeOut();
        $(".camiones-pesados").fadeOut();
        $(".buses-vans").fadeIn();
    })

    $("#post-venta").click(function(){
        $("#post-venta").addClass('active-types');
        $("#camiones-pesados").removeClass('active-types');
        $("#fuso").removeClass('active-types');
        $("#buses-vans").removeClass('active-types');
        $(".buses-vans").fadeOut();
        $(".fuso").fadeOut();
        $(".camiones-pesados").fadeOut();
        $(".post-venta").fadeIn();
    })

    //-----------Camiones Pesados -------------//

    $("#novedades-camiones-pesados").click(function(){
        $(".novedades-camiones-pesados").fadeIn();
        $(".campañas-camiones-pesados").fadeOut();
        $(".lista-precios-camiones-pesados").fadeOut();
    })

    $("#campañas-camiones-pesados").click(function(){
        $(".novedades-camiones-pesados").fadeOut();
        $(".campañas-camiones-pesados").fadeIn();
        $(".lista-precios-camiones-pesados").fadeOut();
    })

    $("#lista-precios-camiones-pesados").click(function(){
        $(".novedades-camiones-pesados").fadeOut();
        $(".campañas-camiones-pesados").fadeOut();
        $(".lista-precios-camiones-pesados").fadeIn();
    })


    //----------- Fuso -------------//

    $("#novedades-fuso").click(function(){
        $(".novedades-fuso").fadeIn();
        $(".campañas-fuso").fadeOut();
        $(".lista-precios-fuso").fadeOut();
    })

    $("#campañas-fuso").click(function(){
        $(".novedades-fuso").fadeOut();
        $(".campañas-fuso").fadeIn();
        $(".lista-precios-fuso").fadeOut();
    })

    $("#lista-precios-fuso").click(function(){
        $(".novedades-fuso").fadeOut();
        $(".campañas-fuso").fadeOut();
        $(".lista-precios-fuso").fadeIn();
    })

    //----------- buses y vans -----------//

    $("#novedades-buses-vans").click(function(){
        $(".novedades-buses-vans").fadeIn();
        $(".campañas-buses-vans").fadeOut();
        $(".lista-precios-buses-vans").fadeOut();
    })

    $("#campañas-buses-vans").click(function(){
        $(".novedades-buses-vans").hide();
        $(".campañas-buses-vans").fadeIn();
        $(".lista-precios-buses-vans").hide();
    })

    $("#lista-precios-buses-vans").click(function(){
        $(".novedades-buses-vans").fadeOut();
        $(".campañas-buses-vans").fadeOut();
        $(".lista-precios-buses-vans").fadeIn();
    })

    //----------post-venta-------------//

    $("#novedades-post-venta").click(function(){
        $(".novedades-post-venta").fadeIn();
        $(".campañas-post-venta").fadeOut();
        $(".lista-precios-post-venta").fadeOut();
    })

    $("#campañas-post-venta").click(function(){
        $(".novedades-post-venta").fadeOut();
        $(".campañas-post-venta").fadeIn();
        $(".lista-precios-post-venta").fadeOut();
    })

    $("#lista-precios-post-venta").click(function(){
        $(".novedades-post-venta").fadeOut();
        $(".campañas-post-venta").fadeOut();
        $(".lista-precios-post-venta").fadeIn();
    })

    /*----------multimedia---------*/

    $("#experto").addClass("active-types");

    $("#experto").click(function(){
        $("#redes-sociales").removeClass('active-types');
        $("#experto").addClass('active-types');
        $(".redes-sociales").fadeOut();
        $(".experto").fadeIn();
    })

    $("#redes-sociales").click(function(){
        $("#experto").removeClass('active-types');
        $("#redes-sociales").addClass('active-types');
        $(".experto").fadeOut();
        $(".redes-sociales").fadeIn();
    })


    /*---------herramientas----------*/
    $("#herramientas").addClass("active-types");

    $("#herramientas").click(function(){
        $("#covid").removeClass('active-types');
        $("#herramientas").addClass('active-types');
        $(".covid").fadeOut();
        $(".herramientas").fadeIn();
    })

    $("#covid").click(function(){
        $("#herramientas").removeClass('active-types');
        $("#covid").addClass('active-types');
        $(".herramientas").fadeOut();
        $(".covid").fadeIn();
    })

 
})

$('.elegir-1 li a').click(function(){
    $('.elegir-1 li a').removeClass('active-sub');
    $(this).addClass('active-sub');
})

$('.elegir-2 li a').click(function(){
    $('.elegir-2 li a').removeClass('active-sub');
    $(this).addClass('active-sub');
})

$('.elegir-3 li a').click(function(){
    $('.elegir-3 li a').removeClass('active-sub');
    $(this).addClass('active-sub');
})

$('.elegir-4 li a').click(function(){
    $('.elegir-4 li a').removeClass('active-sub');
    $(this).addClass('active-sub');
})

$('.links-informacion-2 li a').click(function(){
    $('.links-informacion-2 li a').removeClass('active-sub');
    $(this).addClass('active-sub');
})
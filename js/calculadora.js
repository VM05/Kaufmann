const valor1 = document.querySelector('#tipo');
const botonCalcular = document.querySelector('.calcular');
const  tuComision = document.querySelector('#tu-comision');
const descuento = document.querySelector('#descuento');
let format = new Intl.NumberFormat('de-DE', { 
    style: 'currency', 
    currency: 'USD',
}); 


descuento.addEventListener('input', () =>{
    const prueba = Number(descuento.value);
    prueba > 40 ? descuento.value = 40 : descuento.value = prueba;
});





botonCalcular.addEventListener('click', e =>{
    let valorElegido = Number(valor1.options[valor1.selectedIndex].value);
    
    e.preventDefault(); 

    const descuento = document.querySelector('#descuento').value;
    const telemetria = document.querySelector('#respuesta-telemetria').value;
    const convenioMtto = document.querySelector('#respuesta-mtto').value;
    const financiamiento = document.querySelector('#respuesta-financiamiento').value;
    let valorSinIva = document.querySelector('#iva').value;
    let valorFinal = document.querySelector('#valor-final');
    const unidadConvenio = document.querySelector('#unidad-convenio');
    const unidadTelemetria = document.querySelector('#unidad-telemetria');
    const unidadFinanciamiento = document.querySelector('#unidad-financiamiento');
    let unidadCompleta = document.querySelector('#unidad-completa');
    const valorTelemetria = 15000;
    const valorConvenio = 60000;
    let comisionVendedor = 0;
    
    
    if(descuento >= 1){
        valorSinIva = valorSinIva-(descuento*valorSinIva / 100);
        
    }

    valorFinal.value = format.format(valorSinIva);

    switch (valorElegido) {
        case valorElegido = 1:

            if(descuento >= 0 && descuento <=2){

                comisionVendedor = valorSinIva * 0.0090;

            }else if(descuento >= 2.10 && descuento <= 4){

                comisionVendedor = valorSinIva * 0.0080;

            }else if(descuento >= 4.10 && descuento <= 6){

                comisionVendedor=valorSinIva * 0.00725;

            }else if(descuento >=6.10 && descuento <= 8){

                comisionVendedor=valorSinIva * 0.0060;

            }else if(descuento >= 8.10 && descuento <= 11){

                comisionVendedor=valorSinIva * 0.0055;

            }else{

                comisionVendedor=valorSinIva * 0.0050;

            }

            break;

        case valor1.value = 2:

            comisionVendedor = valorSinIva * 0.0080;
            console.log(comisionVendedor);

            break; 

    }

    

    unidadConvenio.value= format.format(comisionVendedor + valorConvenio);

 

    unidadTelemetria.value = format.format(comisionVendedor + valorTelemetria);

    
        let montoFinanciado = valorSinIva * 0.60;
         let cuota = Math.round((((36*(montoFinanciado*(((Math.pow(1+0.016,36))*0.016)/(Math.pow(1+0.016,36)-1))))-montoFinanciado)* 0.17)*0.18); 
    

    unidadFinanciamiento.value = format.format(comisionVendedor + cuota);
    
    unidadCompleta.value = format.format(comisionVendedor + cuota + valorConvenio + valorTelemetria);
   

    if(telemetria === "si" && convenioMtto === "si" && financiamiento === "si"){
    
        comisionVendedor = comisionVendedor + valorConvenio + valorTelemetria + cuota;
        tuComision.value = format.format(comisionVendedor);

    }else if(telemetria === "si" && convenioMtto === "si"){

        comisionVendedor = comisionVendedor + valorTelemetria + valorConvenio ;
        tuComision.value = format.format(comisionVendedor);

    }else if(telemetria === "si" && financiamiento === "si"){

        comisionVendedor = comisionVendedor + valorTelemetria + cuota ;
        tuComision.value = format.format(comisionVendedor);

    }else if(convenioMtto === "si" && financiamiento === "si"){

        comisionVendedor = comisionVendedor + cuota + valorConvenio ;
        tuComision.value = format.format(comisionVendedor);

    }else if (convenioMtto === "si"){
        comisionVendedor = comisionVendedor + valorConvenio ;
        tuComision.value = format.format(comisionVendedor);

    }else if (financiamiento === "si"){
        comisionVendedor = comisionVendedor + cuota ;
        tuComision.value = format.format(comisionVendedor);

    }else if(telemetria === "si"){
        comisionVendedor = comisionVendedor + valorTelemetria  ;
        tuComision.value = format.format(comisionVendedor);

    }else{
        tuComision.value = format.format(comisionVendedor);
    }

   
})


function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }
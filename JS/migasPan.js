function generateBC(url, separator) {
  
  var cadena = url.toLowerCase();       
    
  var remplazarHTTP = cadena.replace(/(http(s?)):\/\//gi, "");    
  var separacion_url = remplazarHTTP.split("/"); 
  var migas ="";   
  var array_Reservadas = ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"];    
  var urlValida = [];

  //comparamos la longitud de la url 
  if(separacion_url.length===0 || separacion_url.length===1){ 
      migas = '<span class="active">HOME</span>';
  }else{
      migas = '<a href="/">HOME</a>'+separator;
  }
        
  //recorrer la url para realizar las comprobaciones    
  for(let i=1; i<separacion_url.length; i++){
      
      urlValida.push(separacion_url[i]);
       
      //si no tiene index. y si no tiene punto entra en en el if
      if(!comprobarIndex(separacion_url[i]) && !comprobarPunto(separacion_url[i])){
                
              if(comprobarGuion(separacion_url[i])){ //comprobamos si tiene guion la url
                
                  if(comprobarInterrogacion_almuhadilla(separacion_url[i])){    //comprobacion de si tiene ? o #
                        var remplazarCaracteres = separacion_url[i].replace(/[#?]/g,'8');
                        var separarCaracter = remplazarCaracteres.split('8'); 
                        separacion_url[i] = separarCaracter[0]; 
                   }
                    //si la longitud de la url es mayor a 30
                    if(separacion_url[i].length>30){

                           if(i === (separacion_url.length)-1 || comprobarIndex(separacion_url[i+1])){ //comprobar la ultima posicion del array o la posicion siguiente  para ver el valor que tiene
                                migas += '<span class="active">'+acronimo(separacion_url[i], array_Reservadas)+'</span>';  //mostramos las etiquetas span
                          }else{          
                                migas += '<a href="/'+urlValida.toString().replace(/,/g,"/")+'/">'+acronimo(separacion_url[i], array_Reservadas)+'</a>'+separator;  //mostramos etiquetas <a>
                          }          
                        
                    }else if(separacion_url[i].length<=30){ //la longitud es menor o igual a 30                       

                          if(i === (separacion_url.length)-1  || comprobarIndex(separacion_url[i+1])){ //comprobar la ultima posicion del array o la posicion siguiente para ver el valor que tiene
                               migas += '<span class="active">'+separacion_url[i].toUpperCase().replace(/-/g," ")+'</span>';  //mostramos las etiquetas span
                          }else{
                             migas += '<a href="/'+urlValida.toString().replace(/,/g,"/")+'/">'+separacion_url[i].toUpperCase().replace(/-/g," ")+'</a>'+separator;  //mostramos etiquetas <a>
                          }          
                    }

            }else {     //si no tiene guion

                  if(i === (separacion_url.length)-1 || comprobarIndex(separacion_url[i+1])){ //comprobar la ultima posicion del array o la posicion siguiente para ver el valor que tiene
                      if(comprobarInterrogacion_almuhadilla(separacion_url[i])){
                          
                          var remplazarCaracteres = separacion_url[i].replace(/[#?]/g,'8');
                          var separarCaracter = remplazarCaracteres.split('8'); 
                          
                          migas += '<span class="active">'+separarCaracter[0].toUpperCase()+'</span>'; 
                      }else{
                          migas += '<span class="active">'+separacion_url[i].toUpperCase()+'</span>';  //mostramos las etiquetas span
                      }

                  }else if(!comprobarIndex(separacion_url[i])){ //si no tiene index.                     
                       migas += '<a href="/'+urlValida.toString().replace(/,/g,"/")+'/">'+separacion_url[i].toUpperCase()+'</a>'+separator;  //mostramos etiquetas <a>
                  }          
            }
      }
      
      if(comprobarPunto(separacion_url[i]) && !comprobarIndex(separacion_url[i])){   // si tiene punto entra en el if
         
          if(comprobarGuion(separacion_url[i]) && comprobarPunto(separacion_url[i])){ //si tiene guion y punto

                var separarStringGuion = separacion_url[i].split('.');  
                if(separarStringGuion[0].length<=30){  
                      if(i === (separacion_url.length)-1){ //comprobar la ultima posicion del array
                           migas += '<span class="active">'+separarStringGuion[0].toUpperCase().replace(/-/g," ")+'</span>';  //mostramos las etiquetas span
                      }
                }

            }else{
                var separarString = separacion_url[i].split('.');   //separamos en un array ej:holiday.html --> holiday(posicion 0) y html(posicion 1)
          
                migas += '<span class="active">'+separarString[0].toUpperCase()+'</span>';  //muestra la ultima etiqueta que es <span>
            }

          }
        //si tiene index. y la longitud es 2
        if(comprobarIndex(separacion_url[i]) && separacion_url.length===2){
            migas = '<span class="active">HOME</span>';  //muestra la ultima etiqueta que es <span>    
        }
      
      //si te mete en la ultima posicion una # o una ? o un "" unicamente
        if(i === (separacion_url.length)-1 && (separacion_url[i]==="#" || separacion_url[i]==="?" ||separacion_url[i]==="")){
            migas = '<span class="active">HOME</span>';
       } 
  }
    
      
    
 //funciones de comprobacion      
  function comprobarIndex(buscarCadena){       
    if(buscarCadena.indexOf("index.") != -1){   //si aparece "index." --> return true        
          return true;
     }     
  }
    
  function comprobarPunto(buscarCadena){     
    if(buscarCadena.indexOf(".") != -1){   //si aparece "." --> return true
          return true;
     }   
  }
      
  function comprobarGuion(buscarCadena){      
    if(buscarCadena.indexOf("-") != -1){   //si aparece "-" --> return true 
          return true;
     }    
  }
      
  function comprobarInterrogacion_almuhadilla(buscarCadena){   
        if(buscarCadena.indexOf("?") != -1 || buscarCadena.indexOf("#") != -1){   //si aparece "?" o "#"--> return true
            return true;
        }
    }
    
  function acronimo(separacion_url, array_Reservadas){

      var separarGuiones = separacion_url.split('-');  //hacemos el acronimo
      var acronimos = "";

      for(let i=0; i<separarGuiones.length; i++){

            if(!array_Reservadas.includes(separarGuiones[i])){
                 acronimos = acronimos+separarGuiones[i].charAt(0);
            }
      }
        return acronimo_mayusculas = acronimos.toUpperCase();
  }

    return migas; //cadena url con todas las comprobaciones requeridas
  
}
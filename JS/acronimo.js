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



describe("probando las migas de pan: ", function(){

  it("prueba de acronimo (generateBC)", function(){
      expect(generateBC("starbucks.es/from-from-bebe-usuario-at-the-rebueno", " * ")).toEqual('<a href="/">HOME</a> * <span class="active">BUR</span>');      
  });
  it("prueba acabado en index", function(){
      expect(generateBC("code.com/", " : ")).toEqual('<span class="active">HOME</span>');
  });
  it("prueba con almoadillas", function(){
      expect(generateBC("miworl.com/#", " + ")).toEqual('<span class="active">HOME</span>');
  });
  it("prueba con interrogacion", function(){
      expect(generateBC("mibaby.es/?", " x ")).toEqual('<span class="active">HOME</span>');
  });
  it("prueba de acronimo 2 (generateBC)", function(){
      expect(generateBC("http://www.piensogato.ti/insta/gato/momia-descarga/pili-to-bebe-bonito-meningitis-euro-to-skiner-for-biologia?sosoBebe=yeye", " >> ")).toEqual('<a href="/">HOME</a> >> <a href="/insta/">INSTA</a> >> <a href="/insta/gato/">GATO</a> >> <a href="/insta/gato/momia-descarga/">MOMIA DESCARGA</a> >> <span class="active">PBBMESB</span>');
  });
  it("prueba quitar guiones", function(){
      expect(generateBC("sofiavalera.sv/mipagina-web.php", " ^ ")).toEqual('<a href="/">HOME</a> ^ <span class="active">MIPAGINA WEB</span>');
  });
  it("prueba home mayusculas", function(){
      expect(generateBC("MITIOPEPE.COM", " & ")).toEqual('<span class="active">HOME</span>');
  });
  it("prueba quitar guiones e interrogacion", function(){
      expect(generateBC("https://agenciamatrimonial.co.u/secreta-pagina.html?hackear=o", " - ")).toEqual('<a href="/">HOME</a> - <span class="active">SECRETA PAGINA</span>');
  });
  it("prueba para quitar .php", function(){
      expect(generateBC("google.com/acceso.php", " ! ")).toEqual('<a href="/">HOME</a> ! <span class="active">ACCESO</span>');
  });
  it("prueba acronimo", function(){
      expect(generateBC("https://www.tuenti.tu/papel-to-or-papa-or-papi-transformacion-the-salvar", " = ")).toEqual('<a href="/">HOME</a> = <span class="active">PPPTS</span>');
  });
  it("prueba de la funcion de acronimo", function(){
      expect(acronimo("papel-to-or-papa-or-papi-transformacion-the-salvar", ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"])).toEqual('PPPTS');
  });
  it("prueba de la funcion de acronimo 2", function(){
      expect(acronimo("very-long-url-to-make-a-silly-yet-meaningful-example", ["the","of","in","from","by","with","and", "or", "for", "to", "at", "a"])).toEqual('VLUMSYME');
  });

});

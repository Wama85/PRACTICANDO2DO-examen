class Ejercicio{
    constructor(titulo="",categoria="",imagen="1euc7nmD5AGroYcxYYx4DEd-MYAzXuUph",resumen="", detalle=""){
        this.titulo=titulo;
        this.categoria=categoria;
        this.imagen=imagen;
        this.resumen=resumen;
        this.detalle=detalle;
    }
    getTitulo(){
        return this.titulo;
    }
    getCategoria(){
        return this.categoria;
    }
    getImagen(){
        return this.imagen;
    }
    getResumen(){
        return this.resumen;
    }
    getDetalle(){ 
        return this.detalle;
    }
    validarTitulo(){
        return this.titulo != "";
    }
    validarCategoria(){
      return this.categoria !="";
    }
    validarResumen(){
        return this.resumen !="";
    }
    validarAtributos(){
        return this.validarTitulo() && this.validarCategoria() && this.validarResumen();
    }
}
export  {Ejercicio};
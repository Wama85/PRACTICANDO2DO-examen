import { Ejercicio } from "./models/Ejercicio";
const  IMAGENPREDETERMINADA="1euc7nmD5AGroYcxYYx4DEd-MYAzXuUph";
const URLIMAGENES="https://drive.google.com/uc?export=download&id=";
const CERO=0;
const ejerciciosPruebas=[
    new Ejercicio("Numeros Primos","Numeros",undefined,"resumen","detalle1",undefined,"ALTA")
    ,new Ejercicio("Numeros Romanos","Numeros","10PUZY7ai9akJ5VAGzWbPNKGjQXBQ4-f9","resumen2","detalle2",undefined,"BAJA")
    ,new Ejercicio("Numeros Aleatorios","Numeros","10PUZY7ai9akJ5VAGzWbPNKGjQXBQ4-f9","resumen3"),
    new Ejercicio("Arbol Binario","Arboles",undefined,"resumen4")
];
export {ejerciciosPruebas,IMAGENPREDETERMINADA,URLIMAGENES,CERO};
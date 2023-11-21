import { Catalogo } from "./models/Catalogo.js";
const  IMAGENPREDETERMINADA="1euc7nmD5AGroYcxYYx4DEd-MYAzXuUph";
const URLIMAGENES="https://drive.google.com/uc?export=download&id=";
const CERO=0;
const dataPruebas=[
    {
        "titulo": "Numeros Primos",
        "categoria": "Numeros",
        "resumen": "resumen",
        "detalle": "detalle1",
        "dificultad": "ALTA"
    },
    {
        "titulo": "Numeros Romanos",
        "categoria": "Numeros",
        "imagen": "10PUZY7ai9akJ5VAGzWbPNKGjQXBQ4-f9",
        "resumen": "resumen2",
        "detalle": "detalle2",
        "dificultad": "BAJA"
    },
    {
        "titulo": "Numeros Aleatorios",
        "categoria": "Numeros",
        "imagen": "10PUZY7ai9akJ5VAGzWbPNKGjQXBQ4-f9",
        "resumen": "resumen3",
    },
    {
        "titulo": "Arbol Binario",
        "categoria": "Arboles",
        "resumen": "resumen4",
    }
]
let catalogo=new Catalogo();
const ejerciciosPruebas=catalogo.convertirDeJsonAEjercicio(dataPruebas);
export {ejerciciosPruebas,IMAGENPREDETERMINADA,URLIMAGENES,CERO};
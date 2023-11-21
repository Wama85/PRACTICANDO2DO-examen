import { Catalogo } from "./models/Catalogo";
import {Ejercicio} from "./models/Ejercicio";
const data=[
    {
        "titulo": "Numeros Primos",
        "categoria": "Numeros",
        "resumen": "Los números primos son enteros mayores que 1 con solo dos divisores, 1 y ellos mismos. No son divisibles por ningún otro número. Son fundamentales en matemáticas y tienen aplicaciones en criptografía y ciencias de la computación.",
    },
    {
        "titulo": "Numeros Romanos",
        "categoria": "Numeros",
        "imagen": "10PUZY7ai9akJ5VAGzWbPNKGjQXBQ4-f9",
        "resumen": "Los romanos fueron ingeniosos conquistadores de Europa, inventaron cosas como el concreto y las carreteras rectas, pero nunca descubrieron el número cero. A pesar de ello, crearon un sistema numérico con letras que todavía se usa hoy en día, como I, V, X, L, C, D, M. Por ejemplo, la BBC usa números romanos en sus programas",
    },
    {
        "titulo": "Suma de dos números",
        "categoria": "Numeros",
        "resumen": "Escribe un programa que sume dos números enteros ingresados por el usuario.",
    },
    {
        "titulo": "Área de un triángulo",
        "categoria": "Geometría",
        "imagen": "1Ay4HLJTY1P8QePPFDRmGKifyXQt9abFC",
        "resumen": "Crea un programa que calcule el área de un triángulo a partir de la base y la altura proporcionadas por el usuario.",
    },
    {
        "titulo": "Cálculo del factorial",
        "categoria": "Numeros",
        "imagen": "15KHQu_tYriEtOAL-CUppIXYl6Wbfpu4V",
        "resumen": "Desarrolla un programa que calcule el factorial de un número entero dado.",
    },
    {
        "titulo": "Tabla de multiplicar",
        "categoria": "Numeros",
        "imagen": "1ppK6USpRpqtcVWi-XbP0A5laHCosN4kV",
        "resumen": "Escribe un programa que muestre la tabla de multiplicar de un número ingresado por el usuario.",
    },
    {
        "titulo": "Inversión de cadena",
        "categoria": "Cadenas",
        "resumen": "Desarrolla un programa que invierta una cadena de texto ingresada por el usuario.",
    },
    {
        "titulo": "Conteo de vocales",
        "categoria": "Cadenas",
        "resumen": "Escribe un programa que cuente el número de vocales en una cadena de texto proporcionada.",
    },
    {
        "titulo": "Calculadora de IMC",
        "categoria": "Salud",
        "resumen": "Crea una calculadora de Índice de Masa Corporal (IMC) que tome el peso y la altura del usuario y calcule su IMC.",
    },
    {
        "titulo": "Generador de números aleatorios",
        "categoria": "Numeros",
        "resumen": "Desarrolla un programa que genere números aleatorios dentro de un rango especificado por el usuario.",
    },
    {
        "titulo": "Adivina el número",
        "categoria": "Juegos",
        "resumen": "Crea un juego en el que el programa selecciona un número secreto y el usuario intenta adivinarlo con pistas.",
    }
];
let catalogo=new Catalogo();
const ejercicios=catalogo.convertirDeJsonAEjercicio(data);
export {ejercicios};
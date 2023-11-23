function desglosarMonto(monto) {
    const fracciones = [2, 1, 0.5, 0.2, 0.1];
    const resultado = {};

    for (let i = 0; i < fracciones.length; i++) {
        const fraccion = fracciones[i];
        const cantidadFraccion = Math.floor(monto / fraccion);

        if (cantidadFraccion > 0) {
            resultado[fraccion] = cantidadFraccion;
            monto %= fraccion;
        }
    }

    return resultado;
}

// Ejemplo de uso
const montoTotal = 8;
const resultadoDesglose = desglosarMonto(montoTotal);

console.log(`Desglose de ${montoTotal} en fracciones:`);
for (const fraccion of Object.keys(resultadoDesglose)) {
    console.log(`${resultadoDesglose[fraccion]} de ${fraccion}`);
}

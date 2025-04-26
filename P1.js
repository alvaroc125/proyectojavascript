function calcular(mes) {
    const ingreso = parseFloat(document.getElementById('ingreso' + mes).value) || 0;
    const gasto = parseFloat(document.getElementById('gasto' + mes).value) || 0;
    const resultado = ingreso - gasto;

    const celdaResultado = document.getElementById('resultado' + mes);
    celdaResultado.textContent = resultado;

    if (resultado >= 0) {
        celdaResultado.className = 'positivo';
    } else {
        celdaResultado.className = 'negativo';
    }
}

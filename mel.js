document.addEventListener('DOMContentLoaded', function () {
    const numbersInput = document.getElementById('numbersInput');
    const countButton = document.getElementById('countButton');
    const resultDiv = document.getElementById('result');

    countButton.addEventListener('click', function () {
        const inputNumbers = numbersInput.value.trim().split(' ');
        const cantidadCoincidentes = contarNumerosConCoincidencia(inputNumbers);
        resultDiv.textContent = `La cantidad de números con el mismo dígito al inicio y al final es: ${cantidadCoincidentes}`;
    });

    function contarNumerosConCoincidencia(numeros) {
        let count = 0;
        for (let i = 0; i < numeros.length; i++) {
            const numero = numeros[i];
            if (numero.length > 0 && numero[0] === numero[numero.length - 1]) {
                count++;
            }
        }
        return count;
    }
});

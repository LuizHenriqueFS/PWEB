
function calcular(){    
        var n1, n2;

        n1 = prompt("Digite o primeiro número: ");
        n2 = prompt("Dgite o segundo número: ");

        return ("Soma dos números: " + (parseFloat(n1) + parseFloat(n2)) + 
        "\nSubtração do primeiro pelo segundo: " + (parseFloat(n1) - parseFloat(n2)) +
        "\nProduto dos números: " + (parseFloat(n1) * parseFloat(n2)) +
        "\nDivisão do primeiro pelo segundo: " + (parseFloat(n1) / parseFloat(n2)) +
        "\nResto da divisão do primeiro pelo segundo: " + (parseFloat(n1) % parseFloat(n2)));
}

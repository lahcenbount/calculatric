const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

function calculatrice() {
    rl.question('Entrez un opérateur (+, -, *, /, ^, %, !) : ', (operateur) => {

        if (operateur === '%' || operateur === '!') {
            
            rl.question('Entrez un nombre : ', (num1) => {
                const a = parseFloat(num1);
                let result;

                switch (operateur) {
                    case '%':
                        if (a < 0) {
                            result = "Square root of negative number is not allowed.";
                        } else {
                            result = Math.sqrt(a);
                        }
                        break;
                    case '!':
                        result = factorial(a);
                        break;
                    default:
                        result = "Opérateur invalide!";
                }

                console.log(`Résultat : ${result}`);
                calculatrice(); // Relancer pour un nouveau calcul
            });
        } else {
            // Pour les opérations qui nécessitent deux nombres
            rl.question('Entrez un nombre : ', (num1) => {
                rl.question('Entrez un deuxième nombre : ', (num2) => {
                    const a = parseFloat(num1);
                    const b = parseFloat(num2);
                    let result;

                    switch (operateur) {
                        case '+':
                            result = a + b;
                            break;
                        case '-':
                            result = a - b;
                            break;
                        case '*':
                            result = a * b;
                            break;
                        case '/':
                            if (b === 0) {
                                result = "Division by zero is not allowed.";
                            } else {
                                result = a / b;
                            }
                            break;
                        case '^':
                            result = Math.pow(a, b);
                            break;
                        default:
                            result = "Opérateur invalide!";
                    }

                    console.log(`Résultat : ${result}`);
                    calculatrice(); // Relancer pour un nouveau calcul
                });
            });
        }
    });
}

// Fonction pour calculer la factorielle
function factorial(n) {
    if (n < 0) {
        return "Factorial of negative number is not allowed.";
    }
    if (n === 0 || n === 1) {
        return 1;
    }
    return n * factorial(n - 1);
}

// Lancer la calculatrice
calculatrice();

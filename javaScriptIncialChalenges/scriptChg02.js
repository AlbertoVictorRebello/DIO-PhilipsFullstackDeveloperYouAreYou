let lines = gets().split('\n');

let line = lines.shift().split(" ");
let inicio = parseInt(line[0]);
let final = parseInt(line[1]);

if (inicio >= 0 && final <= 2) {
    print('nova');
} else if (final > inicio && final <= 96) {
    print("crescente");
} else if (final < inicio && final > 2) {
    print("minguante");                 //complete o código nos espaços em branco
} else { 
    print('cheia');
}

// 0 e 2%, por exemplo, é lua nova, se for entre 3 e 96% é lua crescente, 
// se for entre 97 e 100% é lua cheia e se for entre 96 e 3%

/*

Exemplo de Entrada	Exemplo de Saída
0 2

nova

2 3

crescente

99 97

cheia

97 94

minguante

30 35

crescente
*/










/* let lines = gets().split('\n');

let line = lines.shift().split(" ");
let inicio = parseInt(line[0]);
let final = parseInt(line[1]);

if (inicio >= 0 && final <= 2) {
    print('nova');
} else if (final > inicio && final <=     ) {
    print(               );
} else if (              ) {
    print(                 );                 //complete o código nos espaços em branco
} else { 
    print('cheia');
} */
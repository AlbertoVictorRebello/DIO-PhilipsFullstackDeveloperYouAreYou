// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
// Abaixo segue um exemplo de código que você pode ou não utilizar

const numTotal = parseInt(gets())
const numFigCompradas = parseInt(gets())
const setFig = new Set()

for(let i = 1; i <= numFigCompradas; i++){
  const fig = parseInt(gets())
  setFig.add(fig)
}

print(numTotal - setFig.size)


// a função gets é implementada dentro do sistema para ler as entradas(inputs) dos dados
// Abaixo segue um exemplo de código que você pode ou não utilizar

/* const numTotal = parseInt(gets())
const numFigCompradas = parseInt(gets())
const setFig = new Set()

for(                    ){
  const fig = 
  setFig.add(       )
}

print(numTotal -        ) */
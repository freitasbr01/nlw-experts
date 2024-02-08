// Se eu quiser repetir isso para todos eu vou colocar dentro da estrutura de repetição.

const perguntas = [
    {
      pergunta: "Qual é a palavra-chave usada para declarar uma variável em JavaScript?",
      respostas: [
        "var",
        "let",
        "const"
      ],
      correta: 2
    },
    {
      pergunta: "Qual é a saída do seguinte código?\n\nconsole.log(2 + '2');",
      respostas: [
        "4",
        "'22'",
        "Erro"
      ],
      correta: 1
    },
    {
      pergunta: "O que é uma função de callback em JavaScript?",
      respostas: [
        "Uma função que é executada após um certo intervalo de tempo",
        "Uma função que é passada como argumento para outra função e executada após a conclusão de alguma operação",
        "Uma função que retorna um valor diretamente"
      ],
      correta: 1
    },
    {
      pergunta: "Como você chama um método de um objeto 'obj' em JavaScript?",
      respostas: [
        "obj.método()",
        "chamar(obj.método)",
        "executar(método.obj)"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é o operador de igualdade estrita em JavaScript?",
      respostas: [
        "==",
        "===",
        "="
      ],
      correta: 1
    },
    {
      pergunta: "Qual método de array é usado para remover o último elemento?",
      respostas: [
        "pop()",
        "shift()",
        "splice()"
      ],
      correta: 0
    },
    {
      pergunta: "O que o método `forEach()` faz em um array em JavaScript?",
      respostas: [
        "Itera sobre os elementos de um array e executa uma função de callback para cada elemento",
        "Retorna o primeiro elemento de um array",
        "Remove todos os elementos de um array"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a saída do seguinte código?\n\nconsole.log(typeof([]));",
      respostas: [
        "'array'",
        "'object'",
        "'undefined'"
      ],
      correta: 1
    },
    {
      pergunta: "O que o método `map()` faz em um array em JavaScript?",
      respostas: [
        "Cria um novo array com os resultados de uma função de callback aplicada a cada elemento do array original",
        "Adiciona um novo elemento ao final do array",
        "Remove um elemento específico do array"
      ],
      correta: 0
    },
    {
      pergunta: "Qual é a maneira correta de acessar o valor de uma propriedade 'name' em um objeto 'user'?",
      respostas: [
        "user->name",
        "user[name]",
        "user.name"
      ],
      correta: 2
    }
  ];
  
  const quiz = document.querySelector('#quiz')
  const template = document.querySelector('template')
  
  const corretas = new Set() // é um objeto que abre outras opções.
  const totalDePerguntas = perguntas.length
  const mostrarTotal = document.querySelector('#acertos span')
  mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas
  
  for(const item of perguntas) {
    const quizItem = template.content.cloneNode(true)
    quizItem.querySelector('h3').textContent = item.pergunta
  
  
    for(let resposta of item.respostas) {
      const dt = quizItem.querySelector('dl dt').cloneNode(true)
      dt.querySelector('span').textContent = resposta
      dt.querySelector('input').setAttribute('name', 'Perguntas-' + perguntas.indexOf(item))
      dt.querySelector('input').value = item.respostas.indexOf(resposta)
      dt.querySelector('input').onchange = (event) => {
        const estaCorreta = event.target.value == item.correta
  
        corretas.delete(item) // se ele encontrar o item, ele vai deletar, estou deletando o item para eu verificar se ele existe, e se ele existir pode colocar de novo. uma razão comum pode ser para garantir  que o Set corretas não contenha o item antes de executar a verificação estaCorreta. Sempre vou deletar os itens mas se for correto adiciono ele e vai fazendo um somatorio de itens.
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas 
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }
    // Para cada item ele vai rodar isso aqui três vezes.
  
  
    quizItem.querySelector('dl dt').remove()
  
  
    quiz.appendChild(quizItem)
    // Coloca a pergunta na tela
  }
  
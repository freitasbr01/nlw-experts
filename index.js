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
  
  const corretas = new Set()
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
  
        corretas.delete(item)
        if(estaCorreta) {
          corretas.add(item)
        }
  
        mostrarTotal.textContent = corretas.size + ' de ' + totalDePerguntas 
      }
  
      quizItem.querySelector('dl').appendChild(dt)
    }  
  
    quizItem.querySelector('dl dt').remove()
  
  
    quiz.appendChild(quizItem)
  }
  
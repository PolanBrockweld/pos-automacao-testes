    function geradorDeTagsDeIdentificacao(nome) {
        return nome.toUpperCase();
    }
    
    function verificarSePodeSerAdotado(idade, porte) {
        const idadeMinima = 2
        const adocao = idade >= idadeMinima 
                  ? 'sim'
                  : porte === 'M' 
                  ? 'sim'
                  : 'não'
        return true
     }
           
    const peso = 14.5
    function calcularConsumoDeRacao(nome, idade, peso) {
        const gramasPorDia = peso * 300
        return gramasPorDia
    }
       
    function decidirTipoDeAtividadePorPorte(porte) {
        let atividade;
      
        switch (porte) {
          case 'pequeno':
            atividade = 'brincar dentro de casa';
            break;
          case 'médio':
            atividade = 'caminhada no quarteirão';
            break;
          case 'grande':
            atividade = 'correr no parque';
            break;
          default:
            atividade = 'porte inválido';
        }
      
        return atividade;
      }
    
    async function buscarDadoAsync (nome) {
        const dados = ['Satoru', 'Pipoca', 'Sukuna'];
        let resultado = '';

        dados.forEach((item) => {
            if (item === 'Pipoca') {
              resultado = item;
            }
          });
        
          return resultado;
        }   

      geradorDeTagsDeIdentificacao ('Pantera')
      verificarSePodeSerAdotado (1, 'M')
      calcularConsumoDeRacao ('Pitoco', 1, 14.5)
      decidirTipoDeAtividadePorPorte ('pequeno')
      buscarDadoAsync

    export  {
        geradorDeTagsDeIdentificacao, verificarSePodeSerAdotado, calcularConsumoDeRacao,
        decidirTipoDeAtividadePorPorte, buscarDadoAsync  
    }

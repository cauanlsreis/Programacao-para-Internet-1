# Quem é esse Pokémon?

Este projeto é um jogo interativo inspirado no famoso quadro "Quem é esse Pokémon?" do anime Pokémon. O objetivo é adivinhar o nome do Pokémon a partir de sua silhueta.

## Como funciona

- Ao carregar a página, um Pokémon aleatório (entre os IDs 1 e 250) é sorteado e exibido como silhueta.
- O usuário deve digitar o nome do Pokémon no campo de texto e clicar em "Enviar" ou pressionar Enter.
- Se o nome estiver correto:
  - A imagem do Pokémon é revelada.
  - Uma mensagem de acerto é exibida.
- Se o nome estiver incorreto:
  - Uma mensagem de erro é exibida.
- Após qualquer tentativa (certa ou errada), o campo de texto e o botão "Enviar" são desabilitados, e o botão "Próximo Pokémon" é habilitado.
- Ao clicar em "Próximo Pokémon", um novo Pokémon é sorteado e o jogo recomeça.

## Tecnologias utilizadas

- HTML, CSS e JavaScript
- [PokeAPI](https://pokeapi.co/) para obter os nomes dos Pokémon
- Sprites oficiais dos Pokémon

## Como rodar

1. Baixe ou clone este repositório.
2. Abra o arquivo `index.html` em seu navegador.

Divirta-se tentando adivinhar todos os Pokémon!
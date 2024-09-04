# btcWalletgenerator
Este projeto é uma ferramenta de linha de comando (CLI) que permite gerar carteiras Bitcoin na rede de teste (testnet). Ele oferece opções para criar uma nova carteira ou utilizar um mnemônico existente.

## Funcionalidades
- Geração de Mnemônico: Gere um novo mnemônico de 12 palavras para criar uma nova carteira.
- Importação de Mnemônico: Use um mnemônico existente para recuperar uma carteira.
- Geração de Endereço: Gera um endereço Bitcoin e uma chave privada.
- QRCode: Exibe o QRCode do endereço gerado.

## Como Usar

Clone o repositório e instale as dependências:
```
git clone https://github.com/seu-usuario/nome-do-repositorio.git
cd nome-do-repositorio
npm install
```

Execute a aplicação utilizando o comando:

```
node src/generateWallet.js
```

Você será solicitado a escolher entre gerar uma nova carteira ou utilizar um mnemônico existente. Siga as instruções no terminal para gerar o endereço Bitcoin e obter a chave privada e o mnemônico correspondente.

## Exemplo de Saída


> Carteira criada com sucesso!  
> Endereço: 2N5zRtQCu5rGkAnfUbqFGBHjE5FjoRJgg3E  
> Chave Privada: Kz...e9P  
> Seed: dose deliver goose uniform exhaust basket lunch...  
> QRCode do endereço:  
>
>![address qrcode](img/qrcode.png)

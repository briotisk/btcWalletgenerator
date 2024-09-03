//importação das dependências
import bip32 from 'bip32';
import bip39 from 'bip39';
import bitcoin from 'bitcoinjs-lib';
import inquirer from "inquirer";
import qrcode from 'qrcode-terminal';

//definição da rede
const network = bitcoin.networks.testnet;

//derivação de carteiras HD
const path = `m/49'/1'/0'/0/0`;

async function main() {
  let mnemonic;

  // Perguntando ao usuário o que ele deseja
  const { option } = await inquirer.prompt([
    {
      type: 'list',
      name: 'option',
      message: 'O que você deseja?',
      choices: ['Gerar uma wallet nova', 'Gerar uma wallet com base em um mnemônico'],
    },
  ]);

  if (option === 'Gerar uma wallet com base em um mnemônico') {
    // Perguntando o mnemônico se essa opção foi escolhida
    const { userMnemonic } = await inquirer.prompt([
      {
        type: 'input',
        name: 'userMnemonic',
        message: 'Informe o mnemônico: '
      }
    ]);
    mnemonic = userMnemonic;
  } else {
    // Gerando um novo mnemônico se essa opção foi escolhida
    mnemonic = bip39.generateMnemonic();
  }

  // Criando a seed a partir do mnemônico
  const seed = bip39.mnemonicToSeedSync(mnemonic);

  // Criando a raiz da carteira HD
  let root = bip32.fromSeed(seed, network);

  // Criando uma conta - par de chaves privada-pública
  let account = root.derivePath(path);
  let node = account.derive(0).derive(0);

  let btcAddress = bitcoin.payments.p2pkh({
    pubkey: node.publicKey,
    network: network,
  }).address;

  console.log("Carteira criada com sucesso!");
  console.log("Endereço: ", btcAddress);
  console.log("Chave Privada: ", node.toWIF());
  console.log("Seed: ", mnemonic);
  console.log("QRCode do endereço: ");
  qrcode.generate(btcAddress, { small: true });
}

// Executando a função principal
main();

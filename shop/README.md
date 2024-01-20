# Ignite Shop

## :art: Design
O design da aplicação foi criado no Figma. Para acessar [clique aqui](https://www.figma.com/file/3pVwmSbjKMq8lotvYBkwnD/Ignite-Shop-%E2%80%A2-Projeto-React-(Copy)?type=design&node-id=2%3A12&mode=design&t=3IK6nMSdppbPcIT8-1).

![Design](https://github.com/dhianapereira/my-react-notebook/assets/40719464/2761f9c1-97d3-4005-ab14-58575fee32ce)

## :wrench: Ambiente de Desenvolvimento
Para evitar problemas é legal que seu ambiente de desenvolvimento esteja com
as seguintes versões:

| Ferramenta | Versão |
| --- | --- |
| Git | A mais recente |
| NodeJS | v18.17.1 |

## :compass: Guia de Instalação
> Com as ferramentas devidamente instaladas, execute os comandos abaixo

### **1. Clonar repositório**
```bash
git clone https://github.com/dhianapereira/my-react-notebook.git
```

### **2. Entrar na pasta do projeto**
```bash
cd my-react-notebook/shop
```

### **3. Instalar as dependências**
```bash
npm install
```

### **4. Criar arquivo de variáveis de ambiente**
Crie uma cópia do arquivo [`.env.example`](./.env.example) na raiz do projeto com o nome `.env.local` e preencha com os devidos valores.

#### Para obter a chave de API do Stripe, siga esse passo a passo:

1. Acesse a o site e crie uma conta [aqui](https://dashboard.stripe.com/login)
2. Dentro da plataforma crie uma nova conta com o nome **shop**

![Criar nova conta](https://github.com/dhianapereira/my-react-notebook/assets/40719464/17bb64d1-cc61-4c0d-b4a8-693b1b123b1c)

3. Clique na seção **Chaves de API** que está na página **Desenvolvedores** 

Para obter mais informações sobre o Stripe e como testar a aplicação sem utilizar um cartão de verdade basta acessar a documentação [aqui](https://stripe.com/docs).

![Seção de Desenvolvedor](https://github.com/dhianapereira/my-react-notebook/assets/40719464/58135a21-49e4-452d-948f-7f57e2041377)

### **5. Executar a aplicação**
```bash
npm run dev
```
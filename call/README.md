# Ignite Call

## :art: Design
O design da aplicação foi criado no Figma. Para acessar [clique aqui](https://www.figma.com/community/file/1161274296921389678).

![Design](https://github.com/dhianapereira/my-react-notebook/assets/40719464/bfb39b55-5cf5-4cd4-86d3-1a00353386e9)

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
cd my-react-notebook/call
```

### **3. Instalar as dependências**
```bash
npm install
```

### **4. Criar arquivo de variáveis de ambiente**
Crie uma cópia do arquivo [`.env.example`](./.env.example) na raiz do projeto com o nome `.env` e preencha com os devidos valores.

#### Para criar o OAuth com Google, siga esse passo a passo:

1. Acesse o Google Cloud Console [aqui](https://console.cloud.google.com/)
2. Dentro da plataforma crie um novo projeto

![Criar novo projeto](https://github.com/dhianapereira/my-react-notebook/assets/40719464/6137bdc5-d4a0-4c89-9351-9eff77aa36c8)

3. Agora vá em Tela de permissões OAuth e escolha a opção **Externo** e clique no botão **Criar**.

![Menu Tela de permissões](https://github.com/dhianapereira/my-react-notebook/assets/40719464/50f4c41d-8382-4ad1-8984-016cb90ea0c5)

![Tela de permissões](https://github.com/dhianapereira/my-react-notebook/assets/40719464/caf342d2-6083-437d-be43-7df53a834221)

Agora basta preencher as informações de nome da aplicação e e-mail de suporte e desenvolvedor. Após preencher, basta clicar no botão de **Salvar e continuar** e ir até a última etapa. 

**obs.:** Não é necessário preencher as etapas de **Escopos** e **Usuários de teste**.

4. A aplicação está em teste, para que tudo funcione é necessário enviar a aplicação para produção clicando no botão **Publicar aplicativo**:

![Botão publicar aplicativo](https://github.com/dhianapereira/my-react-notebook/assets/40719464/1af25257-d8c9-47cd-bf02-5edf53974429)

#### Para gerar as credenciais, siga esse passo a passo:

1. Acesse a guia credenciais e crie uma nova credencial clicando em **ID do cliente OAuth**:

![ID do cliente OAuth](https://github.com/dhianapereira/my-react-notebook/assets/40719464/63fc9d0b-2eda-4a8b-a5ed-edb6f38a5680)

2. Selecione **Aplicativo da Web** para o tipo de aplicativo e preencha os campos de URIs com os valores da imagem abaixo:

![Tipo de aplicativo](https://github.com/dhianapereira/my-react-notebook/assets/40719464/fd385c45-f603-4227-bccb-7af9c7f991e1)

![Campo de URIs](https://github.com/dhianapereira/my-react-notebook/assets/40719464/71c76897-6cee-4e15-a656-95e0d403423b)

Por fim, clique em **Criar** e adicione as variáveis de ambientes geradas no arquivo `.env`.

### **5. Ativar API do Google Calendar**

1. Acesse a guia de **API e Serviços ativados** e clique no botão de **Ativar APIs e serviços**:

![Botão de ativar API e serviço](https://github.com/dhianapereira/my-react-notebook/assets/40719464/5ac72d7f-afda-4940-bbb7-1614a299d1a0)

2. Procure pela opção **Google Calendar API**:

![Google Calendar API](https://github.com/dhianapereira/my-react-notebook/assets/40719464/a03b07f3-9a84-4034-ab98-6bc684cb704f)

3. Agora basta clicar em **Ativar**:

![Botão ativar](https://github.com/dhianapereira/my-react-notebook/assets/40719464/6b64111f-9cbf-4abf-a55c-acd63d7b316e)

### **6. Executar a aplicação**
```bash
npm run dev
```
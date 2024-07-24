# Image DOCX Generator

Este projeto é um servidor backend em Node.js que permite o upload de múltiplas imagens e gera um
documento .docx contendo essas imagens, com legendas baseadas no nome dos arquivos.

## Requisitos

-    Node.js (versão 12 ou superior)
-    npm (gerenciador de pacotes do Node.js)

## Instalação

1. Clone o repositório:

     ```bash
     git clone https://github.com/gabrielmg7/image-doc-app.git
     cd image-doc-app
     ```

2. Instale as dependências necessárias:

     ```bash
     npm install
     ```

## Uso

1. Inicie o servidor:

     ```bash
     node server.js
     ```

2. O servidor estará rodando na porta `3001`.

3. Faça uma requisição POST para `http://localhost:3001/generate-doc` com múltiplos arquivos de
   imagem. Você pode usar ferramentas como Postman ou implementar um frontend simples para isso.

### Endpoint

-    **POST /generate-doc**

     Este endpoint recebe múltiplos arquivos de imagem e retorna um documento .docx contendo essas
     imagens, com legendas baseadas no nome dos arquivos.

     **Parâmetros:**

     -    `images`: Arquivos de imagem (suporta múltiplos arquivos)

     **Resposta:**

     -    Um arquivo .docx para download.

## Estrutura do Projeto

-    `server.js`: Arquivo principal do servidor Node.js que lida com o upload de arquivos e a
     geração do documento .docx.

## Exemplo de Requisição

Aqui está um exemplo de como fazer uma requisição POST para o servidor usando cURL:

```bash
curl -X POST http://localhost:3001/generate-doc \
  -F 'images=@/caminho/para/sua/imagem1.jpg' \
  -F 'images=@/caminho/para/sua/imagem2.png'
```


## Dependências

-    [express](https://www.npmjs.com/package/express): Framework web para Node.js.
-    [express-fileupload](https://www.npmjs.com/package/express-fileupload): Middleware para lidar
     com uploads de arquivos.
-    [docx](https://www.npmjs.com/package/docx): Biblioteca para gerar documentos .docx.
-    [fs](https://nodejs.org/api/fs.html): Módulo nativo do Node.js para manipulação de arquivos.
-    [path](https://nodejs.org/api/path.html): Módulo nativo do Node.js para manipulação de caminhos
     de arquivos.

## Contribuição

Sinta-se à vontade para contribuir com melhorias ou correções. Para isso, faça um fork deste
repositório, crie uma branch para suas alterações e abra um pull request.

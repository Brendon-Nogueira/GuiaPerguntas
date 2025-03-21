# ASK ME ❓💬

ASK ME é uma aplicação de perguntas e respostas, semelhante ao Ask.fm, criada para fornecer uma interface simples e interativa onde os usuários podem fazer e responder perguntas.

## 🛠️ Tecnologias Utilizadas
Este projeto foi desenvolvido utilizando as seguintes tecnologias:

- **Express** — Framework para Node.js.
- **Sequelize** — ORM (Object Relational Mapping) para Node.js.
- **MySQL2** — Conector para MySQL e MariaDB.
- **EJS** — Motor de templates para a geração de views dinâmicas.
- **Nodemon** — Ferramenta para reiniciar automaticamente o servidor durante o desenvolvimento.
- **Method-Override** — Middleware para permitir o uso de verbos HTTP como PUT e DELETE em formulários HTML.

## 🚀 Instalação
Siga os passos abaixo para rodar o projeto localmente:

### 1️⃣ Clone este repositório
```bash
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### 2️⃣ Instale as dependências
```bash
npm install express --save
npm install sequelize --save
npm install mysql2 --save
npm install ejs --save
npm install nodemon --save
npm install method-override --save
```

### 3️⃣ Configuração do Banco de Dados
Certifique-se de ter um banco de dados MySQL configurado. Adapte as configurações de conexão no arquivo `config.json` do Sequelize:

```json
{
  "development": {
    "username": "seu-usuario",
    "password": "sua-senha",
    "database": "ask_me_db",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}
```

### 4️⃣ Execute as migrações
```bash
npx sequelize-cli db:migrate
```

### 5️⃣ Rodar o projeto
```bash
npm start
```
O servidor estará disponível em: [http://localhost:8088](http://localhost:8088)

## 🖥️ Estrutura do Projeto
```plaintext
.
├── config/             # Configurações do banco de dados
├── controllers/        # Lógica das rotas e controle de dados
├── models/             # Modelos do Sequelize
├── views/              # Arquivos EJS para renderização de páginas
├── public/             # Arquivos estáticos (CSS, imagens, etc.)
├── routes/             # Definição das rotas do Express
├── app.js              # Ponto de entrada da aplicação
└── README.md           # Documentação do projeto
```

## 📜 Licença
Este projeto está sob a licença MIT. Sinta-se à vontade para utilizá-lo e modificá-lo! 🚀

---

Feito com ❤️ por [Seu Nome](https://github.com/seu-usuario) 😃


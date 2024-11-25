import express from 'express';
import routes from './src/routes/postsroute.js';
// Importa o framework Express.js para criar a aplicação web.





const posts = [
{ id: 1, descrição : "Uma foto teste", imagem : "https://placecats.com/millie/300/150",},
{id: 2, descrição: 'Um lindo pôr do sol',  imagem: 'https://placebeard.it/400/200',}
 ];
// Define um array de posts como dados iniciais, caso não haja dados no banco de dados.

const app = express (); 
app.use(express.static('uploads'))
routes(app)
// Cria uma instância do Express.js, que será o núcleo da aplicação.


app.listen(3000, () => { 
 console.log ('servidor escutando...');
} );
// Inicia o servidor na porta 3000 e exibe uma mensagem no console.








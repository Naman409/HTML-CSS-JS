// console.log("Hello World");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title> CSS Display property</title>
      <style>
          
          
          header{
              margin: auto;
              border: 3px solid black;
              width: 125px;
              padding: 9px 10px 0px 8px;
          }
          /* jitna bada element hai utni space lega agar display inline kia to lekin agar display block kia to aap uski width set kr sakte ho */
          img{
              width: 80px;
              margin: auto;
              display: block;
  
          }
          h3{
              text-align: center;
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  
          }
          .box{
              border: 2px solid black;
              margin: 8px;
              padding: 6px;
              background-color:#eceaca;
              
          }
  
      </style>
  </head>
  <body>
      <header class="top">
          <img src="https://codewithharry.com/static/home/img/photo.png" alt="Image not found">
          <h3>Welcome to Naman's Blog</h3>
      </header>
      <div class="container">
          <div class="box">
              <h4 class="heading">Heading</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptas hic nostrum, tempore consequatur est, harum dolorem voluptatem, odit non maiores nobis facere eveniet consequuntur atque quae. Cupiditate iusto eveniet error sit nobis deleniti veritatis? Molestias quaerat dignissimos velit fugit laudantium aut quos itaque quisquam.</p>
          </div>
          <div class="box">
              <h4 class="heading">Heading</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptas hic nostrum, tempore consequatur est, harum dolorem voluptatem, odit non maiores nobis facere eveniet consequuntur atque quae. Cupiditate iusto eveniet error sit nobis deleniti veritatis? Molestias quaerat dignissimos velit fugit laudantium aut quos itaque quisquam.</p>
          </div>
          <div class="box">
              <h4 class="heading">Heading</h4>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam voluptas hic nostrum, tempore consequatur est, harum dolorem voluptatem, odit non maiores nobis facere eveniet consequuntur atque quae. Cupiditate iusto eveniet error sit nobis deleniti veritatis? Molestias quaerat dignissimos velit fugit laudantium aut quos itaque quisquam.</p>
          </div>
      </div>
  </body>
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

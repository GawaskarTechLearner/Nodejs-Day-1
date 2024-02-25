const http = require('node:http');
const fs = require('node:fs');
const path = require('node:path');
const hostname = '127.0.0.1';
const port = 3000;

const currentDate = new Date().toISOString().replace(/[-T:]/g, '').slice(0, -11);
const folderName = `${currentDate}`;
const server = http.createServer((req, res) => {
    console.log('req.url', req.url);
    switch(req.url){
     

    case "/files":
        try{
          const timestamp = new Date().toISOString();
          const currentDate = new Date().toISOString().replace(/[-T:]/g, '').slice(0, -11);
          const currentDateTime = new Date().toISOString().replace(/[-T:]/g, '').slice(0, -5);
           const folderName = `${currentDate}`;
            const filePath = path.join(folderName, `${currentDateTime}.txt`);


fs.mkdirSync(folderName);

//  timestamp content
fs.writeFileSync(filePath, timestamp);

        
            res.statusCode = 200;
        res.setHeader('Content-Type', 'text/plain');
        res.end('Filecreaed \n');
        }
       catch(err){
        console.log(err);
       }

       case "/filecount":
        try{
       const files = fs.readdirSync("./"+folderName);
       console.log(files);
       res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Files are listed!\n');
        }
        catch(err){
          console.log(err);
         }
  

    default:
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/plain');
        res.end('404 \n');

    }

  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/plain');
  res.end('Hello, World!\n');
});

////   case "/gawas":
     //       res.statusCode = 200;
 // res.setHeader('Content-Type', 'text/plain');
 // res.end('Gawaskar \n');
 // break;

 // case "/guvi":
 //   res.statusCode = 200;
 //   res.setHeader('Content-Type', 'text/plain');
 //   res.end('Guvi \n');
 //   break;

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
}); 
const http = require('http');
const port = 3000;


let Route = (req , res) => {
    const url = req.url.slice(1);
    let Routes = ['home' , 'about' , 'contact' , 'services'];

    if(!Routes.includes(url)){
        res.statusCode = 404;
        res.write(`error 404`);
        res.end();
    }else{
        res.statusCode = 200;
        res.write(`<h1>hello from ${url}</h1>`);
        res.end();
    }
    
}

const server = http.createServer((req , res)=> {
    Route(req , res);
})


server.listen(port , ()=> console.log(`server is working on port${port}`));
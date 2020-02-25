let express = require('express')
let app = express();

let bodyParser = require('body-parser');
let path = require('path');

app.use(express.static(path.join(__dirname,'public')));


app.get('/', (req,res) =>{
  res.sendfile(path.join(__dirname,'views','ui.html'));

});

app.get('/all', (req,res) =>{
  res.sendfile(path.join(__dirname,'views','ui.html'));

});


app.listen(3000, () => console.log('Server ready'))  




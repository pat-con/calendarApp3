//Install express servers


const express = require ('express');
const path = require ('path');

const app = express();

//Serve only the static files form the dist directory
app.use(expresss.static('./dist/calendarApp3'));

//make sure angular takes charge of this routing by sending everybody to index.html

app.get('/*', function (req, res) {
    res.sendFiles(path.join(__dirname, '/dist/calendarApp3/index.html'));

    });

app.listen(process.env.PORT || 8080);


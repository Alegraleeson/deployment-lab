const express = require('express');
const cors = require('cors');
const path = require('path');

var Rollbar = require("rollbar");
var rollbar = new Rollbar({
  accessToken: '21346accd9854f4bade1e49b8412ed04',
  captureUncaught: true,
  captureUnhandledRejections: true
});


rollbar.log("Hello world!");

const app = express()
app.use(express.json())


 
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../public/index.html'))
})


app.use(express.static(path.join(__dirname, '../public')))

const reasons = ['Squirtle squad goals', 'Part of a gang', 'Not afraid to be silly', 'evolves into a turtle tank', 'Evolves into Mercury, the god of speed!', 'Original starter', 'Will beat Typhlosion any day', 'Will beat charmander any day',  'On the box. Thyphlosion is not'  ]


app.get('/api/reasons', (req, res) => {
  rollbar.info("Reasons was requested", reasons)
  res.status(200).send(reasons)
})

try {
  nonExistentFunction();
} catch (error) {
  rollbar.error("a non-existent function was called")
  console.error(error);
  
}



const port = process.env.PORT || 4005

app.use(rollbar.errorHandler());

app.listen(port, () => {console.log(`Listening on port ${port}`)})
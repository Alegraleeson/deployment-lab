const express = require('express');
const cors = require('cors');
const path = require('path');

const app = express()


// The index.html file has been moved into my public folder so /public needs to be added to the path string. 
app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../public/index.html'))
})

// This is how we can connect the JS and CSS files so they can be accessed by Heroku.
app.use(express.static(path.join(__dirname, '../public')))

const port = process.env.PORT || 4005

app.listen(port, () => {console.log(`Listening on port ${port}`)})
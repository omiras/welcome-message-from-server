const http = require('http')
const url = require('url');
const greetings  = require('./greetings');
const writeLog = require('./logs').writeLog;


const app = http.createServer((req, res) => {
    if (req.url == '/') {
        const form = `
        <!DOCTYPE html>
        <html>
        <title>W3.CSS</title>
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <link rel="stylesheet" href="https://www.w3schools.com/w3css/4/w3.css">
        <body>
        
        <div class="w3-container w3-blue">
          <h2>Which language would you like to study?</h2>
        </div>
        
        <form class="w3-container" action="/greetings">
          <p>
          <label>First Name</label>
          <input class="w3-input" name="fname" type="text"></p>
          <p>
          <label>Last Name</label>
          <input class="w3-input" name="lname" type="text"></p>
          <p>
          <select class="w3-select" name="language">
    <option value="" disabled selected>Choose your option</option>
    <option value="php">PHP</option>
    <option value="nodejs">NodeJS</option>
    <option value="python">Python</option>
</select>
<p>
<button class="w3-btn w3-blue">Send</button></p>
        </form>
        
        </body>
        </html> 
        
        `
        res.setHeader('Content-Type', 'text/html');
        res.statusCode = 200;
        res.end(form);
    }

    else if (req.url.includes('/greetings')) {
      const queryObject = url.parse(req.url,true).query;
      let messages = greetings([{
        firstName: queryObject.fname,
        language: queryObject.language
      }])

      res.setHeader('Content-Type', 'text/html');
      res.statusCode = 200;
      res.end(messages[0].greeting);

      // write log
      writeLog(messages[0].greeting)
    }
})

app.listen(process.env.port || 3000)
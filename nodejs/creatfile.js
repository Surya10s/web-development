const fs = require('fs');
const path = require('path');
const filename = process.argv[2]
 fs.mkdirSync(filename);
const dirPath = path.join(__dirname, filename);
//create a file
fs.writeFileSync(`${dirPath}/app.html`,`
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="app.css">
    <title>Document</title>
</head>
<body>
<script src="app.js"></script>
</body>
</html>`);
fs.writeFileSync(`${dirPath}/app.css`, "/* be more creative */");
fs.writeFileSync(`${dirPath}/app.js`, "//maja pannu");
console.log("mudichachu paa :)")
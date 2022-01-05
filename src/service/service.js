//обрабатывает данные
const personPath = '../../dataAcces/persons.json';
const fs = require('fs');


function toReadFile(path = personPath) {
    let fileContent = fs.readFileSync(path, 'utf8', function(err, contents) {
        if(err){
           throw err;
        }
    });
    return JSON.parse(fileContent);
}
function toWriteFile(data, path = personPath) { 
    fs.writeFileSync(path, data, (err) => {
        if (err)
          throw err;
        else {
          console.log("File written successfully\n");
        }
    });
}

module.exports = {toReadFile, toWriteFile};


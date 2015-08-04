var fs = require('fs')

var getFileContent = function (err, content) {
    
    if (err) {
        console.error(err)
    } else {
        console.log('Content of this file:\n\n%s', content)
    }
}

// __filename returns the absolute path of this file

fs.readFile(__filename, { encoding: 'utf8' }, getFileContent)


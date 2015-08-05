var fs = require('fs')
var path = require('path')

// __dirname returns the current directory this file resides in

var dir = path.join(__dirname, 'a-chaining-calls')

// __filename returns the absolute path for the current file

var file = __filename
var target = path.join(dir, 'write-target')


var handleError = function (err) {
    console.error(err)
}

fs.mkdir(dir, function (err) {
    
    if (err) {
        handleError(err)
    } else {
        fs.readFile(file, function (err, content) {
            if (err) {
                handleError(err)
            } else {
                fs.writeFile(target, content, function (err) {
                    if (err) {
                        handleError(err)
                    } else {
                        console.log('Write completed successfully')
                    }
                })
            }
        })
    }
})




const shell  = require('shelljs')
shell.cp("-R","./public/","./dist/")
shell.cp("-R","./view/","./dist/")
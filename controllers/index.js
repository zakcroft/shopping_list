
["home", "user"].forEach(function(path){
        module.exports[path] = require("./" + path+"Controller");
})


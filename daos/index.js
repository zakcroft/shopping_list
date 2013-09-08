["user"].forEach(function (path) {
    module.exports[path] = require("./" + path + "Dao");
})

["user", "list"].forEach(function (path) {
    module.exports[path + "Dao"] = require("./" + path + "Dao");
})

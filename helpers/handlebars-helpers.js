Handlebars = require('handlebars')

var registerAllHandlebarsHelpers = function(){

    Handlebars.registerHelper('getFirstVal', function (first, second) {
        return first || second;
    });

    Handlebars.registerHelper('add-error-class', function (errorObj) {
        if(errorObj){
            return  "has-error";
        }
    });

    Handlebars.registerHelper('add-error-msg', function (errorObj) {
        if (errorObj) {
            return  new Handlebars.SafeString("<span class='error-msg'>" + errorObj.msg + "</span>");
        }
    });

    Handlebars.registerHelper('add-large-error-msg', function (message) {
        if (message) {
            return  new Handlebars.SafeString("<span class='large-error-msg'>" + message+ "</span>");
        }
    });

}

module.exports = {
    registerAllHandlebarsHelpers: registerAllHandlebarsHelpers
}




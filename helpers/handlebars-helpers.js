Handlebars = require('handlebars')


var registerAllHandlebarsHelpers = function(){

    Handlebars.registerHelper('getFirstVal', function (first, second) {
        return first || second;
    });

    Handlebars.registerHelper('add-has-error-class', function (errorObj) {
        if(errorObj){
            return  "has-error";
        }
    });

    Handlebars.registerHelper('add-error-msg', function (errorObj) {
        if (errorObj) {
            return  new Handlebars.SafeString("<span class='form-input-error'>" + errorObj.msg + "</span>");
        }
    });


}


module.exports = {
    registerAllHandlebarsHelpers: registerAllHandlebarsHelpers
}




// Grabs the Laravel CSRF token from the cookie XSRF-TOKEN, returns as dynamic value
var CsrfToken = function() {
    this.evaluate = function(context) {
        var request = context.getCurrentRequest(),
            cookies = (request.getHeaderByName('Cookie') || '').split(';'),
            token = null;
        
        for (var index in cookies) {
            if (cookies[index].indexOf('XSRF-TOKEN') == 0) {
                token = cookies[index].split('=')[1]
            }
        }
        
        return decodeURIComponent(token);
    }
}

CsrfToken.identifier = "com.pyartisan.LaravelCsrfToken";
CsrfToken.title = "Laravel CSRF Token";

registerDynamicValueClass(CsrfToken)
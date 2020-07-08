// Grabs the Laravel CSRF token from the cookie XSRF-TOKEN, returns as dynamic value
var CsrfToken = function() {
    this.evaluate = function(context) {
        var request = context.getCurrentRequest(),
            cookies = (request.getHeaderByName('Cookie') || '').split(';'),
            token = null;
        
        //fix some time order or the cookie change result in blank space
        //apply trim will fix the issue
        for (var index in cookies) {
        	var cookieName = cookies[index].split('=')[0].trim();

        	if(cookieName == 'XSRF-TOKEN'){
        		console.log( token =cookies[index].split('=')[1].trim());	
        	}
        }
        
        return decodeURIComponent(token);
    }
}

CsrfToken.identifier = "net.fangstar.LaravelCsrfToken";
CsrfToken.title = "Laravel CSRF Token";

registerDynamicValueClass(CsrfToken)

# Laravel CSRF Token (Paw Extension)

Creates a dynamic value from Laravel's CSRF token cookie. Using this dynamic value for header `XSRF-TOKEN` allows making POST requests to Laravel views without getting a TokenMissmatch error.

## License

This Paw Extension is released under the [MIT License](LICENSE). Feel free to fork, and modify!

## Tutorial

1. Copy this extension project to your PAW extension folder;
2. Add the header name: X-XSRF-TOKEN, then right click on the header value field, slide to Extensions, choose the Laravel CSRF TOKEN.
3. Make a GET request first.
4. The POST request will work.

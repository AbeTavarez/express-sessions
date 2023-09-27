# Cookies and Sessions

## Reading

- Using HTTP cookies:
https://developer.mozilla.org/en-US/docs/Web/HTTP/Cookies

- CORS:
https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS


#### Cookies vs Local Storage

Cookies are small text files used to store user information on the user's computer.

Cookies are primarily for reading server-side, local storage can only be read by the client-side. 

Cookies give you a limit of 4096 bytes (4095, actually) — it's per cookie. Local Storage is as big as 10MB per domain.

LocalStorage is an implementation of the Storage Interface. It stores data with no expiration date, and gets cleared only through JavaScript, or clearing the Browser Cache / Locally Stored Data — unlike cookie expiry.

An example of using cookies is storing the user's authentication token when they are logged in. The server needs to have access to that cookie to authenticate the user in later requests and retrieve data or process actions based on who the user is.

An example of using local storage is storing the user's color mode preference (light or dark mode). This piece of information is generally not necessary for the server to know, and is used to ensure that the user's preference is reflected on the website.

Which Should You Choose?

1. If you need to store data that is accessible for both the server and the client, use cookies. Otherwise, use local storage.
2. If you need to store larger data, use local storage.
3. If you need to store data that does not expire, use local storage.
4. If you need easy-to-use methods to access and modify the data stored on the client, use local storage.

#### Cookies and Session Cookies

Cookies and sessions are used by websites to store users' data across different pages of the site. The key difference between sessions and cookies is that sessions are saved on the server side while cookies are saved on the client side. 

However!

- cookie-session: This module stores the session data on the client within a cookie. https://www.npmjs.com/package/cookie-session

This module stores the session data on the client within a cookie, while a module like express-session stores only a session identifier on the client within a cookie and stores the session data on the server, typically in a database.

The following points can help you choose which to use:

1. cookie-session does not require any database / resources on the server side, though the total session data cannot exceed the browser's max cookie size.
2. cookie-session can simplify certain load-balanced scenarios.
3. cookie-session can be used to store a "light" session and include an identifier to look up a database-backed secondary store to reduce database lookups.

- express-session: This module stores only a session identifier on the client within a cookie and stores the session data on the server, typically in a database. https://www.npmjs.com/package/express-session

- cookie-parser: Parse Cookie header and populate req.cookies with an object keyed by the cookie names. Optionally you may enable signed cookie support by passing a secret string, which assigns req.secret so it may be used by other middleware.
https://www.npmjs.com/package/cookie-parser

Steps:

1. Set a Cookie manually, check cookie on browser, and on the next request, then the server.
res.setHeader('Set-Cookie', "user=user-1; loggedIn=false;"); //1
 res.setHeader('Set-Cookie', `user=user1; loggedIn=false; Max-Age=${Date.now() + 1000000};`); //1
console.log(req.get('Cookie')) //1
console.log(req.get('Cookie').split(';')[2]) //1

2. easier way to read cookie:
cookie-parser
app.use(cookieParser()); // parse cookie save on the client
console.log(req.cookies);

3. express-session
- install, import, config

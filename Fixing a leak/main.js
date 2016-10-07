function urlToPath(url) {
  var path = require("url").parse(url).pathname;
  var decoded = decodeURIComponent(path);
  var re2 = /(\/|\\)\.\.(\/|\\|$)/g;
  if (re2.test(decoded)) return "Access denied!"
  return decoded;
}

console.log(urlToPath("http://myhostname:8000/../.config/config/google-chrome/Default/Web%20Data"));
console.log(urlToPath("http://myhostname:8000/../.ssh/id_dsa"));
console.log(urlToPath("http://myhostname:8000/../../../etc/passwd"));
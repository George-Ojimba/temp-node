// Http module

const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === '/') {
    res.end(`Welcome to the home page`);
  }
  if (req.url === '/about') {
    res.end(`welcome to the about page`);
  }
  res.end(`
  <h1>Oooops</h1>
  <p>We can't seem to find the page you are looking for</p>
  <a href="/">Back to Home </a>
  `);
});

server.listen(5000);
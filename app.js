// app.js
const http = require('http');
const os = require('os');

const server = http.createServer((req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.write('<html>');
  res.write('<body>');
  res.write('<img src="https://cratedb.com/hubfs/CrateDB-logo-blue-white.svg" alt="CrateDB Logo" />');
  res.write('<h1>Hello World</h1>');
  res.write(`<p>Current Time: ${new Date()}</p>`);
  res.write('<h2>Request Headers:</h2>');
  res.write('<pre>' + JSON.stringify(req.headers, null, 2) + '</pre>');
  res.write('</body>');
  res.write('</html>');
  res.end();
});

const PORT = process.env.PORT || 3000;

server.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
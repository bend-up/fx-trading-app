const http = require('http')
, fs   = require('fs')
, PORT = process.argv[2] || 8080
, HOST = process.argv[3] || '127.0.0.1'
, Pairs = require('./Pairs');

let fxData = new Pairs();

http.createServer(function (req, res) {
  if (req.url == '/events') {
    res.writeHead(200, { 'Content-Type'  : 'text/event-stream'
    , 'Cache-Control' : 'no-cache'
    , 'Connection'    : 'keep-alive'
  });
  console.log('Client connect');
  
  var t = setInterval(function () {
    console.log('Send data');
    const data = createFxData();
    res.write('data: ' + JSON.stringify(data) + '\n\n');
  }, 1000);

  res.socket.on('close', function () {
    console.log('Client leave');
    clearInterval(t);
  });

} else {
  res.writeHead(200, {'Content-Type': 'text/html'});
  res.write(fs.readFileSync(__dirname + '/templates/index.html'));
  res.end()
}
}).listen(PORT, HOST);

const createFxData = () => {
  const pair = fxData.getPair(fxData.mutateRandomPair());
  console.log(pair);
  return pair;
}

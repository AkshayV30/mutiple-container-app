const express   = require ('express');
const redis = require ('redis');
// const process = require('process');  //to deliberately crashing the server

const app = express();
const client = redis.createClient({
    host: 'redis-server' ,
    port: 6379
});
client.set('count', 0);

app.get('/', (req, res ) => {
    // process.exit(0);   //exit status code 0 to close the process
    client.get('count', (err, count) => {
        res.send('Number of visit : ' + count);
        client.set('count', parseInt(count) + 1);
    });
});


app.listen(8081, () => {
    console.log('listening here');
});


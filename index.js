const app = require('./server/app');

// Starting the server
const port = process.env.PORT || 3030;
app.listen(port);
console.log(`Server listening at ${port}`);



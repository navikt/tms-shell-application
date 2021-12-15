const express = require('express');
const path = require('path');

const app = express();

app.use('/dist', express.static('dist'));
app.get(/^\/(?!.*dist).*$/, (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

const port = 8080;
app.listen(port, () => console.log(`Listening on port ${port}`));

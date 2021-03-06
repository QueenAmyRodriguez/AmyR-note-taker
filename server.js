const express = require('express');
const noteRoutes = require('./routes/apiRoutes');
const htmlRoutes = require('./routes/htmlRoutes');


const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.static('public'));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/api', noteRoutes);
app.use('/', htmlRoutes);


app.listen(PORT, () => {
    console.log("Server works!")
});
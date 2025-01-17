const express = require('express');
const { result } = require('lodash');
const app = express();
const mongoose = require('mongoose');
const dbURI = 'mongodb+srv://elvin:test1234@nodeblog.wlkfc.mongodb.net/Blog?retryWrites=true&w=majority&appName=NodeBlog';
const blogRoutes = require('./routes/blogRoutes.js');




mongoose.connect(dbURI)
    .then((result) => app.listen(3000))
    .catch((err) => console.log(err));

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));

app.set('view engine', 'ejs');

app.get('/about', (req, res) => {
    res.render('about', { title: 'About' });
});

app.get('/', (req, res) => {
    res.redirect('/blogs');
});

app.use('/blogs', blogRoutes);

app.use((req, res) => {
    res.status(404).render('404', { title: 'Not found' });
});
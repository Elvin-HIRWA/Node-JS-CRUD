const Blog = require('../models/blog.js')


const index = (req, res) => {
    Blog.find().sort({ createdAt: -1 })
        .then((result) => {
            res.render('blogs/index', { title: 'Home', blogs: result });
        })
        .catch((err) => {
            console.log(err);
        })
}

const getCreateView = (req, res) => {
    res.render('blogs/create', { title: 'Create' });
}

const create = (req,res) => {
    const blog = new Blog(req.body);

    blog.save()
        .then((result) => {
            res.redirect('/')
        })
        .catch((err) => {
            console.log(err);
        })
}

const details = (req,res) => {
    const id = req.params.id
    Blog.findById(id)
        .then(result => {
            res.render('blogs/details', { title: 'Blog Details', blog: result })
        })
        .catch((err) => {
            res.status(404).render('404', { title: 'Not found' });
        })
}

const deleteBlog = (req,res) => {
    const id = req.params.id
    Blog.findByIdAndDelete(id)
        .then(result => {
            res.json({ redirect: '/' })
        })
        .catch((err) => {
            console.log(err);
        })
}


module.exports = {
    deleteBlog,
    details,
    create,
    getCreateView,
    index
}
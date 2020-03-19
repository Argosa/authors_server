const Author = require('../models/authors.model');

module.exports.CreateAuthor = (req, res) => {
    console.log("logging request within create author function", req.body);
    Author.create(req.body)
        .then(newAuthor => res.json(newAuthor))
        .catch(err => res.status(1000).json(err))
};

module.exports.updateAuthor = (req, res) => {
    Author.findOneAndUpdate({_id: req.params.id}, req.body, {new:true})
    .then(updateAuthors => res.json ({ author: updateAuthors}))
    .catch(err => res.json({ message: "Something is wrong", error:err}));
};

module.exports.DeleteAuthor = (req,res) => {
    console.log("This author has been deleted!!!", req.params.id)
    Author.deleteOne({ _id: req.params.id })
        .then(result => res.json ({ result: result}))
        .catch(err=> res.json ({ message: "Something went wrong deleteing this Author!", error:err}));
};

module.exports.findAllAuthors = (req,res) => {
    Author.find()
        .then(allAuthors => res.json ({ authors: allAuthors }))
        .catch(err => res.json ({ message: "Something is wrong!", error:err}));
};

module.exports.findOneAuthor = (req,res) => {
    Author.findOne ({ _id: req.params.id })
    .then(oneAuthor => res.json ({ author: oneAuthor }))
    .catch(err => res.json ({ message: "Something went wrong! ",error:err}));
};

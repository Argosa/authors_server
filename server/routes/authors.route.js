const AuthorsController = require("../controllers/authors.controller");

module.exports = app => {
    app.get("/api/authors", AuthorsController.findAllAuthors);
    app.get("/api/authors/:id", AuthorsController.findOneAuthor);
    app.put("/api/authors/update/:id", AuthorsController.updateAuthor);
    app.post("/api/authors/new", AuthorsController.CreateAuthor);
    app.delete("/api/authors/delete/:id", AuthorsController.DeleteAuthor);
};
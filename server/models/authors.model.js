const mongoose = require("mongoose");

const AuthorSchema = new mongoose.Schema ({
    firstName: {
        type: String,
        required: [true, "Author is required"],
        minlength: [3, "Author name must be at least 3 characters"]
    },

    lastName: {
        type: String,
        required: [true, "Last name is required"],
        minlength: [3, "Author last name must be at least 3 characters"]
    },

}, {timestamps: true});

module.exports = mongoose.model("Author", AuthorSchema);


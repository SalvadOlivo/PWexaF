const mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var UserSchema = Schema({
    username: {
        type: String,
        required: true,
        unique: true
    },
    first_name: String,
    last_name: String,
    direccion: String,

    tamano: {
        type: String,
        required: true
    },
     porciones: String,
    tipoMasa: String,
    extras: String,   


}, {
    timestamps: true
});

module.exports = mongoose.model("User", UserSchema);
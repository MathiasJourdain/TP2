const userSchema = new mongoose.Schema({
    nom: {
        type: String,
        required: true,
        unique: false
    },
    prenom: {
        type: String,
        required: true,
        unique : false 
    },
    watchlist: {
        type: Array,
        item: {
            type: String,
            required: true,
            unique: false
        },
        nomFilm: {
            type: String,
            required: true,
            unique: false
        }
    }
});
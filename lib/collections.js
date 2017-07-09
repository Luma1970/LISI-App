import SimpleSchema from 'simpl-schema';

Images = new Mongo.Collection("images");
Places = new Mongo.Collection("places");

Places.attachSchema(new SimpleSchema ({
    titolo: {
        type: String,
        label: "Titolo",
        max: 30
    },
    luogo: {
        type: String,
        label: "Provincia",
        max: 30
    },
    indirizzo: {
        type: String,
        label: "Indirizzo/modo di arrivarci",
        max: 200
    },
    tipologia: {
        type: String,
        label: "Tipologia",
        max: 30 
    },
}));
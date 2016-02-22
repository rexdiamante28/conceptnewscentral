/**
 * Created by NicoloEngles on 2/16/2016.
 */
Categories = new Mongo.Collection("categories");

Categories.attachSchema (new SimpleSchema({

    'name': {
        type: String,
        optional: false
    },
    'slug': {
        type: String,
        optional: false
    },
    'description': {
        type: String,
        optional: true
    }
}));


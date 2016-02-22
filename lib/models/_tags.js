/**
 * Created by NicoloEngles on 2/19/2016.
 */

Tags = new Mongo.Collection("tags");

Tags.attachSchema (new SimpleSchema({

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


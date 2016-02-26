Rss = new Mongo.Collection('rss');

Rss.attachSchema(new SimpleSchema({

    'source': {
        type: String,
        optional: false
    },
    link: {
        type: String,
        optional: false
    }

}))
Feeds = new Mongo.Collection('feeds');

Feeds.attachSchema(new SimpleSchema({

    'title': {
        type: String,
        optional: false
    },
    link: {
        type: String,
        optional: false
    },
    'pubDate': {
        type: Date,
        optional: false
    },
    source: {
        type: String,
        optional: false
    },
    createdDate: {
        type: Date,
        optional: false
    }

}))
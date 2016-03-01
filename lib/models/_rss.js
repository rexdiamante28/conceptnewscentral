Rss = new Mongo.Collection('rss');

Rss.attachSchema(new SimpleSchema({

    link: {
        type: String,
        optional: false
    },
    createdDate: {
        type: Date,
        optional: false
    }

}))
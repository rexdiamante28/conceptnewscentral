Articles = new Mongo.Collection('articles');

Articles.attachSchema(new SimpleSchema({

    'title': {
        type: String,
        optional: false
    },
    'pubDate': {
        type: String,
        optional: false
    },
    'body': {
        type: String,
        optional: false
    },
    author: {
        type: String,
        optional: true
    },
    images:{
        type: [Object],
        optional: true
    },
    "images.$.url": {
        type: String
    },
    postedBy: {
        type: String,
        optional: true
    },
    location: {
        type: String,
        optional: true
    },
    level: {
        type: Number,
        optional: true
    },
    status: {
        type: String,
        optional: false
    },
    isBroadCasted: {
        type: Boolean,
        optional: true
    },
    categories: {
        type: [Object],
        optional: true
    },
    tags: {
        type: [Object],
        optional: true
    }

}))
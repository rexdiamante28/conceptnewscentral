Keywords = new Mongo.Collection('keywords');

Keywords.attachSchema(new SimpleSchema({

    'name': {
        type: String,
        'label': 'Keyword',
        optional: false,
    },
    createdDate: {
        type: Date,
        optional: false
    }
}));
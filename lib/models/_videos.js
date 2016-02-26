/**
 * Created by NicoloEngles on 2/24/2016.
 */
Videos = new Mongo.Collection('videos');

Videos.attachSchema(new SimpleSchema({
    'link':{
        type: String
    },
    'autoplay':{
        type: Number
    },
    'type':{
        type: String
    }
}))
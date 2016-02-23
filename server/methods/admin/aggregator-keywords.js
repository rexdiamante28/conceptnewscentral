Meteor.startup(function () {
    console.log('Starting server ...')  ;
    //console.log(Keywords.find({},{skip: 0, limit: 10}).fetch())
})

Meteor.methods({
    'insertKeyword': function (keyword) {
        Keywords.insert({
            name: keyword,
            createdDate: new Date()
        })
    },
    'getPageCount': function () {
        var keywordsCount = Keywords.find().count();
        return Math.ceil(keywordsCount/10);
    },
    'deleteKeyword': function (id) {
          Keywords.remove(id);
    },
    'removeAllKeywords': function () {
        Keywords.remove({});
    }
})


Meteor.publish('getKeywordsPub', function (skips) {
    var skip = parseInt(skips)
    return Keywords.find({},{sort:{createdDate: -1},skip: skip, limit: 10})
})
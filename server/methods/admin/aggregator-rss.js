Meteor.methods({
    'insertRss': function (rss) {
        Rss.insert(rss);
    },
    'updateRss': function (rss) {
        Rss.update({_id: rss._id}, {$set:{source:rss.source,link: rss.link}})
    },
    'deleteRss': function (rss) {
        Rss.remove(rss);
    }
})

Meteor.publish('getRssPub', function (skips) {
    var skip = parseInt(skips);
    return Rss.find({},{sort:{createdDate: -1},skip: skip, limit: 10})
})
Meteor.methods({
    'getSourceName': function (id) {
        return Rss.findOne({_id: id}).source
    },
    'scrape': function () {
        console.log('starting scraper...');

        var totalFeeds = 0;


        Rss.find().map(function (rss) {

            var FeedData = Scrape.feed(rss.link);

            FeedData.items.map(function (item) {

                if(Feeds.find({link: item.link,title: item.title}).count() === 0){
                    Feeds.insert({
                        title: item.title,
                        pubDate: item.pubDate,
                        link: item.link,
                        source: rss.source,
                        createdDate: new Date()
                    })

                    totalFeeds += 1;
                }
            })
        })

        return  totalFeeds
    },
    'removeAllFeeds': function () {
        Feeds.remove({})
    }
})

Meteor.publish('getFeedsPub', function (skips) {
    var skip = parseInt(skips);
    return Feeds.find({},{skip: skip, limit: 10});
})
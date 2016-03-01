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

                var cleanLink = item.link.replace('https://www.google.com/url?rct=j&sa=t&url=', '');

                cleanLink = cleanLink.substr(0, cleanLink.indexOf('&ct=ga&cd='));

                var feed = Scrape.website(cleanLink);

                Feeds.insert(feed);

                totalFeeds+=1;
            })
        })

        return  totalFeeds
    },
    'removeAllFeeds': function () {
        Feeds.remove({})
    }
})

Meteor.publish('getFeedsPub', function (query,skips) {
    var skip = parseInt(skips);
    if(query === ''){
        return Feeds.find({},{skip: skip, limit: 10, sort:{pubDate: -1}});
    }
    return Feeds.find({ $or: [ { title: { $regex: query, $options: 'i' } }, { source: { $regex: query, $options: 'i' } } ] },{skip: skip, limit: 10, sort:{pubDate: -1}});
})
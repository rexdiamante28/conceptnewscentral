UI.registerHelper('formatDate', function(context, options) {
    if(context)
        return context.toLocaleString()
});

if(Meteor.isClient){
    Template.aggregator_archive.rendered = function () {
        Session.set('skips', 0)
        Session.set('query', '');


        Deps.autorun(function () {
            subs = Meteor.subscribe('getFeedsPub', Session.get('query'), Session.get('skips'));
        })
    }

    Template.aggregator_archive.destroyed = function () {
        subs.stop();
    }


    Template.feedsTable.helpers({
        'feeds': function () {
            return Feeds.find({},{$sort:{pubDate: -1}})
        },
        'feedsCount': function () {
            if(Feeds.find().count() > 0) {
                return true
            } else {
                return false
            }
        }
    })


    Template.aggregator_archive.events({
        'click #fetchBtn': function (event) {

            if(!$(event.target).hasClass('disabled')){
                $(event.target).addClass('disabled');
                $(event.target).html('Please wait ...  <i class="fa fa-spinner fa-spin"></i>');

                Meteor.call('scrape', function (err, result) {
                    alertify.success('Number of new feeds found ' + result + '.')

                    $(event.target).removeClass('disabled');
                    $(event.target).html('Fetch');
                })
            }
        },

        'submit #searchForm': function (event, template) {
            event.preventDefault();

            var searchWord = template.find('#searchInput').value;

            Session.set('query', searchWord);

        },

        'click .prevBtn': function () {
            if(Session.get('skips') >= 10) {
                Session.set('skips', Session.get('skips') - 10);
            }
        },

        'click .nextBtn': function () {
            if(Feeds.find().count() <= 0){
                return
            }
            Session.set('skips', Session.get('skips') + 10);
        }
    })
}


if(Meteor.isServer){
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
}
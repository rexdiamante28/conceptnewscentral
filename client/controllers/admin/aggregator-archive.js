UI.registerHelper('formatDate', function(context, options) {
    if(context)
        return context.toLocaleString()
});

Template.aggregator_archive.rendered = function () {
    Session.set('skips', 0)
}

Template.feedsTable.helpers({
    'feeds': function () {
        return Feeds.find({},{$sort:{pubDate: -1}})
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
    'click .prevBtn': function () {
        if(Session.get('skips') >= 10) {
            Session.set('skips', Session.get('skips') - 10);
        }
    },
    'click .nextBtn': function () {
        Session.set('skips', Session.get('skips') + 10);
    }
})
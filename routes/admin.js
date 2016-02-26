/**
 * Created by NicoloEngles on 2/15/2016.
 */


Router.route('/admin/', function () {
    this.render('adminIndex');
    this.layout('adminLayout');
});

Router.route('/admin/addnewuser', function () {
    this.render('addNewUser');
    this.layout('adminLayout');
});

Router.route('/admin/allusers', function () {
    this.render('allUsers');
    this.layout('adminLayout');
});

Router.route('/admin/newscategories', function () {
    this.render('newsCategories');
    this.layout('adminLayout');
});

Router.route('/admin/newpost', function () {
    this.render('newPost');
    this.layout('adminLayout');
});

Router.route('/admin/tags', function () {
    this.render('newsTags');
    this.layout('adminLayout');
});

Router.route('/admin/aggregator-keywords', function () {

    this.render('aggregator_keywords');
    this.layout('adminLayout');

    Deps.autorun(function () {
        Meteor.subscribe('getKeywordsPub', Session.get('skips'));
    })
});

Router.route('/admin/profile', function () {

    Meteor.subscribe('ProfileInfo');

    this.render('profile');
    this.layout('adminLayout');
});

Router.route('/admin/allposts', function () {

    Meteor.subscribe('getCategories');
    Meteor.subscribe('getAllArticles');

    this.render('allposts');
    this.layout('adminLayout');
});
Router.route('/admin/aggregator-rss', function () {

    this.render('aggregator_rss');
    this.layout('adminLayout');

    Deps.autorun(function () {
        Meteor.subscribe('getRssPub', Session.get('skips'));
    })
});

Router.route('/admin/aggregator-archive', function () {

    this.render('aggregator_archive');
    this.layout('adminLayout');

    Deps.autorun(function () {
        Meteor.subscribe('getFeedsPub', Session.get('skips'));
    })
});

Router.route('/admin/dump', function () {
    this.render('app_dump');
    this.layout('adminLayout');
})
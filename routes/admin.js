/**
 * Created by NicoloEngles on 2/15/2016.
 */

var OnBeforeActions;

OnBeforeActions = {
    loginRequired: function() {
        if (!Meteor.userId()) {
            this.render('LoginForm');
        } else {
            this.next();
        }
    }
};

Router.onBeforeAction(OnBeforeActions.loginRequired, {
    only: [
        'admin',
        'admin.aggregator-keywords',
        'admin.aggregator-rss',
        'admin.aggregator-archive',
        'admin.addnewuser',
        'admin.allusers',
        'admin.newscategories',
        'admin.newpost',
        'admin.tags'
    ]
});


Router.route('/admin', function () {
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

Router.route('/admin/aggregator-rss', function () {

    this.render('aggregator_rss');
    this.layout('adminLayout');

    Deps.autorun(function () {
        Meteor.subscribe('getRssPub', Session.get('query'),Session.get('skips'));
    })
});

Router.route('/admin/aggregator-archive', function () {

    this.render('aggregator_archive');
    this.layout('adminLayout');

});
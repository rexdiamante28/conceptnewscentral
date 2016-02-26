/**
 * Created by NicoloEngles on 2/15/2016.
 */


Router.route('/', function () {

    Meteor.subscribe("getAllArticles");
    Meteor.subscribe("getAllVideos");
    Meteor.subscribe("getCategories");

    this.render('siteHomePage');
    this.layout('siteLayout');
});

Router.route('/category', function () {

    Meteor.subscribe("getAllArticles");
    Meteor.subscribe("getAllVideos");
    Meteor.subscribe("getCategories");

    this.render('sitePerCategory');
    this.layout('siteLayout');
});

Router.route('/viewnews', function () {

    Meteor.subscribe("getAllArticles");
    Meteor.subscribe("getAllVideos");
    Meteor.subscribe("getCategories");

    this.render('siteNewsView');
    this.layout('siteLayout');
});



Router.route('/concept_admin', function () {
    this.render('loginForm');
    this.layout('blankLayout');
});
/**
 * Created by NicoloEngles on 2/15/2016.
 */


Router.route('/', function () {
    this.render('siteHomePage');
    this.layout('siteLayout');
});

Router.route('/category', function () {
    this.render('sitePerCategory');
    this.layout('siteLayout');
});

Router.route('/viewnews', function () {
    this.render('siteNewsView');
    this.layout('siteLayout');
});



Router.route('/concept_admin', function () {
    this.render('loginForm');
    this.layout('blankLayout');
});
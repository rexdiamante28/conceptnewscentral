/**
 * Created by NicoloEngles on 2/15/2016.
 */


Router.route('/', function () {
    this.render('siteHeader');
    this.layout('siteLayout');
});


Router.route('/concept_admin', function () {
    this.render('loginForm');
    this.layout('blankLayout');
});
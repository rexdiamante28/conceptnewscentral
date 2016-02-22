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


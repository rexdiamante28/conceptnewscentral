/**
 * Created by NicoloEngles on 2/17/2016.
 */
if(Meteor.isClient){
    Template.newPost.onRendered(function(){
        $('.active').removeClass('active');
        $('#l3_2').addClass('active');

        $('#textEditor').ckeditor();
        CKEDITOR.replace('textEditor',{
            height: 500
        });
    })
    Template.newPost.onDestroyed(function(){
        if (CKEDITOR.instances.textEditor) CKEDITOR.instances.textEditor.destroy();
    })




    //helpers
    Template.postForm.helpers({
        Categories : function () {
            return Categories.find({});
        },
        Authors : function () {
            return Users.find({level:"Author"});
        },
        Tags : function(){
            return Tags.find({});
        }
    })
}
/**
 * Created by NicoloEngles on 2/26/2016.
 */
if(Meteor.isClient){
    Template.allposts.helpers({
        Categories: function () {
            return Categories.find({});
        },
        AllArticles: function () {
            return Articles.find({});
        },
    })
}
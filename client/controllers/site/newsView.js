/**
 * Created by NicoloEngles on 2/24/2016.
 */
if(Meteor.isClient){
    Template.siteNewsView.helpers({
        FeaturedArticle: function(){
            return Articles.findOne({location:"FEATURED"});
        },
        Videos: function(){
            return Videos.find({type:"REGULAR"});
        },
    })
}
/**
 * Created by NicoloEngles on 2/24/2016.
 */
if(Meteor.isClient){
    Template.sitePerCategory.helpers({
        FeaturedArticle: function(){
            return Articles.findOne({location:"FEATURED"});
        },
        CTGLArticles: function(){
            return Articles.find({location:"CTGL"});
        },
        CTGRArticles: function(){
            return Articles.find({location:"CTGR"});
        },
        Videos: function(){
            return Videos.find({type:"REGULAR"});
        },
    })
}
/**
 * Created by NicoloEngles on 2/24/2016.
 */
if(Meteor.isClient){
    Template.externalNews.helpers({
        RightArticles : function(){
            return Articles.find({location:"RIGHT"});
        },
        URLFArticles: function(){
            return Articles.findOne({location:"URLF"});
        },
        URRFArticles: function(){
            return Articles.findOne({location:"URRF"});
        },
        FeaturedArticle: function(){
            return Articles.findOne({location:"FEATURED"});
        },
    })
}
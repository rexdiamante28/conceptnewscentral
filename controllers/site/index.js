/**
 * Created by NicoloEngles on 2/23/2016.
 */
if(Meteor.isClient){
    Template.siteHomePage.helpers({
        LeftArticles : function(){
            return Articles.find({location:"LEFT"});
        },
        MiddleArticles : function(){
            return Articles.find({location:"MIDDLE"});
        },
        FeaturedArticle: function(){
            return Articles.findOne({location:"FEATURED"});
        },
        LLMArticles: function(){
            return Articles.find({location:"LLM"});
        },
        FeaturedVideo: function(){
            return Videos.findOne({type:"FEATURED"});
        },
        Videos: function(){
            return Videos.find({type:"REGULAR"});
        },
        Categories: function(){
            return Categories.find({});
        },
        TemporaryArticles: function(){
            return Articles.find({location: "TEMP"});
        },
        LRArticles: function(){
            return Articles.find({location: "LR"});
        }
    })
}

if(Meteor.isServer){
    Meteor.publish('getAllVideos', function () {
        return Videos.find();
    })
}
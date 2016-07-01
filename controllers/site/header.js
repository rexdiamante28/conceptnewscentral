/**
 * Created by NicoloEngles on 2/23/2016.
 */
if(Meteor.isClient){
    Template.siteHeader.helpers({
        HeaderLinks : function(){
            Meteor.subscribe("getCategories");
            return Categories.find({});
        }
    })
}

if(Meteor.isServer){
    Meteor.publish('getCategories', function () {
        return Categories.find()
    })
}
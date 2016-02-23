/**
 * Created by NicoloEngles on 2/23/2016.
 */
if(Meteor.isClient){
    Template.siteHeader.helpers({
        HeaderLinks : function(){
            return Categories.find({});
        }
    })
}
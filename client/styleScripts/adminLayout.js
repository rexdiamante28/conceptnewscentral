/**
 * Created by NicoloEngles on 2/26/2016.
 */
if(Meteor.isClient){
    Template.adminLayout.onRendered(function(){
        $('#body').attr("style","");
    })
}
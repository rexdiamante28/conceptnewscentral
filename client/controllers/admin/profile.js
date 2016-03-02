/**
 * Created by NicoloEngles on 2/26/2016.
 */
if(Meteor.isClient){

    Template.profile.onRendered(function(){
        $('.active').removeClass('active');
        $('#l2_3').addClass('active');
    })

}
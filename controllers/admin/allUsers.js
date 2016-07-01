/**
 * Created by NicoloEngles on 2/17/2016.
 */
if(Meteor.isClient){

    Template.allUsers.onRendered(function(){
        $('.active').removeClass('active');
        $('#l2_1').addClass('active');
    })


    Template.allUsers.events({

    })

    Template.allUsers.helpers({
        Users: function(){
            return Users.find({_id: {$ne: sessionStorage.getItem('validId')}});
        }
    })
}
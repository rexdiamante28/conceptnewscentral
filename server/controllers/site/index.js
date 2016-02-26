/**
 * Created by NicoloEngles on 2/24/2016.
 */

Meteor.startup(function(){
    Meteor.publish('getAllVideos', function () {
        return Videos.find()
    })
})

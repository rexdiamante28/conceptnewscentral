/**
 * Created by NicoloEngles on 2/23/2016.
 */

Meteor.startup(function(){
    Meteor.publish('getCategories', function () {
        return Categories.find()
    })
})

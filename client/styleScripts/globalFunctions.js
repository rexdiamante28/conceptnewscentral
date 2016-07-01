/**
 * Created by NicoloEngles on 2/16/2016.
 */
if(Meteor.isServer){
    Images.allow({
        'insert': function () {
            // add custom authentication code here
            return true;
        }
    });

    Images = new FS.Collection("images", {
        stores: [new FS.Store.FileSystem("images", {path: "~/uploads"})]
    });


}

UI.registerHelper('StringLimit', function(number,String){
    return String.substring(0,number);
})

UI.registerHelper('formatDate', function(date) {
    return moment(date).format('MMM-DD-YYYY');
});

ToggleElement = function(id){
    var id = '#'+id;
    $(id).toggle('fast');
}

HHH = function(){
    console.log("hahhaa");
}
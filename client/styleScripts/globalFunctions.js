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


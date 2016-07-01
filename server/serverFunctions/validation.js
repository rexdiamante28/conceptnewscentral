/**
 * Created by NicoloEngles on 3/4/2016.
 */
Meteor.methods({
    'getErrors': function(error,schema){
        var message = {};
        console.log("getErrors called");

        if(error){
            message.status = false;
            for(var a=0;a<error.invalidKeys.length;a++)
            {
                message.message+= "&bull;&nbsp;&nbsp;"+schema.simpleSchema().namedContext().keyErrorMessage(error.invalidKeys[a].name)+"<br/>";
                console.log(errorMessage);
            }
        }
        else{
            message.status = true;
            message.message="success";
        }
        return message;
    }
})

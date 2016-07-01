/**
 * Created by NicoloEngles on 2/15/2016.
 */
/**
 * Created by NicoloEngles on 1/27/2016.
 */

Validate = function validateNow(error,schema,template,form,successMessage){
    if(error){
        var count  = error.invalidKeys.length;
        var a=0;
        var errorMessage = "";
        for(a=0;a<count;a++)
        {
            errorMessage+= "&bull;&nbsp;&nbsp;"+schema.simpleSchema().namedContext().keyErrorMessage(error.invalidKeys[a].name)+"<br/>";

        }

        alertify.error(errorMessage);
        //template.find('#errorDiv').setAttribute('class','alert alert-danger alert-dismissable');
        //template.find('#errorDiv').innerHTML= errorMessage;
    }
    else
    {
        ResetForm(form);

        alertify.success(successMessage);
        //template.find('#errorDiv').setAttribute('class','alert alert-success');
        //template.find('#errorDiv').innerHTML=successMessage;
    }
}

ResetForm = function(form){
    $(form)[0].reset();
}

Validate2 = function validateNow2(error,schema,template,successfunction,id){

    if(error){
        var count  = error.invalidKeys.length;
        var a=0;
        var errorMessage = "";
        for(a=0;a<count;a++)
        {
            errorMessage+= schema.simpleSchema().namedContext().keyErrorMessage(error.invalidKeys[a].name)+"\n";

        }

        alert(errorMessage);
    }
    else
    {
        //template.find('#errorDiv').setAttribute('class','alert alert-success');
        //template.find('#errorDiv').innerHTML=successMessage;
        successfunction(id);
    }
}



if(Meteor.isClient){

    Template.registerHelper('equals', function (a, b) {
        return a === b;
    });

}

Authenticate =  function authenticateNow(){
    if(sessionStorage.getItem('userId')==null){
        Router.go('/');
    }
}

Logout = function logoutNow(){
    sessionStorage.removeItem('userId');
    sessionStorage.removeItem('adminId');

    Authenticate();
}



ConfirmActionDelete = function confirmAction(id, deleteMethod, callback){
    alertify.confirm("Delete","Are you sure you want to delete this record?", function () {
        Meteor.call(deleteMethod, id ,function (err, result) {
            if(!err){
                alertify.success("Deleted Successfully");
                callback();
            }
        })
    }, function () {

    });
}

Goto = function goto(route){
    Router.go(route);
}

if(Meteor.isServer){
    Validate3 = function validate3(error,schema){

        var message = {};
        var errorMessage = "";

        if(error){

            var count  = error.invalidKeys.length;
            var a=0;

            for(a=0;a<count;a++)
            {
                errorMessage+= "&bull;&nbsp;&nbsp;"+schema.simpleSchema().namedContext().keyErrorMessage(error.invalidKeys[a].name)+"<br/>";
                console.log(errorMessage);
            }
            message.status = "false";
            message.message = errorMessage;

        }
        else
        {
            message.status = "true";
            message.message = "";
        }

        return message;
    }

}
/**
 * Created by NicoloEngles on 2/16/2016.
 */
if(Meteor.isClient){
    //events
    Template.loginForm.events({
        'submit form': function(event,template){
            event.preventDefault();

            var username =template.find('#username').value;
            var password =template.find('#password').value;

            if(Users.find({username:username,password:password}).count()==1){
                var user = Users.findOne({username:username,password:password});
                sessionStorage.setItem('validId',user._id);
                sessionStorage.setItem('validName',user.name);
                sessionStorage.setItem('validLevel',user.level)

                Router.go('/admin/');
            }
            else{
                alertify.error("Invalid User Account.");
            }
        }
    })

    //helpers
}
/**
 * Created by NicoloEngles on 2/17/2016.
 */
if(Meteor.isClient){

    Template.addNewUser.onRendered(function(){
        $('.active').removeClass('active');
        $('#l2_2').addClass('active');
    })

    Template.addNewUser.events({
        'submit form': function(event, template) {
            event.preventDefault();

            var emailAddress = template.find('#email').value;
            var username = template.find('#userName').value;
            var password = template.find('#password').value;
            var name = template.find('#fullName').value;
            var level = template.find('#role').value;
            var avatar = "avatar.png";


            Users.insert({
                emailAddress: emailAddress,
                username: username,
                password: password,
                name: name,
                level: level,
                avatar: avatar,
                dateCreated: new Date()

            },function(error,result){
                var success ="Successfully added new user.";
                Validate(error,Users,template,'#addUserForm',success);
            });
        },
        'click #showPassword': function(event,template){
            if($('#showPassword').is(":checked")){
                $('#password').attr('type','text');
            }else{
                $('#password').attr('type','password');
            }
        }
    });
}


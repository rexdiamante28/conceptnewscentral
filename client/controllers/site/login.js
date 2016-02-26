
if(Meteor.isClient) {
    //events
    Template.loginForm.events({
        'submit form': function (event, template) {
            event.preventDefault();

            var username = template.find('#username').value;
            var password = template.find('#password').value;

            Meteor.call('Login', username, password, function (err, result) {
                if (err) {
                    alertify.error("Ooops! Something went wrong. Please try again later.");
                }
                else {
                    if (result) {
                        sessionStorage.setItem('validId', result._id);
                        sessionStorage.setItem('validName', result.name);
                        sessionStorage.setItem('validLevel', result.level)

                        Router.go('/admin/');
                    }
                    else {
                        alertify.error("Invalid User Account.");
                    }
                }
            })
        }
    })
}
//help
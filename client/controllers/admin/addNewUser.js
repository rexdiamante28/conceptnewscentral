/**
 * Created by NicoloEngles on 2/17/2016.
 */
    Template.addNewUser.rendered = function(){
        $('.active').removeClass('active');
        $('#l2_2').addClass('active');

        Session.set('profileUrl', '');
    }

    Template.addNewUser.events({
        'submit form': function(event, template) {
            event.preventDefault();

            var emailAddress = template.find('#email').value;
            var username = template.find('#userName').value;
            var password = template.find('#password').value;
            var name = template.find('#fullName').value;
            var level = template.find('#role').value;
            var avatar = "avatar.png";

            var user = {
                email: emailAddress,
                username: username,
                password: password,
                profile: {
                    name: name,
                    avatar: Session.get('selectedProfileImage'),
                    level: level
                }
            }

            Meteor.call('addNewUser', user ,function (error, result) {
                if(error){
                    alertify.error(error.reason);
                } else {
                    alertify.success('New user added.')
                }
            })

        },

        'click #showPassword': function(event,template){
            if($('#showPassword').is(":checked")){
                $('#password').attr('type','text');
            }else{
                $('#password').attr('type','password');
            }
        }
    });

    Template.addNewUser.helpers({
        'profileUrl': function () {
            var url = ProfileImages.findOne({_id:  Session.get('selectedProfileImage')}).url();
            return url;
        },
        'allowSaveImage': function () {
            return Session.get('allowSave');
        }
    })

    Template.addNewUser.events({
        'change #avatar': function (event, template) {

            var f = event.target.files[0];
            var fr = new FileReader();

            fr.onload = function(ev2) {
                $('#avatarimg').attr('src', ev2.target.result);
                $('#avatarimg').cropper({
                    aspectRatio: 4/4
                });
                $('#avatarimg').cropper("replace", ev2.target.result);
            };

            fr.readAsDataURL(f);

            Session.set('allowSave', true);
        },

        'click #saveImage': function () {
            var canvas = $('#avatarimg').cropper("getCroppedCanvas");

            canvas.toBlob(function(blob) {
                ProfileImages.insert(blob, function (err, fileObj) {
                    if(!err){
                        // Inserted new doc with ID fileObj._id, and kicked off the data upload using HTTP
                        Session.set('selectedProfileImage', fileObj._id);
                    }
                });
            }, "image/*", 1)

            $('.modal').modal('hide');
        }
    })


    Deps.autorun(function () {
        handler = Meteor.subscribe('getImage', Session.get('selectedProfileImage'));
    })

    Template.addNewUser.destroyed = function () {
        handler.stop();
    }
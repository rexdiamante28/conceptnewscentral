Meteor.methods({
    'addNewUser': function (user) {
        Accounts.createUser({
            username: user.username,
            email: user.email,
            password: user.password,
            profile: {
                name: user.profile.name,
                avatar: user.profile.avatar,
                level: user.profile.level
            }
        })
    }
})

Meteor.publish('getImage', function (id) {
    return ProfileImages.find({_id: id});
})

Meteor.publish('allImages', function () {
    return ProfileImages.find();
})
/**
 * Created by NicoloEngles on 2/16/2016.
 */
/*
if(Meteor.isServer){
    Meteor.startup(function(){
        if(Users.find({username:"admin"}).count()==0){
            Users.insert({
                emailAddress:"example.com",
                username: "admin",
                password: "admin",
                name:"Concept Admin",
                avatar: "none",
                level: "Root User",
                dateCreated: new Date()
            })
        }
    })
}
    */


if(Meteor.users.find().count() <= 0) {
    Accounts.createUser({
        username: 'admin',
        email: 'admin@admin.com',
        password: 'admin',
        profile: {
            avatar: 'none',
            level: 'Root User'
        }
    })
}

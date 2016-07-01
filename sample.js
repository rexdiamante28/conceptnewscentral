/**
 * Created by NicoloEngles on 3/3/2016.
 */
Router.route('/sample', function () {
    Meteor.subscribe('getCategories');
    this.render('sample');
});


if(Meteor.isClient){
    Template.sample.events({
        'submit form': function(event,template){
            event.preventDefault();

            var Name = template.find('#name').value;
            var Slug = template.find('#slug').value;
            var Description = template.find('#description').value;

            var category = {
                name: Name,
                slug: Slug,
                description: Description
            }

            Meteor.call('insertCategory',category,function(error,result){
                alert(result.status+" "+result.message);
            });

        }
    })
}

if(Meteor.isServer){

    Meteor.publish('getCategories', function (){
        return Categories.find({});
    })

    Meteor.methods({
        'insertCategory': function(category){
            var message = {
                status: "",
                message: ""
            }
            try{
                Categories.insert({
                    name:category.name,
                    slug: category.slug,
                    description: category.description
                },function(error,result){
                    if(error){
                        message.status = false;
                        message.message = error;
                    }else{
                        message.status = true;
                    }
                })
                console.log(message);
                return message;
            }
            catch(ex){
                message.status="false";
                message.message = ex.message;

                return message;
            }
        }
    })
}
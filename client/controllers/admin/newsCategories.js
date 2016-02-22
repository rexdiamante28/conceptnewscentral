/**
 * Created by NicoloEngles on 2/17/2016.
 */
if(Meteor.isClient){

    Template.newsCategories.onRendered(function(){
        $('.active').removeClass('active');
        $('#l3_3').addClass('active');
    })

    Template.newsCategories.events({
        'submit form': function(event,template){
            event.preventDefault();

            var name = template.find('#name').value;
            var slug = template.find('#slug').value;
            var description = template.find('#description').value;

            if(Categories.find({name:name}).count()>0){
                alertify.error(name+' already exists.');
            }else
            {
                Categories.insert({
                    name: name,
                    slug: slug,
                    description: description

                },function(error,result){
                    var success ="Successfully added new category.";
                    Validate(error,Categories,template,'#categoryForm',success);
                });
            }

        }
    })
    Template.newsCategories.onRendered(function(){
        $('#content').ckeditor();
    })

    Template.newsCategories.helpers({
        Categories: function () {
            return Categories.find({});
        }
    })
}
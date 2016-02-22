/**
 * Created by NicoloEngles on 2/19/2016.
 */
if(Meteor.isClient){

    Template.newsTags.onRendered(function(){
        $('.active').removeClass('active');
        $('#l3_4').addClass('active');
    })

    Template.newsTags.events({
        'submit form': function(event,template){
            event.preventDefault();

            var name = template.find('#name').value;
            var slug = template.find('#slug').value;
            var description = template.find('#description').value;

            if(Tags.find({name:name}).count()>0){
                alertify.error(name+' already exists.');
            }else
            {
                Tags.insert({
                    name: name,
                    slug: slug,
                    description: description

                },function(error,result){
                    var success ="Successfully added new tag.";
                    Validate(error,Tags,template,'#categoryForm',success);
                });
            }
        }
    })

    Template.newsTags.helpers({
        Tags: function () {
            return Tags.find({});
        }
    })
}
if(Meteor.isClient){
    Template.aggregator_rss.rendered = function () {
        Session.set('saveBtnTxt', 'Save');

        Session.set('resetBtnTxt', 'Reset');
    }

    Template.aggregator_rss.helpers({
        'saveBtnTxt': function () {
            return Session.get('saveBtnTxt');
        },
        'resetBtnTxt': function () {
            return Session.get('resetBtnTxt');
        }
    })

    Template.aggregator_rss.events({
        'submit #rssForm': function (event, template) {
            event.preventDefault();

            var rss = {
                link: $('#link').val(),
                createdDate: new Date()
            }

            if($('#saveBtn').text() === 'Update'){
                rss._id = Session.get('updateId');
                Meteor.call('updateRss', rss, function (err, result) {
                    var success = 'Rss updated.'
                    Validate(err, Rss,template ,'#rssForm', success);

                    Session.set('updateId', '0');
                    Session.set('saveBtnTxt', 'Save');
                    Session.set('resetBtnTxt', 'Reset');
                })
                $('.selectors').removeClass('success');
                return
            }


            Meteor.call('insertRss',rss ,function (err, result) {
                var success = 'New Rss added.'
                Validate(err,Rss,template,'#rssForm',success)
            })
        },

        'click .deleteRss': function () {
            ConfirmActionDelete(this._id, 'deleteRss');
        },

        'click #resetBtn': function () {
            if(Session.get('resetBtnTxt') === 'Reset'){
                $('#sourceName').val('');
                $('#link').val('');
                $('#sourceName').focus();
                return
            }
        },

        'click .editRss': function (event) {
            Session.set('saveBtnTxt', 'Update');
            Session.set('resetBtnTxt', 'Cancel');
            $('#sourceName').val(this.source);
            $('#link').val(this.link);
            $('.selectors').removeClass('success');
            $(event.target.parentElement.parentElement.parentElement).addClass('success');
            Session.set('updateId', this._id);
        },

        'click .prevBtn': function () {
            if(Session.get('skips') >= 10) {
                Session.set('skips', Session.get('skips') - 10);
            }
        },
        'click .nextBtn': function () {
            Session.set('skips', Session.get('skips') + 10);
        }
    })

    Template.rssTable.rendered = function () {
        Session.set('skips',0)
    }

    Template.rssTable.helpers({
        'rss': function () {
            return Rss.find({},{$sort:{createDate: -1}})
        }
    })
}

if(Meteor.isServer){
    Meteor.methods({
        'insertRss': function (rss) {
            Rss.insert(rss);
        },
        'updateRss': function (rss) {
            Rss.update({_id: rss._id}, {$set:{source:rss.source,link: rss.link}})
        },
        'deleteRss': function (rss) {
            Rss.remove(rss);
        }
    })

    Meteor.publish('getRssPub', function (skips) {
        var skip = parseInt(skips);
        return Rss.find({},{sort:{createdDate: -1},skip: skip, limit: 10})
    })
}
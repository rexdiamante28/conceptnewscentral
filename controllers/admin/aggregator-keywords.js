if(Meteor.isClient){
    Template.aggregator_keywords.rendered = function () {
        Session.set('saveBtnTxt', "Save");
        Session.set('resetBtnTxt', "Reset");
        Session.set('updateId', '0');

    }

    Template.aggregator_keywords.helpers({
        'saveBtnTxt': function () {
            return Session.get('saveBtnTxt');
        },
        'resetBtnTxt': function () {
            return Session.get('resetBtnTxt');
        }
    })

    Template.aggregator_keywords.events({
        'click #resetBtn': function () {

            if($('#resetBtn').text() === 'Cancel'){
                Session.set('saveBtnTxt', 'Save');
                Session.set('resetBtnTxt', 'Reset');
                Session.set('updateId', '0');
                $('.selectors').removeClass('success');
                $('#keywordName').val('');
            } else {
                $('#keywordName').val('');
                $('#keywordName').focus();
            }

        },
        'submit #keywordForm': function (event, template) {
            event.preventDefault();

            var name = template.find('#keywordName').value;

            if($('#saveBtn').text() === 'Update') {
                Meteor.call('updateKeyword', Session.get('updateId'), name, function (error, result) {
                    var success = "Keyword updated.";
                    Validate(error, Keywords, template, "#keywordForm", success)
                    Session.set('updateId', '0');
                    Session.set('saveBtnTxt', 'Save');
                    Session.set('resetBtnTxt', 'Reset');
                    $('.selectors').removeClass('success');
                })
            } else {
                Meteor.call('insertKeyword', name, function (error, result) {
                    var success = "New keyword added.";
                    Validate(error, Keywords, template, "#keywordForm", success)
                });
            }
        },
        'click .deleteKeyword': function () {
            ConfirmActionDelete(this._id, 'deleteKeyword');
        },
        'click .editKeyword': function (event) {
            Session.set('saveBtnTxt', 'Update');
            Session.set('resetBtnTxt', 'Cancel');
            $('#keywordName').val(this.name);
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

    Template.keywordsTable.rendered = function () {
        Session.set('skips', 0);
    }



    Template.keywordsTable.helpers({
        'keywords': function () {
            return Keywords.find({},{sort:{createdDate: -1}});
        }
    })

}

if(Meteor.isServer){
    Meteor.startup(function () {
        console.log('Starting server ...')  ;
        //console.log(Keywords.find({},{skip: 0, limit: 10}).fetch())
    })

    Meteor.methods({
        'insertKeyword': function (keyword) {
            Keywords.insert({
                name: keyword,
                createdDate: new Date()
            })
        },
        'getPageCount': function () {
            var keywordsCount = Keywords.find().count();
            return Math.ceil(keywordsCount/10);
        },
        'updateKeyword': function (id, name) {
            Keywords.update({_id: id},{$set:{name: name}})
        },
        'deleteKeyword': function (id) {
            Keywords.remove(id);
        },
        'removeAllKeywords': function () {
            Keywords.remove({});
        }
    })


    Meteor.publish('getKeywordsPub', function (skips) {
        var skip = parseInt(skips)
        return Keywords.find({},{sort:{createdDate: -1},skip: skip, limit: 10})
    })
}
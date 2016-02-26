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
            })
        } else {
            Meteor.call('insertKeyword', name, function (error, result) {
                var success = "New keyword added.";
                Validate(error, Keywords, template, "#keywordForm", success)
            });
        }
    },
    'click .deleteKeyword': function () {
        var callback = function() {
            Meteor.call('getPageCount', function (err, result) {
                if(!err){
                    if(parseInt(Session.get('totalPageNumber')) > result){
                        $('#last-item-nav').prev().remove();
                        Session.set('totalPageNumber', result)
                    }
                }
            })
        }

        ConfirmActionDelete(this._id, 'deleteKeyword', callback);
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
Template.aggregator_keywords.rendered = function () {
    Session.set('saveBtnTxt', "Save");
    Session.set('resetBtnTxt', "Reset");

    Meteor.call('getPageCount', function (err, result) {
        if(!err){
            Session.set('totalPageNumber', result);

            for(var i = 1; i <= result; i++ ) {
                $('<li><a class="page-item" href="#">' + i + '</a></li>').insertBefore('#last-item-nav');
            }
        }
    })

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
        $('#keywordName').val('');
        $('#keywordName').focus();
    },
    'submit #keywordForm': function (event, template) {
        event.preventDefault();

        var name = template.find('#keywordName').value;

        Meteor.call('insertKeyword', name, function (error, result) {
            var success = "New keyword added.";
            Validate(error, Keywords, template, "#keywordForm", success)
        });

        Meteor.call('getPageCount', function (err, result) {
            if(!err){
                if(parseInt(Session.get('totalPageNumber'))!== result){
                    $('<li><a class="page-item" href="#">' + result + '</a></li>').insertBefore('#last-item-nav');
                    Session.set('totalPageNumber', result)
                }
            }
        })

    },
    'click .page-item': function (event) {
        //console.log('Page changing...');
        pageNumber = event.target.innerHTML;
        var skips = (pageNumber - 1) * 10;
        Session.set('skips',skips);

        $('.page-item').removeClass('active');
        $(event.target).addClass('active');
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
    'click #first-item-nav': function (event) {

        if(!$(event.currentTarget).hasClass('disabled')){
            var currentPage = Session.get('skips');
            Session.set('skips', currentPage - 10);
        }
    },
    'click #last-item-nav': function (event) {

        if(!$(event.currentTarget).hasClass('disabled')) {
            var currentPage = Session.get('skips');
            Session.set('skips', currentPage + 10);
        }

    }
})

Template.keywordsTable.rendered = function () {
    Session.set('skips', 0);

    Deps.autorun(function () {
        if(parseInt(Session.get('skips')) === 0){
            $('#first-item-nav').addClass('disabled');
        } else {
            $('#first-item-nav').removeClass('disabled');
        }
    })

    Deps.autorun(function () {
        if(parseInt(Session.get('totalPageNumber')) === (parseInt(Session.get('skips'))/10) + 1){
            $('#last-item-nav').addClass('disabled');
        } else {
            $('#last-item-nav').removeClass('disabled');
        }
    })

}



Template.keywordsTable.helpers({
    'keywords': function () {
        return Keywords.find({},{sort:{createdDate: -1}});
    }
})

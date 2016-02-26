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
    'click #saveBtn': function () {

    },
    'click #resetBtn': function () {
        if(Session.get('resetBtnTxt') === 'Reset'){
            $('#')
        }
    }
})

Template.rssTable.helpers({
    'rss': function () {
        return Rss.find()
    }
})
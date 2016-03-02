/* Temporarily turned off
Meteor.startup(function () {

    Meteor.setInterval(function () {
        console.log('Auto Scraping...');
        Meteor.call('scrape', function () {
            console.log('Done Scraping...');
        });
    }, 300000)
})
    */
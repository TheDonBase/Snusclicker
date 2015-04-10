'use strict';

function View() {
    this.updateSnuspSec = updateSnuspSec;
    this.setSnusPClick = setSnusPClick;
    this.buildScreen = buildScreen;
    this.updatePrice = updatePrice;
    this.updateSnus = updateSnus;
    this.updateAmount = updateAmount;
    this.updateClicks = updateClicks;
    
    function buildScreen(data) {
        $('td[data-role="img"]').each(function() {
            $(this).css({background: 'url(img/' + $(this).closest('tr').attr('id') + '.png)',
                'background-size': '100%',
                'background-repeat': 'no-repeat',
                'background-position': 'center'});
        });
        //set the prices on load
        $('td[data-role="price"]').each(function() {
            $(this).html('Cost: ' + data.prices[$(this).closest('tr[data-role="storeItem"]').attr('id')]);
        });
        //set the amount of snus
        $('#amount').html(data.amount + ' Snus');
        
        //set the amounts on load
        $('td[data-role="amount"]').each(function()
        {
           $(this).html(data.shop[$(this).closest('tr[data-role="storeItem"]').attr('id')]);
        });
        
        //set the snus per second
        $('#sps').html('Snus Per Second: ' + data.snuspSec);

        //set the snus per click
        $('#snusPClick').html('Snus Per Click: ' + data.snuspClick);
        
        // set total clicks
        $('#totalClicks').html('Total Clicks: ' + data.updateClicks);
    }
    
    function updateSnus(snus){
        $('#amount').html(snus+' Snus');
    }
    
    function updateSnuspSec(snusPSec){
        $('#sps').html('Snus Per Second: '+snusPSec);
    }
    
    function setSnusPClick(snusPC){
        $('#snusPClick').html('Snus Per Click: '+snusPC);
    }
    
    function updateAmount(element, amount){
        $(element).find('td[data-role="amount"]').html(amount);
    }
    
    function updateClicks(totalClicks)
    {
        $('#totalClicks').html('Total Clicks: ' + totalClicks);
    }
    
    function updatePrice(prices){
        $('td[data-role="price"]').each(function() {
            $(this).html('Cost: ' + prices[$(this).closest('tr[data-role="storeItem"]').attr('id')]);
        });
    }
}
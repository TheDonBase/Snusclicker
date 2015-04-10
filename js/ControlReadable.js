'use strict';


function Control(){
    var model = new Model();
    var view = new View();
    
    view.buildScreen(model.getVariables());
    
    $('#snusClick').click(function(){
        model.snusClick();
        view.updateSnus(model.getSnus());
    });
    
    $('tr[data-role="storeItem"]').click(function(){
        model.buy($(this).attr('id'));
        view.updateSnus(model.getSnus());
        view.updatePrice(model.getPrice());
        view.updateAmount($(this), model.getAmount($(this)));
        view.updateSnuspSec(model.getSnusPSec());
    });
    
    setInterval(function(){
        model.addSnus();
        view.updateSnus(model.getSnus());
        model.calculateSnusPC();
        view.setSnusPClick(model.getSnusPClick());
    },1000);
}


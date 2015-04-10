'use strict';

function Model(){
    /*...s...0Define the variables to use0...s...*/
    // the current amount of snus
    this.snusAmount = 0.0;
    //the current amount of snus per second
    this.snuspSec = 0.0;
    //the array shop with amount of how many you have
    this.shop = {knox: 0,offroad: 0,ld: 0,ettan: 0,goteborg: 0,general: 0, nick: 0, grov: 0};
    //the array shopPrize with how expensive a buy is
    this.shopPrize = {knox: 15, offroad: 50, ld: 250, ettan: 1500, goteborg:5600, general:15000, nick: 75000, grov: 500000};
    //the array with the increase per amount
    this.increaseBy = {knox: 0.1, offroad: 0.5, ld: 10, ettan: 19, goteborg: 57, general: 126, nick: 500, grov: 1337};
    //the value you get with each snus click
    this.snusPClick = 1;
    // the total amount of clicks
    this.totalClicks = 0;
    /*...e...0Define the variables to use0...e...*/
    
    this.calculateSnusPC = calculateSnusPC;
    this.getSnusPClick = getSnusPClick;
    this.getVariables = getVariables;
    this.getAmount = getAmount;
    this.getSnusPSec = getSnusPSec;
    this.snusClick = snusClick;
    this.getPrice = getPrice;
    this.getSnus = getSnus;
    this.addSnus = addSnus;
    this.buy = buy;
    this.totalClicks = totalClicks;
    
    function getVariables(){
        var variables = {amount: this.snusAmount, snuspSec: this.snuspSec, snuspClick: this.snusPClick, prices: this.shopPrize, shop: this.shop};
        return variables;
    }
    
    function getSnus(){
	var number = Math.abs(this.snusAmount);
	var fixedNumb = number.toFixed(1);
    return fixedNumb;
    }
    
    function addSnus(){
        this.snusAmount += this.snuspSec;
    }
    
    function snusClick(){
        this.snusAmount+= this.snusPClick;
        this.totalClicks++;
    }
    
    function buy(name){
        if(this.snusAmount >= this.shopPrize[name]){
            this.snusAmount -= this.shopPrize[name];
            this.shopPrize[name] = Math.floor(this.shopPrize[name]*1.2);
            this.shop[name]++;
            this.snuspSec += this.increaseBy[name];
        }
    }
    
    function getSnusPSec(){
        return parseFloat(this.snuspSec.toFixed(1));
    }
    
    function calculateSnusPC(){
        this.snusPClick = Math.floor(1+(this.snuspSec/100)*5);
    }
    
    function getAmount(element){
        return this.shop[$(element).closest('tr[data-role="storeItem"]').attr('id')];
    }
    
    function getSnusPClick(){
        return Math.floor(this.snusPClick);
    }
    
    function getPrice(){
        return this.shopPrize;
    }
    
    function totalClicks()
    {
        return this.totalClicks;
    }
    
    function saveGame() 
    {
        
    }
    
    window.onload=function loadGame()
    {
        alert("Please wait, loading game!");
    };
}
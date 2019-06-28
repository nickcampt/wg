/* Hello There */

// CONSTANTS
var baseCost = 50;
var valueOfClick = 10;
var cheatValueOfClick = 1000;
var valueOfFarmer = 1;
var costOfFarmer = 50;

// MESSAGES and STRINGS
var notEnoughMoneyMessage = "You don't have enough money for that!";
var makeMoneyButtonText = "Make Money (+" + valueOfClick + ")";
var cheatButtonText = "Cheat (+" + cheatValueOfClick + ")";
var spendMoneyButtonText = "Spend Money (-" + baseCost + ")";
var buyFarmerButtonText = "Employ A Money Farmer (-" + costOfFarmer + ")";

// COUNTERS
var userCash = 0;
var userBought = 0;
var userFarmers = 0;

// USER DATA
var userName = "DEFAULT_NAME";

//FUNCTIONS
/*
on_load is called at the loading of the HTML page
*/
function on_load() {
        get_user_data(userName);
        document.getElementById("currency_click_button").innerHTML = makeMoneyButtonText;
        document.getElementById("cheat_button").innerHTML = cheatButtonText;
        document.getElementById("spend_money_button").innerHTML = spendMoneyButtonText;
        document.getElementById("buy_farmer_button").innerHTML = buyFarmerButtonText;
        document.getElementById("user_cash").innerHTML = userCash.toString();
        document.getElementById("user_bought").innerHTML = userBought.toString();
        document.getElementById("user_farmers").innerHTML = userFarmers.toString();
        document.getElementById("farmers_income_per_tick").innerHTML = "$" + (userFarmers*valueOfFarmer).toString();
        start_ticks();
}

function start_ticks() {
        console.log("starting ticks");
        window.setInterval("time_tick()", 1000);
}

function stop_ticks() {
        console.log("starting ticks");
        window.clearInterval();
}

function time_tick() {
        console.log("ticking")
        var totalIncrease = 0;
        totalIncrease = userFarmers * valueOfFarmer;
        console.log("adding " + totalIncrease + " to money");
        userCash+=totalIncrease;
        update_user_cash();
}

function update_user_cash() {
        var update = document.getElementById("user_cash");
        update.innerHTML = userCash.toString();
}

function update_user_bought() {
        var update = document.getElementById("user_bought");
        update.innerHTML = userBought.toString();
}

function update_user_farmers() {
        var update = document.getElementById("user_farmers");
        update.innerHTML = userFarmers.toString();
        update = document.getElementById("farmers_income_per_tick");
        update.innerHTML = "$" + (valueOfFarmer * userFarmers).toString();
}

function currency_click() {
        userCash+=valueOfClick;
        update_user_cash();
}

function cheat_currency_add() {
        userCash+=cheatValueOfClick;
        update_user_cash();
}

function spend_user_cash(amount) {
        userCash -= amount;
        update_user_cash();
}

function buy_farmer() {
        if (userCash < costOfFarmer) {
                display_not_enough_money();
        }
        else {
                spend_user_cash(costOfFarmer);
                userFarmers++;
                update_user_cash();
                update_user_farmers();
        }
}

function display_not_enough_money() {
        console.log(notEnoughMoneyMessage);
        document.getElementById("error_msg_slate").innerHTML = notEnoughMoneyMessage;
        document.getElementById("aha").style.display='block';
        setTimeout(function () {
                document.getElementById("aha").style.display="none";
        }, 2500);
}

function test_spend() {
        if (userCash < baseCost) {
                display_not_enough_money();
        }
        else {
                spend_user_cash(baseCost);
                userBought++;
                update_user_bought();
        }
}

function get_user_data(userName) {
        console.log("This is where I would retrieve user data... IF I HAD SOME");
}


// int MAIN() {}
on_load();

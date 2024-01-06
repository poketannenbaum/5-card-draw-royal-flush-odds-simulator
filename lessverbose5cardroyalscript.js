var deck = ["A♤", "K♤", "Q♤", "J♤", "10♤", "9♤", "8♤", "7♤", "6♤", "5♤", "4♤", "3♤", "2♤", "A♡", "K♡", "Q♡", "J♡", "10♡", "9♡", "8♡", "7♡", "6♡", "5♡", "4♡", "3♡", "2♡", "A♧", "K♧", "Q♧", "J♧", "10♧", "9♧", "8♧", "7♧", "6♧", "5♧", "4♧", "3♧", "2♧", "A♢", "K♢", "Q♢", "J♢", "10♢", "9♢", "8♢", "7♢", "6♢", "5♢", "4♢", "3♢", "2♢"];
var randomCards = [];
var card1;
var card2;
var card3;
var card4;
var card5;
var moneyspent = 0;
var royalcounter = 0;
var totalmoneyperroyal = [];
var count = 0;
function drawcards() {
	card1 = -1;
	card2 = -1;
	card3 = -1;
	card4 = -1;
	card5 = -1;
    card1 = deck[Math.floor(Math.random() * deck.length)];
    randomCards.push(card1);
    card2 = deck[Math.floor(Math.random() * deck.length)];
    while (card1 === card2) {
        card2 = deck[Math.floor(Math.random() * deck.length)];
    }
    randomCards.push(card2);
    card3 = deck[Math.floor(Math.random() * deck.length)];
    while (card2 === card3 || card1 === card3) {
        card3 = deck[Math.floor(Math.random() * deck.length)];
    }
    randomCards.push(card3);
    card4 = deck[Math.floor(Math.random() * deck.length)];
    while (card2 === card3 || card1 === card3 || card3 === card4) {
        card4 = deck[Math.floor(Math.random() * deck.length)];
    }
    randomCards.push(card4);
    card5 = deck[Math.floor(Math.random() * deck.length)];
    while (card2 === card3 || card1 === card3 || card3 === card4 || card4 === card5) {
        card5 = deck[Math.floor(Math.random() * deck.length)];
    }
    randomCards.push(card5);
}

drawcards();

while (true)
{
	if (randomCards.includes("A♤") && randomCards.includes("K♤") && randomCards.includes("Q♤") && randomCards.includes("J♤") && randomCards.includes("10♤"))
	{
		randomCards.forEach(function (entry) {
			console.log(entry);
		});
		console.log("Royal detected, money spent:" + moneyspent)
		royalcounter ++;
		totalmoneyperroyal.push(moneyspent);
		moneyspent = 0;
	}
	if (randomCards.includes("A♡") && randomCards.includes("K♡") && randomCards.includes("Q♡") && randomCards.includes("J♡") && randomCards.includes("10♡"))
	{
		randomCards.forEach(function (entry) {
			console.log(entry);
		});
		console.log("Royal detected, money spent:" + moneyspent)
		royalcounter ++;
		totalmoneyperroyal.push(moneyspent);
		moneyspent = 0;
	}
	if (randomCards.includes("A♧") && randomCards.includes("K♧") && randomCards.includes("Q♧") && randomCards.includes("J♧") && randomCards.includes("10♧"))
	{
		randomCards.forEach(function (entry) {
			console.log(entry);
		});
		console.log("Royal detected, money spent:" + moneyspent)
		royalcounter ++;
		totalmoneyperroyal.push(moneyspent);
		moneyspent = 0;
	}
	if (randomCards.includes("A♢") && randomCards.includes("K♢") && randomCards.includes("Q♢") && randomCards.includes("J♢") && randomCards.includes("10♢"))
	{
		randomCards.forEach(function (entry) {
			console.log(entry);
		});
		console.log("Royal detected, money spent:" + moneyspent)
		royalcounter ++;
		totalmoneyperroyal.push(moneyspent);
		moneyspent = 0;
	}
    moneyspent += 1;
	randomCards = [];
    drawcards();
	if (royalcounter === 1000)
	{
		const highest = Math.max(...totalmoneyperroyal)
		const lowest = Math.min(...totalmoneyperroyal)
		totalmoneyperroyal.forEach(function(item,index){
			moneyspent += item;
			count ++;
		});
		average = moneyspent / count;
		console.log("1000 total royals have been hit. The average cost per royal was: " + average)
		console.log("The lowest cost royal was: " + lowest)
		console.log("The highest cost royal was: " + highest)
		break;
	}
}


// Aerolito Nude = 6810669381
// Tukano Nude = 6810669317
// Light Accessory = 6797943813
// Premium Accessory = 6797943877
// Luxury Accessory = 6797943941

var tukano = 0;
var aerolito = 0;
var luxury = 0;
var premium = 0;
var light = 0;
//Implemented the bundles, probably you have to change this for the shopify ID's
var bundle1 = 0;
var bundle2 = 0;
var bundle3 = 0;

var price = 0;
var basic = 0;
var smartDevices = 0;

var showCart = false;

var checkoutUrl = "https://the-o.myshopify.com/cart/";

var deviceID = [6810669381, 6810669317, 6797943813, 6797943877, 6797943941, 16674258245, 16674373573, 16674375173];



// Links to shopify checkout

$('#buy').click(function(){

var deviceArray = [tukano, aerolito, luxury, premium, light, bundle1, bundle2, bundle3];
var checkoutOrder = "";
for (i = 0; i < deviceArray.length; i++)
{
	console.log(deviceArray[i])
	if (deviceArray[i] != 0)
	{
		if (checkoutOrder == "")
		{
			checkoutOrder += deviceID[i] + ":" + deviceArray[i];
		}
		else
		{
			checkoutOrder += "," + deviceID[i] + ":" + deviceArray[i];
		}


	}

}

var url = checkoutUrl + checkoutOrder;

    document.location.href = url;
})


// Tukano
$('#tukano').tap(function(){

	tukano++;
	refreshPrice();
	console.log(tukano);
});


// Aerolito

$('#aerolito').tap(function(){

	aerolito++;
	refreshPrice();
	console.log(aerolito);
});

// Luxury

$('#luxury').tap(function(){

	luxury++;
	refreshPrice();
	console.log(luxury);
});

// Premium

$('#premium').tap(function(){

	premium++;
	refreshPrice();
	console.log(premium);
});


// Light

$('#light').tap(function(){

	light++;
	refreshPrice();
	console.log(light);
});

// La Sélection

$('#bundle1').tap(function(){

	bundle1++;
	refreshPrice();
	console.log(bundle1);
});

// Starter Kit

$('#bundle2').tap(function(){

	bundle2++;
	refreshPrice();
	console.log(bundle2);
});

// Octopus Edition

$('#bundle3').tap(function(){

	bundle3++;
	refreshPrice();
	console.log(bundle3);
});


function refreshPrice(){
	var price = tukano*79+aerolito*79+luxury*49+premium*29+light*9+bundle1*119+bundle2*139+bundle3*149;
	$("#price").html("$"+ price+ ".00");
	
	$("#tukano-cart").html("tukano - " + tukano);
	$("#aerolito-cart").html("aerolito - " + aerolito);
	$("#luxury-cart").html("Luxury - " + luxury);
	$("#premium-cart").html("Premium - " + premium);
	$("#light-cart").html("Light - " + light);
	$("#bundle1-cart").html("La Sélection - " + bundle1);
	$("#bundle2-cart").html("Starter Kit - " + bundle2);
	$("#bundle3-cart").html("Octopus Edition - " + bundle3);	
};

// Opens/Closes Cart

$(".buy-content").not(".buy-button").tap(function(){
		console.log($(this).parent().parent().index(".list"));

	if (!showCart)
	{
		$(".buy").animate({height:$( window ).height()-50+"px"}, {
			queue: false,
			duration: 550,
			complete: function() {
				$(".buy").css({"overflow":"auto"});
				showCart = true;
			}
		});
	}
	else
	{
		$(".buy").animate({height:"70px"}, {
			queue: false,
			duration: 550,
			complete: function() {
				$(".buy").css({"overflow":"hidden"});
				showCart = false;
			}
		});	
	}
});

// Adds items based on index
$(".plus-button").tap(function(){
	
	switch($(this).parent().parent().index(".list"))
	{
		case 0:
			tukano++;
			break;
		case 1:
			aerolito++;
			break;
		case 2:
			luxury++;
			break;
		case 3:
			premium++;
			break;
		case 4:
			light++;
			break;
		case 5:
			bundle1++;
			break;
		case 6:
			bundle2++;
			break;
		case 7:
			bundle3++;
			break;
		default:
			break;
	}
	
	refreshPrice();
	
});

// Removes items based on index
$(".minus-button").tap(function(){
	switch($(this).parent().parent().index(".list"))
	{
		case 0:
			if (tukano != 0)
			{
				tukano--;
			}
			break;
		case 1:
			if (aerolito != 0)
			{
				aerolito--;
			}
			break;
		case 2:
			if (luxury != 0)
			{
				luxury--;
			}
			break;
		case 3:
			if (premium != 0)
			{
				premium--;
			}
			break;
		case 4:
			if (light != 0)
			{
				light--;
			}
			break;
		case 5:
			if (bundle1 != 0)
			{
				bundle1--;
			}
			break;
		case 6:
			if (bundle2 != 0)
			{
				bundle2--;
			}
			break;
		case 7:
			if (bundle3 != 0)
			{
				bundle3--;
			}

			break;
		default:
			break;
	}
	
	refreshPrice();});


// Swipable Carousel
$(document).ready(function() {
   $("#myCarousel").swiperight(function() {
      $("#myCarousel").carousel('prev');
    });
   $("#myCarousel").swipeleft(function() {
      $("#myCarousel").carousel('next');
   });
});

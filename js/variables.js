$(document).ready(function(){
	
  var guests = prompt("How many guests do you have?");
  $('.guests').html('Your guests');
  $('.guests').next('p').html('You have ' + guests + ' guests at the party tonight');

  var donuts = prompt("How many donuts do you have?");
  $('.donuts').html('Your donuts');
  $('.donuts').next('p').html('You have ' + donuts + ' donuts for the guests tonight');

  var threshold = prompt("How many donuts does each guest need to be happy?");
  
  var donuts_per_guest = parseFloat(donuts)/parseFloat(guests)
  $('.donuts_per_guest').html('Donuts per guest');
  $('.donuts_per_guest').next('p').html('You have ' + donuts_per_guest + ' donuts for each guest tonight');
  
  $('.vibe').hide();
  $('.vibe h3').html('Party vibe');

  if(donuts_per_guest > parseFloat(threshold)){
    $('.vibe').addClass('green').fadeIn("slow","linear");
    $('.vibe p').html('Your guests are gorging themselves on donuts!')
    ;
  }
  else if(donuts_per_guest === parseFloat(threshold)){
    $('.vibe').addClass('amber').fadeIn("fast","linear");
    $('.vibe p').html('Your guests are satisfied!');
  }
  else{
    $('.vibe').addClass('red').fadeIn("slow","linear");
    $('.vibe p').html('Your guests are starving. You\'re a shitty host. Go stand in a corner!'); 
  }
	
});
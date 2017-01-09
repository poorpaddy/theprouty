/****************************************
  CMS Code, Inc. Custom Javscript
  http://www.cmscode.com
  Friends of Norris Cotton Cancer Center
  Prouty Event Customizations
****************************************/

/***  CONSOLE RESET  ***/
// usage: log('inside coolFunc', this, arguments);
// paulirish.com/2009/log-a-lightweight-wrapper-for-consolelog/
window.log = function(){
  log.history = log.history || [];   // store logs to an array for reference
  log.history.push(arguments);
  if(this.console) {
    arguments.callee = arguments.callee.caller;
    var newarr = [].slice.call(arguments);
    (typeof console.log === 'object' ? log.apply.call(console.log, console, newarr) : console.log.apply(console, newarr));
  }
};
// make it safe to use console.log always
(function(b){function c(){}for(var d="assert,count,debug,dir,dirxml,error,exception,group,groupCollapsed,groupEnd,info,log,timeStamp,profile,profileEnd,time,timeEnd,trace,warn".split(","),a;a=d.pop();){b[a]=b[a]||c}})((function(){try
{console.log();return window.console;}catch(err){return window.console={};}})());

/* ------------------------------------------------------------ */

// JavaScript Document

// get ievent from URL
function getUrlVal( name ){
	name = name.replace(/[\[]/,"\\\[").replace(/[\]]/,"\\\]");
	var regexS = "[\\?&]"+name+"=([^&#]*)";
	var regex = new RegExp( regexS );
	var results = regex.exec( window.location.href );
	if( results == null )
		return "";
	else
		return results[1];
}
	// override header image links
	$('.slideSet a:eq(0)').attr("href","/faf/home/ccp.asp?ievent="+getUrlVal('ievent')+"&ccp=648669");
	// override left buttons
	$('.buttonMenu a:eq(0)').attr("href","/faf/home/ccp.asp?ievent="+getUrlVal('ievent')+"&ccp=648660");
	$('.buttonMenu a:eq(1)').attr("href","/faf/help/helpAboutOrg.asp?ievent="+getUrlVal('ievent')+"&lis=1");
	$('.buttonMenu a:eq(2)').attr("href","/faf/home/ccp.asp?ievent="+getUrlVal('ievent')+"&ccp=648670");

/****************************************
  Registration Workflow
  Created: December 2013
  Edited: February 2014
****************************************/

// Plugins:

//jQuery Cookie
!function(a){"function"==typeof define&&define.amd?define(["jquery"],a):a(jQuery)}(function(a){function c(a){return h.raw?a:encodeURIComponent(a)}function d(a){return h.raw?a:decodeURIComponent(a)}function e(a){return c(h.json?JSON.stringify(a):String(a))}function f(a){0===a.indexOf('"')&&(a=a.slice(1,-1).replace(/\\"/g,'"').replace(/\\\\/g,"\\"));try{return a=decodeURIComponent(a.replace(b," ")),h.json?JSON.parse(a):a}catch(c){}}function g(b,c){var d=h.raw?b:f(b);return a.isFunction(c)?c(d):d}var b=/\+/g,h=a.cookie=function(b,f,i){if(void 0!==f&&!a.isFunction(f)){if(i=a.extend({},h.defaults,i),"number"==typeof i.expires){var j=i.expires,k=i.expires=new Date;k.setTime(+k+864e5*j)}return document.cookie=[c(b),"=",e(f),i.expires?"; expires="+i.expires.toUTCString():"",i.path?"; path="+i.path:"",i.domain?"; domain="+i.domain:"",i.secure?"; secure":""].join("")}for(var l=b?void 0:{},m=document.cookie?document.cookie.split("; "):[],n=0,o=m.length;o>n;n++){var p=m[n].split("="),q=d(p.shift()),r=p.join("=");if(b&&b===q){l=g(r,f);break}b||void 0===(r=g(r))||(l[q]=r)}return l};h.defaults={},a.removeCookie=function(b,c){return void 0===a.cookie(b)?!1:(a.cookie(b,"",a.extend({},c,{expires:-1})),!a.cookie(b))}});

//Query String Plugin
function getUrlVars(){ var vars = {}; var parts = window.location.href.toLowerCase().replace(/[?&]+([^=&]+)=([^&]*)/gi, function(m,key,value) { vars[key] = unescape(value.replace(/\+/g, " ")); }); return vars; }

(function($){$.extend({getGo:function(url,params){document.location=url+"?"+$.param(params)},postGo:function(url,params){var $form=$("<form>").attr("method","post").attr("action",url);$.each(params,function(name,value){$("<input type='hidden'>").attr("name",name).attr("value",value).appendTo($form)});$form.appendTo("body");$form.submit()}})})(jQuery);

// Get URL Params:
var EID = getUrlVars()['ievent'],
	SID = getUrlVars()['sid'],
	TID = getUrlVars()['tid'],
	regType = getUrlVars()['fafregtype'],
	famReg = getUrlVars()['famreg'],
	cpage = window.location.href.toLowerCase();

//Query Strings from WordPress
var regType1 = getUrlVal('regType');
var teamReg = getUrlVal('teamReg');
var eventTypeSelect = getUrlVal('event-type-select');
var ultiMate1 = getUrlVal('ulti-mate1');
var ultiMate1Name = unescape(getUrlVal('ulti-mate1-name'));
var housing = getUrlVal('housing');
var transportationThursday = getUrlVal('transportation-thursday');
var preevent = getUrlVal('preevent');
var doubleHousingThursday = getUrlVal('double-housing-thursday');
var doubleHousingFriday = getUrlVal('double-housing-friday');
var transportationSaturday = getUrlVal('transportation-saturday');
var breakfastFriday = getUrlVal('breakfast-friday');
var walkRoute = getUrlVal('walk-route');
var ageMinor = getUrlVal('age-minor');
var minorType = getUrlVal('minor-type');
var rowDistance = getUrlVal('row-distance');
var boatType = getUrlVal('boatType');
var shipmateName = unescape(getUrlVal('shipmate-name'));
var boatTrailer = getUrlVal('boat-trailer');
var boatTrailerWhos = unescape(getUrlVal('boat-trailer-whos'));
var boatName = unescape(getUrlVal('boat-name'));
var affClub = unescape(getUrlVal('aff-club'));
var launchTime = getUrlVal('launch-time');
var contactMethod = getUrlVal('contact-method');
var messageToDirector = unescape(getUrlVal('message-to-director'));
var foursomeMembers = unescape(getUrlVal('foursome-members'));
var teeTime = getUrlVal('tee-time');
var shirtSize = getUrlVal('shirt-size');
var memberHCC = getUrlVal('memberHCC');
var memberHCCName = unescape(getUrlVal('memberHCC-name'));
var greensFee = getUrlVal('greens-fee');
var cycleRoute = getUrlVal('cycle-route');
var virtualActivity = unescape(getUrlVal('virtualActivity'));
var virtualActivityLocation = unescape(getUrlVal('virtualActivityLocation'));
var virtualActivityWhen = unescape(getUrlVal('virtualActivityWhen'));
var joinTeamId = getUrlVal('teamID');
var optShirt = getUrlVal('opt-shirt');

//Set Cookies from Query String
if (regType1 != ''){
	$.cookie('wp_regType', regType1, {path: '/'});
	$.cookie('wp_teamReg', teamReg, {path: '/'});
	$.cookie('wp_eventTypeSelect', eventTypeSelect, {path: '/'});
	$.cookie('wp_ultiMateName', ultiMate1Name, {path: '/'});
	$.cookie('wp_ultiMate', ultiMate1, {path: '/'});
	$.cookie('wp_housing', housing, {path: '/'});
	$.cookie('wp_transportationThursday', transportationThursday, {path: '/'});
	$.cookie('wp_preevent', preevent, {path: '/'});
	$.cookie('wp_doubleHousingThursday', doubleHousingThursday, {path: '/'});
	$.cookie('wp_doubleHousingFriday', doubleHousingFriday, {path: '/'});
	$.cookie('wp_transportationSaturday', transportationSaturday, {path: '/'});
	$.cookie('wp_breakfastFriday', breakfastFriday, {path: '/'});
	$.cookie('wp_walkRoute', walkRoute, {path: '/'});
	$.cookie('wp_ageMinor', ageMinor, {path: '/'});
	$.cookie('wp_minorType', minorType, {path: '/'});
	$.cookie('wp_rowDistance', rowDistance, {path: '/'});
	$.cookie('wp_boatType', boatType, {path: '/'});
	$.cookie('wp_shipmateName', shipmateName, {path: '/'});
	$.cookie('wp_boatTrailer', boatTrailer, {path: '/'});
	$.cookie('wp_boatTrailerWhos', boatTrailerWhos, {path: '/'});
	$.cookie('wp_boatName', boatName, {path: '/'});
	$.cookie('wp_affClub', affClub, {path: '/'});
	$.cookie('wp_launchTime', launchTime, {path: '/'});
	$.cookie('wp_contactMethod', contactMethod, {path: '/'});
	$.cookie('wp_messageToDirector', messageToDirector, {path: '/'});
	$.cookie('wp_foursomeMembers', foursomeMembers, {path: '/'});
	$.cookie('wp_teeTime', teeTime, {path: '/'});
	$.cookie('wp_shirtSize', shirtSize, {path: '/'});
	$.cookie('wp_memberHCC', memberHCC, {path: '/'});
	$.cookie('wp_memberHCCName', memberHCCName, {path: '/'});
	$.cookie('wp_greensFee', greensFee, {path: '/'});
	$.cookie('wp_cycleRoute', cycleRoute, {path: '/'});
	$.cookie('wp_virtualActivity', virtualActivity, {path: '/'});
	$.cookie('wp_virtualActivityLocation', virtualActivityLocation, {path: '/'});
	$.cookie('wp_virtualActivityWhen', virtualActivityWhen, {path: '/'});
	$.cookie('wp_joinTeamId', joinTeamId, {path: '/'});
	$.cookie('wp_optShirt', optShirt, {path: '/'});
}

// Individual Registration functions
function registerTeam(type){
	
	if (type == 'create') {
		$.postGo('/faf/teams/registerTeam.asp?ievent='+EID+'&teamAction=form', { });
	} else if (type == 'join') {
		$.postGo('/faf/teams/registerTeam.asp?ievent='+EID+'&teamAction=join', { });
		//$.postGo('/faf/teams/searchGroupTeams.asp?ievent='+EID+'&teamAction=join', { });
		// /reg_new/registerpre.asp?ievent=1021451&jt=" + teamId + "&teamsName=" + teamName;
	} else {
		$.postGo('/faf/reg_new/registerpre.asp?ievent='+EID+'&teamAction=none', { });
	}
	
}

// Multi Registration functions
function registerMulti(type){
	
	if (type == 'create') {
		$.postGo('/faf/r/selectRegType.asp?ievent='+EID+'&teamAction=form', { 'multiRegistrationType' : '1' });
	} else if (type == 'join') {
		//$.postGo('/faf/r/selectRegType.asp?ievent='+EID+'&teamAction=join', { 'multiRegistrationType' : '1' });
		$.ajax({
			type: "POST",
			cache : false,
			url: '/faf/r/selectRegType.asp?ievent='+EID,
			dataType: 'html',
			data: 'multiRegistrationType=1',
			success: function(data){
				$.postGo('/faf/teams/searchGroupTeams.asp?ievent='+EID+'&teamAction=join', { 'multiRegistrationType' : '1' });
			},
			error: function(xhr, textStatus, errorThrown){
			}
		});
			// /teams/searchGroupTeams.asp?ievent=1021451&teamAction=join";
	} else {
		$.ajax({
			type: "POST",
			cache : false,
			url: '/faf/r/selectRegType.asp?ievent='+EID,
			dataType: 'html',
			data: 'multiRegistrationType=1',
			success: function(data){
				$.postGo('/faf/r/registerpre.asp?ievent='+EID+'&teamAction=none', { 'multiRegistrationType' : '1' });
			},
			error: function(xhr, textStatus, errorThrown){
			}
		});
		//$.postGo('/faf/r/registerpre.asp?ievent='+EID+'&teamAction=none', { 'multiRegistrationType' : '1' });
			// /r/registerpre.asp?ievent=1021451&teamAction=none";
	}
	
}

// Family Registration functions [not used for AF]
function registerFam(type){

	if (type == 'create') {
		$.postGo('/faf/r/selectRegType.asp?ievent='+EID+'&teamAction=form&famReg=true', { 'multiRegistrationType' : '2' });
	} else if (type == 'join') {
		$.postGo('/faf/r/selectRegType.asp?ievent='+EID+'&teamAction=join&famReg=true', { 'multiRegistrationType' : '2' });
	} else {
		$.ajax({
			type: "POST",
			cache : false,
			url: '/faf/r/selectRegType.asp?ievent='+EID,
			dataType: 'html',
			data: 'multiRegistrationType=2',
			success: function(data){
				//window.location.href = '/faf/r/selectRegType.asp?ievent='+EID+'&teamAction=join&famReg=true';	
				$.postGo('/faf/r/registerpre.asp?ievent='+EID+'&teamAction=none', { 'multiRegistrationType' : '2' });
			},
			error: function(xhr, textStatus, errorThrown){
			}
		});
		//$.postGo('/faf/r/registerpre.asp?ievent='+EID+'&teamAction=none', { 'multiRegistrationType' : '2' });
		//$.postGo('/faf/r/registerpre.asp?ievent='+EID+'&teamAction=none&famReg=true', { 'multiRegistrationType' : '2' });
	}
	
}

function showRegStep(step) {
	if (step == 'step1') {
		$('#newRegContent .step').slideUp('fast');
		$('#newRegContent .step1').slideDown('fast');
	} else if (step == 'step2a') {
		$('#newRegContent .step').slideUp('fast');
		$('#newRegContent .step2a').slideDown('fast');
	} else if (step == 'step2b') {
		$('#newRegContent .step').slideUp('fast');
		$('#newRegContent .step2b').slideDown('fast');
	}
}

function hidereg(type){
  $(document).ready(function(){

	if (type == 'startteam'){
		$('#newRegContent .step2a .reglevel.option1, #newRegContent .step2b .reglevel.option1').next('hr').hide();
		$('#newRegContent .step2a .reglevel.option1, #newRegContent .step2b .reglevel.option1').hide();
		$('.FAFBodyTable #thisForm input[name="teamAct"][onclick*="form"]').closest('tr').hide().next().hide();
	} else if (type == 'jointeam'){
		$('#newRegContent .step2a .reglevel.option2, #newRegContent .step2b .reglevel.option2').next('hr').hide();
		$('#newRegContent .step2a .reglevel.option2, #newRegContent .step2b .reglevel.option2').hide();
		$('.FAFBodyTable #thisForm input[name="teamAct"][onclick*="join"]').closest('tr').hide().next().hide();
		if (cpage.indexOf('teams/searchgroupteams.asp') > 0) {
			$('.FAFBodyTable table table table a[href*="joinTeam"]').wrapInner('<span class="joinTeamClosed" />')
			$('.FAFBodyTable table table table .joinTeamClosed').text('Team Registration Closed').unwrap();
		}
		if (cpage.indexOf('search/searchteampart.asp') > 0) {
			$('.FAFBodyTable table table table a[href*="waiver.asp"]').remove();
		}
		if (cpage.indexOf('teams/groupteamlist.asp') > 0) {
			$('.FAFBodyTable table table a[href*="joinTeam("]').remove();
		}
	} else if (type == 'joinindividual'){
		$('#newRegContent .step2a .reglevel.option3').next('hr').hide();
		$('#newRegContent .step2a .reglevel.option3').hide();
		//$('.FAFBodyTable #thisForm input[name="teamAct"][onclick*="none"]').closest('tr').hide().next().hide();
	} else if (type == 'addindividuals'){
		$('#newRegContent .step2b .reglevel.option3').next('hr').hide();
		$('#newRegContent .step2b .reglevel.option3').hide();
		//$('.FAFBodyTable #thisForm input[name="teamAct"][onclick*="none"]').closest('tr').hide().next().hide();
	} else if (type == 'all') {
		$('#newRegContent .step2a .reglevel, #newRegContent .step2b .reglevel').next('hr').hide();
		$('#newRegContent .step2a .reglevel, #newRegContent .step2b .reglevel').hide();
		$('#newRegContent .step2a, #newRegContent .step2b').append('<h4>Registration is currently closed.</h4>');
	}

  });
}

if(cpage.indexOf('r/default.asp') > 0){
	document.write('<style style="text/css">form#thisForm{visibility:hidden;}</style>');
}

// On Document Ready
$(document).ready(function(){

	if((cpage.indexOf('r/default.asp') > 0) 
		|| (cpage.indexOf('teams/registerteam.asp') > 0) 
		|| (cpage.indexOf('r/selectregtype.asp') > 0) 
		|| (cpage.indexOf('reg_new/registerpre.asp') > 0) 
		|| (cpage.indexOf('r/registerpre.asp') > 0)
	){

		$('body').prepend('<style style="text/css">#newRegContent{width:500px;margin: 5px auto;text-align:left;} #newRegContent .txtLeft{float:left;width:46%;margin-bottom:10px;} #newRegContent .txtRight{float:right;width:51%;} #newRegContent p{margin: 0 0 1em;} #newRegContent h3{margin: 5px 0 10px;font-size: 20px;font-weight: normal;text-align: left;} #newRegContent h4{margin: .5em 0; font-size:16px; font-weight:bold;} hr.hrstyle{background:#a4a4a4;border:0 none;height:1px;margin: .5em auto 1.25em;clear:both;} #newRegContent a img{border:0 none;} #newRegContent ul{margin: 0 0 1em;padding: 0 0 0 1.5em;} #newRegContent ul li{margin:0 0 0.25em;padding:0;} .backNav{text-align:right;}</style>');

	}

	var regTitle 	= '<h2>Loading..Prouty Profile Registration</h2>';


	// If r/default.asp, hide reg table and show new content
	if(cpage.indexOf('r/default.asp') > 0){

		$('form[name="registrationForm"]').hide();

		// new container
		//$('.FAFBodyTable td:first').prepend('<div id="newRegContent" style="display:none;"/>');
		$('form[name="registrationForm"]').before('<div id="newRegContent" style="display:none;"/>');
		if ($('.FAFBodyTable table:first table img').length > 0) {
			$('.FAFBodyTable table:first').hide();
		}

		// content

		var txtIndivLt	= '';//'<img src="https://www.kintera.com/AccountTempFiles/account905049/images/RegOne225x190.png" alt="Individual Registration" />';
		var txtIndivRt	= '';//'<p><a href="javascript:showRegStep(\'step2a\')" class="optionIndiv orangeBtn">Register ONE Person</a><br />I want to register for The Prouty as an individual. After choosing this option, please select whether you want to:</p><ul><li>Start a team</li><li>Join a team</li><li>Register as an Individual Walker</li></ul>';

		var txtMultiLt	= '';//'<img src="https://www.kintera.com/AccountTempFiles/account905049/images/RegFamily225x190.png" alt="Multiple Registration" />';
		var txtMultiRt	= '';//'<p><a href="javascript:showRegStep(\'step2b\')" class="optionMulti orangeBtn">Register A Family</a><br />I want to register my Family.  We will all work together to collect donations from friends and family and <strong>share a single personal fundraising page.</strong></p><ul><li>Start a team</li><li>Join a team</li><li>Register as an Individual Walker</li></ul>';

		var regStep1 	= '';//'<div class="step step1"><hr class="hrstyle" style="margin-top:0;" />'
						+ '';//'<div class="option1"><div class="txtLeft">'+txtIndivLt+'</div><div class="txtRight">'+txtIndivRt+'</div></div>'
						+ '';//'<hr class="hrstyle" />'
						+ '';//'<div class="option2"><div class="txtLeft">'+txtMultiLt+'</div><div class="txtRight">'+txtMultiRt+'</div></div>'
						+ '';//'<hr class="hrstyle" /></div>';

		$('#newRegContent').append(regTitle+regStep1);

		// Dynamic Reg level title
		/*var regStartTeamTitle = $('.FAFBodyTable input[name="teamAct"][onclick*="form"]').parent().text().replace(/\s+/g, " "),
			regJoinTeamTitle = $('.FAFBodyTable input[name="teamAct"][onclick*="join"]').parent().text().replace(/\s+/g, " "),
			regJoinIndivTitle = $('.FAFBodyTable input[name="teamAct"][onclick*="none"]').parent().text().replace(/\s+/g, " "),
			regMultiRegTitle = $('.FAFBodyTable input[name="teamAct"][onclick*="individual"]').parent().text().replace(/\s+/g, " ");*/

		var regStartTeamTitle = '';//'<img src="https://www.kintera.com/AccountTempFiles/account11491/images/regLevelstartTeam.gif" alt="Start a Team" />',
			regJoinTeamTitle = '';//'<img src="https://www.kintera.com/AccountTempFiles/account11491/images/regLeveljoinTeam.gif" alt="Join a Team" />',
			regJoinIndivTitle = '';//'<img src="https://www.kintera.com/AccountTempFiles/account11491/images/regLeveljoinIndividual.gif" alt="Join as an Individual" />';

		// Dynamic Reg level description
		/*var regStartTeamContentInit = $('.FAFBodyTable input[name="teamAct"][onclick*="form"]').closest('tr').next().find('td:first').text().replace(/\s+/g, " "),
			regJoinTeamContentInit = $('.FAFBodyTable input[name="teamAct"][onclick*="join"]').closest('tr').next().find('td:first').text().replace(/\s+/g, " "),
			regJoinIndivContentInit = $('.FAFBodyTable input[name="teamAct"][onclick*="none"]').closest('tr').next().find('td:first').text().replace(/\s+/g, " ");*/

		// Static Reg level description
		var regStartTeamContentInit = 'Register as a Team Captain and invite friends, family and co-workers to join my team.',
			regJoinTeamContentInit = 'Register on an existing Team and help collect donations from friends and family.',
			regJoinIndivContentInit = 'Register as an individual participant, not part of a Team, and help collect donations from friends and family.';


		if ($('.FAFBodyTable input[name="teamAct"][onclick*="form"]').length > 0){
			var regStartTeamContent = '<div class="reglevel option1"><div class="txtLeft"><a href="javascript:registerTeam(\'create\')">'+regStartTeamTitle+'</a></div><div class="txtright"><p>'+regStartTeamContentInit+'</p></div></div><hr class="hrstyle" />';
		} else {
			var regStartTeamContent = '';
		}

		if ($('.FAFBodyTable input[name="teamAct"][onclick*="join"]').length > 0){
			var regJoinTeamContent = '<div class="reglevel option2"><div class="txtLeft"><a href="javascript:registerTeam(\'join\')">'+regJoinTeamTitle+'</a></div><div class="txtright"><p>'+regJoinTeamContentInit+'</p></div></div><hr class="hrstyle" />';
		} else {
			var regJoinTeamContent = '';
		}

		if ($('.FAFBodyTable input[name="teamAct"][onclick*="none"]').length > 0){
			var regJoinIndivContent = '<div class="reglevel option3"><div class="txtLeft"><a href="javascript:registerTeam(\'none\')">'+regJoinIndivTitle+'</a></div><div class="txtright"><p>'+regJoinIndivContentInit+'</p></div></div><hr class="hrstyle" />';
		} else {
			var regJoinIndivContent = '';
		}

		/*var regStartTeamContent = $('.FAFBodyTable input[name="teamAct"][onclick*="form"]').closest('tr').next().find('td:first').text().replace(/\s+/g, " "),
			regJoinTeamContent = $('.FAFBodyTable input[name="teamAct"][onclick*="join"]').closest('tr').next().find('td:first').text().replace(/\s+/g, " "),
			regJoinIndivContent = $('.FAFBodyTable input[name="teamAct"][onclick*="none"]').closest('tr').next().find('td:first').text().replace(/\s+/g, " "),
			regMultiRegContent = $('.FAFBodyTable input[name="teamAct"][onclick*="individual"]').closest('tr').next().find('td:first').text().replace(/\s+/g, " ");*/

		var regMultiRegContent = $('.FAFBodyTable input[name="teamAct"][onclick*="individual"]').closest('tr').next().find('td:first').text().replace(/\s+/g, " ");

		var regStep2a 	= '<div class="step step2a" style="display: none;"><p class="backNav"><a href="javascript:showRegStep(\'step1\')">&laquo; Return to Previous Page</a></p>'
						+ '<h4>Register One Person:</h4><hr class="hrstyle" />'
						+ regStartTeamContent
						+ regJoinTeamContent
						+ regJoinIndivContent
						+ '</div>';

		$('#newRegContent').append(regStep2a);

		var mregStartTeamTitle = '';//'<img src="https://www.kintera.com/AccountTempFiles/account11491/images/regLevelstartTeam.gif" alt="Start a Team" />',
			mregJoinTeamTitle = '';//'<img src="https://www.kintera.com/AccountTempFiles/account11491/images/regLeveljoinTeam.gif" alt="Join a Team" />',
			mregJoinIndivTitle = '';//'<img src="https://www.kintera.com/AccountTempFiles/account11491/images/regLeveladdIndividuals.gif" alt="Add Individuals" />';

		var regStep2b 	= '<div class="step step2b" style="display: none;"><p class="backNav"><a href="javascript:showRegStep(\'step1\')">&laquo; Return to Previous Page</a></p>'
				+ '<h4>Register Multiple People:</h4><hr class="hrstyle" />'
				+ '<div class="reglevel option1"><div class="txtLeft"><a href="javascript:registerFam(\'create\')">'+mregStartTeamTitle+'</a></div><div class="txtright"><p></p></div></div><hr class="hrstyle" />'
				+ '<div class="reglevel option2"><div class="txtLeft"><a href="javascript:registerFam(\'join\')">'+mregJoinTeamTitle+'</a></div><div class="txtright"><p></p></div></div><hr class="hrstyle" />'
				+ '<div class="reglevel option3"><div class="txtLeft"><a href="javascript:registerFam(\'none\')">'+mregJoinIndivTitle+'</a></div><div class="txtright"><p></p></div></div><hr class="hrstyle" />'
				+ '</div>';

		$('#newRegContent').append(regStep2b);


		$.ajax({
			type: "GET",
			cache : false,
			url: '/faf/r/selectRegType.asp?ievent='+EID,
			dataType: 'html',
			success: function(data){
				//  Vars
				var dataViewDIV = '<div class="dataView" style="display:none;"></div>';	
				var modiData = $(data);
				// Static Reg level description
				var mregStartTeamContentInit = 'Register to start a new Team. The first person you register will be the Team Captain.',
					mregJoinTeamContentInit = 'Register to join an existing Team and help collect donations from friends and family.',
					mregJoinIndivContentInit = 'Register individual participants, not part of a team, and help collect donations from friends and family.';


				// Append div to hold ajaxed content
				$(dataViewDIV).appendTo('body');
				
				// Loop array for item and add to hidden div
				$.each(modiData, function(key, value){
					if(value.id == 'wrapPage'){
						$('.dataView').append(value);
						$('.dataView').html('<p>'+value+'</p>');
					}
				});	

				// In ie8  is not found
				if(modiData.length < 1){
					if(data.match('<b>Start')){
						//alert('found Start a team');
						$('#newRegContent .step2b .reglevel.option1 .txtright').append('<p>'+mregStartTeamContentInit+'</p>');
					}  else{
						$('#newRegContent .step2b .reglevel.option1').next('hr').remove();
						$('#newRegContent .step2b .reglevel.option1').remove();
					}

					if(data.match('<b>Join')){
						//alert('found Join a team');
						$('#newRegContent .step2b .reglevel.option2 .txtright p').append(mregJoinTeamContentInit);
					} else{
						$('#newRegContent .step2b .reglevel.option2').next('hr').remove();
						$('#newRegContent .step2b .reglevel.option2').remove();
					}
					if(data.match('<b>Add')){
						//alert('found Add a team');
						$('#newRegContent .step2b .reglevel.option3 .txtright p').append(mregJoinIndivContentInit);
					} else{
						$('#newRegContent .step2b .reglevel.option3').next('hr').remove();
						$('#newRegContent .step2b .reglevel.option3').remove();
					}
				} else {
					// Actions to prefrom if modiData is not created
					// Find input in hidden div and append text.		
					if ($(data).find('.FAFBodyTable input[name="teamAct"][onclick*="form"]').length > 0){
					$('#newRegContent .step2b .reglevel.option1 .txtright p').append(mregStartTeamContentInit);
					} else {
						$('#newRegContent .step2b .reglevel.option1').next('hr').remove();
						$('#newRegContent .step2b .reglevel.option1').remove();
					}		

					if ($(data).find('.FAFBodyTable input[name="teamAct"][onclick*="join"]').length > 0){
						$('#newRegContent .step2b .reglevel.option2 .txtright p').append(mregJoinTeamContentInit);
					} else {
						$('#newRegContent .step2b .reglevel.option2').next('hr').remove();
						$('#newRegContent .step2b .reglevel.option2').remove();
					}

					if ($(data).find('.FAFBodyTable input[name="teamAct"][onclick*="none"]').length > 0){
						$('#newRegContent .step2b .reglevel.option3 .txtright p').append(mregJoinIndivContentInit);
					} else {
						$('#newRegContent .step2b .reglevel.option3').next('hr').remove();
						$('#newRegContent .step2b .reglevel.option3').remove();
					}	
				}


			},
			error: function(xhr, textStatus, errorThrown){
				alert(textStatus, xhr, errorThrown)
			}
		});

		$('#newRegContent').show();

	};
		
	// Hide options on registration selection pages
	if(cpage.indexOf('teams/registerteam.asp') > 0){
		if(cpage.indexOf('teamaction=form') > 0){
			$('.FAFBodyTable input[name="teamAct"][onclick*="join"]').closest('tr').hide().next().hide();
			$('.FAFBodyTable input[name="teamAct"][onclick*="none"]').closest('tr').hide().next().hide();
		}
		if(cpage.indexOf('teamaction=join') > 0){
			$('.FAFBodyTable input[name="teamAct"][onclick*="form"]').closest('tr').hide().next().hide();
			$('.FAFBodyTable input[name="teamAct"][onclick*="none"]').closest('tr').hide().next().hide();
		}

	}

	if(cpage.indexOf('r/selectregtype.asp') > 0){
		if(cpage.indexOf('teamaction=form') > 0){
			$('.FAFBodyTable input[name="teamAct"][onclick*="join"]').closest('tr').hide().next().hide();
			$('.FAFBodyTable input[name="teamAct"][onclick*="none"]').closest('tr').hide().next().hide();
		}
		if(cpage.indexOf('teamaction=join') > 0){
			$('.FAFBodyTable input[name="teamAct"][onclick*="form"]').closest('tr').hide().next().hide();
			$('.FAFBodyTable input[name="teamAct"][onclick*="none"]').closest('tr').hide().next().hide();
		}
	}

	//Registration Settings from WordPress
	var regtype2;
		if (regType1 == 'individual' && teamReg == 'start-team'){
			regtype2 = 'ind-start';
		}
		if (regType1 == 'individual' && teamReg == 'join-team'){
			regtype2 = 'ind-join';
		}
		if (regType1 == 'individual' && teamReg == 'no-team'){
			regtype2 = 'ind-no';
		}
		if (regType1 == 'family' && teamReg == 'start-team'){
			regtype2 = 'fam-start';
		}
		if (regType1 == 'family' && teamReg == 'join-team'){
			regtype2 = 'fam-join';
		}
		if (regType1 == 'family' && teamReg == 'no-team'){
			regtype2 = 'fam-no';
		}
		if (regType1 == 'family' && teamReg == 'no-team'){
			regtype2 = 'fam-no';
		}
		if (regType1 == 'volunteer'){
			regtype2 = 'volunteer';
		}
	//Delay to wait for workflow scripts to load
	setTimeout(function() {
		//Select Family/Individual Automatically
		switch(regtype2){
			case 'ind-start':
			registerTeam('create');
			regtype2 = '';
			break;
			case 'ind-join':
			registerTeam('join');
			regtype2 = '';
			break;
			case 'ind-no':
			registerTeam('none');
			regtype2 = '';
			break;
			case 'fam-start':
			registerFam('create');
			regtype2 = '';
			break;
			case 'fam-join':
			registerFam('join');
			regtype2 = '';
			break;
			case 'fam-no':
			registerFam('none');
			regtype2 = '';
			break;
			case 'volunteer':
			//registerFam('none');
			regtype2 = '';
			break;
			default:
			//Go to WordPress Registration if coming from somewhere else
			if($.cookie('wp_regType') == null){
				if (document.location.href.indexOf('registerpre.asp') > -1 || document.location.href.indexOf('register.asp') > -1) {
					window.location.href = "http://theprouty.org/register";
				}
			}
		}
	},500);
	
});

$(document).ready(function(){
	
	// function to edit text on the login form 
	// to provide instructions on social logins
	
	function loginFormText() {
			loginHelplet = '<p class="loginHelpletFirst">OR, Use your Social Login below:</p><p class="loginHelpletSecond">Please Note: You can only use social login if you used it during your initial registration.</p>',
			loginHelpletFirst = { margin: "0 0 10px 0", padding: "0", fontWeight: "bold", textAlign: "left" },
			loginHelpletSecond = { margin: "0", padding: "0", fontStyle: "italic", textAlign: "left" },
			orText = $('form[name="registrationForm"] table table:nth-child(1) tr td center:contains("or")');
		$.each(orText,function(){
			if ( $(this).text().length == 2 ) {
				$(this).html(loginHelplet);
				$('.loginHelpletFirst').css(loginHelpletFirst);
				$('.loginHelpletSecond').css(loginHelpletSecond);
				$('h4 > center:contains("Are you a registered Participant?")').html("If you've registered as a 2016<br>participant please login below.");
			}
		});
	}
	if ( $('form[name="registrationForm"]').length > 0 ) {
		loginFormText();
		$('form[name="registrationForm"] table table:nth-child(1) tr td:contains("Use your login from")').empty();	
	}
	
	// check for login page or registration page
	// can't convert url to lower case since underscores will break it
	// look for 4 different urls
	if (window.location.href.match('/faf/login/loginParticipant.asp') || 
		window.location.href.match('/faf/login/loginparticipant.asp') || 
		window.location.href.match('/faf/reg_new/registerPre.asp') || 
		window.location.href.match('/faf/reg_new/registerpre.asp')) {
		// prevent keypress form submission
		$('form[name="registrationForm"]').bind('keypress', function(e) {
	       	if (e.keyCode == 13) {
	       		return false;
	       	}
		});
	}
	
	// fix links in the footer 
	// override broken links in footer copyright
	// this fixes the links without pushing the custom fields
	var footerHomeLink = "http://www.theprouty.org/";
	var footerPrivacyLink = "http://www.theprouty.org/about-us/privacy-policy/";
	var footerAboutLink = "http://www.arthritis.org/about-us/";
	$('#footerBlock #footernav p a:contains("Home")').attr("href",footerHomeLink);
	$('#footerBlock #footernav p a:contains("Privacy Policy")').attr("href",footerPrivacyLink);
	$('#footerBlock #footernav p a:contains("About Us")').attr("href",footerAboutLink);

	$('div.footerCopyright').remove();

	//Add Unique Classes to all Tables & Rows on Registeration
	//Registration Type Classes
	$('input[name=fees]:eq(0)').addClass('ultimate');
	$('input[name=fees]:eq(1)').addClass('ulti-mate');
	$('input[name=fees]:eq(2)').addClass('golfer');
	$('input[name=fees]:eq(3)').addClass('walking-individual-adult');
	$('input[name=fees]:eq(4)').addClass('walking-young-adult');
	$('input[name=fees]:eq(5)').addClass('walking-individual-child');
	$('input[name=fees]:eq(6)').addClass('walking-individual-kid');
	$('input[name=fees]:eq(7)').addClass('cycling-individual-adult');
	$('input[name=fees]:eq(8)').addClass('cycling-young-adult');
	$('input[name=fees]:eq(9)').addClass('cycling-individual-child');
	$('input[name=fees]:eq(10)').addClass('cycling-individual-kid');
	$('input[name=fees]:eq(11)').addClass('rower-individual-adult');
	$('input[name=fees]:eq(12)').addClass('rower-young-adult');
	$('input[name=fees]:eq(13)').addClass('rower-individual-child');
	$('input[name=fees]:eq(14)').addClass('rower-individual-kid');
	$('input[name=fees]:eq(15)').addClass('virtual');
	$('input[name=ProductID]:eq(0)').addClass('walking-individual-adult');
	$('input[name=ProductID]:eq(1)').addClass('walking-young-adult');
	$('input[name=ProductID]:eq(2)').addClass('walking-individual-child');
	$('input[name=ProductID]:eq(3)').addClass('walking-individual-kid');
	$('input[name=ProductID]:eq(4)').addClass('cycling-individual-adult');
	$('input[name=ProductID]:eq(5)').addClass('cycling-young-adult');
	$('input[name=ProductID]:eq(6)').addClass('cycling-individual-child');
	$('input[name=ProductID]:eq(7)').addClass('cycling-individual-kid');
	$('input[name=ProductID]:eq(8)').addClass('rower-individual-adult');
	$('input[name=ProductID]:eq(9)').addClass('rower-young-adult');
	$('input[name=ProductID]:eq(10)').addClass('rower-individual-child');
	$('input[name=ProductID]:eq(11)').addClass('rower-individual-kid');
	$('input[name=ProductID]:eq(12)').addClass('virtual');
	$('input[name=ProductID]:eq(13)').addClass('ultimate');
	$('input[name=ProductID]:eq(14)').addClass('ulti-mate');
	$('input[name=ProductID]:eq(15)').addClass('golfer');

	//Classes for table
	$('td').filter(function() { return $(this).text() === 'Please fill out the form below:'; }).closest('tr').addClass('row-fillBelow');
	$('td').filter(function() { return $(this).text() === 'Questions? Email info@theprouty.org or call 800-226-8744'; }).closest('tr').addClass('row-questions');

	//Profile Fields
	$('select[name=prefill_address]').closest('tr').addClass('row-prefillAddress');
	$('input[name=first_name]').closest('tr').addClass('row-firstName');
	$('input[name=middle_name]').closest('tr').addClass('row-middleName');
	$('input[name=last_name]').closest('tr').addClass('row-lastName');
	$('input[name=email_address]').closest('tr').addClass('row-emailAddress');
	$('input[name=phone_number]').closest('tr').addClass('row-phoneNumber');
	$('input[name=company_name]').closest('tr').addClass('row-companyName');
	$('input[name=gender]').closest('tr').addClass('row-gender');
	$('input[name=address_line_1]').closest('tr').addClass('row-addressLine1');
	$('input[name=address_line_2]').closest('tr').addClass('row-addressLine2');
	$('input[name=city]').closest('tr').addClass('row-city');
	$('select[name=state]').closest('tr').addClass('row-state');
	$('input[name=zip]').closest('tr').addClass('row-zip');
	$('input[name=province]').closest('tr').addClass('row-province');
	$('select[name=country]').closest('tr').addClass('row-country');
	$('input[name=Field965758]').closest('tr').addClass('row-work');
	$('input[name=birthdate]').closest('tr').addClass('row-birthdate');
	$('input[name=birthDate]').closest('tr').addClass('row-birthdate');
	$('input[name=Field577668]').closest('tr').addClass('row-emergencyName');
	$('input[name=special_field_2]').closest('tr').addClass('row-emergencyPhone');
	$('input[name=special_field_1]').closest('tr').addClass('row-cancerSurvivor');
	$('textarea[name=Field5145261]').closest('tr').addClass('row-dartmouth');
	$('select[name=marketing_source]').closest('tr').addClass('row-marketingSource');
	$('select[name=Field4551731]').closest('tr').addClass('row-marketingSource');
	$('input[name=Field4975344]').closest('tr').addClass('row-newToProuty');
	$('input[name=noemail]').closest('tr').addClass('row-emailFlag');
	$('input[name=do_not_email_flag]').closest('tr').addClass('row-emailFlag');
	$('input[name=do_not_direct_mail_flag]').closest('tr').addClass('row-mailFlag');
	$('input[name=nomail]').closest('tr').addClass('row-mailFlag');
	$('input[name=do_not_phone_flag]').closest('tr').addClass('row-phoneFlag');
	$('input[name=nophone]').closest('tr').addClass('row-phoneFlag');

	//Registration Types
	$('td').filter(function() { return $(this).text() ===  'Fees'; }).closest('tr').addClass('row-fees');
	$('td').filter(function() { return $(this).text() ===  'Fees*'; }).closest('tr').addClass('row-fees');
	$('.ultimate').closest('tr').addClass('row-ultimate');
	$('.ulti-mate').closest('tr').addClass('row-ulti-mate');
	$('.golfer').closest('tr').addClass('row-golfer');
	$('.walking-individual-adult').closest('tr').addClass('row-walking-individual-adult');
	$('.walking-young-adult').closest('tr').addClass('row-walking-young-adult');
	$('.walking-individual-child').closest('tr').addClass('row-walking-individual-child');
	$('.walking-individual-kid').closest('tr').addClass('row-walking-individual-kid');
	$('.cycling-individual-adult').closest('tr').addClass('row-cycling-individual-adult');
	$('.cycling-young-adult').closest('tr').addClass('row-cycling-young-adult');
	$('.cycling-individual-child').closest('tr').addClass('row-cycling-individual-child');
	$('.cycling-individual-kid').closest('tr').addClass('row-cycling-individual-kid');
	$('.rower-individual-adult').closest('tr').addClass('row-rower-individual-adult');
	$('.rower-young-adult').closest('tr').addClass('row-rower-young-adult');
	$('.rower-individual-child').closest('tr').addClass('row-rower-individual-child');
	$('.rower-individual-kid').closest('tr').addClass('row-rower-individual-kid');
	$('.virtual').closest('tr').addClass('row-virtual');
	
	$('.row-ultimate').closest('table').addClass('regTypes');
	$('td').filter(function() { return $(this).text() ===  'Additional Fees'; }).closest('tr').addClass('row-addfees');
	$('input[name=addtlFee1]').closest('tr').addClass('row-attlFee');

	//Additional Info
	$('td').filter(function() { return $(this).text() ===  'Additional Information'; }).closest('tr').addClass('row-addInfo');
	$('input[name=Field6131468]').closest('tr').addClass('row-optShirt');
	$('input[name=Field6067231]').closest('tr').addClass('row-hanoverMember');
	$('input[name=Field6067232]').closest('tr').addClass('row-memberName');
	$('input[name=Field6067233]').closest('tr').addClass('row-greenFee');
	$('input[name=Field6067239]').closest('tr').addClass('row-virtualActivity');
	$('input[name=Field6067240]').closest('tr').addClass('row-virtualLocation');
	$('input[name=Field6067241]').closest('tr').addClass('row-virtualTime');
	$('select[name=Field5791631]').closest('tr').addClass('row-planComplete');
	$('input[name=Field5791628]').closest('tr').addClass('row-firstProuty');
	$('input[name=Field5791629]').closest('tr').addClass('row-timesProutyed');
	$('input[name=Field5791630]').closest('tr').addClass('row-coach');
	$('input[name=Field4997719]').closest('tr').addClass('row-coach');
	$('input[name=Field4972689]').closest('tr').addClass('row-ultimateName');
	$('input[name=Field4641897]').closest('tr').addClass('row-thursdayBus');
	$('input[name=Field4948234]').closest('tr').addClass('row-thursdayDinner');
	$('select[name=Field5817946]').closest('tr').addClass('row-thursdayDouble');
	$('input[name=Field5791632]').closest('tr').addClass('row-fridayDouble');
	$('input[name=Field4641898]').closest('tr').addClass('row-saturdayBus');
	$('input[name=Field6141878]').closest('tr').addClass('row-breakfastFriday');
	$('select[name=Field5791619]').closest('tr').addClass('row-boatType');
	$('textarea[name=Field5944223]').closest('tr').addClass('row-whoElse');
	$('input[name=Field5791621]').closest('tr').addClass('row-boatTrailer');
	$('input[name=Field5792334]').closest('tr').addClass('row-whoseTrailer');
	$('input[name=Field5791622]').closest('tr').addClass('row-boatName');
	$('input[name=Field5935033]').closest('tr').addClass('row-golfer2');
	$('input[name=Field5791623]').closest('tr').addClass('row-clubAffiliation');
	$('select[name=Field5792333]').closest('tr').addClass('row-launchTime');
	$('input[name=Field5791625]').closest('tr').addClass('row-contactMethod');
	$('input[name=Field5791667]').closest('tr').addClass('row-rowingDirector');
	$('input[name=Field5935032]').closest('tr').addClass('row-foursome');
	$('input[name=Field5935034]').closest('tr').addClass('row-golfer3');
	$('input[name=Field5935035]').closest('tr').addClass('row-golfer4');
	$('select[name=Field5935036]').closest('tr').addClass('row-golfTime');
	$('select[name=Field589237]').closest('tr').addClass('row-shirtSize');

	function hideFieldRows(){
		$('.row-addfees,.row-attlFee,.row-addInfo,.row-hanoverMember,.row-memberName,.row-greenFee,.row-virtualActivity,.row-virtualLocation,.row-virtualTime,.row-planComplete,.row-firstProuty,.row-timesProutyed,.row-coach,.row-ultimateName,.row-thursdayBus,.row-thursdayDinner,.row-thursdayDouble,.row-fridayDouble,.row-saturdayBus,.row-breakfastFriday,.row-boatType,.row-whoElse,.row-boatTrailer,.row-whoseTrailer,.row-boatName,.row-golfer2,.row-clubAffiliation,.row-launchTime,.row-contactMethod,.row-rowingDirector,.row-foursome,.row-golfer3,.row-golfer4,.row-golfTime,.row-shirtSize').hide();
	}

	function notAutoIndividual(){
		$('.row-fees,.row-addfees,.row-attlFee').hide();
		$('.regTypes').closest('tr').hide();
		$('.row-addInfo').closest('table').hide();
	}
	function notAutoFamily(){
		$('.regTypes,.row-addfees,.row-attlFee,.row-addInfo,.row-hanoverMember,.row-memberName,.row-greenFee,.row-virtualActivity,.row-virtualActivity,.row-virtualLocation,.row-virtualTime,.row-planComplete,.row-firstProuty,.row-timesProutyed,.row-coach,.row-ultimateName,.row-thursdayBus,.row-thursdayDinner,.row-thursdayDouble,.row-fridayDouble,.row-saturdayBus,row-breakfastFriday,.row-boatType,.row-whoElse,.row-boatTrailer,.row-whoseTrailer,.row-boatName,.row-golfer2,.row-clubAffiliation,.row-launchTime,.row-contactMethod,.row-rowingDirector,.row-foursome,.row-golfer3,.row-golfer4,.row-golfTime,.row-shirtSize').hide();
	}
	function autoIndividual(){
		$('.row-fees,.row-addfees,.row-attlFee').hide();
		$('.regTypes').closest('tr').hide();
		$('.row-addInfo').closest('table').hide();
	}
	function autoFamily(){
		$('.regTypes,.row-addfees,.row-attlFee,.row-addInfo,.row-hanoverMember,.row-memberName,.row-greenFee,.row-virtualActivity,.row-virtualLocation,.row-virtualTime,.row-planComplete,.row-firstProuty,.row-timesProutyed,.row-coach,.row-ultimateName,.row-thursdayBus,.row-thursdayDinner,.row-thursdayDouble,.row-fridayDouble,.row-saturdayBus,row-breakfastFriday,.row-boatType,.row-whoElse,.row-boatTrailer,.row-whoseTrailer,.row-boatName,.row-golfer2,.row-clubAffiliation,.row-launchTime,.row-contactMethod,.row-rowingDirector,.row-foursome,.row-golfer3,.row-golfer4,.row-golfTime,.row-shirtSize').hide();
	}

	function walkingOptions(){
		hideFieldRows();
		$('.row-addInfo td').html('<strong>Walking Options</strong>');
		$('.row-planComplete,.row-addInfo').show().insertAfter('.row-golfer');
		$('select[name=Field5791631] option[value="3K Audrey\'s walk"]').show();
	    $('select[name=Field5791631] option[value="6K residential"]').show();
	    $('select[name=Field5791631] option[value="9K residential"]').show();
	    $('select[name=Field5791631] option[value="12K residential"]').show();
	    $('select[name=Field5791631] option[value="5K wooded"]').show();
	    $('select[name=Field5791631] option[value="10K wooded"]').show();
	    $('select[name=Field5791631] option[value="Kyle Mooney\'s Walk - Warren SAG"]').show();

		$('select[name=Field5791631] option[value="Hybrid Metric Century"]').hide();
	    $('select[name=Field5791631] option[value="100 Miles"]').hide();
	    $('select[name=Field5791631] option[value="77 Miles"]').hide();
	    $('select[name=Field5791631] option[value="Hybrid Metric Century"]').hide();
	    $('select[name=Field5791631] option[value="50 Miles"]').hide();
	    $('select[name=Field5791631] option[value="35 Miles"]').hide();
	    $('select[name=Field5791631] option[value="20 Miles"]').hide();
	    $('select[name=Field5791631] option[value="15 Miles"]').hide();
	    $('select[name=Field5791631] option[value="10 Miles"]').hide();
	    $('select[name=Field5791631] option[value="5 Miles"]').hide();
		$('select[name=Field5791631] option[value="Ultimate"]').hide();
	    $('select[name=Field5791631] option[value="Golf"]').hide();
	    $('select[name=Field5791631] option[value="Virtual"]').hide();
	}
	function cyclingOptions(){
		hideFieldRows();
		$('.row-addInfo td').html('<strong>Cycling Options</strong>');
		$('.row-planComplete,.row-addInfo').show().insertAfter('.row-golfer');
		$('select[name=Field5791631] option[value="100 Miles"]').show();
	    $('select[name=Field5791631] option[value="77 Miles"]').show();
	    $('select[name=Field5791631] option[value="Hybrid Metric Century"]').show();
	    $('select[name=Field5791631] option[value="50 Miles"]').show();
	    $('select[name=Field5791631] option[value="35 Miles"]').show();
	    $('select[name=Field5791631] option[value="20 Miles"]').show();

		$('select[name=Field5791631] option[value="3K Audrey\'s walk"]').hide();
	    $('select[name=Field5791631] option[value="6K residential"]').hide();
	    $('select[name=Field5791631] option[value="9K residential"]').hide();
	    $('select[name=Field5791631] option[value="12K residential"]').hide();
	    $('select[name=Field5791631] option[value="5K wooded"]').hide();
	    $('select[name=Field5791631] option[value="10K wooded"]').hide();
	    $('select[name=Field5791631] option[value="Kyle Mooney\'s Walk - Warren SAG"]').hide();
	    $('select[name=Field5791631] option[value="35 Miles"]').hide();
	    $('select[name=Field5791631] option[value="15 Miles"]').hide();
	    $('select[name=Field5791631] option[value="10 Miles"]').hide();
	    $('select[name=Field5791631] option[value="5 Miles"]').hide();
		$('select[name=Field5791631] option[value="Ultimate"]').hide();
	    $('select[name=Field5791631] option[value="Golf"]').hide();
	    $('select[name=Field5791631] option[value="Virtual"]').hide();
	}
	function virtualOptions(){
		hideFieldRows();
		$('.row-addInfo td').html('<strong>Virtual Options</strong>');
		$('select[name=Field5791631]').val('Virtual');
		$('.row-addInfo,.row-virtualActivity,.row-virtualLocation,.row-virtualTime').show().insertAfter('.row-golfer');
	}
	function ultimateOptions(){
		hideFieldRows();
		$('.row-addfees td').html('<strong>Ultimate Options</strong>');
		$('select[name=Field5791631]').val('Ultimate');
		$('.row-addfees,.row-attlFee,.row-thursdayBus,.row-thursdayDinner,.row-fridayDouble,.row-saturdayBus').show().insertAfter('.row-golfer');
	}
	function ultiMateOptions(){
		hideFieldRows();
		$('.row-addfees td').html('<strong>Ulti-mate Options</strong>');
		$('select[name=Field5791631]').val('Ultimate');
		$('.row-addfees,.row-attlFee,.row-ultimateName,.row-thursdayBus,.row-thursdayDinner,.row-fridayDouble,.row-saturdayBus,.row-breakfastFriday').show().insertAfter('.row-golfer');
	}
	function rowerOptions(){
		hideFieldRows();
		$('.row-addInfo td').html('<strong>Rower Options</strong>');
		$('.row-planComplete,.row-addInfo,.row-boatType,.row-whoElse,.row-boatTrailer,.row-whoseTrailer,.row-boatName,.row-clubAffiliation,.row-launchTime,.row-rowingDirector').show().insertAfter('.row-golfer');
		$('select[name=Field5791631] option[value="20 Miles"]').show();
	    $('select[name=Field5791631] option[value="15 Miles"]').show();
	    $('select[name=Field5791631] option[value="10 Miles"]').show();
	    $('select[name=Field5791631] option[value="5 Miles"]').show();

		$('select[name=Field5791631] option[value="3K Audrey\'s walk"]').hide();
	    $('select[name=Field5791631] option[value="6K residential"]').hide();
	    $('select[name=Field5791631] option[value="9K residential"]').hide();
	    $('select[name=Field5791631] option[value="12K residential"]').hide();
	    $('select[name=Field5791631] option[value="5K wooded"]').hide();
	    $('select[name=Field5791631] option[value="10K wooded"]').hide();
	    $('select[name=Field5791631] option[value="Kyle Mooney\'s Walk - Warren SAG"]').hide();
	    $('select[name=Field5791631] option[value="100 Miles"]').hide();
	    $('select[name=Field5791631] option[value="77 Miles"]').hide();
	    $('select[name=Field5791631] option[value="Hybrid Metric Century"]').hide();
	    $('select[name=Field5791631] option[value="50 Miles"]').hide();
	    $('select[name=Field5791631] option[value="35 Miles"]').hide();
		$('select[name=Field5791631] option[value="Ultimate"]').hide();
	    $('select[name=Field5791631] option[value="Golf"]').hide();
	    $('select[name=Field5791631] option[value="Virtual"]').hide();
	}
	function golferOptions(){
		hideFieldRows();
		$('.row-addInfo td').html('<strong>Golfer Options</strong>');
		$('select[name=Field5791631]').val('Golf');
		$('.row-addInfo,.row-foursome,.row-golfTime,.row-shirtSize,.row-hanoverMember,.row-memberName').show().insertAfter('.row-golfer');
	}


	//Sphere Cleanup & Pre-Populations for Primary Registrant
	$('.row-emailFlag,.row-mailFlag,.row-phoneFlag,.row-generaladult,.row-generalminor,.row-thursdayDouble').hide();
	$('input[name=addtlFee1]').after('Thursday night housing at St. Anselm College in Manchester, NH is $65 which will be charged to your credit card at the end of the registration process');

	if (document.location.href.indexOf('register.asp') > -1) {
		var autoFill = $('input[name=FieldLock]').length;

		//Populate Registration Fields
		//Golfing Options
		if ($.cookie('wp_eventTypeSelect') == 'golf'){
			$('.golfer').prop('checked', true).click();
			$('select[name=Field5791631]').val('Golf');
			$('input[name=Field5935032]').val($.cookie('wp_foursomeMembers'));
			var teeTime = $.cookie('wp_teeTime');
			switch(teeTime){
				case 'teetime-1':
				$('select[name=Field5935036]').val('6:00am – 8:00am');
				break;
				case 'teetime-2':
				$('select[name=Field5935036]').val('8:00am – 10:00am');
				break;
				case 'teetime-3':
				$('select[name=Field5935036]').val('10:00am – 12:00pm');
				break;
				case 'teetime-4':
				$('select[name=Field5935036]').val('12:00pm – 2:00pm');
				break;
				default:
				$('select[name=Field5935036]').val('8:00am – 10:00am');
			}
			var shirtSize = $.cookie('wp_shirtSize');
			switch(shirtSize){
				case 'MS':
				$('select[name=Field589237]').val('Mens SM');
				break;
				case 'MM':
				$('select[name=Field589237]').val('Mens MED');
				break;
				case 'ML':
				$('select[name=Field589237]').val('Mens LRG');
				break;
				case 'MXL':
				$('select[name=Field589237]').val('Mens X-LRG');
				break;
				case 'WS':
				$('select[name=Field589237]').val('Womens SM');
				break;
				case 'WM':
				$('select[name=Field589237]').val('Womens MED');
				break;
				case 'WL':
				$('select[name=Field589237]').val('Womens LRG');
				break;
				case 'WXL':
				$('select[name=Field589237]').val('Womens X-LRG');
				break;
				default:
				$('select[name=Field589237]').val('Mens MED');
			}
			if ($.cookie('wp_memberHCC') == 'yes'){
				$('input[name=Field6067231][value=Yes]').click();
			}
			else {
				$('input[name=Field6067231][value=No]').click();
			}
			$('input[name=Field6067232]').val($.cookie('wp_memberHCCName'));
			if ($.cookie('wp_greensFee') == 'yes'){
				$('input[name=Field6067233][value=Yes]').click();
			}
			else {
				$('input[name=Field6067233][value=No]').click();
			}
		}
		//Virtual Options
		if ($.cookie('wp_eventTypeSelect') == 'virtual'){
			$('.virtual').prop('checked', true).click();
			$('select[name=Field5791631]').val('Virtual');
			$('input[name=Field6067239]').val($.cookie('wp_virtualActivity'));
			$('input[name=Field6067240]').val($.cookie('wp_virtualActivityLocation'));
			$('input[name=Field6067241]').val($.cookie('wp_virtualActivityWhen'));
		}
		//Ultimate Options
		if ($.cookie('wp_eventTypeSelect') == 'ultimate' ){
			$('select[name=Field5791631]').val('Ultimate');
			if ($.cookie('wp_ultiMate') == 'yes'){
				$('.ulti-mate').prop('checked', true).click();
				$('input[name=Field4972689]').val($.cookie('wp_ultiMateName'));
			} else {
				$('.ultimate').prop('checked', true).click();
			}
			if ($.cookie('wp_housing') == 'yes'){
				$('input[name=addtlFee1]').prop('checked', true);
			}
			if ($.cookie('wp_transportationThursday') == 'yes'){
				$('input[name=Field4641897][value=Yes]').click();
			}
			else {
				$('input[name=Field4641897][value=No]').click();
			}
			if ($.cookie('wp_preevent') == 'yes'){
				$('input[name=Field4948234][value=Yes]').click();
			}
			else {
				$('input[name=Field4948234][value=No]').click();
			}
			if ($.cookie('wp_doubleHousingThursday') == 'yes'){
				$('select[name=Field5817946]').val('Yes - I checked the box above to pay');
			}
			else {
				$('select[name=Field5817946]').val('No');
			}
			if ($.cookie('wp_doubleHousingFriday') == 'yes'){
				$('input[name=Field5791632][value=Yes]').prop('checked', true);
			}
			else {
				$('input[name=Field5791632][value=No]').prop('checked', true);
			}
			if ($.cookie('wp_transportationSaturday') == 'yes'){
				$('input[name=Field4641898][value=Yes]').prop('checked', true);
			}
			else {
				$('input[name=Field4641898][value=No]').prop('checked', true);
			}
			if ($.cookie('wp_breakfastFriday') == 'yes'){
				$('input[name=Field6141878][value=Yes]').prop('checked', true);
			}
			else {
				$('input[name=Field6141878][value=No]').prop('checked', true);
			}
			if ($.cookie('wp_optShirt') == 'yes'){
				$('input[name=Field6131468][value=Yes]').prop('checked', true);
			}
			else {
				$('input[name=Field6131468][value=No]').prop('checked', true);
			}
		}
		//Rowing Options
		if ($.cookie('wp_eventTypeSelect') == 'rowing'){
			if ($.cookie('wp_ageMinor') == 'no'){
				$('.rower-individual-adult').prop('checked', true).click();
			}
			else if ($.cookie('wp_minorType') == 'youngadult'){
				$('.rower-young-adult').prop('checked', true).click();
			}
			else if ($.cookie('wp_minorType') == 'individualchild'){
				$('.rower-individual-child').prop('checked', true).click();
			}
			else {
				$('.rower-individual-kid').prop('checked', true).click();
			}
			$('textarea[name=Field5944223]').val($.cookie('wp_shipmateName'));
			$('input[name=Field5792334]').val($.cookie('wp_boatTrailerWhos'));
			$('input[name=Field5791622]').val($.cookie('wp_boatName'));
			$('input[name=Field5791623]').val($.cookie('wp_affClub'));
			$('input[name=Field5791667]').val($.cookie('wp_messageToDirector'));
			var rowDistance = $.cookie('wp_rowDistance');
			switch(rowDistance){
				case 'rDistance-5':
				$('select[name=Field5791631]').val('5 Miles');
				break;
				case 'rDistance-10':
				$('select[name=Field5791631]').val('10 Miles');
				break;
				case 'rDistance-15':
				$('select[name=Field5791631]').val('15 Miles');
				break;
				case 'rDistance-20':
				$('select[name=Field5791631]').val('20 Miles');
				break;
				default:
				$('select[name=Field5791631]').val('10 Miles');
			}
			var boatType = $.cookie('wp_boatType');
			switch(boatType){
				case 'boatType-1':
				$('select[name=Field5791619]').val('1x');
				break;
				case 'boatType-2':
				$('select[name=Field5791619]').val('2x');
				break;
				case 'boatType-3':
				$('select[name=Field5791619]').val('4x');
				break;
				case 'boatType-4':
				$('select[name=Field5791619]').val('4+');
				break;
				case 'boatType-5':
				$('select[name=Field5791619]').val('8+');
				break;
				case 'boatType-6':
				$('select[name=Field5791619]').val('Not Sure Yet');
				break;
				default:
				$('select[name=Field5791619]').val('1x');
			}
			var launchTime = $.cookie('wp_launchTime');
			switch(launchTime){
				case 'launchTime-1':
				$('select[name=Field5792333]').val('6:30am - 7:00am');
				break;
				case 'launchTime-2':
				$('select[name=Field5792333]').val('7:00am - 7:30am');
				break;
				case 'launchTime-3':
				$('select[name=Field5792333]').val('7:30am - 8:00am');
				break;
				case 'launchTime-4':
				$('select[name=Field5792333]').val('8:30am - 9:00am');
				break;
				case 'launchTime-5':
				$('select[name=Field5792333]').val('9:00am - 9:30am');
				break;
				case 'launchTime-7':
				$('select[name=Field5792333]').val('9:30am - 10:00am');
				break;
				case 'launchTime-8':
				$('select[name=Field5792333]').val('10:00am - 10:30am');
				break;
				case 'launchTime-9':
				$('select[name=Field5792333]').val('10:30am - 11:00am');
				break;
				default:
				$('select[name=Field5792333]').val('7:00am - 7:30am');
			}
			if ($.cookie('wp_optShirt') == 'yes'){
				$('input[name=Field6131468][value=Yes]').prop('checked', true);
			}
			else {
				$('input[name=Field6131468][value=No]').prop('checked', true);
			}
		}
		//Cycling Options
		if ($.cookie('wp_eventTypeSelect') == 'cycling'){
			if ($.cookie('wp_ageMinor') == 'no'){
				$('.cycling-individual-adult').prop('checked', true).click();
			}
			else if ($.cookie('wp_minorType') == 'youngadult'){
				$('.cycling-young-adult').prop('checked', true).click();
			}
			else if ($.cookie('wp_minorType') == 'individualchild'){
				$('.cycling-individual-child').prop('checked', true).click();
			}
			else {
				$('.cycling-individual-kid').prop('checked', true).click();
			}
			var cycleRoute = $.cookie('wp_cycleRoute');
			switch(cycleRoute){
				case 'cRoute-0':
				$('select[name=Field5791631]').val('20 Miles');
				break;
				case 'cRoute-1':
				$('select[name=Field5791631]').val('35 Miles');
				break;
				case 'cRoute-2':
				$('select[name=Field5791631]').val('50 Miles');
				break;
				case 'cRoute-3':
				$('select[name=Field5791631]').val('Hybrid Metric Century');
				break;
				case 'cRoute-4':
				$('select[name=Field5791631]').val('77 Miles');
				break;
				case 'cRoute-5':
				$('select[name=Field5791631]').val('100 Miles');
				break;
				default:
				$('select[name=Field5791631]').val('50 Miles');
			}
			if ($.cookie('wp_optShirt') == 'yes'){
				$('input[name=Field6131468][value=Yes]').prop('checked', true);
			}
			else {
				$('input[name=Field6131468][value=No]').prop('checked', true);
			}
		}
		//Walking Options
		if ($.cookie('wp_eventTypeSelect') == 'walking'){
			if ($.cookie('wp_ageMinor') == 'no'){
				$('.walking-individual-adult').prop('checked', true).click();
			}
			else if ($.cookie('wp_minorType') == 'youngadult'){
				$('.walking-young-adult').prop('checked', true).click();
			}
			else if ($.cookie('wp_minorType') == 'individualchild'){
				$('.walking-individual-child').prop('checked', true).click();
			}
			else {
				$('.walking-individual-kid').prop('checked', true).click();
			}
			var walkRoute = $.cookie('wp_walkRoute');
			switch(walkRoute){
				case 'wRoute-0':
				$('select[name=Field5791631]').val('3K Audrey\'s walk');
				break;
				case 'wRoute-1':
				$('select[name=Field5791631]').val('6K residential');
				break;
				case 'wRoute-2':
				$('select[name=Field5791631]').val('9K residential');
				break;
				case 'wRoute-3':
				$('select[name=Field5791631]').val('12K residential');
				break;
				case 'wRoute-4':
				$('select[name=Field5791631]').val('5K wooded');
				break;
				case 'wRoute-5':
				$('select[name=Field5791631]').val('10K wooded');
				break;
				case 'wRoute-6':
				$('select[name=Field5791631]').val('Kyle Mooney\'s Walk - Warren SAG');
				break;
				default:
				$('select[name=Field5791631]').val('3K Audrey\'s Walk');
			}
			if ($.cookie('wp_optShirt') == 'yes'){
				$('input[name=Field6131468][value=Yes]').prop('checked', true);
			}
			else {
				$('input[name=Field6131468][value=No]').prop('checked', true);
			}
		}

		//Not Autofilled
		if ($.cookie('wp_regType') == 'individual' && !autoFill){
			notAutoIndividual();
		}
		if ($.cookie('wp_regType') == 'family' && !autoFill){
			notAutoFamily();
		}
		//Autofilled
		if ($.cookie('wp_regType') == 'individual' && autoFill){
			autoIndividual();
		}
		if ($.cookie('wp_regType') == 'family' && autoFill){
			autoFamily();
		}
	}
	
	//Additional Family Members
	if (document.location.href.indexOf('Register.asp') > -1) {
		$('.row-golfer').hide();
		var summaryEdit = getUrlVal('reload');
		if (!summaryEdit){			
			$('select[name=Field5791631]').val('');
			//Walking Options (Default)
			walkingOptions();
			
			$("input[name=ProductID]:radio").change(function () {
				//Walking Options
				if ($("input[value=2274079]").prop('checked') == true || $("input[value=2274080]").prop('checked') == true || $("input[value=2274081]").prop('checked') == true || $("input[value=2274082]").prop('checked') == true){
					walkingOptions();
				}
				//Cycling Options
				if ($("input[value=2274083]").prop('checked') == true || $("input[value=2274084]").prop('checked') == true || $("input[value=2274085]").prop('checked') == true || $("input[value=2274086]").prop('checked') == true){
					cyclingOptions();
				}
				//Virtual Options
				if ($("input[value=2274091]").prop('checked') == true){
					virtualOptions();
				}
				//Ultimate Options
				if ($("input[value=2274092]").prop('checked') == true){
					ultimateOptions();
				}
				//Ulti-mate Options
				if ($("input[value=2274093]").prop('checked') == true){
					ultiMateOptions();
				}
				//Rowing Options
				if ($("input[value=2274087]").prop('checked') == true || $("input[value=2274088]").prop('checked') == true || $("input[value=2274089]").prop('checked') == true || $("input[value=2274090]").prop('checked') == true){
					rowerOptions();
				}
				//Golfing Options
				if ($("input[value=2274094]").prop('checked') == true){
					golferOptions();
				}
			});
		}
		if (summaryEdit){
			$('.row-addfees,.row-attlFee,.row-addInfo,.row-hanoverMember,.row-memberName,.row-greenFee,.row-virtualActivity,.row-virtualLocation,.row-virtualTime,.row-planComplete,.row-firstProuty,.row-timesProutyed,.row-coach,.row-ultimateName,.row-thursdayBus,.row-thursdayDinner,.row-thursdayDouble,.row-fridayDouble,.row-saturdayBus,.row-breakfastFriday,.row-boatType,.row-whoElse,.row-boatTrailer,.row-whoseTrailer,.row-boatName,.row-golfer2,.row-clubAffiliation,.row-launchTime,.row-contactMethod,.row-rowingDirector,.row-foursome,.row-golfer3,.row-golfer4,.row-golfTime,.row-shirtSize').hide();
			var currentSelection = $("input[name=ProductID]:checked").val();
			switch(currentSelection){
				case '2274079':
				case '2274084':
				case '2274081':
				case '2274082':
				//Walking
					walkingOptions();
				break;
				case '2274083':
				case '2203607':
				case '2274085':
				case '2274086':
				//Cycling
					cyclingOptions();
				break;
				case '2274091':
				//Virtual
					virtualOptions();
				break;
				case '2274092':
				//Ultimate
					ultimateOptions();
				break;
				case '2274093':
				//Ulti-mate
					ultiMateOptions();
				break;
				case '2274087':
				case '2274088':
				case '2274089':
				case '2274090':
				//Rowing
					rowerOptions();
				break;
				case '2274094':
				//Golfing
					golferOptions();
				break;
				default:
				//Do Nothing
			}

			//Family Member Edit Detect Regtype Change
			$("input[name=ProductID]:radio").change(function () {
				//Walking Options
				if ($("input[value=2274079]").prop('checked') == true || $("input[value=2274080]").prop('checked') == true || $("input[value=2274081]").prop('checked') == true || $("input[value=2274082]").prop('checked') == true){
					walkingOptions();
				}
				//Cycling Options
				if ($("input[value=2274083]").prop('checked') == true || $("input[value=2274084]").prop('checked') == true || $("input[value=2274085]").prop('checked') == true || $("input[value=2274086]").prop('checked') == true){
					cyclingOptions();
				}
				//Virtual Options
				if ($("input[value=2274091]").prop('checked') == true){
					virtualOptions();
				}
				//Ultimate Options
				if ($("input[value=2274092]").prop('checked') == true){
					ultimateOptions();
				}
				//Ulti-mate Options
				if ($("input[value=2274093]").prop('checked') == true){
					ultiMateOptions();
				}
				//Rowing Options
				if ($("input[value=2274087]").prop('checked') == true || $("input[value=2274088]").prop('checked') == true || $("input[value=2274089]").prop('checked') == true || $("input[value=2274090]").prop('checked') == true){
					rowerOptions();
				}
				//Golfing Options
				if ($("input[value=2274094]").prop('checked') == true){
					golferOptions();
				}
			});
		}
	}
	if (document.location.href.indexOf('searchGroupTeams.asp') > -1) {
		$('a[href="../home/waiver.asp"]').attr('href', 'http://theprouty.org');
		$('a[href="javascript:history.back()"]').remove();
	}
	if (document.location.href.indexOf('loginParticipant.asp') > -1) {
		$('a:contains(click here to register)').attr('href', 'http://theprouty.org');
	}
	if (document.location.href.indexOf('registerTeam.asp') > -1) {
		$('select[name=teams]').val($.cookie('wp_joinTeamId'));
	}
	setTimeout(function() {
		if (document.location.href.indexOf('searchTeamPart.asp') > -1) {
			var jt = fafJSONteam.tid;
			$('a.bigButton').attr('href', 'http://theprouty.org/register?teamID='+jt);
		}
		if (document.location.href.indexOf('donorPledge.asp') > -1) {
			//Family Raised Amount
			if ($(".row3").length < 1){
				var familyRaisedAmt = FAF.Methods.formatCurrencyWSymbol(parseInt(fafJSONparticipant.raised, 10))
				var familyRaisedHtml = '<div class="dataRow clearfix row3"><span class="dataRowLabel">Dollars Raised</span><span class="dataRowValue">' + familyRaisedAmt + '</span></div>';
	            $(familyRaisedHtml).insertBefore('.row4');
	        }
		}
	},500);
	
});
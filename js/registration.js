$( document ).ready(function() {	
	//SET EVENT TYPE
    	//open it if returning and already selected
    	//if registering from specific event page
		if( $.getUrlVars()['etype']){
			if( $.getUrlVars()['etype'] == 'none' ){
				//do nothing
			} else {
				$("select#event-type-select").val( $.getUrlVars()['etype'] );
				var eType = $.getUrlVars()['etype'];
			}
		}
    	eTypeToggle();

    	if(eType === 'volunteer'){//if etype = voluteer make first next button go to URL not next screen
    		$('a.flat-button.next').attr('href','https://www.kintera.org/faf/volunteerRegNew/contactUs.asp?ievent=1167649&lis=1&regType=volunteer');
    	}

});

//Format Currency for Thermometer
	function formatCurrency(num, symbol) {
		symbol = symbol || '$';
		num = num.toString().replace(/\$|\,/g, '');
		if (isNaN(num)) num = "0";
		sign = (num == (num = Math.abs(num)));
		num = Math.floor(num * 100 + 0.50000000001);
		cents = num % 100;
		num = Math.floor(num / 100).toString();
		if (cents < 10) cents = "0" + cents;
		for (var i = 0; i < Math.floor((num.length - (1 + i)) / 3); i++)
			num = num.substring(0, num.length - (4 * i + 3)) + ',' + num.substring(num.length - (4 * i + 3));
		return (((sign) ? '' : '-') + symbol + num);
	}

//URL VARiables
	jQuery.extend({
		getUrlVars: function(){
			var vars = [], hash;
			var hashes = window.location.href.slice(window.location.href.indexOf('?') + 1).split('&');
			for(var i = 0; i < hashes.length; i++)
			{
				hash = hashes[i].split('=');
				vars.push(hash[0]);
				vars[hash[0]] = hash[1];
			}
			return vars;
		},
		getUrlVar: function(name){
			return jQuery.getUrlVars()[name];
		}
	});

//JOIN TEAM REGISTRATION
	/*
	* DESCRIPTION: If user Registers from 'Join Team' Button - 
	*				- Pre-Select 'Join Team' Radio Button
	*				- Pass teamID to Sphere
	* EVENT: on NEXT in first screen
	*/
	function joinTeamReg(){
		// set var join team id
		var teamID = $.getUrlVars()['teamID'];
		// if var exisits 
		if(teamID){//alert(teamID);
			//click 'join team' on 2nd screen
			$('input#teamReg-join').click();
		}
	}

//EVENT TYPES
	/** 
	* NAME: eTypeToggle
	* DESCRIPTION: 
	*	Show Only selecected event Type, hide others
	*	Load repeated buttons
	* 	Run on Select Check and on load if clicked from Event Type Register Button
	*/
		function eTypeToggle(x){
		//if select box is already selected
			var eType = $("select#event-type-select").val();//get value of event type
			
			//Golfing vs. Family
			if(eType == 'golf'){//if golf then no family option
				$('#item-1 > div:eq(0) h4').after('<p class="fineprint">All Golfers must register as an Individual - If not registering as a golfer please click a different Register Button from the home page</p>');
				$("input[id=regType-ind]").prop('checked', true);
				$("input[id=regType-fam]").prop('checked', false);
				$("#item-1 > div:eq(0) > div:eq(1)").css('opacity','none');
			}

			if(eType == ''){//if eType is blank
				$('.eType').slideUp('slow');//hide all event types
			} else { //if eType is not blank
				// alert('Event Type is '+eType);
				var eType = $("select#event-type-select").val();//get value of event type
				$('.eType').slideUp('slow');//hide all event types
				$('.eType.'+eType).slideDown('slow');//show the clicked event type
			}

		//add is 18 Minor Question to Questions
			$('.is-minor').empty();//get rid of any previous  
			var isMinor = " <h4 class='validate'>Are you 24 and under and registering as an individual (not as a family) </h4>\
				<div class='toggle-box tb1'>\
			    <div>\
			        <input id='age-minor-yes' name='age-minor' type='radio' value='yes' class='toggler yes tR1' onclick='toggle(1)'/>\
			        <label for='age-minor-yes'><span></span>Yes</label>\
			    </div>\
			    <div>\
			        <input id='age-minor-no' name='age-minor' type='radio' value='no' class='toggler tR1' onclick='toggle(1)' checked/>\
			        <label for='age-minor-no'><span></span>No</label>\
			    </div>\
			    <div class='toggled input-box under-dashed tD1'>\
				    <div>\
				        <input id='young-adult' name='minor-type' type='radio' value='youngadult' checked/>\
				        <label for='young-adult'><span></span>Young Adult (19-24)</label>\
				    </div>\
				    <div>\
				        <input id='individual-child' name='minor-type' type='radio' value='individualchild'/>\
				        <label for='individual-child'><span></span>Individual Child (13-18)</label>\
				    </div>\
				    <div>\
				        <input id='individual-kid' name='minor-type' type='radio' value='individualkid'/>\
				        <label for='individual-kid'><span></span>Individual Kid (0-12)</label>\
				    </div>\
			    </div>";
			var optOutShirt = " <h4 class='validate'>Do you want to opt out of getting a Prouty T-shirt this year? </h4>\
			    <div>\
			        <input id='opt-shirt-yes' name='opt-shirt' type='radio' value='yes'/>\
			        <label for='opt-shirt-yes'><span></span>Yes</label>\
			    </div>\
			    <div>\
			        <input id='opt-shirt-no' name='opt-shirt' type='radio' value='no'checked/>\
			        <label for='opt-shirt-no'><span></span>No</label>\
			    </div>";
		   if(eType == 'ultimate'){
		   		if ($('.ultimate input[name=opt-shirt]').length == 0) {
		   			$('.ultimate .opt-shirt').append(optOutShirt);
		   		}
			}else
			if(eType == 'walking'){
				$('.walking .is-minor').append(isMinor);
				if ($('.walking input[name=opt-shirt]').length == 0) {
		   			$('.walking .opt-shirt').append(optOutShirt);
		   		}
			}else 
			if(eType == 'cycling'){
				$('.cycling .is-minor').append(isMinor);
				if ($('.cycling input[name=opt-shirt]').length == 0) {
		   			$('.cycling .opt-shirt').append(optOutShirt);
		   		}
			}else 
			if(eType == 'rowing'){
				$('.rowing .is-minor').append(isMinor);
				if ($('.rowing input[name=opt-shirt]').length == 0) {
		   			$('.rowing .opt-shirt').append(optOutShirt);
		   		}
			}
		}

//IF-YES TOGGLE BOXXES	
	function numberToggleBoxes(){
	//serialize the toggle-boxxes
		//count the number of toggle-boxxes
		var numToggleBoxs = $('.toggle-box').length;
		//asign unique serial numbers to each class
		for(i=0; i<numToggleBoxs; i++){
			$('.toggle-box:eq('+i+')').addClass('tB'+i);
			$('.toggle-box:eq('+i+') .toggler').addClass('tR'+i);
			$('.toggle-box:eq('+i+') .toggler').attr('onclick','toggle('+i+')');
			$('.toggle-box:eq('+i+') .toggled').addClass('tD'+i);
		}
		// alert(numToggleBoxs);
	}
	//when input.toggler is clicked, toggle the realative '.toggled' according to '.toggler.yes' possition
		// $(".toggler").click(function() {toggle();});
	//toggle function

	function toggle(x){
		// alert('toggle'+x);
		if(x == undefined){
			var numToggleBoxs = $('.toggle-box').length;
				for(i=0; i<numToggleBoxs; i++){
					if( $('.tR'+i+'.yes').prop('checked') ){
						// alert('open it');
				    	$('.tD'+i).slideDown('slow');
				    } else {
				    	// alert('close it');
				    	$('.tD'+i).slideUp('slow');
				    }
				}
		} else {
			if( $('.tR'+x+'.yes').prop('checked') ){
				// alert('open it');
		    	$('.tD'+x).slideDown('slow');
		    } else {
		    	// alert('close it');
		    	$('.tD'+x).slideUp('slow');
		    }
		}			
	}

//NEXT/PREV Button Functions

		/**
		* NAME: Next
		* DESCRIPTION: 
		* 	Validate current screens inputs
		*	First check for inputs input, 
		*		If YES - Display Next Screen
		* 		If NO - Add errors to alert
		*	Submit to next form with data in url
		*/
		
		function next(x){//next button
				var arrayErrors = [];
				var eType = $("select#event-type-select").val();//get value of event type
			//1st screen
				if(x === 0){
					joinTeamReg();
				} else
			//2nd screen validation
				if(x === 1){//if on 2nd screen
					//Run Validation Checks and create Error Messages
					if( !$("input[name=regType]:checked").val() ){ //if NO checked value
						arrayErrors.push('\n - Please Select a Registration Type');
					}
					if( !$("input[name=teamReg]:checked").val() ){ //if NO checked value
						arrayErrors.push('\n - Please Select a Team Type');
					}
				//Golfing vs. Family 
					//if family selected hide golf and add fineprint
					if( $("input[id=regType-fam]:checked").val() ){
						$('.regtypevalue').text('Family');
						$('select#event-type-select option[value="golf"]').css('display','none');
						if($('.golffamopt').length == 0){
							$('#item-2 > div:eq(0) h4').after('<p class="fineprint golffamopt">Event Choice for Family member #1</p><p class="fineprint golffamopt">Golfing is not available for "Family Registrations", if registering for Golf - Please go to Previous Step and choose Register - "As an Individual"</p>');
						}
					}
					//if individual selected show golf and remove fineprint
					if( $("input[id=regType-ind]:checked").val() ){
						$('.regtypevalue').text('Individual');
						$('select#event-type-select option[value="golf"]').css('display','block');
						$('#item-2 > div:eq(0) p.fineprint').remove();
					}	
					//if golfing > selected from pre-register button
						if( eType == 'golf' && $("input#regType-fam:checked").val() ){
							arrayErrors.push('\n - Family Registration is not available if Golfing');
							$("input[id=regType-ind]").prop('checked', true);
							$("input[id=regType-fam]").prop('checked', false);
						}
				} else	
			//3rd screen validation
				if(x === 2){//if on 3rd screen
					//Run Validation Checks and create Error Messages
					//Event Choice Validation
						if( !$("select#event-type-select").val() ){ //if NO value
							arrayErrors.push('\n - Please Select an Event Choice');
							
						} else {
							var eventType = $("select#event-type-select").val();
						}
					//Ultimate Validation
						if(eventType == 'ultimate'){//if event Ultimate

							if( !$('input:checked[name=ulti-mate1]').val() ){//if input is !not checked
								arrayErrors.push("\n - Please select Ulti-'mate' Yes/No");//add error
							}

							// do not validate "Ulti-mate Name" per rebecca 29jan2014
							// if( $('input#ulti-mate1-yes:checked').val() ){//if YES ulti'mate'
							// 	if( !$('input#ulti-mate1-name').val() ){//if ulti'mate' is blank
							// 		arrayErrors.push("\n - Please Name your 'Ulti-Mate'");//add error
							// 	}
							// }

							if( !$('input:checked[name=housing]').val() ){
								arrayErrors.push("\n - Please select a Housing Type");//add error
							}


							if( !$('input:checked[name=transportation-thursday]').val() ){//if input is !not checked
								arrayErrors.push("\n - Please select Thursday Transportation Yes/No");//add error
							}


							if( !$('input:checked[name=preevent]').val() ){//if input is !not checked
								arrayErrors.push("\n - Please select Pre-Event Dinner Yes/No");//add error
							}

							if( !$('input:checked[name=double-housing-friday]').val() ){//if input is !not checked
								arrayErrors.push("\n - Please select Friday Night Double Housing - Yes/No");//add error
							}

							if( !$('input:checked[name=breakfast-friday]').val() ){//if input is !not checked
								arrayErrors.push("\n - Please select Friday Breakfast - Yes/No");//add error
							}

						}
					//Rowing Validation
						if(eventType == 'rowing'){//if event rowing
							if( !$('select#boatType').val() ){//if select option/value is blank
								arrayErrors.push("\n - Please choose a Boat Type");//add error
							}
							if( $('input#boat-trailer-yes:checked').val() ){//if YES trailer
								if( !$('input#boat-trailer-whos').val() ){
									arrayErrors.push("\n - Please provide Boat Trailer Info");	
								}
							}
							// Boat Name not required per Rebecca 29jan2014
							// if( !$('input#boat-name').val() ){//if boat name is blank
							// 	arrayErrors.push("\n - Please Name your Boat");
							// }	
						}
					//Cycling Validation
						if(eventType == 'cycling'){//if event cycling
							if( !$('select#cycle-route').val() ){//if select option/value is blank
								arrayErrors.push("\n - Please choose a Cycling Route");//add error
							}
						}
					//Walking Validation
						if(eventType == 'walking'){//if event walking
							if( !$('select#walk-route').val() ){//if select option/value is blank
								arrayErrors.push("\n - Please choose a Walking Route");//add error
							}
						}
					//Golf Validation
						if(eventType == 'golf'){//if event Golf
							if( !$('select#shirt-size').val() ){//if size is blank
								arrayErrors.push("\n - Please enter your Golf Shirt Size");//add error
							}
							if( $('input#memberHCC-yes:checked').val() ){//if YES member
								if( !$('input#memberHCC-name').val() ){//if name is blank
									arrayErrors.push("\n - Please enter your Name");//add error
								}
							}
						}
					//Virtual Validation
						if(eventType == 'virtual'){//if event Virtual
						//rebecca says virtual fields are not required (28jan2014)
							// if( !$('form#wizard input[name=virtualActivity]').val() ){arrayErrors.push("\n - Please enter your Virtual Activity");}
							// if( !$('form#wizard input[name=virtualActivityLocation]').val() ){arrayErrors.push("\n - Please enter your Virtual Activity Location");}
							// if( !$('form#wizard input[name=virtualActivityWhen]').val() ){arrayErrors.push("\n - Please enter your Virtual Activity Time");}
						}
				}
				//if NO errors from above
				if(arrayErrors == ''){
					//if on 3rd screen
					if(x === 2){
						// alert('function submit');
						//formSubmit();
					} else {
						var ulLength = $('#wizard > ul li').length;
						if(x < ulLength-1){
							var y = x+1;
							//change the wizard bar indicator and screen content
							$('[id^="item-"]').css('display','none');
							$('#item-'+y).css('display','block');
							$('[class^="item-"]').removeClass('active');
							$('li.item-'+y).addClass('active');
						}
					}
				} else {
					arrayErrors = "Please complete the following fields to continue:\n "+arrayErrors;
					alert(arrayErrors);
				}	
		}//end func next

		function setCookie(key, value) {
	        var expires = new Date(),
	            time = 5400; // 90 minutes
	        expires.setTime(expires.getTime() + time);
	        document.cookie = key + '=' + value + ';expires=' + expires.toUTCString() + ';path=/';
	    }

		function closeRegChoice(){
			$('.popmake-register').attr("href", "javascript:formSubmit();")
			$('.popmake-register').removeClass('popmake-register');
			prev(2);
			$('#popmake-5007').popmake('close');
		}

		function formSubmit(){
			var formAction = "https://www.kintera.org/faf/r/default.asp?ievent=1167649&lis=1";
			var formResults = [];
			//Results
			var teamID = $.getUrlVars()['teamID'];
			if(teamID){formResults.push( 'teamID='+teamID);}
			formResults.push( 'regType='+$('form#wizard input:checked[name=regType]').val() );
			formResults.push( 'teamReg='+$('form#wizard input:checked[name=teamReg]').val() );
			formResults.push( 'event-type-select='+$('form#wizard select[name=event-type-select]').val() );
			var ETSelect = $('select#event-type-select').val();
			if(ETSelect == 'ultimate'){// alert('ultimate');
				formResults.push( 'ulti-mate1='+$('form#wizard input:checked[name=ulti-mate1]').val() );
					if( $('form#wizard input:checked[name=ulti-mate1]').val() == 'yes' ){
						formResults.push( 'ulti-mate1-name='+$('form#wizard input[name=ulti-mate1-name]').val() );
					}
				formResults.push( 'housing='+$('form#wizard input:checked[name=housing]').val() );
				formResults.push( 'transportation-thursday='+$('form#wizard input:checked[name=transportation-thursday]').val() );
				formResults.push( 'preevent='+$('form#wizard input:checked[name=preevent]').val() );
				formResults.push( 'double-housing-thursday='+$('form#wizard input:checked[name=double-housing-thursday]').val() );
				formResults.push( 'double-housing-friday='+$('form#wizard input:checked[name=double-housing-friday]').val() );
				formResults.push( 'breakfast-friday='+$('form#wizard input:checked[name=breakfast-friday]').val() );
				formResults.push( 'opt-shirt='+$('form#wizard input:checked[name=opt-shirt]').val() );
			} else 
			if(ETSelect == 'walking'){
				formResults.push( 'walk-route='+$('form#wizard select[name=walk-route]').val() );
				formResults.push( 'age-minor='+$('form#wizard input:checked[name=age-minor]').val() );
					if( $('form#wizard input:checked[name=age-minor]').val() == 'yes' ){
						formResults.push( 'minor-type='+$('form#wizard input:checked[name=minor-type]').val() );
					}
				formResults.push( 'opt-shirt='+$('form#wizard input:checked[name=opt-shirt]').val() );
			}else 
			if(ETSelect == 'rowing'){
				formResults.push( 'row-distance='+$('form#wizard select[name=row-distance]').val() );
				formResults.push( 'age-minor='+$('form#wizard input:checked[name=age-minor]').val() );
					if( $('form#wizard input:checked[name=age-minor]').val() == 'yes' ){
						formResults.push( 'minor-type='+$('form#wizard input:checked[name=minor-type]').val() );
					}
				formResults.push( 'boatType='+$('form#wizard select[name=boatType]').val() );
				formResults.push( 'shipmate-name='+$('form#wizard textarea[name=shipmate-name]').val() );
				formResults.push( 'boat-trailer='+$('form#wizard input[name=boat-trailer]').val() );
					if( $('form#wizard input[name=boat-trailer]').val() == 'yes' ){
						formResults.push( 'boat-trailer-whos='+$('form#wizard input[name=boat-trailer-whos]').val() );
					}
				formResults.push( 'boat-name='+$('form#wizard input[name=boat-name]').val() );
				formResults.push( 'aff-club='+$('form#wizard input[name=aff-club]').val() );
				formResults.push( 'launch-time='+$('form#wizard select[name=launch-time]').val() );
				formResults.push( 'opt-shirt='+$('form#wizard input:checked[name=opt-shirt]').val() );
				formResults.push( 'contact-method='+$('form#wizard input[name=contact-method]').val() );
				formResults.push( 'message-to-director='+$('form#wizard textarea[name=message-to-director]').val() );
			}else 
			if(ETSelect == 'golf'){
				formResults.push( 'foursome-members='+$('form#wizard textarea[name=foursome-members]').val() );
				formResults.push( 'tee-time='+$('form#wizard select[name=tee-time]').val() );
				formResults.push( 'shirt-size='+$('form#wizard select[name=shirt-size]').val() );
				formResults.push( 'memberHCC='+$('form#wizard input:checked[name=memberHCC]').val() );
					if( $('form#wizard input:checked[name=memberHCC]').val() == 'yes' ){
						formResults.push( 'memberHCC-name='+$('form#wizard input[name=memberHCC-name]').val() );
						formResults.push( 'greens-fee='+$('form#wizard input:checked[name=greens-fee]').val() );
					}
			}else 
			if(ETSelect == 'cycling'){
				formResults.push( 'cycle-route='+$('form#wizard select[name=cycle-route]').val() );
				formResults.push( 'age-minor='+$('form#wizard input:checked[name=age-minor]').val() );
					if( $('form#wizard input:checked[name=age-minor]').val() == 'yes' ){
						formResults.push( 'minor-type='+$('form#wizard input:checked[name=minor-type]').val() );
					}
				formResults.push( 'opt-shirt='+$('form#wizard input:checked[name=opt-shirt]').val() );
			}else 
			if(ETSelect == 'virtual'){
				formResults.push( 'virtualActivity='+$('form#wizard input[name=virtualActivity]').val() );
				formResults.push( 'virtualActivityLocation='+$('form#wizard input[name=virtualActivityLocation]').val() );
				formResults.push( 'virtualActivityWhen='+$('form#wizard input[name=virtualActivityWhen]').val() );
			}
			formResults = formResults.join('&');
			// alert(formResults);
			window.location = formAction+'&'+formResults;
		}

		//previous button
		function prev(x){
			if(x>0){
				var y = x-1;
				$('[id^="item-"]').css('display','none');
				$('#item-'+y).css('display','block');
				$('[class^="item-"]').removeClass('active');
				$('li.item-'+y).addClass('active');
			} else { 
				// alert('no more prev');
			}
		}
		function jump(x){//click the wizard numbers
			var ulLength = $('#wizard > ul li').length;
			$('[id^="item-"]').css('display','none');
			$('#item-'+x).css('display','block');
			$('[class^="item-"]').removeClass('active');
			$('li.item-'+x).addClass('active');
		}	





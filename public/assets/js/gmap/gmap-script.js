$.fn.scrollTo = function( target, options, callback ){
	if(typeof options == 'function' && arguments.length == 2){ callback = options; options = target; }
		var settings = $.extend({
		scrollTarget  : target,
		offsetTop     : 50,
		duration      : 500,
		easing        : 'swing'
	}, options);
	return this.each(function(){
		var scrollPane = $(this);
		var scrollTarget = (typeof settings.scrollTarget == "number") ? settings.scrollTarget : $(settings.scrollTarget);
		var scrollY = (typeof scrollTarget == "number") ? scrollTarget : scrollTarget.offset().top + scrollPane.scrollTop() - parseInt(settings.offsetTop);
		scrollPane.stop().animate({scrollTop : scrollY }, parseInt(settings.duration), settings.easing, function(){
			if (typeof callback == 'function') { callback.call(this); }
		});
	});
}

var markers = []; // makers array

function HiddenList()
{
	if(!$('.feed-list').is(':visible')) {
		$('.feed-list').addClass('list');
		$('.feed-list-2').removeClass('list');
		return $('.feed-list');
	}
	else if(!$('.feed-list-2').is(':visible')) {
		$('.feed-list').removeClass('list');
		$('.feed-list-2').addClass('list');
		return $('.feed-list-2');
	}
}

function VisibleList()
{
	if($('.feed-list').is(':visible')) {
		return $('.feed-list');
	}
	else if($('.feed-list-2').is(':visible')) {
		return $('.feed-list-2');
	}
}

$(document).ready(function(){


	$(function() {
		var xzoom = 0;
		var visitList;

		var viewAllBounds;
		var viewAllBoundsLatLngList = [];

		var feedTarget;
		var userTarg;
		var feedUrl = "http://portal.ljpltd.com/location/map";
		// var feedUrl = 'sample_data.json'
		var feedList = [];

		var listTarg = $('.feed-list');

		var location_data = []; // makers array

		// create the map
	    
		// map settings
	    var mapOptions = {
	        zoom: 5,
	        center: new google.maps.LatLng(37.6,-95.665),
	        sensor: 'true',
			disableDefaultUI: false,
			panControl: false,
			zoomControl: false,
			scaleControl: true,
			styles: [{"featureType":"administrative.country","elementType":"geometry","stylers":[{"visibility":"simplified"},{"hue":"#ff0000"}]}]
	    };
	    var map = new google.maps.Map(document.getElementById("gmap"), mapOptions);

		// create infobox
		var boxText = document.createElement("div");
		boxText.className = 'ibwindow';
		boxText.innerHTML = "content";

		var ibOptions = {
			 content: boxText
			,disableAutoPan: false
			,maxWidth: 500
			,pixelOffset: new google.maps.Size(-250, -65)
			,zIndex: null
			,boxStyle: {
			  width: "500px"
			 }
			,alignBottom: true
			,closeBoxMargin: "20px 10px 10px 10px"
			,closeBoxURL: "http://www.google.com/intl/en_us/mapfiles/close.gif"
			,infoBoxClearance: new google.maps.Size(1, 1)
			,isHidden: false
			,pane: "floatPane"
			,enableEventPropagation: false
		};

		var ib = new InfoBox(ibOptions);

		// generate infoBox Content
		function generateIBContent(obj) {
			var each = location_data[obj];
			// var date = convertUTCDateToLocalDate(new Date(each.timestamp));
			// date.toString().replace(/GMT.*/g,"");
			var date;
			if (each.timestamp)
				date = $.format.toBrowserTimeZone(each.timestamp, "MM/dd/yyyy hh:mm:ss a")
			else
				date = "unavailable"
			var html = '<div class="infoBoxContent">'+
			'<div class="infoBoxHeader">'+
				'<div class="infoBodyMedia"><img src="'+each.image+'"></div>'+
				'<div class="infoBoxHeaderTitle"><span>'+each.user+'</span></div>'+
			// '</div><div class="infoBoxBody">'+
				// '<div class="infoBoxContext">'+
					// '<div class="fagroup"><div class="fa fa-building-o"></div><div class="fac infoBoxProject">'+each.project+'</div></div>'+
					// '<div class="fagroup"><div class="fa fa-map-marker"></div><div class="fac infoBoxAddress">'+each.street+', '+each.city+' '+each.state+' '+each.zip+'</div></div>'+
					// '<div class="fagroup"><div class="fa fa-calendar"></div><div class="fac infoBoxDate">'+date+'</div></div>'+
				// '</div>'+
			'</div>';

			return html;
		}

		function convertUTCDateToLocalDate(date) {
			var newDate = new Date(date.getTime()+date.getTimezoneOffset()*60*1000);

			var offset = date.getTimezoneOffset() / 60;
			var hours = date.getHours();

			newDate.setHours(hours - offset);

			return newDate;   
		}

		// ----------------------------------------------------------

		function initiate(callback) 
		{
			// get hidden list to contain the updated data
			listTarg=HiddenList();
			// empty the container first
			listTarg.html('');

			// get json feed
			getFeed(function(data)
			{
				// location_data = data;

				data.forEach(function(dd,i)
				{
					if(dd.state!=='Philippines')
						location_data.push(dd);
				});

				if (location_data && location_data.length > 0) {
					// loop to create the visit list and markers
					location_data.forEach(function(each, i) {
						
						// console.log(i)
						// create feed list
						var date;
						if (each.timestamp)
							date = $.format.toBrowserTimeZone(each.timestamp, "hh:mm a")
						else
							date = "unavailable"
						var feed_item = '<li class="itemdiv dialogdiv"><a href="#' + i + '" id="ullist_a_'+i+'" data-load="'+i+'" data-uid="'+each.user_id+'"';
						if (userTarg == each.user_id)
							feed_item += " class='active'";
						var status_img;
						if (each.status) {
							// status_img = "images/" + each.status + ".png"
							status_img = "assets/images/pin.png"
						}
						else
							status_img = "images/visit-error.png"
						// feed_item += '><a href="#'+i+'" id="ullist_a_'+i+'" data-load="'+i+'" data-uid="'+each.user_id+'"><div class="feed-icon"><img src="'+status_img+'"></div><div class="feed-item"><span class="feed-name"><strong>'+ each.user + '</strong></span> is at <span class="feed-project text-success"><strong>'+each.project+'</strong></span><div class="feed-date">'+date+'</div></div></a></li>';
						
						feed_item += '><div class="user"><img alt="' + each.user + '" src="' + each.image + '" /></div>';
						feed_item += '<div class="body"><div class="time"><i class="ace-icon fa fa-clock-o"></i><span class="green">' + date + '</span></div>';
						feed_item += '<div class="name">' + each.user + '</div><div class="text">' + each.project + '</div></div></a></li>';
						feed_item = $(feed_item);						

						feedList.push(feed_item);

						$(feedList[i]).mouseenter(feedListHover)
						$(feedList[i]).mouseleave(feedListLeave)
						$(feedList[i]).click(function(ev){
							ev.preventDefault();
							checkHoverValue = 0;
							clearTimeout(checkHoverTimer);
							checkHoverInit = false;
							var obj = $(this);
							var self = $(this).find('a')
							var data_load = self.attr('data-load')
							if (data_load != "all") {
								var data = location_data[data_load];
								// console.log("Data Load: " + data_load)
								
								// viewOnMap(data_load)

								if (xzoom == 0) {
									xzoom = 1;
									map.setZoom(15)
								} else {
									// xzoom = 0;
									// map.setZoom(5)
								}

								listTarg.find('li').removeClass('active');
								self.parent().addClass('active');

								feedTarget = data_load;
								userTarg = $(this).attr('data-uid');
								// console.log(userTarg);

								boxText.innerHTML = generateIBContent(feedTarget);
								ib.setContent(boxText);
								ib.open(map, this);

							}

							viewOnMap(i);
							// console.log('asdfasdfasdf')
						})
						$('.feed-list','.feed-list-2').scroll(function()
						{
							// console.log('asdfasdfasdf');
							checkHoverValue = 0;
							clearTimeout(checkHoverTimer);
							checkHoverInit = false;

							// $('.feed-list li','.feed-list-2 li').unbind('mouseenter',feedListHover);
							listTarg.children('li').unbind('mouseenter',feedListHover);
							clearTimeout(feedListInitTimer);
							feedListInit();
						})

						listTarg.append(feedList);

						/*if (markers && markers.length > 0) {
	                        for (var ix = 0; ix < markers.length; ix++) {
	                            if (markers[ix].user_id == each.user_id) {
	                                markers[ix].setMap(null);
	                                markers.splice(ix, 1);
	                                console.log('found');
	                            }
	                        }
	                    }*/

						// create the markers
						var marker = new google.maps.Marker({
							position: new google.maps.LatLng(each.latitude, each.longitude),
							map: map,
							content: 'content',
							user_id: each.user_id,
							icon: status_img
						});
						// console.log(marker)
						markers.push(marker);

						// Add event listeners to markers
						google.maps.event.addListener(markers[i], "mouseover", function() {
							// console.log(">>> " + i);
							boxText.innerHTML = generateIBContent(i);
							ib.setContent(boxText);
							ib.open(map, this);
						});
						google.maps.event.addListener(markers[i], "mouseout", function() {
							ib.close();
							if (feedTarget != null) {
								boxText.innerHTML = generateIBContent(feedTarget);
								ib.setContent(boxText);
								ib.open(map, markers[feedTarget]);
							}
						});
						google.maps.event.addListener(markers[i], "click", function() 
						{
							boxText.innerHTML = generateIBContent(i);
							ib.setContent(boxText);
							ib.open(map, this);
							map.setZoom(15);
							// viewOnMap(i);
							feedTarget = i;

							// console.log(feedTarget);
							// update the feed list and hightlight selected list
							listTarg.find('li').removeClass('active');
							listTarg.find('a[data-load="'+i+'"]').parent().addClass('active');
							userTarg = markers[i].user_id;
							// console.log(userTarg);

							// scroll feed list target in to view
							var tempListTarget = listTarg.find('a[data-load="'+i+'"]');
							var tempListOffset = 0;
							if (tempListTarget.offset().top > $('#feed-list-group').height())
								tempListOffset = $('#feed-list-group').height();
							else
								tempListOffset = $('#feed-list-group').offset().top;
							// console.log(tempListTarget.offset().top + " --- " + tempListOffset + " --- " + $('#feed-list-group').height())

							listTarg.parent().scrollTo(tempListTarget,{
								duration: 1000,
								easing: 'easeInOutQuart',
								offsetTop: tempListOffset
							});
						});
						google.maps.event.addListener(ib,'closeclick',function()
						{
							//  Create a new viewpoint bound
							viewAllBounds = new google.maps.LatLngBounds ();
							//  Go through each...
							var nLatLng;
							location_data.forEach(function(each,i){
								nLatLng = new google.maps.LatLng (each.latitude,each.longitude);
							  	viewAllBounds.extend (nLatLng);
							})
							//  Fit these bounds to the map
							map.fitBounds (viewAllBounds);
							map.setZoom(5);
							// close all info windows
							feedTarget = null;
							userTarg = null;
							listTarg.find('li').removeClass('active');


							listTarg.parent().scrollTo(0,{
								duration: 1000,
								easing: 'easeInOutQuart',
								offsetTop: 0
							});
						});
					})

					VisibleList().hide();
					// Hide visible container then show the updated container
					listTarg.show();

					// console.log(listTarg.attr('class'));

					if (callback) {
						callback(true);
					}

					// JQUERY LIST for search filter
					var listOptions = {
						valueNames: [ 'feed-name', 'feed-project' ]
					};
					var feedListSearch = new List('feed-form', listOptions);
				}

			});
		}

		// progress bar
		// for feed list
		var updateIntervalSecond = 30000;
		var updateProgbarSecond = 500;
		var updateProgBarTick = 0;
		var updatePreloaderInvertal;
		function updatePreloaderBar(iSec) {
			var n = updateIntervalSecond / updateProgbarSecond;
			var barWidth = (iSec / n)*100;
			// console.log(updateProgBarTick + " ----- " + barWidth)
			$('.progbar .progbar-bar').stop().animate({
					width: barWidth + '%'
			}, updateProgbarSecond, 'easeInOutQuart');
			if (barWidth > 100) {
				clearInterval(updatePreloaderInvertal);
				$('.progbar .progbar-bar').stop().animate({
					width: '0%'
				}, updateProgbarSecond, 'easeInOutQuart', function(){
					startProgbar();

					// update the feed list
					location_data = [];
					feedList = [];
					markers = [];

					google.maps.event.clearListeners(map, 'bounds_changed');
					google.maps.Map.prototype.clearOverlays = function() {
						for (var i = 0; i < markersArray.length; i++ ) {
							markersArray[i].setMap(null);
						}
						markersArray.length = 0;
					}

					initiate();
				});
			}
		}
		function startProgbar() {
			updateProgBarTick = 0;
			updatePreloaderInvertal = setInterval(function(){
				updateProgBarTick++;
				updatePreloaderBar(updateProgBarTick);
			},updateProgbarSecond);
		}

		function getFeed(callback) {
 			if(typeof url === 'undefined'){
 				url = feedUrl;
 			}
			$.ajax({
				type: 'get',
				url: url,
				dataType: 'json', // Notice! JSONP <-- P (lowercase)
				success: function(json){
					// console.log("Success " + JSON.stringify(json));
					callback(json);
				},
				error: function(e){
					// console.log("Error " + JSON.stringify(e));
					callback(null);
				}
			});
		}

		function viewAllHtml() {
			$('#viewallButton').unbind('click');
			$('#viewallButton').click(function(ev){
				// console.log("napislitan ang tooot...")
				ev.preventDefault();
				//  Create a new viewpoint bound
				viewAllBounds = new google.maps.LatLngBounds ();
				//  Go through each...
				var nLatLng;
				location_data.forEach(function(each,i){
					nLatLng = new google.maps.LatLng (each.latitude,each.longitude);
				  	viewAllBounds.extend (nLatLng);
				})
				//  Fit these bounds to the map
				map.fitBounds (viewAllBounds);
				map.setZoom(5);
				// close all info windows
				ib.close();
				feedTarget = null;
				userTarg = null;
				listTarg.find('li').removeClass('active');


				listTarg.parent().scrollTo(0,{
					duration: 1000,
					easing: 'easeInOutQuart',
					offsetTop: 0
				});
			})
		}

		// -----------------------------------------------------------

		var checkHoverValue = 0;
		var checkHoverInit = false;
		var checkHoverTimer = 0;
		var checkHover = function(obj) {
			// console.log("starting check hover")
			var data_load = obj.attr('data-load')
			checkHoverTimer = setTimeout(
				function() 
				{
					if (data_load == checkHoverValue) {
						// console.log("moving map to target")
						viewOnMap(data_load)
						xzoom = 0;
						listTarg.find('li').removeClass('active');
						obj.parent().addClass('active');

						// open infowindow
						boxText.innerHTML = generateIBContent(data_load);
						ib.setContent(boxText);
						ib.open(map, markers[data_load]);
						feedTarget = data_load;
						userTarg = $(obj).attr('data-uid');
						// console.log(userTarg);
					} else {
						// console.log("nothing to do...")
					}
					checkHoverInit = false;
				}, 300);
		}

		var feedListInitTimer;
		var feedListInit = function(){
			feedListInitTimer = setTimeout(
				function()
				{
					listTarg.find('li').mouseenter(feedListHover);
					listTarg.find('li').mouseleave(feedListLeave)
				}, 300);
		}
		var viewOnMap = function(i) {
			var latlong = new google.maps.LatLng( location_data[i].latitude,  location_data[i].longitude );
          	map.panTo(latlong);
		}
		var feedListHover = function(){
			var self = $(this).find('a')
			var data_load = self.attr('data-load')
			checkHoverValue = data_load;
			if (!self.parent().is('.active') && data_load != "all") {
				if (!checkHoverInit) {
					checkHoverInit = true;
					checkHover(self);
				}

				// console.log(location_data[data_load])
				// console.log("Data Load: " + data_load)
			}
		}
		var feedListLeave = function(){
			checkHoverValue = 0;
			clearTimeout(checkHoverTimer);
			checkHoverInit = false;
		}



		// START THE WHOLE THING...
		initiate(function(){
			startProgbar();
			viewAllHtml();
			
			$('#feed-form').on('submit',function(ev){
				ev.preventDefault();
			})
			$('#feed-form .search').keyup(function(){
				clearInterval(updatePreloaderInvertal);
				startProgbar();
			})
		});
	})
})

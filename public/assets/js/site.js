$(document).ready(function(){
	
	// // HOME SCRIPTS
		
	// if ($('.easy-pie-chart.percentage').length > 0) {
	// 	$('.easy-pie-chart.percentage').each(function(){
	// 		var $box = $(this).closest('.infobox');
	// 		var barColor = $(this).data('color') || (!$box.hasClass('infobox-dark') ? $box.css('color') : 'rgba(255,255,255,0.95)');
	// 		var trackColor = barColor == 'rgba(255,255,255,0.95)' ? 'rgba(255,255,255,0.25)' : '#E2E2E2';
	// 		var size = parseInt($(this).data('size')) || 50;
	// 		$(this).easyPieChart({
	// 			barColor: barColor,
	// 			trackColor: trackColor,
	// 			scaleColor: false,
	// 			lineCap: 'butt',
	// 			lineWidth: parseInt(size/10),
	// 			animate: ace.vars['old_ie'] ? false : 1000,
	// 			size: size
	// 		});
	// 	})
	// }

	// if ($('.sparkline').length > 0) {
	// 	$('.sparkline').each(function(){
	// 		var $box = $(this).closest('.infobox');
	// 		var barColor = !$box.hasClass('infobox-dark') ? $box.css('color') : '#FFF';
	// 		$(this).sparkline('html',
	// 			{
	// 				tagValuesAttribute:'data-values',
	// 				type: 'bar',
	// 				barColor: barColor ,
	// 				chartRangeMin:$(this).data('min') || 0
	// 			});
	// 	});
	// }


	// //flot chart resize plugin, somehow manipulates default browser resize event to optimize it!
	// //but sometimes it brings up errors with normal resize event handlers
	// $.resize.throttleWindow = false;
	
	// if ($('.info-box').length > 0) {

	// 	var placeholder = $('#piechart-placeholder').css({'width':'90%' , 'min-height':'150px'});
	// 	var data = [
	// 		{ label: "social networks",  data: 38.7, color: "#68BC31"},
	// 		{ label: "search engines",  data: 24.5, color: "#2091CF"},
	// 		{ label: "ad campaigns",  data: 8.2, color: "#AF4E96"},
	// 		{ label: "direct traffic",  data: 18.6, color: "#DA5430"},
	// 		{ label: "other",  data: 10, color: "#FEE074"}
	// 	]
	// 	function drawPieChart(placeholder, data, position) {
	// 		$.plot(placeholder, data, {
	// 			series: {
	// 				pie: {
	// 					show: true,
	// 					tilt:0.8,
	// 					highlight: {
	// 						opacity: 0.25
	// 					},
	// 					stroke: {
	// 						color: '#fff',
	// 						width: 2
	// 					},
	// 					startAngle: 2
	// 				}
	// 			},
	// 			legend: {
	// 				show: true,
	// 				position: position || "ne", 
	// 				labelBoxBorderColor: null,
	// 				margin:[-30,15]
	// 			}
	// 			,
	// 			grid: {
	// 				hoverable: true,
	// 				clickable: true
	// 			}
	// 		 })
	// 	}
	// 	drawPieChart(placeholder, data);

	// 	*
	// 	we saved the drawing function and the data to redraw with different position later when switching to RTL mode dynamically
	// 	so that's not needed actually.
		
	// 	placeholder.data('chart', data);
	// 	placeholder.data('draw', drawPieChart);


	// 	//pie chart tooltip example
	// 	var $tooltip = $("<div class='tooltip top in'><div class='tooltip-inner'></div></div>").hide().appendTo('body');
	// 	var previousPoint = null;

	// 	placeholder.on('plothover', function (event, pos, item) {
	// 		if(item) {
	// 			if (previousPoint != item.seriesIndex) {
	// 				previousPoint = item.seriesIndex;
	// 				var tip = item.series['label'] + " : " + item.series['percent']+'%';
	// 				$tooltip.show().children(0).text(tip);
	// 			}
	// 			$tooltip.css({top:pos.pageY + 10, left:pos.pageX + 10});
	// 		} else {
	// 			$tooltip.hide();
	// 			previousPoint = null;
	// 		}
			
	// 	 });

	// 	/////////////////////////////////////
	// 	$(document).one('ajaxloadstart.page', function(e) {
	// 		$tooltip.remove();
	// 	});




	// 	var d1 = [];
	// 	for (var i = 0; i < Math.PI * 2; i += 0.5) {
	// 		d1.push([i, Math.sin(i)]);
	// 	}

	// 	var d2 = [];
	// 	for (var i = 0; i < Math.PI * 2; i += 0.5) {
	// 		d2.push([i, Math.cos(i)]);
	// 	}

	// 	var d3 = [];
	// 	for (var i = 0; i < Math.PI * 2; i += 0.2) {
	// 		d3.push([i, Math.tan(i)]);
	// 	}
		

	// 	var sales_charts = $('#sales-charts').css({'width':'100%' , 'height':'220px'});
	// 	$.plot("#sales-charts", [
	// 		{ label: "Domains", data: d1 },
	// 		{ label: "Hosting", data: d2 },
	// 		{ label: "Services", data: d3 }
	// 	], {
	// 		hoverable: true,
	// 		shadowSize: 0,
	// 		series: {
	// 			lines: { show: true },
	// 			points: { show: true }
	// 		},
	// 		xaxis: {
	// 			tickLength: 0
	// 		},
	// 		yaxis: {
	// 			ticks: 10,
	// 			min: -2,
	// 			max: 2,
	// 			tickDecimals: 3
	// 		},
	// 		grid: {
	// 			backgroundColor: { colors: [ "#fff", "#fff" ] },
	// 			borderWidth: 1,
	// 			borderColor:'#555'
	// 		}
	// 	});


	// 	$('#recent-box [data-rel="tooltip"]').tooltip({placement: tooltip_placement});
	// 	function tooltip_placement(context, source) {
	// 		var $source = $(source);
	// 		var $parent = $source.closest('.tab-content')
	// 		var off1 = $parent.offset();
	// 		var w1 = $parent.width();

	// 		var off2 = $source.offset();
	// 		//var w2 = $source.width();

	// 		if( parseInt(off2.left) < parseInt(off1.left) + parseInt(w1 / 2) ) return 'right';
	// 		return 'left';
	// 	}
			
	// }

	
	//Android's default browser somehow is confused when tapping on label which will lead to dragging the task
	//so disable dragging when clicking on label
	var agent = navigator.userAgent.toLowerCase();
	if(ace.vars['touch'] && ace.vars['android']) {
		$('#tasks').on('touchstart', function(e){
			var li = $(e.target).closest('#tasks li');
			if(li.length == 0)return;
			var label = li.find('label.inline').get(0);
			if(label == e.target || $.contains(label, e.target)) e.stopImmediatePropagation() ;
		});
	}

	$('#tasks').sortable({
		opacity:0.8,
		revert:true,
		forceHelperSize:true,
		placeholder: 'draggable-placeholder',
		forcePlaceholderSize:true,
		tolerance:'pointer',
		stop: function( event, ui ) {
			//just for Chrome!!!! so that dropdowns on items don't appear below other items after being moved
			$(ui.item).css('z-index', 'auto');
		}
	});
	
	$('#tasks').disableSelection();
	$('#tasks input:checkbox').removeAttr('checked').on('click', function(){
		if(this.checked) $(this).closest('li').addClass('selected');
		else $(this).closest('li').removeClass('selected');
	});


	//show the dropdowns on top or bottom depending on window height and menu position
	$('#task-tab .dropdown-hover').on('mouseenter', function(e) {
		var offset = $(this).offset();

		var $w = $(window)
		if (offset.top > $w.scrollTop() + $w.innerHeight() - 100) 
			$(this).addClass('dropup');
		else $(this).removeClass('dropup');
	});
	

	///////////////////
	// MODAL BOX
	///////////////////
	
	if ($('.bootbox-confirm').length>0) {
		$(".bootbox-confirm").on(ace.click_event, function() {
			bootbox.confirm("Are you sure?", function(result) {
				if(result) {
					//
				}
			});
		});
	}
	
	///////////
	$(document).one('ajaxloadstart.page', function(e) {
		$.gritter.removeAll();
		$('.modal').modal('hide');
	});
	
	
	///////////////////
	// FS PANEL
	///////////////////
	
	// SHOW SCROLL BAR WHEN MODAL IS CLOSED
	if ($('.fs-panel').length>0) {
		if (!$('.fs-panel').hasClass('load')) {
			$('body').css({'overflow-y': 'auto'});
		}
	} else {
		$('body').css({'overflow-y': 'auto'});
	}
	
	var pl_interval,
	initFSPanel = function() {
		$("[data-toggle='fs-panel']").on('click',function(e){
			e.preventDefault();
			
			console.log('FSPanel SHOW');
			
			var targ = $(this).attr('data-target');
			
			$(targ).addClass('load').removeClass('unload');
			
			if ($('[data-toggle="tooltip"]').length>0) {
				$('[data-toggle="tooltip"]').tooltip()
			}
			
			// CHECK IF PANEL CONTENT HAS MODAL DATA
			if ($(targ).find('*[data-target="modal"]')) {
				// initModals();
			}
			
			// HIDE SCROLL BAR WHEN MODAL IS OPEN
			$('body').css({'overflow-y': 'hidden'});
			
			// START THE PRELOADER
			var pl = $(targ).find('.preloader');
			var pl_count = 0;
			var pl_max = 100;
			$(targ).find('.fs-panel-content').addClass('load').removeClass('unload');
		});
		
		$('.fs-panel-close').on('click',function(e){
			e.preventDefault();
			
			console.log('FSPanel HIDE');
			var fspanel = $(this).closest('.fs-panel');
			
			$(fspanel).addClass('unload').removeClass('load');
			$(fspanel).find('.fs-panel-content').addClass('unload').removeClass('load');
			
			// SHOW SCROLL BAR WHEN MODAL IS CLOSED
			if ($('.modal').length>0) {
				if (!$('.modal').hasClass('show')) {
					$('body').css({'overflow-y': 'auto'});
				}
			} else {
				$('body').css({'overflow-y': 'auto'});
			}
		});
	}
	initFSPanel();
	
	
	// USERS SCRIPT

	// //initiate dataTables plugin
	// var myTable = 
	// $('#datatable_users')
	// //.wrap("<div class='dataTables_borderWrap' />")   //if you are applying horizontal scrolling (sScrollX)
	// .DataTable( {
	// 	bAutoWidth: false,
	// 	"aoColumns": [
	// 	  null,null,null, null,null, null, null,
	// 	  { "bSortable": false }
	// 	],
	// 	"aaSorting": [],
		
		
	// 	//"bProcessing": true,
	// 	//"bServerSide": true,
	// 	//"sAjaxSource": "http://127.0.0.1/table.php"	,

	// 	//,
	// 	//"sScrollY": "200px",
	// 	//"bPaginate": false,

	// 	//"sScrollX": "100%",
	// 	//"sScrollXInner": "120%",
	// 	//"bScrollCollapse": true,
	// 	//Note: if you are applying horizontal scrolling (sScrollX) on a ".table-bordered"
	// 	//you may want to wrap the table inside a "div.dataTables_borderWrap" element

	// 	"iDisplayLength": 25,


	// 	select: {
	// 		style: 'multi'
	// 	}
	// });

	
	
	// $.fn.dataTable.Buttons.swfPath = "../assets/js/dataTables/extensions/buttons/swf/flashExport.swf"; //in Ace demo ../assets will be replaced by correct assets path
	// $.fn.dataTable.Buttons.defaults.dom.container.className = 'dt-buttons btn-overlap btn-group btn-overlap';
	
	// new $.fn.dataTable.Buttons( myTable, {
	// 	buttons: [
	// 		{
	// 			"extend": "colvis",
	// 			"text": "<i class='fa fa-search bigger-110 blue'></i> <span class='hidden'>Show/hide columns</span>",
	// 			"className": "btn btn-white btn-primary btn-bold",
	// 			columns: ':not(:first):not(:last)'
	// 		},
	// 		{
	// 			"extend": "copy",
	// 			"text": "<i class='fa fa-copy bigger-110 pink'></i> <span class='hidden'>Copy to clipboard</span>",
	// 			"className": "btn btn-white btn-primary btn-bold"
	// 		},
	// 		{
	// 			"extend": "csv",
	// 			"text": "<i class='fa fa-database bigger-110 orange'></i> <span class='hidden'>Export to CSV</span>",
	// 			"className": "btn btn-white btn-primary btn-bold"
	// 		},
	// 		{
	// 			"extend": "excel",
	// 			"text": "<i class='fa fa-file-excel-o bigger-110 green'></i> <span class='hidden'>Export to Excel</span>",
	// 			"className": "btn btn-white btn-primary btn-bold"
	// 		},
	// 		{
	// 			"extend": "pdf",
	// 			"text": "<i class='fa fa-file-pdf-o bigger-110 red'></i> <span class='hidden'>Export to PDF</span>",
	// 			"className": "btn btn-white btn-primary btn-bold"
	// 		},
	// 		{
	// 			"extend": "print",
	// 			"text": "<i class='fa fa-print bigger-110 grey'></i> <span class='hidden'>Print</span>",
	// 			"className": "btn btn-white btn-primary btn-bold",
	// 			autoPrint: false,
	// 			message: 'This print was produced using the Print button for DataTables'
	// 		}
	// 	]
	// });
	// myTable.buttons().container().appendTo( $('.tableTools-container') );
	
	// //style the message box
	// var defaultCopyAction = myTable.button(1).action();
	// myTable.button(1).action(function (e, dt, button, config) {
	// 	defaultCopyAction(e, dt, button, config);
	// 	$('.dt-button-info').addClass('gritter-item-wrapper gritter-info gritter-center white');
	// });
	
	
	// var defaultColvisAction = myTable.button(0).action();
	// myTable.button(0).action(function (e, dt, button, config) {
		
	// 	defaultColvisAction(e, dt, button, config);
		
		
	// 	if($('.dt-button-collection > .dropdown-menu').length == 0) {
	// 		$('.dt-button-collection')
	// 		.wrapInner('<ul class="dropdown-menu dropdown-light dropdown-caret dropdown-caret" />')
	// 		.find('a').attr('href', '#').wrap("<li />")
	// 	}
	// 	$('.dt-button-collection').appendTo('.tableTools-container .dt-buttons')
	// });

	// ////

	// setTimeout(function() {
	// 	$($('.tableTools-container')).find('a.dt-button').each(function() {
	// 		var div = $(this).find(' > div').first();
	// 		if(div.length == 1) div.tooltip({container: 'body', title: div.parent().text()});
	// 		else $(this).tooltip({container: 'body', title: $(this).text()});
	// 	});
	// }, 500);
	
	
	
	
	
	// myTable.on( 'select', function ( e, dt, type, index ) {
	// 	if ( type === 'row' ) {
	// 		$( myTable.row( index ).node() ).find('input:checkbox').prop('checked', true);
	// 	}
	// } );
	// myTable.on( 'deselect', function ( e, dt, type, index ) {
	// 	if ( type === 'row' ) {
	// 		$( myTable.row( index ).node() ).find('input:checkbox').prop('checked', false);
	// 	}
	// });




	/////////////////////////////////
	//table checkboxes
	$('.table th input[type=checkbox], .table td input[type=checkbox]').prop('checked', false);
	
	//select/deselect all rows according to table header checkbox
	$('.table > thead > tr > th input[type=checkbox], #dynamic-table_wrapper input[type=checkbox]').eq(0).on('click', function(){
		var th_checked = this.checked;//checkbox inside "TH" table header
		
		$('.table').find('tbody > tr').each(function(){
			var row = this;
			if(th_checked) myTable.row(row).select();
			else  myTable.row(row).deselect();
		});
	});
	
	//select/deselect a row when the checkbox is checked/unchecked
	$('.table').on('click', 'td input[type=checkbox]' , function(){
		var row = $(this).closest('tr').get(0);
		if(!this.checked) myTable.row(row).deselect();
		else myTable.row(row).select();
	});



	$(document).on('click', '.table .dropdown-toggle', function(e) {
		e.stopImmediatePropagation();
		e.stopPropagation();
		e.preventDefault();
	});
	
	
	
	//And for the first simple table, which doesn't have TableTools or dataTables
	//select/deselect all rows according to table header checkbox
	var active_class = 'active';
	$('#simple-table > thead > tr > th input[type=checkbox]').eq(0).on('click', function(){
		var th_checked = this.checked;//checkbox inside "TH" table header
		
		$(this).closest('table').find('tbody > tr').each(function(){
			var row = this;
			if(th_checked) $(row).addClass(active_class).find('input[type=checkbox]').eq(0).prop('checked', true);
			else $(row).removeClass(active_class).find('input[type=checkbox]').eq(0).prop('checked', false);
		});
	});
	
	//select/deselect a row when the checkbox is checked/unchecked
	$('#simple-table').on('click', 'td input[type=checkbox]' , function(){
		var $row = $(this).closest('tr');
		if(this.checked) $row.addClass(active_class);
		else $row.removeClass(active_class);
	});

	

	/********************************/
	//add tooltip for small view action buttons in dropdown menu
	$('[data-rel="tooltip"]').tooltip({placement: tooltip_placement});
	
	//tooltip placement on right or left
	function tooltip_placement(context, source) {
		var $source = $(source);
		var $parent = $source.closest('table')
		var off1 = $parent.offset();
		var w1 = $parent.width();

		var off2 = $source.offset();
		//var w2 = $source.width();

		if( parseInt(off2.left) < parseInt(off1.left) + parseInt(w1 / 2) ) return 'right';
		return 'left';
	}
	
	
	///////////////////
	// SYNC STATUS
	///////////////////
	
	
	// var syncstatus_table = 
	// $('#datatable_syncstatus')
	// //.wrap("<div class='dataTables_borderWrap' />")   //if you are applying horizontal scrolling (sScrollX)
	// .DataTable( {
	// 	bAutoWidth: false,
	// 	"aoColumns": [
	// 	  null,null,null, null,null,
	// 	  { "bSortable": false },
	// 	  { "bSortable": false },
	// 	  { "bSortable": false }
	// 	],
	// 	"aaSorting": [],
		
		
	// 	//"bProcessing": true,
	// 	//"bServerSide": true,
	// 	//"sAjaxSource": "http://127.0.0.1/table.php"	,

	// 	//,
	// 	//"sScrollY": "200px",
	// 	//"bPaginate": false,

	// 	//"sScrollX": "100%",
	// 	//"sScrollXInner": "120%",
	// 	//"bScrollCollapse": true,
	// 	//Note: if you are applying horizontal scrolling (sScrollX) on a ".table-bordered"
	// 	//you may want to wrap the table inside a "div.dataTables_borderWrap" element

	// 	"iDisplayLength": 25,


	// 	select: {
	// 		style: 'multi'
	// 	}
	// });
	
	
	
	///////////////////
	// USER ACTIVITY
	///////////////////
	
	
	// var useractivity_table = 
	// $('#datatable_useractivity')
	// //.wrap("<div class='dataTables_borderWrap' />")   //if you are applying horizontal scrolling (sScrollX)
	// .DataTable( {
	// 	bAutoWidth: false,
	// 	"aoColumns": [
	// 		null,null,null, null,null,null,null,
	// 		{ "bSortable": false }
	// 	],
	// 	"aaSorting": [],
		
		
	// 	//"bProcessing": true,
	// 	//"bServerSide": true,
	// 	//"sAjaxSource": "http://127.0.0.1/table.php"	,

	// 	//,
	// 	//"sScrollY": "200px",
	// 	//"bPaginate": false,

	// 	//"sScrollX": "100%",
	// 	//"sScrollXInner": "120%",
	// 	//"bScrollCollapse": true,
	// 	//Note: if you are applying horizontal scrolling (sScrollX) on a ".table-bordered"
	// 	//you may want to wrap the table inside a "div.dataTables_borderWrap" element

	// 	"iDisplayLength": 25,


	// 	select: {
	// 		style: 'multi'
	// 	}
	// });
	
	
	
	///////////////////
	// USER ACTIVITY
	///////////////////
	
	
	var apisync_table = 
	$('#datatables_apisync')
	//.wrap("<div class='dataTables_borderWrap' />")   //if you are applying horizontal scrolling (sScrollX)
	.DataTable( {
		bAutoWidth: false,
		"aoColumns": [
			null,null,null, null,null,null,null,null
		],
		"aaSorting": [],
		
		
		//"bProcessing": true,
		//"bServerSide": true,
		//"sAjaxSource": "http://127.0.0.1/table.php"	,

		//,
		//"sScrollY": "200px",
		//"bPaginate": false,

		//"sScrollX": "100%",
		//"sScrollXInner": "120%",
		//"bScrollCollapse": true,
		//Note: if you are applying horizontal scrolling (sScrollX) on a ".table-bordered"
		//you may want to wrap the table inside a "div.dataTables_borderWrap" element

		"iDisplayLength": 25
		,


		select: {
			style: 'multi'
		}
	});
	
	
	$(function(){
		var initFSView = function() {
			var screenWidth = $(window).width();
			var screenHeight = $(window).outerHeight() - $('.header').outerHeight();
			// var screenHeight = $(window).outerHeight();
			// console.log(screenWidth, screenHeight);
			if ($('.fsview').length > 0) {
				
				$('.fsview').each(function(i,el){
					// console.log($(this).outerHeight(),screenHeight);
				
					// if (screenWidth <= 991) {
					// 	// $(this).removeAttr('style');
					// } else {
					// 	if ($(this).outerHeight() < screenHeight) {
					// 		$(this).css({
					// 			'height': screenHeight + 'px'
					// 		});
					// 	} else {
					// 		$(this).removeAttr('style');
					// 	}
					// }
					$(this).css({
						'height': screenHeight + 'px'
					});
				})
			}
		}
		initFSView();
	});
	
	try{ace.settings.check('sidebar' , 'fixed')}catch(e){}
	try{ace.settings.check('sidebar' , 'collapsed')}catch(e){
		console.log(e);
	}
	

});

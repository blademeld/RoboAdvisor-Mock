$(function() {
	var chartLength = 10;
	
	makeCharts04();
	
	$('#select1').selectmenu({
		width:'100px',
		change: function(event, ui){
			filterData.select1 = $(this).val();
			makeCharts04();
		}
	});
	$('#select2').selectmenu({
		width:'100px',
		change: function(event, ui){
			filterData.select2 = $(this).val();
			makeCharts04();
		}
	});
	$('#chartLength').selectmenu({
		width:'100px',
		change: function(event, ui){
			if ($(this).val() > 0){
				chartLength = $(this).val();
				makeCharts04();
			}
		}
	});
	
	function makeCharts04(){
		makeMainChart('profit', 'profit', chartLength);
		makeMainChart('risk', 'risk', chartLength);
		makeMainChart('succ', 'succ', chartLength);
	}
});
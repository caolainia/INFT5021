// Load the Visualization API and the Linechart package.
google.charts.load('current', {packages: ['corechart', 'line']});
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(drawChart);

function drawChart() {
	// Prepare the data
	var data = google.visualization.arrayToDataTable([
		['Date',      'Drakes Price', 'Woolworths Price', 'Coles Price', 'Foodland Price'],
		[new Date(2020,5,5),  165,      938,                  522,             998],
		[new Date(2020,5,6),  165,      938,                  522,             998],
		[new Date(2020,5,7),  165,      600,                  522,             998],
		[new Date(2020,5,8),  165,      938,                  522,             998],
		[new Date(2020,5,9),  165,      938,                  522,             998],
		[new Date(2020,5,10),  165,      938,                  200,             998],
		[new Date(2020,5,11),  165,      938,                  522,             998],
		[new Date(2020,5,12),  165,      938,                  522,             600],
		[new Date(2020,5,13),  165,      938,                  522,             998],
		[new Date(2020,5,14),  165,      938,                  522,             998],
		[new Date(2020,5,15),  165,      938,                  522,             998],
		[new Date(2020,5,16),  165,      938,                  522,             998]
    ]);

	var options = {
		title : 'Prices on XXXXX',
		interpolateNulls: true,
		vAxis: {title: 'Price'},
		hAxis: {title: 'Date'}
	};

	var chart = new google.visualization.LineChart(document.getElementById('chart_div'));

	// The select handler. Call the chart's getSelection() method
	function selectHandler() {
		var selectedItem = chart.getSelection()[0];
		if (selectedItem) {
			var resultArray = data.cache[selectedItem.row];
			// selected value
			var value = resultArray[selectedItem.column].Ve;

			// common table
			ReactDOM.render(
			  <SummaryCommon promo={value} standard={value} />,
			  document.getElementById('summary_common')
			);
			if (selectedItem.column === 1) {
				ReactDOM.render(
				  <SummaryDrakes promo={value} standard={value} show={true} />,
				  document.getElementById('summary_drakes')
				);
			} else {
				ReactDOM.render(
				  <SummaryDrakes show={false} />,
				  document.getElementById('summary_drakes')
				);
			}
		}

	}

	// Listen for the 'select' event, and call my function selectHandler() when
	// the user selects something on the chart.
	google.visualization.events.addListener(chart, 'select', selectHandler);

	// Draw the chart
	chart.draw(data, options);
}
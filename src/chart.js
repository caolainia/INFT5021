// Load the Visualization API and the Linechart package.
google.charts.load('current', {packages: ['corechart', 'line']});
// Set a callback to run when the Google Visualization API is loaded.
google.charts.setOnLoadCallback(initializeData);

var data = undefined;

var fileList = new Array();

function clearFiles() {
	// clear the fileList
	fileList.length = 0;
	var fileInput  = document.querySelector(".input-file"),
	    the_return = document.querySelector(".file-return");

	the_return.innerHTML = "";

	document.getElementById('my-file').value = "";

	document.getElementById('clearall').style.display = 'none';
	  
	document.getElementById('confirm-files').style.display = 'none';
}

function confirmFiles() {
	fileList.forEach((element) => {
		
		// upload the fileList
		let reader = new FileReader(); 
		  	
	    reader.onload = (e) => {
	        var file = e.target.result; 
	  		processDrakesData(file);

	    }; 
	  
	    reader.onerror = (e) => alert(e.target.error.name); 
	  
	    reader.readAsText(element);
	})
}

function processDrakesData(allText) {
    var allTextLines = allText.split(/\r\n|\n/);
    // // assume the first 6 lines are headers
    // for (let i = 0; i < 6; i++) {
    // 	//split by separator (,) and get the columns
    //   	cols = rows[i].split(',');
    // }
    // while (entries.length>0) {
    //     var tarr = [];
    //     for (var j=0; j<record_num; j++) {
    //         tarr.push(headings[j]+":"+entries.shift());
    //     }
    //     lines.push(tarr);
    // }
}

window.onload = function() {
  	document.querySelector("html").classList.add('js');
  	loadUploader();
};

function loadUploader() {
	var fileInput  = document.querySelector(".input-file"),
	    the_return = document.querySelector(".file-return");


	fileInput.addEventListener( "change", function( event ) {
	    let files = fileInput.files;
	    if (files.length == 0) return; 
	  
	    const theFile = files[0];
	    fileList.push(theFile);

	    the_return.innerHTML += theFile.name;
	    the_return.innerHTML += "; ";

	    document.getElementById('clearall').style.display = 'inline-block';
	  
	    document.getElementById('confirm-files').style.display = 'inline-block';
	});
}



function initializeData() {
	
	// Prepare the data
	data = google.visualization.arrayToDataTable([
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
	$("#initial-loader").hide();
	ReactDOM.render(<Search />, document.getElementById('search'));
}


function drawChart() {
	var options = {
		title : 'Prices on XXXXX',
		interpolateNulls: true,
		vAxis: {title: 'Price'},
		hAxis: {title: 'Date'}
	};

	var chart = new google.visualization.LineChart(document.getElementById('chart-div'));

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
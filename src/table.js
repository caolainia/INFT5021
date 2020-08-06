class TableCell extends React.Component {
	render() {
		return (
	      <td id="table_cell">
	        {this.props.value}
	      </td>
	    );
	}
}

class SummaryCommon extends React.Component {
	renderCell(v) {
		return <TableCell value={v} />
	}

	render() {
		const promo = this.props.promo;
		const standard = this.props.standard;
		const discount = ((standard-promo)/standard * 100) + "%";

	    return (
	        <table id="summary_common_table" className="table table-bordered">
	        	<thead>
	        		<tr>
						<th colSpan={2} scope="col">Promotional Summary</th>
					</tr>
	        	</thead>

	        	<tbody>
					<tr>
						<th scope="row">Promo price</th>
						{this.renderCell(promo)}
					</tr>
					<tr>
						<th scope="row">Standard shelf price</th>
						{this.renderCell(standard)}
					</tr>
					<tr>
						<th scope="row">% discount</th>
						{this.renderCell(discount)}
					</tr>
					<tr>
						<th scope="row">Catalogue</th>
						{this.renderCell('Unknown')}
					</tr>
					<tr>
						<th scope="row">Location</th>
						{this.renderCell('Unknown')}
					</tr>
				</tbody>
			</table>
	    );
	}
}

class SummaryDrakes extends React.Component {
	renderCell(v) {
		return <TableCell value={v} />
	}

	render() {
		const volume = this.props.volume;
		const average_volume = this.props.average_volume;
		const show = this.props.show;
		if (show) {
			return (

		        <table id="summary_drakes_table" className="table table-bordered">
		        	<thead>
		        		<tr>
							<th colSpan={2} scope="col">Drakes Promotional Track { console.log(this.props.show) }</th>
						</tr>
		        	</thead>

		        	<tbody>
						<tr>
							<th scope="row">Volume</th>
							{this.renderCell(volume)}
						</tr>
						<tr>
							<th scope="row">Average volume at the point</th>
							{this.renderCell(average_volume)}
						</tr>
						<tr>
							<th scope="row">% Uplift</th>
							{this.renderCell('Unknown')}
						</tr>
						<tr>
							<th scope="row">% to avg</th>
							{this.renderCell('Unknown')}
						</tr>
					</tbody>
				</table>
		    )
		}
		return (<div></div>)
	}
}

class SummaryCommon extends React.Component {

	render() {
		const head = this.props.head;
		const promo = this.props.promo;
		const standard = this.props.standard;
		const discount = ((standard-promo)/standard * 100) + "%";
		var rows = {
			"Promo price": promo,
			"Standard shelf price": standard,
			"Discount (%)": discount,
			"Catalogue": "Unknown"
		}

	    return (
			<table id="summary_common_table" className="table table-bordered">
        		<thead>
					<tr><th colSpan={2} scope="col">{head}</th></tr>
        		</thead>

				<tbody>
					{ Object.keys(rows).map((key, index) => {
						return (
							<tr key={index}>
							    <th scope="row">{key}</th>
							    <td id="table_cell">{rows[key]}</td>
							</tr>
						);
				    })}
				</tbody>
			</table>
	    );
	}
}

class SummaryDrakes extends React.Component {
	render() {
		const head = "Drakes Promotional Track"
		const volume = this.props.volume;
		const averageVolume = this.props.averageVolume;
		const uplift = (volume - averageVolume) / averageVolume + "%";
		const show = this.props.show;
		var rows = {
			"Volume": volume,
			"Average volume": averageVolume,
			"Uplift (%)": uplift,
			"Diff to average (%)": "Unknown"
		}
		if (show) {
			return (
			    <table id="summary_drakes_table" className="table table-bordered">
					<thead>
						<tr><th colSpan={2} scope="col">{head}</th></tr>
					</thead>

					<tbody>
						{ Object.keys(rows).map((key, index) => {
							return (
								<tr key={index}>
									<th scope="row">{key}</th>
									<td id="table_cell">{rows[key]}</td>
								</tr>
							);
					    })}
					</tbody>
				</table>
		    )
		}
		return (<div></div>)
	}
}

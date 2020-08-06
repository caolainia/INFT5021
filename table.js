var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var TableCell = function (_React$Component) {
	_inherits(TableCell, _React$Component);

	function TableCell() {
		_classCallCheck(this, TableCell);

		return _possibleConstructorReturn(this, (TableCell.__proto__ || Object.getPrototypeOf(TableCell)).apply(this, arguments));
	}

	_createClass(TableCell, [{
		key: "render",
		value: function render() {
			return React.createElement(
				"td",
				{ id: "table_cell" },
				this.props.value
			);
		}
	}]);

	return TableCell;
}(React.Component);

var SummaryCommon = function (_React$Component2) {
	_inherits(SummaryCommon, _React$Component2);

	function SummaryCommon() {
		_classCallCheck(this, SummaryCommon);

		return _possibleConstructorReturn(this, (SummaryCommon.__proto__ || Object.getPrototypeOf(SummaryCommon)).apply(this, arguments));
	}

	_createClass(SummaryCommon, [{
		key: "renderCell",
		value: function renderCell(v) {
			return React.createElement(TableCell, { value: v });
		}
	}, {
		key: "render",
		value: function render() {
			var promo = this.props.promo;
			var standard = this.props.standard;
			var discount = (standard - promo) / standard * 100 + "%";

			return React.createElement(
				"table",
				{ id: "summary_common_table", className: "table table-bordered" },
				React.createElement(
					"thead",
					null,
					React.createElement(
						"tr",
						null,
						React.createElement(
							"th",
							{ colSpan: 2, scope: "col" },
							"Promotional Summary"
						)
					)
				),
				React.createElement(
					"tbody",
					null,
					React.createElement(
						"tr",
						null,
						React.createElement(
							"th",
							{ scope: "row" },
							"Promo price"
						),
						this.renderCell(promo)
					),
					React.createElement(
						"tr",
						null,
						React.createElement(
							"th",
							{ scope: "row" },
							"Standard shelf price"
						),
						this.renderCell(standard)
					),
					React.createElement(
						"tr",
						null,
						React.createElement(
							"th",
							{ scope: "row" },
							"% discount"
						),
						this.renderCell(discount)
					),
					React.createElement(
						"tr",
						null,
						React.createElement(
							"th",
							{ scope: "row" },
							"Catalogue"
						),
						this.renderCell('Unknown')
					),
					React.createElement(
						"tr",
						null,
						React.createElement(
							"th",
							{ scope: "row" },
							"Location"
						),
						this.renderCell('Unknown')
					)
				)
			);
		}
	}]);

	return SummaryCommon;
}(React.Component);

var SummaryDrakes = function (_React$Component3) {
	_inherits(SummaryDrakes, _React$Component3);

	function SummaryDrakes() {
		_classCallCheck(this, SummaryDrakes);

		return _possibleConstructorReturn(this, (SummaryDrakes.__proto__ || Object.getPrototypeOf(SummaryDrakes)).apply(this, arguments));
	}

	_createClass(SummaryDrakes, [{
		key: "renderCell",
		value: function renderCell(v) {
			return React.createElement(TableCell, { value: v });
		}
	}, {
		key: "render",
		value: function render() {
			var volume = this.props.volume;
			var average_volume = this.props.average_volume;
			var show = this.props.show;
			if (show) {
				return React.createElement(
					"table",
					{ id: "summary_drakes_table", className: "table table-bordered" },
					React.createElement(
						"thead",
						null,
						React.createElement(
							"tr",
							null,
							React.createElement(
								"th",
								{ colSpan: 2, scope: "col" },
								"Drakes Promotional Track ",
								console.log(this.props.show)
							)
						)
					),
					React.createElement(
						"tbody",
						null,
						React.createElement(
							"tr",
							null,
							React.createElement(
								"th",
								{ scope: "row" },
								"Volume"
							),
							this.renderCell(volume)
						),
						React.createElement(
							"tr",
							null,
							React.createElement(
								"th",
								{ scope: "row" },
								"Average volume at the point"
							),
							this.renderCell(average_volume)
						),
						React.createElement(
							"tr",
							null,
							React.createElement(
								"th",
								{ scope: "row" },
								"% Uplift"
							),
							this.renderCell('Unknown')
						),
						React.createElement(
							"tr",
							null,
							React.createElement(
								"th",
								{ scope: "row" },
								"% to avg"
							),
							this.renderCell('Unknown')
						)
					)
				);
			}
			return React.createElement("div", null);
		}
	}]);

	return SummaryDrakes;
}(React.Component);
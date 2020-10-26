var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SummaryCommon = function (_React$Component) {
	_inherits(SummaryCommon, _React$Component);

	function SummaryCommon() {
		_classCallCheck(this, SummaryCommon);

		return _possibleConstructorReturn(this, (SummaryCommon.__proto__ || Object.getPrototypeOf(SummaryCommon)).apply(this, arguments));
	}

	_createClass(SummaryCommon, [{
		key: "render",
		value: function render() {
			var head = this.props.head;
			var promo = this.props.promo;
			var standard = this.props.standard;
			var discount = (standard - promo) / standard * 100 + "%";
			var rows = {
				"Promo price": promo,
				"Standard shelf price": standard,
				"Discount (%)": discount,
				"Catalogue": "Unknown"
			};

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
							head
						)
					)
				),
				React.createElement(
					"tbody",
					null,
					Object.keys(rows).map(function (key, index) {
						return React.createElement(
							"tr",
							{ key: index },
							React.createElement(
								"th",
								{ scope: "row" },
								key
							),
							React.createElement(
								"td",
								{ id: "table_cell" },
								rows[key]
							)
						);
					})
				)
			);
		}
	}]);

	return SummaryCommon;
}(React.Component);

var SummaryDrakes = function (_React$Component2) {
	_inherits(SummaryDrakes, _React$Component2);

	function SummaryDrakes() {
		_classCallCheck(this, SummaryDrakes);

		return _possibleConstructorReturn(this, (SummaryDrakes.__proto__ || Object.getPrototypeOf(SummaryDrakes)).apply(this, arguments));
	}

	_createClass(SummaryDrakes, [{
		key: "render",
		value: function render() {
			var head = "Drakes Promotional Track";
			var volume = this.props.volume;
			var averageVolume = this.props.averageVolume;
			var uplift = (volume - averageVolume) / averageVolume + "%";
			var show = this.props.show;
			var rows = {
				"Volume": volume,
				"Average volume": averageVolume,
				"Uplift (%)": uplift,
				"Diff to average (%)": "Unknown"
			};
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
								head
							)
						)
					),
					React.createElement(
						"tbody",
						null,
						Object.keys(rows).map(function (key, index) {
							return React.createElement(
								"tr",
								{ key: index },
								React.createElement(
									"th",
									{ scope: "row" },
									key
								),
								React.createElement(
									"td",
									{ id: "table_cell" },
									rows[key]
								)
							);
						})
					)
				);
			}
			return React.createElement("div", null);
		}
	}]);

	return SummaryDrakes;
}(React.Component);
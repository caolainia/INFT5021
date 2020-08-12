var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Search = function (_React$Component) {
  _inherits(Search, _React$Component);

  function Search() {
    _classCallCheck(this, Search);

    var _this = _possibleConstructorReturn(this, (Search.__proto__ || Object.getPrototypeOf(Search)).call(this));

    _this.submit = function () {
      // logically check all input and give corresponding chart
      console.log('Selected value:', _this.state.sku);
      drawChart();
    };

    _this.state = {
      sku: "",
      area: 0,
      cat: "",
      subcat: ""
    };

    _this.submit = _this.submit.bind(_this);
    _this.handleChange = _this.handleChange.bind(_this);
    return _this;
  }

  _createClass(Search, [{
    key: "handleChange",
    value: function handleChange(_ref) {
      var target = _ref.target;

      this.setState(_defineProperty({}, target.name, target.value));
    }
  }, {
    key: "render",
    value: function render() {
      return React.createElement(
        "div",
        { className: "row" },
        React.createElement(
          "div",
          { className: "col-md-12" },
          React.createElement(
            "div",
            { className: "input-group", id: "adv-search" },
            React.createElement("input", { type: "text", className: "form-control", placeholder: "Search by SKU/APN",
              name: "sku", value: this.state.sku, onChange: this.handleChange }),
            React.createElement(
              "div",
              { className: "input-group-btn" },
              React.createElement(
                "div",
                { className: "btn-group", role: "group" },
                React.createElement(
                  "div",
                  { className: "dropdown dropdown-lg" },
                  React.createElement(
                    "button",
                    { type: "button", className: "btn btn-default dropdown-toggle", "data-toggle": "dropdown", "aria-expanded": "false" },
                    React.createElement("span", { className: "caret" })
                  ),
                  React.createElement(
                    "div",
                    { className: "dropdown-menu dropdown-menu-right", role: "menu" },
                    React.createElement(
                      "form",
                      { role: "form", className: "form-horizontal" },
                      React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement(
                          "label",
                          { htmlFor: "filter" },
                          "State"
                        ),
                        React.createElement(
                          "select",
                          { className: "form-control",
                            name: "area", value: this.state.area, onChange: this.handleChange },
                          React.createElement(
                            "option",
                            { value: 0 },
                            "All States"
                          ),
                          React.createElement(
                            "option",
                            { value: 1 },
                            "South Australia"
                          ),
                          React.createElement(
                            "option",
                            { value: 2 },
                            "Queensland"
                          ),
                          React.createElement(
                            "option",
                            { value: 3 },
                            "Western Australia"
                          ),
                          React.createElement(
                            "option",
                            { value: 4 },
                            "New South Wales"
                          ),
                          React.createElement(
                            "option",
                            { value: 5 },
                            "Northern Territory"
                          ),
                          React.createElement(
                            "option",
                            { value: 6 },
                            "Victoria"
                          ),
                          React.createElement(
                            "option",
                            { value: 7 },
                            "Tasmania"
                          )
                        )
                      ),
                      React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement(
                          "label",
                          { htmlFor: "contain" },
                          "Category"
                        ),
                        React.createElement("input", { className: "form-control", type: "text",
                          name: "cat", value: this.state.cat, onChange: this.handleChange })
                      ),
                      React.createElement(
                        "div",
                        { className: "form-group" },
                        React.createElement(
                          "label",
                          { htmlFor: "contain" },
                          "Subcategory"
                        ),
                        React.createElement("input", { className: "form-control", type: "text",
                          name: "subcat", value: this.state.subcat, onChange: this.handleChange })
                      ),
                      React.createElement(
                        "button",
                        { type: "button", id: "ds-search-button1", onClick: this.submit, className: "btn btn-primary ds-search-button" },
                        React.createElement("span", { className: "fas fa-search", "aria-hidden": "true" })
                      )
                    )
                  )
                ),
                React.createElement(
                  "button",
                  { type: "button", id: "ds-search-button2", onClick: this.submit, className: "btn btn-primary ds-search-button" },
                  React.createElement("span", { className: "fas fa-search", "aria-hidden": "true" })
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Search;
}(React.Component);
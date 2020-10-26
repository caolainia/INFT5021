class Search extends React.Component {
  constructor() {
    super();
    this.state = {
      sku: "",
      area: 0,
      cat: "",
      subcat: ""
    };
    
    this.submit = this.submit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  
  handleChange({target}) {
    this.setState({
      [target.name]: target.value
    });
  }


  submit = () => {
    // logically check all input and give corresponding chart
    console.log('Selected value:', this.state.sku);
    drawChart();
  }
  
  render() {
    return(
      <div className="input-group" id="adv-search">
        <input type="text" className="form-control" placeholder="Search by SKU/APN" 
        name="sku" value={ this.state.sku } onChange={ this.handleChange }/>

        <div className="input-group-btn">
            <div className="btn-group" role="group">
                <div className="dropdown dropdown-lg">
                    <button type="button" className="btn btn-default dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                      <span className="caret"></span>
                    </button>
                    <div className="dropdown-menu dropdown-menu-right" role="menu">
                        <form role="form" className="form-horizontal">
                          <div className="form-group">
                            <label htmlFor="filter">State</label>
                            <select className="form-control"
                            name="area" value={ this.state.area } onChange={ this.handleChange }>
                                <option value={0}>All States</option>
                                <option value={1}>South Australia</option>
                                <option value={2}>Queensland</option>
                                <option value={3}>Western Australia</option>
                                <option value={4}>New South Wales</option>
                                <option value={5}>Northern Territory</option>
                                <option value={6}>Victoria</option>
                                <option value={7}>Tasmania</option>
                            </select>
                          </div>
                          <div className="form-group">
                            <label htmlFor="contain">Category</label>
                            <input className="form-control" type="text"
                            name="cat" value={ this.state.cat } onChange={ this.handleChange } />
                          </div>
                          <div className="form-group">
                            <label htmlFor="contain">Subcategory</label>
                            <input className="form-control" type="text"
                            name="subcat" value={ this.state.subcat } onChange={ this.handleChange } />
                          </div>
                          <button type="button" id="ds-search-button1" onClick={ this.submit } className="btn btn-primary ds-search-button">
                            <span className="fas fa-search" aria-hidden="true"></span>
                          </button>
                        </form>
                    </div>
                </div>
                <button type="button" id="ds-search-button2" onClick={ this.submit } className="btn btn-primary ds-search-button">
                  <span className="fas fa-search" aria-hidden="true"></span>
                </button>
            </div>
        </div>
      </div>

    )
  }

}
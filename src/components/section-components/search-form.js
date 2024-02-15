import React, { Component } from 'react';

class SearchForm extends Component {
	
	state = {
        motCle: '',
        localisation: '',
        sol: ''
    };

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        });	
    };

    handleSubmit = e => {
        e.preventDefault();
        const { motCle, localisation, sol } = this.state;
        this.props.filterTerrains(motCle, localisation, sol);
    };

    render() {

    return <div className="ltn__car-dealer-form-area mt--65 mt-120 pb-115---">
			  <div className="container">
			    <div className="row">
			      <div className="col-lg-12">
			        <div className="ltn__car-dealer-form-tab">

			          <div className="tab-content bg-white box-shadow-1 position-relative pb-10">
			            <div className="tab-pane fade active show" id="ltn__form_tab_1_1">
			              <div className="car-dealer-form-inner">


			                <form onSubmit={this.handleSubmit} className="ltn__car-dealer-form-box row">

							  <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-car---- col-lg-3 col-md-6">
								
								<input type="text" name="motCle" value={this.state.motCle} onChange={this.handleChange} placeholder="Mot clé" className="nice-select"/>
								</div>
								<div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-meter---- col-lg-3 col-md-6">
								<input  type="text" name="localisation" value={this.state.localisation} onChange={this.handleChange} placeholder="Location"  className="nice-select"/>
							  
							  </div>

			                  <div className="ltn__car-dealer-form-item ltn__custom-icon---- ltn__icon-calendar---- col-lg-3 col-md-6">
			                    
								<select name="sol" value={this.state.sol} onChange={this.handleChange} className="nice-select">
									
			                      <option>Type de sol</option>
			                      <option value="limoneux">Limoneux</option>
			                      <option value="argileux">Argileux</option>

			                    </select>

			                  </div>  
			                  <div className="ltn__car-dealer-form-item ltn__custom-icon ltn__icon-calendar col-lg-3 col-md-6">
			                    <div className="btn-wrapper text-center mt-0 go-top">
			                      <button type="submit" class="btn theme-btn-1 btn-effect-1 text-uppercase">Search</button>
			                    </div>
			                  </div>
			                </form> 
			              </div>
			            </div>
			          </div>
			        </div>
			      </div>
			    </div>
			  </div>
			</div>
        }
}
export default SearchForm;


// export default SearchForm
// import React, { Component } from 'react';

// class SearchForm extends Component {
//     state = {
//         motCle: '',
//         localisation: '',
//         sol: ''
//     };

//     handleChange = e => {
//         this.setState({
//             [e.target.name]: e.target.value
//         });	
//     };

//     handleSubmit = e => {
//         e.preventDefault();
//         const { motCle, localisation, sol } = this.state;
//         this.props.filterTerrains(motCle, localisation, sol);
//     };

//     render() {
//         return (
//             <form onSubmit={this.handleSubmit}>
//                 <input type="text" name="motCle" value={this.state.motCle} onChange={this.handleChange} placeholder="Mot clé" />
//                 <input type="text" name="localisation" value={this.state.localisation} onChange={this.handleChange} placeholder="Location" />
//                 <select name="sol" value={this.state.sol} onChange={this.handleChange}>
//                     <option value="">Type de sol</option>
//                     <option value="limoneux">Limoneux</option>
//                     <option value="argileux">Argileux</option>
//                 </select>
//                 <button type="submit">Search</button>
//             </form>
//         );
//     }
// }

// export default SearchForm;

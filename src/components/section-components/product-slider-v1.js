    // import React, { Component } from 'react';
    // import { Link } from 'react-router-dom';
    // import par  from 'html-react-parser';
    // import axios from 'axios';

    // class ProductSliderV1 extends Component {

    //     constructor(props) {
    //         super(props);
    //         this.state = {
    //             fields: [],
    //             filteredFields: [] // Added state for filtered fields
    //         };
    //     }

    //     componentDidMount() {
    //         axios.get('http://localhost:8080/api/terrains')
    //             .then(response => {
    //                 this.setState({ fields: response.data });
    //             })
    //             .catch(error => {
    //                 console.error('Error fetching fields:', error);
    //             });
    //     }

    //     // Filtering function
    //     filterTerrains = (motCle, localisation, sol) => {
    //         const filteredFields = this.state.fields.filter(field => {
    //             const motCleMatch = field.description.toLowerCase().includes(motCle.toLowerCase());
    //             const localisationMatch = field.location.toLowerCase().includes(localisation.toLowerCase());
    //             const solMatch = field.parcelles.some(parcelle => parcelle.typeSol.nom.toLowerCase() === sol.toLowerCase());

    //             return motCleMatch && localisationMatch && solMatch;
    //         });

    //         this.setState({ filteredFields });
    //     }

    //     render() {

    //         let publicUrl = process.env.PUBLIC_URL+'/'

    //     return <div>
        
    //                 <div className="ltn__product-slider-area ltn__product-gutter pt-115 pb-90 plr--7">
    //                     <div className="container-fluid">
    //                         <div className="row">
    //                             <div className="col-lg-12">
    //                                 <div className="section-title-area ltn__section-title-2--- text-center">
    //                                     <h6 className="section-subtitle section-subtitle-2 ltn__secondary-color">Properties</h6>
    //                                     <h1 className="section-title">Listes des Terrains</h1>
    //                                 </div>
    //                             </div>
    //                         </div>
    //                         <div className="row ltn__product-slider-item-four-active-full-width slick-arrow-1">
    //                             {this.state.fields.map(field => (
    //                                 <div key={field.idTerrain} className="col-lg-3 col-md-6 col-12">
    //                                     <div className="ltn__product-item ltn__product-item-4 text-center---">
    //                                         <div className="product-img go-top">

    //                                             <Link to={`/product-details/${field.idTerrain}/${field.area}/${encodeURIComponent(field.description)}/${field.location}/${field.proprio.nom}`}>
    //                                                 <img src={publicUrl + "assets/img/mountain/Beautiful rice.jpg"} alt="#" />
    //                                             </Link>

    //                                             <div className="product-badge">
    //                                                 <ul>
    //                                                     <li className="sale-badge bg-green">TERRAIN</li>
    //                                                 </ul>
    //                                             </div>
    //                                             <div className="product-img-location-gallery">
    //                                                 <div className="product-img-location">
    //                                                     <ul>
    //                                                         <li>
    //                                                             <Link to="#"><i className="flaticon-pin" />{field.location}</Link>
    //                                                         </li>
    //                                                     </ul>
    //                                                 </div>
    //                                                 <div className="product-img-gallery go-top">
    //                                                     <ul>
    //                                                         <li>
    //                                                             <Link to="#"><i className="fas fa-camera" /></Link>
    //                                                         </li>
    //                                                         <li>
    //                                                             <Link to="#"><i className="fas fa-film" /></Link>
    //                                                         </li>
    //                                                     </ul>
    //                                                 </div>
    //                                             </div>
    //                                         </div>
    //                                         <div className="product-info">
    //                                             <div className="product-description">
    //                                                 <p>{field.description}</p>
    //                                                 <div className="agent-brief go-top">
    //                                                     Proprio : <h6><Link to="">{field.proprio.email}</Link></h6>
    //                                                 </div>                                                    
    //                                             </div>
    //                                         </div>
    //                                     </div>
    //                                 </div>
    //                             ))}
    //                         </div>
    //                     </div>
    //                 </div>
    //         </div>
    //     }
    // }

    // export default ProductSliderV1


// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import axios from 'axios';
// import SearchForm from './search-form';


// class ProductSliderV1 extends Component {

//     state = {
//         fields: [],
//         filteredFields: []
//     };

//     componentDidMount() {
//         this.fetchTerrains();
//     }

//     fetchTerrains = () => {
//         axios.get('http://localhost:8080/api/terrains')
//             .then(response => {
//                 this.setState({ fields: response.data, filteredFields: response.data });
//             })
//             .catch(error => {
//                 console.error('Error fetching fields:', error);
//             });
//     }

//     filterTerrains = (motCle, localisation, sol) => {
//         const filteredFields = this.state.fields.filter(field => {
//             const motCleMatch = motCle ? field.description.toLowerCase().includes(motCle.toLowerCase()) : true;
//             const localisationMatch = localisation ? field.location.toLowerCase() === localisation.toLowerCase() : true;
//             const solMatch = sol ? field.sol.toLowerCase() === sol.toLowerCase() : true;
//             return motCleMatch && localisationMatch && solMatch;
//         });
//         this.setState({ filteredFields });
//     };


//     render() {
//         let publicUrl = process.env.PUBLIC_URL+'/';

//         const { filteredFields } = this.state; 

//         return (
//             <div className="ltn__product-slider-area ltn__product-gutter pt-115 pb-90 plr--7">
//                 <SearchForm filterTerrains={this.filterTerrains} />
//                 {/* <div>
//                      {filteredFields.map(field => (
//                          <div key={field.id}>
//                              <p>{field.description}</p>
//                              <p>{field.location}</p>
//                              <p>{field.sol}</p>
//                          </div>
//                      ))}
//                  </div> */}
//             <div className="container-fluid" style={{ paddingLeft:  0, paddingRight:  0 }}>
//                 <div className="row"  style={{ marginLeft:  0, marginRight:  0 }}>

//                     <div className="col-lg-12">

//                     </div>

//                     <div>
//                     <div className="ltn__product-slider-area ltn__product-gutter pt-115 pb-90 plr--7" style={{ paddingLeft: '7rem', paddingRight: '7rem' }}>
//                             <div className="container-fluid">
//                                 <div className="row ltn__product-slider-item-four-active-full-width slick-arrow-1">
//                                     {filteredFields.map(field => (
//                                                 <div key={field.idTerrain} className="col-lg-3 col-md-6 col-12" style={{ padding: '15px' }}>                                            
//                                                 <div className="ltn__product-item ltn__product-item-4 text-center---">
//                                                 <div className="product-img go-top">
//                                                     <Link to={`/product-details/${field.idTerrain}/${field.area}/${encodeURIComponent(field.description)}/${field.location}/${field.proprio.nom}`}>
//                                                         <img src={publicUrl + "assets/img/mountain/Beautiful rice.jpg"} alt="#" />
//                                                     </Link>
//                                                     <div className="product-badge">
//                                                         <ul>
//                                                             <li className="sale-badge bg-green">TERRAIN</li>
//                                                         </ul>
//                                                     </div>
//                                                     <div className="product-img-location-gallery">
//                                                         <div className="product-img-location">
//                                                             <ul>
//                                                                 <li>
//                                                                     <Link to="#"><i className="flaticon-pin" />{field.location}</Link>
//                                                                 </li>
//                                                             </ul>
//                                                         </div>
//                                                         <div className="product-img-gallery go-top">
//                                                             <ul>
//                                                                 <li>
//                                                                     <Link to="#"><i className="fas fa-camera" /></Link>
//                                                                 </li>
//                                                                 <li>
//                                                                     <Link to="#"><i className="fas fa-film" /></Link>
//                                                                 </li>
//                                                             </ul>
//                                                         </div>
//                                                     </div>
//                                                 </div>
//                                                 <div className="product-info">
//                                                     <div className="product-description">
//                                                         <p>{field.description}</p>
//                                                         <div className="agent-brief go-top">
//                                                             Proprio : <h6><Link to="">{field.proprio.email}</Link></h6>
//                                                         </div>                                                    
//                                                     </div>
//                                                 </div>
//                                             </div>
//                                         </div>
//                                     ))}
//                                 </div>
//                             </div>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             </div>
//         );
//     }
// }

// export default ProductSliderV1;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import SearchForm from './search-form';


class ProductSliderV1 extends Component {

    state = {
        fields: [],
        filteredFields: []
    };

    componentDidMount() {
        this.fetchTerrains();
    }

    fetchTerrains = () => {
        axios.get('https://culture-application.up.railway.app/api/terrains')
            .then(response => {
                this.setState({ fields: response.data, filteredFields: response.data });
            })
            .catch(error => {
                console.error('Error fetching fields:', error);
            });
    }

    filterTerrains = (motCle, localisation, sol) => {
        const filteredFields = this.state.fields.filter(field => {
            const motCleMatch = motCle ? field.description.toLowerCase().includes(motCle.toLowerCase()) : true;
            const localisationMatch = localisation ? field.location.toLowerCase() === localisation.toLowerCase() : true;
            const solMatch = sol ? field.sol.toLowerCase() === sol.toLowerCase() : true;
            return motCleMatch && localisationMatch && solMatch;
        });
        this.setState({ filteredFields });
    };


    render() {
        let publicUrl = process.env.PUBLIC_URL+'/';

        const { filteredFields } = this.state; 

        return (
            <div className="ltn__product-slider-area ltn__product-gutter pt-115 pb-90 plr--7">
                <div className="mb-4">
                    <SearchForm filterTerrains={this.filterTerrains} />
                </div>
                <div className="container-fluid">

                    <div className="row">
                        {filteredFields.map(field => (
                            <div key={field.idTerrain} className="col-lg-4 col-md-4 col-sm-6 mb-4">
                                <div className="ltn__product-item ltn__product-item-4 text-center">
                                    <div className="product-img go-top">
                                        <Link to={`/product-details/${field.idTerrain}/${field.area}/${encodeURIComponent(field.description)}/${field.location}/${field.proprio.nom}}`}>
                                            <img src={publicUrl + "assets/img/mountain/Beautiful rice.jpg"} alt="#" />
                                        </Link>
                                        <div className="product-badge">
                                            <ul>
                                                <li className="sale-badge bg-green">TERRAIN</li>
                                            </ul>
                                        </div>
                                        <div className="product-img-location-gallery">
                                            <div className="product-img-location">
                                                <ul>
                                                    <li>
                                                        <Link to="#"><i className="flaticon-pin" />{field.location}</Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="product-img-gallery go-top">
                                                <ul>
                                                    <li>
                                                        <Link to="#"><i className="fas fa-camera" /></Link>
                                                    </li>
                                                    <li>
                                                        <Link to="#"><i className="fas fa-film" /></Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="product-info">
                                        <div className="product-description">
                                            <p>{field.description}</p>
                                            {/* <div className="agent-brief go-top">
                                                Proprio : <h6><Link to="">{field.proprio.email}</Link></h6>
                                            </div>                                                     */}
                                        </div>
                                    </div>

                                    <div className="product-info-bottom">
                                        <div className="real-estate-agent">
                                        <div className="agent-img go-top">
                                            <Link to="#"><img src={publicUrl+"assets/img/blog/author.jpg"} alt="#" /></Link>
                                        </div>
                                        <div className="agent-brief go-top">
                                            <h6><Link to="#">{field.proprio.email}</Link></h6>
                                            <small>Field Agents</small>
                                        </div>
                                        </div>
                                        <div className="product-hover-action">
                                        <ul>
                                            <li>
                                            <a href="#" title="Quick View" data-bs-toggle="modal" data-bs-target="#quick_view_modal">
                                                <i className="flaticon-expand" />
                                            </a>
                                            </li>
                                            <li>
                                            <a href="#" title="Wishlist" data-bs-toggle="modal" data-bs-target="#liton_wishlist_modal">
                                                <i className="flaticon-heart-1" /></a>
                                            </li>
                                            <li>
                                            <span className="go-top">
                                            <Link to="#" title="Product Details">
                                                <i className="flaticon-add" />
                                            </Link>
                                            </span>
                                            </li>
                                        </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        );
    }
}

export default ProductSliderV1;



// import React, { Component } from 'react';
// import axios from 'axios';
// import SearchForm from './search-form';

// class ProductSliderV1 extends Component {
//     state = {
//         fields: [],
//         filteredFields: []
//     };

//     componentDidMount() {
//         this.fetchTerrains();
//     }

//     fetchTerrains = () => {
//         axios.get('http://localhost:8080/api/terrains')
//             .then(response => {
//                 this.setState({ fields: response.data, filteredFields: response.data });
//             })
//             .catch(error => {
//                 console.error('Error fetching fields:', error);
//             });
//     }

//     filterTerrains = (motCle, localisation, sol) => {
//         const filteredFields = this.state.fields.filter(field => {
//             const motCleMatch = motCle ? field.description.toLowerCase().includes(motCle.toLowerCase()) : true;
//             const localisationMatch = localisation ? field.location.toLowerCase() === localisation.toLowerCase() : true;
//             const solMatch = sol ? field.sol.toLowerCase() === sol.toLowerCase() : true;
//             return motCleMatch && localisationMatch && solMatch;
//         });
//         this.setState({ filteredFields });
//     };

//     render() {
//         const { filteredFields } = this.state;
//         return (
//             <div>
//                 <SearchForm filterTerrains={this.filterTerrains} />
//                 <div>
//                     {filteredFields.map(field => (
//                         <div key={field.id}>
//                             <p>{field.description}</p>
//                             <p>{field.location}</p>
//                             <p>{field.sol}</p>
//                         </div>
//                     ))}
//                 </div>
//             </div>
//         );
//     }
// }

// export default ProductSliderV1;

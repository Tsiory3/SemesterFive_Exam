import React, { Component } from 'react';
import { Link } from 'react-router-dom';


class ShopDetails extends Component {

    render() {
		const { match } = this.props;
		const { idTerrain, area, description, location,nom} = match.params;
		let publicUrl = process.env.PUBLIC_URL+'/'

    return <div className="ltn__shop-details-area pb-10">
				<div className="container">
				<div className="row">
					<div className="col-lg-8 col-md-12">
					<div className="ltn__shop-details-inner ltn__page-details-inner mb-60">

						<h1>Field ID : {idTerrain}</h1>
						<label><span className="ltn__secondary-color"><i className="flaticon-pin" /></span>{location}</label>
						<h4 className="title-2">Description</h4>

						<p>{description}</p>
						<h4 className="title-2">Field Details</h4>  
						<div className="property-detail-info-list section-bg-1 clearfix mb-60">                          
						<ul>
							<li><label>Terrain ID:</label> <span>{idTerrain}</span></li>
							<li><label>Area: </label> <span>{area} m2</span></li>
							{/* <li><label>Type de sol: <span>{nomSol}</span></label></li> */}
							{/* <li><label>Longueur:</label> <span>10000</span></li>
							<li><label>Largeur:</label> <span>5000</span></li> */}
						</ul>
						</div>
						
						<h4 className="title-2">From Our Gallery</h4>
						<div className="ltn__property-details-gallery mb-30">
						<div className="row">
							<div className="col-md-6">
							<a href={publicUrl+"assets/img/others/14.jpg"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/others/14.jpg"} alt="Image" />
							</a>
							<a href={publicUrl+"assets/img/others/15.jpg"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/others/15.jpg"} alt="Image" />
							</a>
							</div>
							<div className="col-md-6">
							<a href={publicUrl+"assets/img/others/16.jpg"} data-rel="lightcase:myCollection">
								<img className="mb-30" src={publicUrl+"assets/img/others/16.jpg"} alt="Image" />
							</a>
							</div>
						</div>
						</div>
						
					</div>
					</div>
					<div className="col-lg-4">
					<aside className="sidebar ltn__shop-sidebar ltn__right-sidebar---">
						{/* Author Widget */}
						<div className="widget ltn__author-widget">
						<div className="ltn__author-widget-inner text-center">
							<img src={publicUrl+"assets/img/team/4.jpg"} alt="Image" />
							<h5>{nom}</h5>
							
						</div>
						</div>
						
						<div className="widget ltn__banner-widget d-none go-top">
						<Link to="/shop"><img src={publicUrl+"assets/img/banner/2.jpg"} alt="#" /></Link>
						</div>
					</aside>
					</div>
				</div>
				</div>
			</div>
        }
}

export default ShopDetails

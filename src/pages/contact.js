import React  from 'react';
import { Link } from 'react-router-dom';


const Contact = () => {

    return (

        <>
        
  <section className="page-name  mb-xs-20 mb-md-25 mb-lg-65">
			<div className="dark-line"></div>
			<div className="page-name-content">
				<div className="container">
					<h1>Contact Us</h1>
					<ul className="bread-crumbs">
						<li><Link to="/">Home</Link></li>
						<li><p>Contact Us</p></li>
					</ul>
				</div>
				<img src="data:image/gif;base64,R0lGODlhAQABAAAAACwAAAAAAQABAAA=" className="page-name__bg lazy" data-src="./img/page-name_bg.jpg" alt="bg" />
			</div>
		</section>
        

        </>

    

     );

    };

export default Contact;
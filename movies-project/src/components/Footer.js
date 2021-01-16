import React from 'react'

const Footer = () => {
    return (
        <div className="col-mt-3 col-mb-5">
            <h3 style={{color: 'white'}}>Contact Info</h3>
            <ul className="list-unstyled">
                <li>
                <p>
                    <strong>
                    <i className="fas fa-map-marker-alt"></i> Phone:
                    </strong>{" (929) 320-9300"}
                </p>
                </li>
                <li>
                <p>
                    <strong>
                    <i className="fas fa-envelope"></i> Email:
                    </strong>{" mbnatavio@gmail.com"}
                </p>
                </li>
            </ul>
            
            <div className="row mt-3 mb-5">
            <div className="col-md-8 col-sm-6" style={{ color: "#5a606b" }}>
                <ul className="list-inline">
                <li className="list-inline-item">
                    <a href="/" style={{ color: "gold" }}>
                    <i className="fab fa-facebook"></i>
                    </a>
                </li>
                <li className="list-inline-item">
                    <a href="/" style={{ color: "gold" }}>
                    <i className="fab fa-instagram"></i>
                    </a>
                </li>
                </ul>
            </div>
            </div>
        </div>
    );
}

export default Footer;
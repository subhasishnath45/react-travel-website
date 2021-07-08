import React,{useState, useEffect} from 'react'
import styled from "styled-components";
import { Container, Row, Col } from 'reactstrap';
import {Link} from 'react-router-dom';
import ImageSlider from '../ImageSlider';
import servicesData from '../../services-data';
import '../../App.scss';

// specifying our image path.
const imagePath = process.env.PUBLIC_URL + '/images/';

function Services() {
    const [tag, setTag] = useState('all');
    const [filteredServices, setFilteredServices] = useState([]);

    useEffect(
        () => {
            // destination filtering is done.
            tag === 'all' ? setFilteredServices(servicesData) : setFilteredServices(servicesData.filter(service => service.tag === tag));
        }, [tag])

    return (
        <div className="services">
            <h1 className="services-banner">Services</h1>
            <Container>
                <Row>
                    <Col xs="12">
                    <section className="services-data">
                        {filteredServices.map((service)=>{
                            return(
                                <div key={service.id} className="service-card">
                                    <Row>
                                    <Col xs="6" style={{'padding-right': '0px'}}>
                                    <img className="serviceImage img-fluid" src={`${imagePath}${service.images[0].src}`} alt={`${service.images[0].title}${service.images[0].description}`} />
                                    </Col>
                                    <Col xs="6" className="service-data" style={{'padding-left': '15px'}}>
                                        <Col xs="12">
                                            <h3 className="service-data-heading">
                                                {service.name}
                                            </h3>
                                        </Col>
                                        <Col xs="12">
                                            <div className="service-data-style">
                                                <p>Style: </p>
                                                <p>{service.style}</p>
                                            </div>
                                        </Col>
                                        <Col xs="12">
                                        <div className="service-data-setting">
                                            <p>Setting: </p>
                                            <p>{service.Setting}</p>
                                        </div>
                                        </Col>
                                        <Col xs="12">
                                        <div className="service-data-tag">
                                            <p>Setting: </p>
                                            <p>{service.tag}</p>
                                        </div>
                                        </Col>
                                        <Col xs="12">
                                        <div className="service-data-price">
                                            <p>Price per night from: </p>
                                            <p>{`$${service.price}`}</p>
                                        </div>
                                        </Col>
                                        <Col xs="12">
                                            <Link to={`/services/${service.id}`} className="view-service-btn">More...</Link>
                                        </Col>
                                    </Col>
                                    </Row>
                                </div>
                            )
                        })}
                    </section>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Services

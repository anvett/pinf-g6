import React from 'react';
// import Accordion from 'react-bootstrap/Accordion';
import './accordion.css';

const accordion = () => {
    return (

        <div name='services' className="container-fluid">
            <div className="row">
                <div className="col-lg-6 col-md-6 col-sm-12 align-items-center d-flex">
                        {/* <Accordion className="custom-accordion" defaultActiveKey={['0']} alwaysOpen>
                            <Accordion.Item eventKey="0">
                                <Accordion.Header>Accordion Item #1</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit,  sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="1">
                                <Accordion.Header>Accordion Item #2</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, , sunt in
                                    culpa qui officia deserunt mollit anim id est laborum.
                                </Accordion.Body>
                            </Accordion.Item>
                            <Accordion.Item eventKey="2">
                                <Accordion.Header>Accordion Item #3</Accordion.Header>
                                <Accordion.Body>
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
                                </Accordion.Body>
                            </Accordion.Item>
                        </Accordion> */}
                </div>
                <div className="col-lg-6 col-md-6 col-sm-12 background-accordion-section">
                </div>
            </div>
        </div>
    );

}

export default accordion;

import React,{useState} from 'react';
import {
    Card,
    CardImg,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    Button,
    Row,
    Col,
    Input
} from 'reactstrap';
import { SalesSummary, Projects, Feeds } from '../../components/teacher-dashboard-components';

import img1 from '../../assets/images/big/img1.jpg';
import img2 from '../../assets/images/big/img2.jpg';
import img3 from '../../assets/images/big/img3.jpg';

const Starter = () => {
   const [file, setfile] = useState("choose")
   const [video, setvideo] = useState("")
    return (
        <div className="text-center">
            <Row>
                <Col sm={6} lg={8}>
                    <SalesSummary />
                </Col>
                <Col sm={6} lg={4}>
                    <Feeds />
                </Col>
            </Row>
            <Row>
                <Col sm={12}>
                    <Projects />
                </Col>
            </Row>
            <Row>
                <Col xs="12" md="6">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-1*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
                        {/* <CardImg top width="100%" src={img1} /> */}
                        <CardBody>
                            <CardTitle>Add Video</CardTitle>
                            <CardSubtitle>Provide the link for your youtube video.</CardSubtitle>
                            <Input
                                    type="text"
                                    name="video"
                                    id="video"
                                    placeholder="Enter link here.."
                                    value={video}
                                    onChange={e=> setvideo(e.target.value)}
                                   
                                    ></Input>
                            <Button style={{marginTop:"1rem"}}>Button</Button>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="6">
                    {/*--------------------------------------------------------------------------------*/}
                    {/*Card-1*/}
                    {/*--------------------------------------------------------------------------------*/}
                    <Card>
                        {/* <CardImg top width="100%" src={img2} /> */}
                        <CardBody>
                            <CardTitle>Add Documents</CardTitle>
                            <CardSubtitle>Upload the notes/assignments here.</CardSubtitle>
                            <Input
                                    type="file"
                                    name="file"
                                    id="file"
                                    placeholder=" : "
                                    onChange={e=> setfile(e.target.files[0])}
                                    style={{marginLeft:"28%"}}
                                    ></Input>
                            <Button style={{marginTop:"1.4rem"}}>Upload</Button>
                        </CardBody>
                    </Card>
                </Col>
                
            </Row>
        </div>
    );
}

export default Starter;

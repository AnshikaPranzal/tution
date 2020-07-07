import React from 'react';
import {
    Card,
    CardImg,
    CardImgOverlay,
    CardText,
    CardBody,
    CardTitle,
    CardSubtitle,
    CardColumns,
    CardGroup,
    CardDeck,
    CardLink,
    CardHeader,
    CardFooter,
    Button,
    Row,
    Col
} from 'reactstrap';


import img1 from '../../assets/images/big/img1.jpg';
import img2 from '../../assets/images/big/img2.jpg';
import img3 from '../../assets/images/big/img3.jpg';
import img4 from '../../assets/images/big/img4.jpg';
import img5 from '../../assets/images/big/img5.jpg';
import img6 from '../../assets/images/big/img6.jpg';
import img7 from '../../assets/images/background/img5.jpg';
import ReactPlayer from "react-player";

const Cards = () => {
    return (
        <div>
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            <h5 className="mb-3">Videos</h5>
            <Row>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardBody>
                            <CardTitle>Topic</CardTitle>
                            <CardSubtitle>Description</CardSubtitle>
                        </CardBody>
                        <ReactPlayer width="100%" height="12em"
                                url="https://www.youtube.com/watch?v=ug50zmP9I7s"
                            />
                        <CardBody>
                            <CardLink href="#">Open in new tab</CardLink>
                            <CardLink href="#">Save</CardLink>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardBody>
                            <CardTitle>Topic</CardTitle>
                            <CardSubtitle>Description</CardSubtitle>
                        </CardBody>
                        <ReactPlayer width="100%" height="12em"
                                url="https://www.youtube.com/watch?v=ug50zmP9I7s"
                            />
                        <CardBody>
                            <CardLink href="#">Open in new tab</CardLink>
                            <CardLink href="#">Save</CardLink>
                        </CardBody>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card>
                        <CardBody>
                            <CardTitle>Topic</CardTitle>
                            <CardSubtitle>Description</CardSubtitle>
                        </CardBody>
                        <ReactPlayer width="100%" height="12em"
                                url="https://www.youtube.com/watch?v=ug50zmP9I7s"
                            />
                        <CardBody>
                            <CardLink href="#">Open in new tab</CardLink>
                            <CardLink href="#">Save</CardLink>
                        </CardBody>
                    </Card>
                </Col>
            </Row>
            
            <h5 className="mb-3">Documents</h5>
            <Row>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card body>
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card body className="text-center">
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                    </Card>
                </Col>
                <Col xs="12" md="4">
                    {/* --------------------------------------------------------------------------------*/}
                    {/* Card-1*/}
                    {/* --------------------------------------------------------------------------------*/}
                    <Card body className="text-right">
                        <CardTitle>Special Title Treatment</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Go somewhere</Button>
                    </Card>
                </Col>
            </Row>
            
            {/* --------------------------------------------------------------------------------*/}
            {/* Row*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* --------------------------------------------------------------------------------*/}
            {/* End Inner Div*/}
            {/* --------------------------------------------------------------------------------*/}
        </div>
    );
}

export default Cards;



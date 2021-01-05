import React from 'react'
import {Card } from 'react-bootstrap'
import { v4 as uuidv4 } from 'uuid';
export default function MenuItemCard({src,title}) {
    return (
        <div className="p-2" key={uuidv4()}>
            <Card style={{ width: '19rem' }}>
            <Card.Img variant="top" src={src} style={{width:'19rem'}} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text className="p-2">
                Some quick example text to build on the card title and make up the bulk of
                the card's content.
                <br></br>
                
                </Card.Text>
            </Card.Body>
            </Card>
        </div>
    )
}

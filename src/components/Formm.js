import React from 'react'
import {Form,Button} from 'react-bootstrap'
export default function Formm() {
    return (
        <div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Control type="email" placeholder="Email" />
                    <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="exampleForm.ControlTextarea1">
                    <Form.Control as="textarea" rows={3} placeholder="Message" />
                </Form.Group>
               
                <Button variant="light" type="submit">
                    Submit
                </Button>
            </Form>
        </div>
    )
}

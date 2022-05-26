import React, {Component} from 'react';
import Modal from 'react-bootstrap/Modal';

import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalBody from 'react-bootstrap/ModalBody';
import ModalFooter from 'react-bootstrap/ModalFooter';
import Button from 'react-bootstrap/Button';
import {Row, Form, Col,FormGroup} from 'react-bootstrap'

export class AddDepModal extends Component{


    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);

    }

handleSubmit(event){
    event.preventDefault();
    fetch(process.env.REACT_APP_API+'department',{
        method:'POST',
        headers:{
            'Accept' : 'application/json',
            'Content-Type': 'application/json'
        },
        body:JSON.stringify({
            DepartmentId:null,
            DepartmentName:event.target.DepartmentName.value
        })

    })
    .then(res=>res.json())
    .then((result)=>{
        alert(result);
    },
    (error)=>{
        alert('Failed');
    })
}

    render(){
        return(
            <div className='container'>
<Modal
    {...this.props}
    size="lg"
    aria-labelledby="contained-modal-title-vcenter"
    centered>
        <Modal.Header chooseButton>
            <Modal.Title id="containde-modal-title-vcenter">
                Add Department
            </Modal.Title>

        </Modal.Header>
        <Modal.Body>
            <Row>
                <Col sm={6}>
                    <Form.Group controlId="DepartmentName">
                        <Form.Label>DepartmentName</Form.Label>
                        <Form.controlId type="text" name="DepartmentName" required
                        placeholder="DepartmentName"/>
                    </Form.Group>
                    <FormGroup.Group>
                        <Button variant="primary" type="submit">
                            Add Department
                        </Button>
                    </FormGroup.Group>
                </Col>
            </Row>

        </Modal.Body>
        <Modal.Footer>
            <Button variant="danger" onClick={this.props.onHide} >Close</Button>
        </Modal.Footer>
</Modal>
            </div>
        )
    }

}
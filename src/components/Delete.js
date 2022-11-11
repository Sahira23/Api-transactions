import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';

const Delete = () => {
  const [id, setID] = useState("")
  const [validated, setValidated] = useState(false);
  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation();
    }
    if (form.checkValidity() === true) {
      event.preventDefault();
      fetch(process.env.REACT_APP_MY_ENV_VARIABLE + id, {
        method: 'DELETE'
      }).then(()=>{
        setID("")
      })
    }

    setValidated(true);
  };
  return (
    <div className='mt-5'>

      <Form noValidate validated={validated} onSubmit={(e) => { handleSubmit(e) }}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Id</Form.Label>
            <Form.Control type="text" placeholder="Transaction ID..." required value={id} onChange={(e) => { setID(e.target.value) }} />
            <Form.Control.Feedback type="invalid">
              Please provide a valid Transaction ID.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit" className="mt-3">Submit form</Button>
      </Form>
    </div>
  )
}

export default Delete
import React, { useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';


const Update = () => {
  const [id, setID] = useState("")
  // obj
  const [obj, setObj] = useState({
    from: "",
    to: "",
    amount: "",
  });
  // Validation
  const [validated, setValidated] = useState(false);
  console.log(`${process.env.REACT_APP_MY_ENV_VARIABLE}${id}`)
  const handleSubmit = (event) => {
    const form = event.currentTarget; event.preventDefault();
    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation();
    }
    if (form.checkValidity() === true) {
      fetch(`${process.env.REACT_APP_MY_ENV_VARIABLE}${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(obj)
      }).then(() => { setObj({...obj,from:"",to:"",amount:""});setID("")});

    }


    setValidated(true);
  };
  return (
    <div className='mt-5'>
      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>From</Form.Label>
            <Form.Control type="text" placeholder="From..." required value={obj.from} onChange={(e) => { setObj({ ...obj, from: e.target.value }) }} />
            <Form.Control.Feedback type="invalid">
              Please provide a valid from.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>To</Form.Label>
            <Form.Control type="text" placeholder="To..." required value={obj.to} onChange={(e) => { setObj({ ...obj, to: e.target.value }) }} />
            <Form.Control.Feedback type="invalid">
              Please provide a valid to.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Amount</Form.Label>
            <Form.Control type="text" placeholder="Amount" required value={obj.amount} onChange={(e) => { setObj({ ...obj, amount: e.target.value }) }} />
            <Form.Control.Feedback type="invalid">
              Please provide a valid amount.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>ID</Form.Label>
            <Form.Control type="text" placeholder="Transaction id..." required value={id} onChange={(e) => { setID(e.target.value) }} />
            <Form.Control.Feedback type="invalid">
              Please provide a valid id.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit" className="mt-3">Submit form</Button>
      </Form>
    </div>
  )
}

export default Update
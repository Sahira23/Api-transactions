import React, { useEffect, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import Form from 'react-bootstrap/Form';
import Popup from './Popup';

const Post = (props) => {
  const [message, setmessage] = useState("");
  const [show, setshow] = useState(false)
  // obj
  const [obj, setObj] = useState({
    from: "",
    to: "",
    amount: ""
  });

  // Validation
  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;

    if (form.checkValidity() === false) {
      event.preventDefault()
      event.stopPropagation();
    }

    if (form.checkValidity() === true) {
      event.preventDefault()
      console.log(obj)
      setshow(true)
      fetch(process.env.REACT_APP_MY_ENV_VARIABLE, {
        method: 'POST',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(obj)
      }).then((response) => {
        if (response.ok) {
          setmessage("Successfully done")
        }
      }).then(() => { setObj({ ...obj, from: "", to: "", amount: "" }) })
        .catch((e) => {
          setmessage(e.message)
        })
    }
    setValidated(true);
  };
  return (
    <div className='mt-5'>

      <Form noValidate validated={validated} onSubmit={handleSubmit}>
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>From</Form.Label>
            <Form.Control type="text" placeholder="From..." required value={obj.from} onChange={(e) => { setObj({ ...obj, from: e.target.value }) }} defaultValue="8" />
            <Form.Control.Feedback type="invalid">
              Please provide a valid from.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>To</Form.Label>
            <Form.Control type="text" placeholder="To..." required value={obj.to} onChange={(e) => { setObj({ ...obj, to: e.target.value }) }} defaultValue="7" />
            <Form.Control.Feedback type="invalid">
              Please provide a valid to.
            </Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>Amount</Form.Label>
            <Form.Control type="text" placeholder="Amount..." required value={obj.amount} onChange={(e) => { setObj({ ...obj, amount: e.target.value }) }} />
            <Form.Control.Feedback type="invalid">
              Please provide a valid amount.
            </Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button type="submit">Tryitout</Button>
        <p>{show}</p>
       {show?<Popup error={message} show={show}/>:<></>}
      </Form>
    </div>
  )
}

export default Post
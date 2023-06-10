import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';

function RegistrationForm() {
   let istrue = true;

    return (
    <>
    {
        istrue 
        ?
        (<>
        <div className='bgImageTrue'>
<div className="container mt-5">
    <div className="d-flex justify-content-center ">
            <h1 className='text-primary'>Login Here</h1>
        </div>
    </div>
    <div className='container mt-5'>
        <div className='d-flex justify-content-center p-3'>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail" id="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me" />
      </Form.Group>
      <div class="grid gap-3">
  <div class="p-2 g-col-6">
  <Button variant="primary" type="submit">Submit</Button>
  </div>
  <div class="p-2 g-col-6">
  <p><i className='text-danger'><b>If you don't login yet <br /> Click on the signup button <img src="https://cdn-icons-png.flaticon.com/128/21/21178.png" width="8%" /></b></i></p>
  <Button variant="primary" type="submit">Signup</Button>
  </div>
  </div>
    </Form>
    <img src="https://media.istockphoto.com/id/1281150061/vector/register-account-submit-access-login-password-username-internet-online-website-concept.jpg?s=612x612&w=0&k=20&c=9HWSuA9IaU4o-CK6fALBS5eaO1ubnsM08EOYwgbwGBo=" />
    </div>
    </div>
    </div>
        </>)
         :
         (<>
         <div className='bgImageFalse'>
    <div className="mt-5">
    <div className="d-flex justify-content-center ">
            <h1 className='text-secondary-emphasis'>Register Here</h1>
        </div>
    </div>
    <div className='mt-5'>
        <div className='d-flex justify-content-around p-3'>
        <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail" id="email">
        <Form.Label>First Name</Form.Label>
        <Form.Control type="name" placeholder="First Name" required/>
      </Form.Group>

      
      <Form.Group className="mb-3" controlId="formBasicEmail" id="email">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="name" placeholder="Last Name" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail" id="email">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" required/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" placeholder="Password" required/>
      </Form.Group>
      
      <Form.Group className="mb-3" controlId="formBasicEmail" id="email">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control type="password" placeholder="Confirm Password" required/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Remember me!" />
      </Form.Group>
      <Button variant="success" type="submit">
        Submit
      </Button>
    </Form>
    <img src="https://static-00.iconduck.com/assets.00/checklist-icon-394x512-lsteni5u.png"  />
    </div>
    </div>
    </div>
         </>)
    }
    </>

  )
}

export default RegistrationForm;

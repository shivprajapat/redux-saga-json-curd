import { MDBBtn, MDBValidation } from 'mdb-react-ui-kit';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';

const initialState = {
  name: "",
  email: "",
  phone: "",
  address: ""
}
const AddEditUser = () => {
  const [formValue, setFormValue] = useState(initialState);
  const { name, email, phone, address } = formValue;

  let navigate = useNavigate();
  const handleSubmit = () => {
    console.log(formValue);
  }
  const onInputChange = (e) => {
    const { name, value } = e.target;
    setFormValue({ ...formValue, [name]: value })

  }
  return (
    <section>
      <div className='container'>
        <div className="row">
          <div className="col-lg-5 col-md-5 mx-auto shadow p-3 rounded-5">
            <MDBValidation className='row g-3' noValidate onSubmit={handleSubmit}>
              <p className='fs-2 fw-bold'>Add user Details</p>
              <div className="col-12">
                <input value={name} name='name' type='text' onChange={onInputChange} className='form-control' placeholder='Name' required id='validationCustomUsername' />
                <div className='invalid-feedback'>Please provide your password</div>
              </div>
              <div className="col-12">
                <input value={email} name='email' type='text' onChange={onInputChange} className='form-control' placeholder='Email' required />
                <div className='invalid-feedback'>Please provide your Email</div>
              </div>
              <div className="col-12">
                <input value={phone} name='phone' type='number' onChange={onInputChange} className='form-control' placeholder='Phone' required />
                <div className='invalid-feedback'>Please provide your Phone</div>
              </div>
              <div className="col-12">
                <input value={address} name='address' type='text' onChange={onInputChange} className='form-control' placeholder='Address' required />
                <div className='invalid-feedback'>Please provide your Address</div>
              </div>
              <div className="col-12 mt-5">
                <MDBBtn style={{ marginRight: 10 }} type='submit'>Add</MDBBtn>
                <MDBBtn onClick={() => navigate.push("/")} color='danger'>Go Back</MDBBtn>
              </div>

            </MDBValidation>
          </div>
        </div>

      </div>
    </section>
  )
}

export default AddEditUser
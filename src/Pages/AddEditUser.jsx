import { MDBBtn, MDBValidation } from 'mdb-react-ui-kit';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import TextInput from '../components/TextInput';

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
              <TextInput type='text' name='name' value={name} onChange={onInputChange} invalid='Please enter a valid name' placeholder='Name' />
              <TextInput type='email' name='email' value={email} onChange={onInputChange} invalid='Please enter a valid email' placeholder='Email' />
              <TextInput type='phone' name='phone' value={phone} onChange={onInputChange} invalid='Please enter a valid phone' placeholder='Phone' />
              <TextInput type='text' name='address' value={address} onChange={onInputChange} invalid='Please enter a valid address' placeholder='Address' />
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
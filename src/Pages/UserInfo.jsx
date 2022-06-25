import { MDBCard, MDBCardBody, MDBCardTitle, MDBBtn } from 'mdb-react-ui-kit'
import React from 'react'
import { useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'
const UserInfo = () => {

  const { users } = useSelector(state => state.data)
  console.log('users :>> ', users);
  // let dispatch = useDispatch();
  const { id } = useParams()
  let navigate = useNavigate();
  const singleUser = users.find((item) => item.id === Number(id));
  console.log(singleUser.name);

  const { name, email, phone, address } = singleUser;
  return (
    <section>
      <div className='container'>
        <div className="row">
          <div className="col-lg-6 col-md-6 mx-auto shadow p-3 rounded-5">
            <p className='fs-2 fw-bold'>User Details</p>
            <MDBCard className='shadow-0 text-start'>
              <MDBCardBody>
                <MDBCardTitle className='pb-2'><b>ID :</b> { singleUser.id}</MDBCardTitle>
                <MDBCardTitle className='pb-2'><b>Name :</b> { name} </MDBCardTitle>
                <MDBCardTitle className='pb-2'><b>Email :</b> {email }</MDBCardTitle>
                <MDBCardTitle className='pb-2'><b>Phone :</b> {phone }</MDBCardTitle>
                <MDBCardTitle className='pb-2'><b>Address :</b> { address} </MDBCardTitle>

                <div className='text-center'>
                  <MDBBtn onClick={() => navigate('/')} className='mt-5' color='danger'>Go Back</MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </div>
        </div>
      </div>
    </section>
  )
}

export default UserInfo
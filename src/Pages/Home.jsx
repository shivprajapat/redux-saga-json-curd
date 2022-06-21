import { MDBTable, MDBTableBody, MDBTableHead, MDBBtn, MDBTooltip, MDBIcon } from 'mdb-react-ui-kit';
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { deleteUserStart, loadUserStart } from '../redux/actions';
const Home = () => {

  let dispatch = useDispatch()
  const { users } = useSelector((state) => state.data)
  console.log('users', users)
  useEffect(() => {
    dispatch(loadUserStart())
    // eslint-disable-next-line 
  }, [])


  const handleDelete = (id) => {
    window.confirm('Are you sure?')
    dispatch(deleteUserStart(id))
    toast.error('user delete Successfully');
  }

  return (
    <div className='container' style={{ marginTop: 100 }}>
      <div className="table-responsive">
      <MDBTable>
        <MDBTableHead dark>
          <tr>
            <th scope='col'>No</th>
            <th scope='col'>Name</th>
            <th scope='col'>Email</th>
            <th scope='col'>Phone</th>
            <th scope='col'>Address</th>
            <th scope='col'>Action</th>
          </tr>
        </MDBTableHead>
        <MDBTableBody>
          {
            users.map((item, index) => {
              const { id, name, email, phone, address } = item;
              return (
                <tr key={index}>
                  <th scope='row'>{index + 1}</th>
                  <td>{name}</td>
                  <td>{email}</td>
                  <td>{phone}</td>
                  <td>{address}</td>
                  <td>
                    <Link to={`editUser/${id}`}>
                      <MDBBtn className='me-4' tag='a' color='none'>
                        <MDBTooltip title='Edit' tag='a'>
                          <MDBIcon fas icon='edit' style={{ color: "#55acee" }} size='lg'></MDBIcon>
                        </MDBTooltip>
                      </MDBBtn>
                    </Link>
                    <MDBBtn className='me-4' tag='a' color='none' onClick={() => handleDelete(id)}>
                      <MDBTooltip title='Delete' tag='a'>
                        <MDBIcon fas icon='trash' style={{ color: "#dd4b39" }} size='lg'></MDBIcon>
                      </MDBTooltip>
                    </MDBBtn>
                    <Link to={`userInfo/${id}`}>
                      <MDBBtn tag='a' color='none'>
                        <MDBTooltip title='View' tag='a'>
                          <MDBIcon fas icon='eye' style={{ color: "#3b5998" }} size='lg'> </MDBIcon>
                        </MDBTooltip>
                      </MDBBtn>
                    </Link>
                  </td>
                </tr>
              )
            })
          }
        </MDBTableBody>
      </MDBTable>
      </div> </div>
  )
}

export default Home
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { loadUserStart } from '../redux/actions';
const Home = () => {

  let dispatch = useDispatch()
  const { users } = useSelector((state) => state.data)
  console.log('users', users)
  useEffect(() => {
    dispatch(loadUserStart())
    // eslint-disable-next-line 
  }, [])
  return (
    <div className='container' style={{ marginTop: 100 }}>
      <h1>Home</h1>
    </div>
  )
}

export default Home
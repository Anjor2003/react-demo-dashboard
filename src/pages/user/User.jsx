import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
} from '@mui/icons-material'
import { Link } from 'react-router-dom'
import './user.css'

const User = () => {
  return (
    <div className='user'>
      <div className='userContainer'>
        <h1 className='userTitle'>Edit User</h1>
        <Link to={"/newUser"} >
          <button className='userAddButton'>Create</button>
        </Link>
      </div>
      <div className='userDataContainer'>
        <div className='userShow'>
          <div className='userShowtop'>
            <img
              src='https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
              alt=''
              className='userShowImg'
            />
            <div className='userShowTopTitle'>
              <span className='userShowUsername'>Jon Snow</span>
              <span className='userShowUserTitle'>Software Engineer</span>
            </div>
          </div>
          <div className='userShowBotom'>
            <span className='userShowBotomTitle'>Account Details</span>
            <div className='userShowBottomInfo'>
              <PermIdentity className='userShowBotomIcon' />
              <span className='userShowBottonInfoTitle'>jonSnow99</span>
            </div>
            <div className='userShowBottomInfo'>
              <CalendarToday className='userShowBotomIcon' />
              <span className='userShowBottonInfoTitle'>10.12.91</span>
            </div>
            <span className='userShowBotomTitle'>Contact Details</span>
            <div className='userShowBottomInfo'>
              <PhoneAndroid className='userShowBotomIcon' />
              <span className='userShowBottonInfoTitle'>+34 666 999 777</span>
            </div>
            <div className='userShowBottomInfo'>
              <MailOutline className='userShowBotomIcon' />
              <span className='userShowBottonInfoTitle'>
                jonSnow99@gmail.com
              </span>
            </div>
            <div className='userShowBottomInfo'>
              <LocationSearching className='userShowBotomIcon' />
              <span className='userShowBottonInfoTitle'>Alicante | ESP</span>
            </div>
          </div>
        </div>
        <div className='userUpdate'>
          <span className='userUpdateTitle'>Edit</span>
          <form className='userUpdateForm'>
            <div className='userUpdateLeft'>
              <div className='userUpdateItem'>
                <label>Username</label>
                <input
                  type='text'
                  placeholder='jonSnow99'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Full Name</label>
                <input
                  type='text'
                  placeholder='Jon Snow'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label>EMail</label>
                <input
                  type='text'
                  placeholder='jonSnow99@gmail.com'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Phone</label>
                <input
                  type='text'
                  placeholder='+34 666 999 777'
                  className='userUpdateInput'
                />
              </div>
              <div className='userUpdateItem'>
                <label>Address</label>
                <input
                  type='text'
                  placeholder='Alicante | ESP'
                  className='userUpdateInput'
                />
              </div>
            </div>
            <div className='userUpdateRight'>
              <div className='userUpdateUpload'>
                <img
                  src='https://images.pexels.com/photos/1300402/pexels-photo-1300402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
                  alt=''
                  className='userUpdateImg'
                />
                <label htmlFor='file'>
                  <Publish className='userUpdateIcon' />
                </label>
                <input type='file' id='file' />
              </div>
              <button className='userUpdateButton'>Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default User

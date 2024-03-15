import './navbar.scss'

import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import DarkModeOutlinedIcon from '@mui/icons-material/DarkModeOutlined';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import NotificationsActiveOutlinedIcon from '@mui/icons-material/NotificationsActiveOutlined';

import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className='navbar'>
      <div className='left'>

        <Link to='/home' style={{textDecoration:'none'}}>
        <span>
          HakatonLogo 
        </span>
        </Link>
        <HomeOutlinedIcon/>
        <DarkModeOutlinedIcon/>
        <GridViewOutlinedIcon/>

        <div className='search'>
          <SearchOutlinedIcon/>
          <input type='text' placeholder='Search..'/>
        </div>

      </div>
      <div className='right'>
        <PersonOutlineOutlinedIcon/>
        <EmailOutlinedIcon/>
        <NotificationsActiveOutlinedIcon/>
        <div className='user'>
          {/* <img src='' alt=''/> */}
          <span>Luben Lubenus</span>
        </div>
      </div>
    </div>
  )
}

export default Navbar
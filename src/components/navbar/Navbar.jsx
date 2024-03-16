import "./navbar.scss";

import Logo from "../../assets/logo.svg";

import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import GridViewOutlinedIcon from "@mui/icons-material/GridViewOutlined";
import SearchOutlinedIcon from "@mui/icons-material/SearchOutlined";

import { Link } from "react-router-dom";
import { userPropTypes } from "../../PropTypesDefinitions";

const Navbar = ({ user }) => {
  return (
    <div className="navbar">
      <div className="left">
        <Link to="/" style={{ textDecoration: "none" }}>
          <div className="gradient-overlay"></div>
          <img src={Logo} alt="JoinME Logo" />
        </Link>
        <HomeOutlinedIcon />
        <GridViewOutlinedIcon />
      </div>
      <div className="search">
        <SearchOutlinedIcon />
        <input type="text" placeholder="Search.." />
      </div>
      <div className="right">
        <div className="user">
          <img src={user.image} alt="" />
          <span>{user.username}</span>
        </div>
      </div>
    </div>
  );
};

Navbar.propTypes = {
  user: userPropTypes,
};

export default Navbar;

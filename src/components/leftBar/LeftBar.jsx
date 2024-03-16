import "./leftBar.scss";
const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="container">
        <div className="menu">
          <div className="menuComponent">
            <img
              src="https://images.pexels.com/photos/3766479/pexels-photo-3766479.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt=""
            />
            <span>Luben Lubenus</span>
          </div>

          <div className="menuComponent">
            <img src="" alt="" />
            <span>Followers</span>
          </div>

          <div className="menuComponent">
            <img src="" alt="" />
            <span>Following</span>
          </div>

          <div className="menuComponent">
            <img src="" alt=""></img>
            <span>Events</span>
          </div>

          <div className="menuComponent">
            <img src="" alt=""></img>
            <span>Requests</span>
          </div>
          <hr />
          <div className="filtter">
            <h3>Filtters</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LeftBar;

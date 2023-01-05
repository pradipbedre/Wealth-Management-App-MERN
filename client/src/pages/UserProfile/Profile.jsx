import React from "react";
import "./profile.scss";
import { Link } from "react-router-dom";
import { removeCookie } from "../../utils/Cookie";

const Profile = () => {
  const dispatch = useDispatch();
  const logoutState = useSelector((state) => state.Auth);
  const logoutUser = () => {
    removeCookie("jwt_token");
  };
  return (
    <div>
      <div className="profile-container">
        <div className="profile-navbar">
          <h2>Your Profile</h2>
          <div className="dropdown">
            <img
              className="dash-profile"
              src="https://avatars.githubusercontent.com/u/60803643?s=40&v=4"
              alt="profile-picture"
            />
            <div class="dropdown-content">
              <Link to="/dashboard">
                <button>Dashboard</button>
              </Link>
              <Link to="/">
                <button onClick={logoutUser}>Logout</button>
              </Link>
            </div>
          </div>
        </div>
        <div className="profile">
          <div className="left">
            <img
              className="profile-img"
              src="https://avatars.githubusercontent.com/u/60803643?s=40&v=4"
              alt="profile-picture"
            />
            <div className="name-file">
              <p>Pradip Bedre</p>
              <input type="file" />
            </div>
          </div>
          <div className="right">
            <label htmlFor="">Name:</label>
            <input type="text" placeholder="name" />
            <label htmlFor="">Email:</label>
            <input type="text" placeholder="email" />
            <label htmlFor="">Password:</label>
            <input type="text" placeholder="password" />
            <label htmlFor="">Mobile No:</label>
            <input type="text" placeholder="mobile no" />
            <label htmlFor="">Address:</label>
            <textarea rows="5" cols="60" name="text" placeholder="Address" />
            <button>Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

import React, { Component } from "react";
import PropTypes from "prop-types";

/*
* Renders a sticky sidebar containing a list of users with checkboxes beside their names. When a
* user is checked or unchecked, runs a function
*/
class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.handleChange = this.handleChange.bind(this);
  }

  /*
  * When one of the boxes is changed, pass the userId of the corresponding user to the function
  * passed in by the prop onChange
  */
  handleChange(e) {
    const user = parseInt(e.target.value, 10);
    this.props.onChange(user);
  }

  render() {
    /*
    * If the sidebarOpen prop is set to false, adds the class "closed", which hides the sidebar on
    * small screens.
    */
    let sidebarClass = this.props.sidebarOpen ? "sidebar" : "sidebar closed";
    return (
      <div className={sidebarClass}>
        <form className="user-picker">
          <p> Filter by user: </p>
            {this.props.users.map((user, index) => {
                let selected = this.props.selectedUsers.includes(user.id);
                return (
                  <div key={index+1} className="checkbox-container">
                    <label key={index+1}>
                      <input onChange={this.handleChange} type="checkbox" defaultChecked={selected} key={index+1} value={user.id} />
                      {user.username}
                    </label>
                  </div>
                );
              })
            }
        </form>
      </div>
    );
  }
}

Sidebar.propTypes = {
  /*
  * Array of users' id's whose albums are being displayed currently. Used to render those users'
  * corresponding checkboxes as checked or unchecked.
  */
  selectedUsers: PropTypes.array.isRequired,
  /*
  * Array of objects, each corresponding to a user that created at least one album
  */
  users: PropTypes.array.isRequired,
  /*
  * Function to be run when a box is checked or unchecked
  */
  onChange: PropTypes.func.isRequired,
  /*
  * Boolean used to hide or unhide the sidebar when the window is below 850px wide
  */
  sidebarOpen: PropTypes.bool.isRequired,
}

export default Sidebar;

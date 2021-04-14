import React from "react";
import "../static/receiverrequest.css";
class ReceiverRequest extends React.Component {
    render() {
      return (
        <div class="frame">
            <div class="rec-request">
                <form>
                <label for="firstname">
                <b>First Name</b>
                </label>
                <input
                type="text"
                placeholder="Enter First Name"
                name="firstname"
                required
                />
                <label for="lastname">
                <b>Last Name</b>
                </label>
                <input
                type="text"
                placeholder="Enter Last Name"
                name="lastname"
                required
                />
                <label for="bloodgroup">
                <b>Blood Group</b>
                </label>
                <input
                type="text"
                placeholder="Enter blood group"
                name="bloodgroup"
                required
                />
                <label for="contactno">
                <b>Contact Number</b>
                </label>
                <input
                type="text"
                placeholder="Enter Contact number"
                name="contactno"
                required
                />
                <label for="hospitals">Choose a Hospital:</label>
                <select name="hospitals" id="hospitals">
                <option value="giriraj">Giriraj</option>
                </select>
                <button class="cta-btn">Make Request</button>
                </form>
            </div>
        </div>
      );
    }
  }
  
  export default ReceiverRequest;
  
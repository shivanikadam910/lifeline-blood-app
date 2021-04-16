import React from "react";

// add "import Contact_us from './components/contact_us.js'" to App.js
import { Icon, InlineIcon } from '@iconify/react';
import iosLocationOutline from '@iconify-icons/ion/ios-location-outline';
import logoInstagram from '@iconify-icons/ion/logo-instagram';
import logoLinkedin from '@iconify-icons/ion/logo-linkedin';
import telephonereceiver2Icon from '@iconify-icons/fxemoji/telephonereceiver2';
import emailIcon from '@iconify-icons/fxemoji/email';

class Contact_us extends React.Component {
  render() {
    return (

      <div className="container">

      <div className="section-header">
        <h2>Contact Us</h2>
      </div>

      <div className="row contact-info">

        <div className="col-md-4">
          <div className="contact-address">
            <Icon icon={iosLocationOutline} />&emsp;

            <Icon icon={logoInstagram} /> &emsp;
            <Icon icon={logoLinkedin} />

          </div>
          <div className="col-md-4">
            <div className="contact-phone">
              &emsp;&emsp;&emsp;<Icon icon={telephonereceiver2Icon} />
              <h3>Phone Number</h3>
              <p><a href="tel:+91987456321">+91 987456321</a></p>
            </div>
          </div>

          <div className="col-md-4">
            <div className="contact-email">
              &emsp;<Icon icon={emailIcon} />
              <h3>Email</h3>
              <p><a href="mailto:lifeline@gmail.com">lifeline@gmail.com</a></p>
            </div>
          </div>

        </div>

      </div>
    </div>

    );
  }
}

export default Contact_us;
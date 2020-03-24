// Content

class Content extends React.Component {
  render () {
    return (
      <div>
        <div className="content center-h">
          <div className="content-box">
            <h3 className="font-xxl lighter uppercase orange-900-cl text-center">Our Main Services</h3>
            <hr className="separator-s" />
          </div>
          <div className="content-box white-bg">
            <div className="content-column three">
              <div className="content-row">
                <h4 className="font-m uppercase orange-500-cl">Hospitality</h4>
                <hr className="separator-xs" />
                <ul className="clear-list">
                  <li className="font-m orange-900-cl condensed">
                    <span className="icon left"><img src={require("../../../../assets/images/icons/ta_icon.png")} alt="twice-agency" title="Twice Agency"/></span>
                    Accommodation
                  </li>
                  <li className="font-m orange-900-cl condensed">
                    <span className="icon left"><img src={require("../../../../assets/images/icons/ta_icon.png")} alt="twice-agency" title="Twice Agency"/></span>
                    Beach Club
                  </li>
                  <li className="font-m orange-900-cl condensed">
                    <span className="icon left"><img src={require("../../../../assets/images/icons/ta_icon.png")} alt="twice-agency" title="Twice Agency"/></span>
                    Restaurant
                  </li>
                  <li className="font-m orange-900-cl condensed">
                    <span className="icon left"><img src={require("../../../../assets/images/icons/ta_icon.png")} alt="twice-agency" title="Twice Agency"/></span>
                    Night Life
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-column three">
              <div className="content-row">
                <h4 className="font-m uppercase orange-500-cl">Transportation</h4>
                <hr className="separator-xs" />
                <ul className="clear-list">
                  <li className="font-m orange-900-cl condensed">
                    <span className="icon left"><img src={require("../../../../assets/images/icons/ta_icon.png")} alt="twice-agency" title="Twice Agency"/></span>
                    Yachting
                  </li>
                  <li className="font-m orange-900-cl condensed">
                    <span className="icon left"><img src={require("../../../../assets/images/icons/ta_icon.png")} alt="twice-agency" title="Twice Agency"/></span>
                    Chauffeur
                  </li>
                  <li className="font-m orange-900-cl condensed">
                    <span className="icon left"><img src={require("../../../../assets/images/icons/ta_icon.png")} alt="twice-agency" title="Twice Agency"/></span>
                    Transfer
                  </li>
                  <li className="font-m orange-900-cl condensed">
                    <span className="icon left"><img src={require("../../../../assets/images/icons/ta_icon.png")} alt="twice-agency" title="Twice Agency"/></span>
                    Car Rental
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-column three">
              <div className="content-row">
                <h4 className="font-m uppercase orange-500-cl">Other</h4>
                <hr className="separator-xs" />
                <ul className="clear-list">
                  <li className="font-m orange-900-cl condensed">
                    <span className="icon left"><img src={require("../../../../assets/images/icons/ta_icon.png")} alt="twice-agency" title="Twice Agency"/></span>
                    Aviation
                  </li>
                  <li className="font-m orange-900-cl condensed">
                    <span className="icon left"><img src={require("../../../../assets/images/icons/ta_icon.png")} alt="twice-agency" title="Twice Agency"/></span>
                    Private Chef
                  </li>
                  <li className="font-m orange-900-cl condensed">
                    <span className="icon left"><img src={require("../../../../assets/images/icons/ta_icon.png")} alt="twice-agency" title="Twice Agency"/></span>
                    Childcare
                  </li>
                  <li className="font-m orange-900-cl condensed">
                    <span className="icon left"><img src={require("../../../../assets/images/icons/ta_icon.png")} alt="twice-agency" title="Twice Agency"/></span>
                    F&B Provisioning
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="separator-s" />
          <a href="https://twice-agency.com/estates/" className="button-xxl orange center-h" rel="noreferrer" target="_blank">Click to Find Out More</a>
        </div>
      </div>
    )
  }
}

export default Content

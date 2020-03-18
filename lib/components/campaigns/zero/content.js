// Content

class Content extends React.Component {
  render () {
    return (
      <div>
        <div className="content center-h">
          <div className="content-box">
            <h3 className="font-xl uppercase orange-900-cl text-center">Our Main Services</h3>
            <hr className="separator-s" />
          </div>
          <div className="content-box white-bg">
            <div className="content-column three">
              <div className="content-row">
                <h4 className="font-m uppercase orange-500-cl">Hospitality</h4>
                <hr className="separator-xs" />
                <ul className="clear-list">
                  <li className="font-m orange-900-cl condensed">Accommodation</li>
                  <li className="font-m orange-900-cl condensed">Beach Club</li>
                  <li className="font-m orange-900-cl condensed">Restaurant</li>
                  <li className="font-m orange-900-cl condensed">Night Life</li>
                </ul>
              </div>
            </div>
            <div className="content-column three">
              <div className="content-row">
                <h4 className="font-m uppercase orange-500-cl">Transportation</h4>
                <hr className="separator-xs" />
                <ul className="clear-list">
                  <li className="font-m orange-900-cl condensed">Yachting</li>
                  <li className="font-m orange-900-cl condensed">Chauffeur</li>
                  <li className="font-m orange-900-cl condensed">Transfer</li>
                  <li className="font-m orange-900-cl condensed">Car Rental</li>
                </ul>
              </div>
            </div>
            <div className="content-column three">
              <div className="content-row">
                <h4 className="font-m uppercase orange-500-cl">Other</h4>
                <hr className="separator-xs" />
                <ul className="clear-list">
                  <li className="font-m orange-900-cl condensed">Aviation</li>
                  <li className="font-m orange-900-cl condensed">Private Chef</li>
                  <li className="font-m orange-900-cl condensed">Childcare</li>
                  <li className="font-m orange-900-cl condensed">F&B Provisioning</li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="separator-s" />
          <a href="#" className="button-xxl orange center-h">Click to Find Out More</a>
        </div>
      </div>
    )
  }
}

export default Content

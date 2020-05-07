// Grid One

class GridOne extends React.Component {
  render () {
    return (
      <div className="grid center-h">
        <div className="grid-box">
          <div className="grid-row">
            <h3 className="font-xl font-weight-400 text-center orange-500-cl">OUR MAIN SERVICES</h3>
            <p className="font-m text-center gray-500-cl">
              We work closely with our partners to offer bespoke Private and Corporate Concierge services.
            </p>
            <hr className="separator-s" />
          </div>
          <div className="grid-row">
            <div className="grid-item">
              <div className="grid-inner">
                <img src={require("../../../../../../assets/images/global/services/hotels.png")} alt="twice-agency" title="Twice Agency"/>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
                <img src={require("../../../../../../assets/images/global/services/aviation.png")} alt="twice-agency" title="Twice Agency"/>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
                <img src={require("../../../../../../assets/images/global/services/restaurants.png")} alt="twice-agency" title="Twice Agency"/>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
                <img src={require("../../../../../../assets/images/global/services/nightlife.png")} alt="twice-agency" title="Twice Agency"/>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
                <img src={require("../../../../../../assets/images/global/services/chauffeur.png")} alt="twice-agency" title="Twice Agency"/>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
                <img src={require("../../../../../../assets/images/global/services/events.png")} alt="twice-agency" title="Twice Agency"/>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
                <img src={require("../../../../../../assets/images/global/services/shows.png")} alt="twice-agency" title="Twice Agency"/>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
                <img src={require("../../../../../../assets/images/global/services/tours.png")} alt="twice-agency" title="Twice Agency"/>
              </div>
            </div>
          </div>
          <div className="grid-row">
            <hr className="separator-s" />
            <p className="font-m text-center gray-500-cl">
              Discover our short-term and long-term packages for your Private and Corporate needs
            </p>
            <hr className="separator-xs" />
            <a href="https://twice-agency.com/lifestyle/services/" className="button-xxl orange center-h" rel="referrer" target="_blank">
              FIND OUT MORE
              <span className="icon right"><img src={require("../../../../../../assets/images/campaigns/arrow-right.png")} alt="twice-agency" title="Twice Agency"/></span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default GridOne

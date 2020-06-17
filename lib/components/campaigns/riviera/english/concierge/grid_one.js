// Grid One

class GridOne extends React.Component {

  render () {
    return (
      <div className="grid center-h">
        <div className="grid-box">
          <div className="grid-row">
            <h3 className="font-xl font-weight-400 text-center orange-500-cl">OUR MAIN SERVICES</h3>
            <p className="font-m text-center gray-500-cl">
              We work in close relationship with our partners to offer bespoke Private and Corporate Concierge services.
            </p>
            <hr className="separator-s" />
          </div>
          <div className="grid-row">
            <div className="grid-item">
              <div className="grid-inner">
                <a href="https://twice-agency.com/lifestyle/services/" rel="referrer">
                  <img src={require("../../../../../../assets/images/campaigns/riviera/concierge/en_services/Services_01.png")} alt="twice-agency" title="Twice Agency"/>
                </a>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
                <a href="https://twice-agency.com/lifestyle/services/" rel="referrer">
                  <img src={require("../../../../../../assets/images/campaigns/riviera/concierge/en_services/Services_02.png")} alt="twice-agency" title="Twice Agency"/>
                </a>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
                <a href="https://twice-agency.com/lifestyle/services/" rel="referrer">
                  <img src={require("../../../../../../assets/images/campaigns/riviera/concierge/en_services/Services_03.png")} alt="twice-agency" title="Twice Agency"/>
                </a>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
                <a href="https://twice-agency.com/lifestyle/services/" rel="referrer">
                  <img src={require("../../../../../../assets/images/campaigns/riviera/concierge/en_services/Services_04.png")} alt="twice-agency" title="Twice Agency"/>
                </a>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
                <a href="https://twice-agency.com/lifestyle/services/" rel="referrer">
                  <img src={require("../../../../../../assets/images/campaigns/riviera/concierge/en_services/Services_05.png")} alt="twice-agency" title="Twice Agency"/>
                </a>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
                <a href="https://twice-agency.com/lifestyle/services/" rel="referrer">
                  <img src={require("../../../../../../assets/images/campaigns/riviera/concierge/en_services/Services_06.png")} alt="twice-agency" title="Twice Agency"/>
                </a>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
                <a href="https://twice-agency.com/lifestyle/services/" rel="referrer">
                  <img src={require("../../../../../../assets/images/campaigns/riviera/concierge/en_services/Services_07.png")} alt="twice-agency" title="Twice Agency"/>
                </a>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
                <a href="https://twice-agency.com/lifestyle/services/" rel="referrer">
                  <img src={require("../../../../../../assets/images/campaigns/riviera/concierge/en_services/Services_08.png")} alt="twice-agency" title="Twice Agency"/>
                </a>
              </div>
            </div>
          </div>
          <div className="grid-row">
            <hr className="separator-s" />
            <p className="font-m text-center gray-500-cl">
              Discover our short-term and long-term packages for your Private and Corporate needs
            </p>
            <hr className="separator-xs" />
            <a href="https://twice-agency.com/lifestyle/" className="button-xxl orange center-h" rel="referrer">
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

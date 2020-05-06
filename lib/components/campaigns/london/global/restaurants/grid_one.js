// Grid One

class GridOne extends React.Component {
  render () {
    return (
      <div className="grid center-h">
        <div className="grid-box">
          <div className="grid-row">
            <h3 className="font-xxl font-weight-400 text-center orange-500-cl">OUR PARTNERS</h3>
            <p className="font-l text-center gray-500-cl">
              We work in close relationship with our partners to offer last minute bookings and unique experiences
            </p>
            <hr className="separator-s" />
          </div>
          <div className="grid-row">
            <div className="grid-item">
              <div className="grid-inner">
                <img src={require("../../../../../../assets/images/global/partners/1.png")} alt="twice-agency" title="Twice Agency"/>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
                <img src={require("../../../../../../assets/images/global/partners/2.png")} alt="twice-agency" title="Twice Agency"/>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
                <img src={require("../../../../../../assets/images/global/partners/3.png")} alt="twice-agency" title="Twice Agency"/>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
                <img src={require("../../../../../../assets/images/global/partners/4.png")} alt="twice-agency" title="Twice Agency"/>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
                <img src={require("../../../../../../assets/images/global/partners/5.png")} alt="twice-agency" title="Twice Agency"/>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
                <img src={require("../../../../../../assets/images/global/partners/6.png")} alt="twice-agency" title="Twice Agency"/>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
                <img src={require("../../../../../../assets/images/global/partners/7.png")} alt="twice-agency" title="Twice Agency"/>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
                <img src={require("../../../../../../assets/images/global/partners/8.png")} alt="twice-agency" title="Twice Agency"/>
              </div>
            </div>
          </div>
          <div className="grid-row">
            <hr className="separator-s" />
            <p className="font-l text-center gray-500-cl">
              Ready to book your dining experience? Discover our short-term and long-term packages for your Private and Corporate needs.
            </p>
            <hr className="separator-xs" />
            <a href="https://twice-agency.com/lifestyle/our-packages/" className="button-xxl orange center-h" rel="referrer" target="_blank">
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

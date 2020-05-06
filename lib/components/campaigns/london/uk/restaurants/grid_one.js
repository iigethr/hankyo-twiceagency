// Grid One

class GridOne extends React.Component {
  render () {
    return (
      <div className="grid center-h">
        <div className="grid-box">
          <div className="grid-row">
            <h1 className="font-xxl text-center orange-700-cl">Partners & Expertise</h1>
            <p className="font-l text-center gray-500-cl">
              Our unique business relationships allow us to establish genuine brand collaborations, enriched with Private & Corporate Concierge Services.
            </p>
            <hr className="separator-s" />
          </div>
          <div className="grid-row">
            <div className="grid-item">
              <div className="grid-inner">
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
              </div>
            </div>
          </div>
          <div className="grid-row">
            <hr className="separator-m" />
            <p className="font-l text-center gray-500-cl">
              Offering a Private & Corporate one-to-one services to our members.
            </p>
            <hr className="separator-xs" />
            <a href="https://twice-agency.com/lifestyle/services/" className="button-xxl orange center-h" rel="referrer" target="_blank">
              Click to Find Out More
              <span className="icon right"><img src={require("../../../../../../assets/images/campaigns/arrow-right.png")} alt="twice-agency" title="Twice Agency"/></span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default GridOne

// Grid One

class GridOne extends React.Component {

  render () {
    return (
      <div className="grid center-h">
        <div className="grid-box">
          <div className="grid-row">
            <h3 className="font-xl font-weight-400 text-center orange-500-cl">FRENCH RIVIERA VILLAS AND APARTMENTS</h3>
            <p className="font-m text-center gray-500-cl">
              Find below a selection of our properties on the French Riviera.
            </p>
            <hr className="separator-s" />
          </div>
          <div className="grid-row">
            <div className="grid-item third">
              <div className="grid-inner third">
                <a href="https://twice-agency.com/estate/villa-alang-alang/" rel="referrer">
                  <img src={require("../../../../../../assets/images/campaigns/riviera/accommodation/estate-1.jpg")} alt="twice-agency" title="Twice Agency"/>
                </a>
              </div>
            </div>
            <div className="grid-item third">
              <div className="grid-inner third">
                <a href="https://twice-agency.com/estate/villa-titan/" rel="referrer">
                  <img src={require("../../../../../../assets/images/campaigns/riviera/accommodation/estate-2.jpg")} alt="twice-agency" title="Twice Agency"/>
                </a>
              </div>
            </div>
            <div className="grid-item third">
              <div className="grid-inner third">
                <a href="https://twice-agency.com/estate/villa-pixie/" rel="referrer">
                  <img src={require("../../../../../../assets/images/campaigns/riviera/accommodation/estate-3.jpg")} alt="twice-agency" title="Twice Agency"/>
                </a>
              </div>
            </div>
            <div className="grid-item third">
              <div className="grid-inner third">
                <a href="https://twice-agency.com/estate/3-bedroom-apartment-cannes-03ta193/" rel="referrer">
                  <img src={require("../../../../../../assets/images/campaigns/riviera/accommodation/estate-4.jpg")} alt="twice-agency" title="Twice Agency"/>
                </a>
              </div>
            </div>
            <div className="grid-item third">
              <div className="grid-inner third">
                <a href="https://twice-agency.com/estate/4-bedroom-apartment-cannes-04ta194/" rel="referrer">
                  <img src={require("../../../../../../assets/images/campaigns/riviera/accommodation/estate-5.jpg")} alt="twice-agency" title="Twice Agency"/>
                </a>
              </div>
            </div>
            <div className="grid-item third">
              <div className="grid-inner third">
                <a href="https://twice-agency.com/estate/4-bedroom-apartment-cannes-04ta192/" rel="referrer">
                  <img src={require("../../../../../../assets/images/campaigns/riviera/accommodation/estate-6.jpg")} alt="twice-agency" title="Twice Agency"/>
                </a>
              </div>
            </div>
          </div>
          <div className="grid-row">
            <hr className="separator-s" />
            <p className="font-m text-center gray-500-cl">
              Discover more on our website.
            </p>
            <hr className="separator-xs" />
            <a href="https://twice-agency.com/estates/all/" className="button-xxl orange center-h" rel="referrer">
              EXPLORE
              <span className="icon right"><img src={require("../../../../../../assets/images/campaigns/arrow-right.png")} alt="twice-agency" title="Twice Agency"/></span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default GridOne

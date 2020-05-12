// Grid One

class GridOne extends React.Component {

  render () {
    return (
      <div className="grid center-h">
        <div className="grid-box">
          <div className="grid-row">
            <h3 className="font-xl font-weight-400 text-center orange-500-cl">VILLAS ET APPARTEMENTS SUR LA CÔTE D’AZUR</h3>
            <p className="font-m text-center gray-500-cl">
              Vous trouverez ci-dessous une sélection de nos biens sur la Côte d'Azur.
            </p>
            <hr className="separator-s" />
          </div>
          <div className="grid-row">
            <div className="grid-item third">
              <div className="grid-inner third">
                <a href="https://twice-agency.com/estates/all/" rel="referrer">
                  <img src={require("../../../../../../assets/images/campaigns/riviera/accommodation/estate-1.jpg")} alt="twice-agency" title="Twice Agency"/>
                </a>
              </div>
            </div>
            <div className="grid-item third">
              <div className="grid-inner third">
                <a href="https://twice-agency.com/estates/all/" rel="referrer">
                  <img src={require("../../../../../../assets/images/campaigns/riviera/accommodation/estate-2.jpg")} alt="twice-agency" title="Twice Agency"/>
                </a>
              </div>
            </div>
            <div className="grid-item third">
              <div className="grid-inner third">
                <a href="https://twice-agency.com/estates/all/" rel="referrer">
                  <img src={require("../../../../../../assets/images/campaigns/riviera/accommodation/estate-3.jpg")} alt="twice-agency" title="Twice Agency"/>
                </a>
              </div>
            </div>
            <div className="grid-item third">
              <div className="grid-inner third">
                <a href="https://twice-agency.com/estates/all/" rel="referrer">
                  <img src={require("../../../../../../assets/images/campaigns/riviera/accommodation/estate-4.jpg")} alt="twice-agency" title="Twice Agency"/>
                </a>
              </div>
            </div>
            <div className="grid-item third">
              <div className="grid-inner third">
                <a href="https://twice-agency.com/estates/all/" rel="referrer">
                  <img src={require("../../../../../../assets/images/campaigns/riviera/accommodation/estate-5.jpg")} alt="twice-agency" title="Twice Agency"/>
                </a>
              </div>
            </div>
            <div className="grid-item third">
              <div className="grid-inner third">
                <a href="https://twice-agency.com/estates/all/" rel="referrer">
                  <img src={require("../../../../../../assets/images/campaigns/riviera/accommodation/estate-6.jpg")} alt="twice-agency" title="Twice Agency"/>
                </a>
              </div>
            </div>
          </div>
          <div className="grid-row">
            <hr className="separator-s" />
            <p className="font-m text-center gray-500-cl">
              Pour en savoir plus, consultez notre site web.
            </p>
            <hr className="separator-xs" />
            <a href="https://twice-agency.com/fr/estates/villas-et-appartements-cote-dazur/" className="button-xxl orange center-h" rel="referrer">
              EXPLORER
              <span className="icon right"><img src={require("../../../../../../assets/images/campaigns/arrow-right.png")} alt="twice-agency" title="Twice Agency"/></span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default GridOne

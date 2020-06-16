// Grid One

class GridOne extends React.Component {

  render () {
    return (
      <div className="grid center-h">
        <div className="grid-box">
          <div className="grid-row">
            <h3 className="font-xl font-weight-400 text-center orange-500-cl">NOS SERVICES PRINCIPAUX</h3>
            <p className="font-m text-center gray-500-cl">
              Nous travaillons en étroite collaboration avec nos partenaires pour fournir des services de Conciergerie sur-mesure aux Particuliers et Professionnels.
            </p>
            <hr className="separator-s" />
          </div>
          <div className="grid-row">
            <div className="grid-item">
              <div className="grid-inner">
                <a href="https://twice-agency.com/fr/lifestyle-fr/" rel="referrer">
                  <img src={require("../../../../../../assets/images/campaigns/riviera/concierge/fr_services/Service_1.png")} alt="twice-agency" title="Twice Agency"/>
                </a>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
                <a href="https://twice-agency.com/fr/lifestyle-fr/" rel="referrer">
                  <img src={require("../../../../../../assets/images/campaigns/riviera/concierge/fr_services/Service_2.png")} alt="twice-agency" title="Twice Agency"/>
                </a>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
                <a href="https://twice-agency.com/fr/lifestyle-fr/" rel="referrer">
                  <img src={require("../../../../../../assets/images/campaigns/riviera/concierge/fr_services/Service_3.png")} alt="twice-agency" title="Twice Agency"/>
                </a>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
                <a href="https://twice-agency.com/fr/lifestyle-fr/" rel="referrer">
                  <img src={require("../../../../../../assets/images/campaigns/riviera/concierge/fr_services/Service_4.png")} alt="twice-agency" title="Twice Agency"/>
                </a>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
                <a href="https://twice-agency.com/fr/lifestyle-fr/" rel="referrer">
                  <img src={require("../../../../../../assets/images/campaigns/riviera/concierge/fr_services/Service_5.png")} alt="twice-agency" title="Twice Agency"/>
                </a>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
                <a href="https://twice-agency.com/fr/lifestyle-fr/" rel="referrer">
                  <img src={require("../../../../../../assets/images/campaigns/riviera/concierge/fr_services/Service_6.png")} alt="twice-agency" title="Twice Agency"/>
                </a>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
                <a href="https://twice-agency.com/fr/lifestyle-fr/" rel="referrer">
                  <img src={require("../../../../../../assets/images/campaigns/riviera/concierge/fr_services/Service_7.png")} alt="twice-agency" title="Twice Agency"/>
                </a>
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
                <a href="https://twice-agency.com/fr/lifestyle-fr/" rel="referrer">
                  <img src={require("../../../../../../assets/images/campaigns/riviera/concierge/fr_services/Service_8.png")} alt="twice-agency" title="Twice Agency"/>
                </a>
              </div>
            </div>
          </div>
          <div className="grid-row">
            <hr className="separator-s" />
            <p className="font-m text-center gray-500-cl">
              Découvrez nos packages adaptés pour vos besoins privés ou professionnels.
            </p>
            <hr className="separator-xs" />
            <a href="https://twice-agency.com/fr/lifestyle-fr/" className="button-xxl orange center-h" rel="referrer">
              DECOUVRIR
              <span className="icon right"><img src={require("../../../../../../assets/images/campaigns/arrow-right.png")} alt="twice-agency" title="Twice Agency"/></span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default GridOne

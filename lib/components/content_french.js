// Content French

class Content extends React.Component {
  render () {
    return (
      <div>
        <div className="content basic center-h">
          <div className="content-box">
            <h3 className="font-xl font-weight-400 text-center orange-500-cl">NOS PRINCIPAUX SERVICES</h3>
            <hr className="separator-s" />
          </div>
          <div className="content-box white-bg">
            <div className="content-column three">
              <div className="content-row">
                <h4 className="font-m uppercase orange-500-cl">HOSPITALITE</h4>
                <hr className="separator-xs" />
                <ul className="clear-list">
                  <li className="font-m orange-900-cl condensed">
                    <span className="icon left"><img src={require("../../assets/images/icons/ta_icon.png")} alt="twice-agency" title="Twice Agency"/></span>
                    Logements
                  </li>
                  <li className="font-m orange-900-cl condensed">
                    <span className="icon left"><img src={require("../../assets/images/icons/ta_icon.png")} alt="twice-agency" title="Twice Agency"/></span>
                    Plage Privée
                  </li>
                  <li className="font-m orange-900-cl condensed">
                    <span className="icon left"><img src={require("../../assets/images/icons/ta_icon.png")} alt="twice-agency" title="Twice Agency"/></span>
                    Restaurant
                  </li>
                  <li className="font-m orange-900-cl condensed">
                    <span className="icon left"><img src={require("../../assets/images/icons/ta_icon.png")} alt="twice-agency" title="Twice Agency"/></span>
                    Vie Nocturne
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-column three">
              <div className="content-row">
                <h4 className="font-m uppercase orange-500-cl">TRANSPORTS</h4>
                <hr className="separator-xs" />
                <ul className="clear-list">
                  <li className="font-m orange-900-cl condensed">
                    <span className="icon left"><img src={require("../../assets/images/icons/ta_icon.png")} alt="twice-agency" title="Twice Agency"/></span>
                    Yachting
                  </li>
                  <li className="font-m orange-900-cl condensed">
                    <span className="icon left"><img src={require("../../assets/images/icons/ta_icon.png")} alt="twice-agency" title="Twice Agency"/></span>
                    Chauffeur
                  </li>
                  <li className="font-m orange-900-cl condensed">
                    <span className="icon left"><img src={require("../../assets/images/icons/ta_icon.png")} alt="twice-agency" title="Twice Agency"/></span>
                    Transfers
                  </li>
                  <li className="font-m orange-900-cl condensed">
                    <span className="icon left"><img src={require("../../assets/images/icons/ta_icon.png")} alt="twice-agency" title="Twice Agency"/></span>
                    Location de Voiture
                  </li>
                </ul>
              </div>
            </div>
            <div className="content-column three">
              <div className="content-row">
                <h4 className="font-m uppercase orange-500-cl">AUTRES</h4>
                <hr className="separator-xs" />
                <ul className="clear-list">
                  <li className="font-m orange-900-cl condensed">
                    <span className="icon left"><img src={require("../../assets/images/icons/ta_icon.png")} alt="twice-agency" title="Twice Agency"/></span>
                    Aviation
                  </li>
                  <li className="font-m orange-900-cl condensed">
                    <span className="icon left"><img src={require("../../assets/images/icons/ta_icon.png")} alt="twice-agency" title="Twice Agency"/></span>
                    Chef Privé
                  </li>
                  <li className="font-m orange-900-cl condensed">
                    <span className="icon left"><img src={require("../../assets/images/icons/ta_icon.png")} alt="twice-agency" title="Twice Agency"/></span>
                    Garde d’Enfants
                  </li>
                  <li className="font-m orange-900-cl condensed">
                    <span className="icon left"><img src={require("../../assets/images/icons/ta_icon.png")} alt="twice-agency" title="Twice Agency"/></span>
                    Livraison d’Alimentation et Boissons
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <hr className="separator-s" />
          <a href="https://twice-agency.com/fr/lifestyle/services/" className="button-xxl orange center-h" rel="referrer">
            EN SAVOIR PLUS
            <span className="icon right"><img src={require("../../assets/images/campaigns/arrow-right.png")} alt="twice-agency" title="Twice Agency"/></span>
          </a>
        </div>
      </div>
    )
  }
}

export default Content

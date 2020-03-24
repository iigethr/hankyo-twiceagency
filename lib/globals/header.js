// Header

// Components
// import Navigation from "../../lib/components/navigation"

class Header extends React.Component {
  render () {
    const config = this.props.config
    return (
      <header className="universal header">
        <div className="universal-box">
          <div className="universal-row">
            {/* <Navigation /> */}
            <div className="brand center-h">
              <div className="brand-box">
                <div className="brand-item">
                  <a href="https://twice-agency.com/" rel="noreferrer" target="_blank">
                    <span className="icon"><img src={require("../../assets/images/campaigns/logo-colour.png")} height="64" alt="twice-agency" title="Twice Agency"/></span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
    )
  }
}

export default Header

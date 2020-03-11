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
            <a href="https://twice-agency.com/" className="link-xxl center-h p-24" rel="noreferrer" target="_blank">
              <span className="icon left"><img src={require("../../assets/images/campaigns/logo-colour.png")} /></span>
            </a>
          </div>
        </div>
      </header>
    )
  }
}

export default Header

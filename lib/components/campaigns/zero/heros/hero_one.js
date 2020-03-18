// Hero One

class HeroOne extends React.Component {
  render () {
    const { title, description } = this.props.campaign
    return (
      <div className="hero">
        <div className="hero-box">
          <div className="hero-row">
            <h1 className="font-display uppercase text-center white-cl">{title}</h1>
            <p className="font-xxl text-center white-cl">{description}</p>
          </div>
          <hr className="separator-xs" />
          <div className="hero-row">
            <a href="#hero-two" className="link-xxl center-h" rel="noreferrer">
              <span className="icon left"><img src={require("../../../../assets/images/campaigns/arrow-down.png")} /></span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default HeroOne
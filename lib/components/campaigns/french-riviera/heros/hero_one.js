// Hero One

class HeroOne extends React.Component {
  render () {
    const { title, description } = this.props.campaign
    return (
      <div className="hero center-h" id="hero-one">
        <div className="hero-box">
          <div className="hero-row">
            <h1 className="font-display uppercase text-center white-cl">{title}</h1>
            <p className="font-xxl text-center white-cl">{description}</p>
          </div>
          <hr className="separator-xs" />
          <div className="hero-row">
            <a href="#hero-two" className="link-xxl center-h" rel="referrer">
              <span className="icon"><img src={require("../../../../../assets/images/campaigns/arrow-down-orange.png")} alt="twice-agency" title="Twice Agency"/></span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default HeroOne

// Hero Three

class HeroThree extends React.Component {
  render () {
    const { slogan, encouragement } = this.props.campaign
    return (
      <div className="hero" id="hero-three">
        <div className="hero-box">
          <div className="hero-wrap">
            <div className="hero-row">
              <h3 className="font-display compact bold text-left white-cl"><div dangerouslySetInnerHTML={{__html: slogan}} /></h3>
              <hr className="separator-xs" />
              <a href="https://twice-agency.com/estates/" className="button-xxl orange" rel="noreferrer" target="_blank">
                Click to Find Out More
                <span className="icon right"><img src={require("../../../../../assets/images/campaigns/arrow-right.png")} /></span>
              </a>
              <hr className="separator-xs" />
              <p className="font-l compact bold text-left orange-500-cl"><div dangerouslySetInnerHTML={{__html: encouragement}} /></p>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeroThree

// Hero Three

class HeroThree extends React.Component {
  render () {
    const { slogan, encouragement } = this.props.campaign
    return (
      <div className="hero" id="hero-three">
        <div className="hero-box">
          <div className="hero-row">
            <p className="font-display compact bold text-left white-cl"><div dangerouslySetInnerHTML={{__html: slogan}} /></p>
            <a href="https://twice-agency.com/" class="link-xl compact underline bold orange-500-cl" target="_blank"><div dangerouslySetInnerHTML={{__html: encouragement}} /></a>
            <hr className="separator-xs" />
            <a href="https://twice-agency.com/" className="link-xxl" rel="noreferrer" target="_blank">
              <span className="icon left"><img src={require("../../../../assets/images/campaigns/arrow-right.png")} /></span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default HeroThree

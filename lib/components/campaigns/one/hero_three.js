// Hero Three

class HeroThree extends React.Component {
  render () {
    const { slogan, encouragement } = this.props.campaign
    return (
      <div className="hero" id="hero-three">
        <div className="hero-box">
          <div className="hero-row">
            <p className="font-display compact bold text-left white-cl"><div dangerouslySetInnerHTML={{__html: slogan}} /></p>
            <a href="#" class="link-xl compact underline bold orange"><div dangerouslySetInnerHTML={{__html: encouragement}} /></a>
          </div>
        </div>
      </div>
    )
  }
}

export default HeroThree

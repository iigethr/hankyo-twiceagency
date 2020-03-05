// Hero Three

class HeroThree extends React.Component {
  render () {
    const { slogan } = this.props.campaign
    return (
      <div className="hero">
        <div className="hero-box">
          <div className="hero-row">
            <p className="font-display compact bold text-left white-cl"><div dangerouslySetInnerHTML={{__html: slogan}} /></p>
          </div>
        </div>
      </div>
    )
  }
}

export default HeroThree

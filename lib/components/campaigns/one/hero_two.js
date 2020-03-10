// Hero Two

class HeroTwo extends React.Component {
  render () {
    const { why, how, what, result } = this.props.campaign
    return (
      <div className="hero" id="hero-two">
        <div className="hero-box">
          <div className="hero-row narrow right yellow-transparent-bg p-32">
            <p className="font-l compact bold text-left white-cl">{why}</p>
            <hr className="separator-xs" />
            <p className="font-l compact bold text-left white-cl">{how}</p>
            <hr className="separator-xs" />
            <p className="font-l compact bold text-left white-cl">{what}</p>
            <hr className="separator-xs" />
            <a href="#hero-three" className="link-l compact underline bold text-left white-cl">{result}</a>
          </div>
        </div>
      </div>
    )
  }
}

export default HeroTwo

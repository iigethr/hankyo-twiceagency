// Hero Two

class HeroTwo extends React.Component {
  render () {
    const { why, how, what, result } = this.props.campaign
    return (
      <div className="hero" id="hero-two">
        <div className="hero-box">
          <div className="hero-row narrow right white-transparent-bg p-32">
            <p className="font-l compact bold text-left orange-500-cl">{why}</p>
            <hr className="separator-xs" />
            <p className="font-l compact bold text-left orange-500-cl">{how}</p>
            <hr className="separator-xs" />
            <p className="font-l compact bold text-left orange-500-cl">{what}</p>
            <hr className="separator-xs" />
            <p className="font-l compact bold text-left orange-500-cl">And while we do what we do, you could be <a href="#hero-three" className="underline" rel="noreferrer">here…</a></p>
            <hr className="separator-s" />
            <a href="#hero-three" className="link-xxl center-h" rel="noreferrer">
              <span className="icon left"><img src={require("../../../../assets/images/campaigns/arrow-down-orange.png")} /></span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default HeroTwo

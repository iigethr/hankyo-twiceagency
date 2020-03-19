// Hero Two

class HeroTwo extends React.Component {
  render () {
    const { why, how, what, result } = this.props.campaign
    return (
      <div className="hero right" id="hero-two">
        <div className="hero-box narrow right">
          <div className="hero-wrap white-transparent-bg">
            <div className="hero-row">
              <p className="font-l compact bold text-left orange-500-cl">{why}</p>
              <hr className="separator-xs" />
              <p className="font-l compact bold text-left orange-500-cl">{how}</p>
              <hr className="separator-xs" />
              <p className="font-l compact bold text-left orange-500-cl">{what}</p>
              <hr className="separator-xs" />
              <p className="font-l compact bold text-left orange-500-cl">And while we do what we do, you could be <a href="#hero-three" className="underline" rel="noreferrer">here…</a></p>
              <hr className="separator-s" />
              <a href="#hero-three" className="link-xxl center-h" rel="noreferrer">
                <span className="icon left"><img src={require("../../../../../assets/images/campaigns/arrow-down-orange.png")} /></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default HeroTwo

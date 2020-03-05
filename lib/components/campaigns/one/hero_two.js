// Hero Two

class HeroTwo extends React.Component {
  render () {
    const { why, how, what, result } = this.props.campaign
    return (
      <div className="hero">
        <div className="hero-box">
          <div className="hero-row narrow right">
            <p className="font-xl compact bold text-left white-cl">{why}</p>
            <hr className="separator-xs" />
            <p className="font-xl compact bold text-left white-cl">{how}</p>
            <hr className="separator-xs" />
            <p className="font-xl compact bold text-left white-cl">{what}</p>
            <hr className="separator-xs" />
            <a href="#" className="link-xl underline bold text-left white-cl">{result}</a>
          </div>
        </div>
      </div>
    )
  }
}

export default HeroTwo

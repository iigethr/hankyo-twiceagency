// Hero

class Hero extends React.Component {
  render () {
    const { title, description } = this.props.campaigns
    return (
      <div className="hero">
        <div className="hero-box">
          <div className="hero-row">
            <h1 className="font-display uppercase text-center white-cl">{title}</h1>
          </div>
          <hr className="separator-xs" />
          <div className="hero-row">
            <a href="/" className="button-xxl pink-dark center-h" rel="referrer">Call to Action</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero

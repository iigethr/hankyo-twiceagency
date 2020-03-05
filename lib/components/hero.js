// Hero

class Hero extends React.Component {
  render () {
    const { name, description, subtitle } = this.props.project
    return (
      <div className="hero">
        <div className="hero-box">
          <div className="hero-row">
            <h1 className="font-xxl text-center white-cl">{name}</h1>
          </div>
          <div className="hero-row">
            <p className="font-l text-center orange-100-cl">{description}</p>
            <div className="separator-xxs"></div>
            <p className="font-m text-center orange-900-cl">{subtitle}</p>
          </div>
          <div className="hero-row">
            <div className="separator-xs"></div>
            <a href="https://www.twice-agency.com/" className="button-xxl orange-dark center-h" rel="noreferrer">Find Out More</a>
          </div>
        </div>
      </div>
    )
  }
}

export default Hero

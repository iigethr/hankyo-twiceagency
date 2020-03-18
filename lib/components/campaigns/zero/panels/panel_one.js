// Panel One

// Components
import HeroOne from "../heros/hero_one"

class PanelOne extends React.Component {
  render () {
    const campaign = this.props.campaign
    return (
      <div className="panel">
        <div className="panel-box">
          <div className="panel-row">
            <HeroOne campaign={campaign} />
          </div>
        </div>
      </div>
    )
  }
}

export default PanelOne

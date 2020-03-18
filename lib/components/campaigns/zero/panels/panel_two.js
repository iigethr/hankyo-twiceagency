// Panel Two

// Components
import HeroOne from "../heros/hero_one"

class PanelTwo extends React.Component {
  render () {
    const campaign = this.props.campaign
    return (
      <div className="panel bottom">
        <div className="panel-box campaign-zero-panel-one">
          <div className="panel-row">
            <HeroOne campaign={campaign} />
          </div>
        </div>
      </div>
    )
  }
}

export default PanelTwo

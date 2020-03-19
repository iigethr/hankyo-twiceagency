// Panel One

// Components
import HeroOne from "../heros/hero_one"
// Assets
import BackgroundImage from "../../../../../assets/images/campaigns/french-riviera/panel-one.png";

class PanelOne extends React.Component {
  render () {
    const campaign = this.props.campaign
    return (
      <div className="panel">
        <div className="panel-box campaign-zero-panel-one">
          <div className="panel-row">
            <HeroOne campaign={campaign} />
          </div>
        </div>
        <style jsx>{`
          .panel-box {
            background-image: url(${BackgroundImage});
          }
        `}</style>
      </div>
    )
  }
}

export default PanelOne

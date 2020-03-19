// Panel Two

// Components
import HeroTwo from "../heros/hero_two"
// Assets
import BackgroundImage from "../../../../../assets/images/campaigns/french-riviera/panel-two.png";

class PanelTwo extends React.Component {
  render () {
    const campaign = this.props.campaign
    return (
      <div className="panel">
        <div className="panel-box campaign-zero-panel-one">
          <div className="panel-row">
            <HeroTwo campaign={campaign} />
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

export default PanelTwo

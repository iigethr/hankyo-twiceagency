// Panel Three

// Components
import HeroThree from "../heros/hero_three"
// Assets
import BackgroundImage from "../../../../../assets/images/campaigns/french-riviera/panel-three.png";

class PanelThree extends React.Component {
  render () {
    const campaign = this.props.campaign
    return (
      <div className="panel bottom">
        <div className="panel-box campaign-zero-panel-one">
          <div className="panel-row">
            <HeroThree campaign={campaign} />
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

export default PanelThree

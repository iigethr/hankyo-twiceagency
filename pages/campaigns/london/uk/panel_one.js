// Panel One

// Components
// Assets
import BackgroundImage from "../../../../assets/images/campaigns/french-riviera/panel-one.png";

class PanelOne extends React.Component {
  render () {
    const campaign = this.props.campaign
    return (
      <div className="panel">
        <div className="panel-box campaign-zero-panel-one">
          <div className="panel-row">
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

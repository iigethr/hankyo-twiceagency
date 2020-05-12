// Postcard One

// Assets
import BackgroundImage from "../../../../../../assets/images/campaigns/riviera/accommodation/postcard-1.jpg";

class PostcardOne extends React.Component {
  render () {
    return (
      <div className="postcard center-h">
        <div className="postcard-box">
          <div className="postcard-row">
            <div className="postcard-wide right-third">
              <p className="font-l text-center orange-500-cl">WELCOME TO</p>
              <h1 className="font-xxl text-center uppercase white-cl left">The French Riviera</h1>
              <div className="separator-xs" />
              <p className="font-m text-center white-cl left">
                From exclusive villas for quiet and refueling <br />
                holidays to premium and luxury corporate accommodation. <br />
              </p>
              <div className="separator-xs" />
              <p className="font-m text-center white-cl left">
                <strong>Find your home away from home with a 5 star concierge service.</strong>
              </p>
              <div className="separator-s" />
              <a href="#two" className="link-xxl center-h" rel="referrer">
                <span className="icon"><img src={require("../../../../../../assets/images/icons/circle-down-white.png")} alt="twice-agency" title="Twice Agency"/></span>
              </a>
            </div>
          </div>
        </div>
        <style jsx>{`
          .postcard-box {
            background-image: url(${BackgroundImage});
          }
        `}</style>
      </div>
    )
  }
}

export default PostcardOne

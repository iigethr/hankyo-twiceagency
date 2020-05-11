// Postcard One

// Assets
import BackgroundImage from "../../../../../../assets/images/campaigns/riviera/accommodation/postcard-1.jpg";

class PostcardOne extends React.Component {
  render () {
    return (
      <div className="postcard center-h">
        <div className="postcard-box">
          <div className="postcard-row">
            <div className="postcard-wide right">
              <p className="font-xl text-center orange-500-cl">WELCOME TO THE</p>
              <h1 className="font-display text-center uppercase white-cl">French Riviera</h1>
              <div className="separator-s" />
              <p className="font-m text-center white-cl">
                From exclusive villas for quiet and refueling holidays to premium and luxury corporate accommodation, find your home away from home with a five-star concierge service.
              </p>
              <div className="separator-s" />
              <div className="left wide">
                <a href="#two" className="link-xxl center-h" rel="referrer">
                  <span className="icon"><img src={require("../../../../../../assets/images/campaigns/arrow-down-orange.png")} alt="twice-agency" title="Twice Agency"/></span>
                </a>
              </div>
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

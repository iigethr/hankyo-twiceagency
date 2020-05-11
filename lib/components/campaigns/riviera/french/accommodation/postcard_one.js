// Postcard One

// Assets
import BackgroundImage from "../../../../../../assets/images/global/lifestyle/panel-one.jpg";

class PostcardOne extends React.Component {
  render () {
    return (
      <div className="postcard center-h">
        <div className="postcard-box">
          <div className="postcard-row">
            <div className="postcard-wide right">
              <p className="font-xl text-center orange-500-cl">French - WELCOME TO</p>
              <h1 className="font-display text-center uppercase white-cl">LONDON</h1>
              <div className="separator-s" />
              <p className="font-m text-center white-cl">
                From luxury travel, guided tours and private dining, to ticketing and exclusive access to VIP events, we have it all covered. <br />
                <div className="separator-xs" />
                <strong>Join us to access the inaccessible!</strong>
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

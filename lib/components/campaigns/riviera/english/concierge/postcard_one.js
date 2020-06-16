// Postcard One

// Assets
import BackgroundImage from "../../../../../../assets/images/campaigns/riviera/concierge/postcard-1.png";

class PostcardOne extends React.Component {
  render () {
    return (
      <div className="postcard center-h">
        <div className="postcard-box">
          <div className="postcard-row">
            <div className="postcard-wide">
              <hr className="separator-xl-push" />
              <p className="font-l bold text-center uppercase orange-500-cl">WELCOME TO</p>
              <h1 className="font-xxl text-center uppercase white-cl left">The French Riviera</h1>
              <div className="separator-xs" />
              <p className="font-m text-center white-cl left">
                Whether you’re looking for a private chef for a casual dinner or a special occasion, a personal trainer at your villa, yacht or hotel, a private guide taking you to unbeaten paths, we have it all covered.
              </p>
              <div className="separator-xs" />
              <p className="font-m text-center white-cl left">
                <strong>Just ask us.</strong>
              </p>
              <div className="separator-xs" />
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

// Postcard One

// Assets
import BackgroundImage from "../../../../../../assets/images/campaigns/london/uk/restaurants/panel-one.png";

class PostcardOne extends React.Component {
  render () {
    return (
      <div className="postcard center-h">
        <div className="postcard-box">
          <div className="postcard-row">
            <div className="postcard-wide">
              <p className="font-xxl text-center white-cl">Anything Possible</p>
              <h1 className="font-display text-center uppercase white-cl">London</h1>
              <hr className="separator-s" />
              <p className="font-l text-center white-cl">
                <span className="p-16 black-bg-70 left wide">
                  Our Partner relationships allow us to book <br />
                  Michelin Star restaurants on a short notice. <br />
                  <strong className="font-l white-cl bold">We have it all covered.</strong>
                </span>
              </p>
              <hr className="separator-xs" />
              <a href="#two" className="link-xxl center-h" rel="noreferrer">
                <span className="icon"><img src={require("../../../../../../assets/images/campaigns/arrow-down-orange.png")} alt="twice-agency" title="Twice Agency"/></span>
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

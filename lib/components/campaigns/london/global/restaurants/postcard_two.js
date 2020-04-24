// Postcard Two

// Assets
import BackgroundImage from "../../../../../../assets/images/campaigns/london/global/restaurants/panel-two.jpg";
import BackgroundImageV from "../../../../../../assets/images/campaigns/london/global/restaurants/panel-two-vertical.jpg";

class PostcardTwo extends React.Component {
  render () {
    return (
      <div className="postcard center-h">
        <div className="postcard-box responsive">
          <div className="postcard-row">
            <div className="postcard-left fill white-bg">
              <p className="font-xxl text-center orange-500-cl">Condimentum Nullam Fringilla</p>
              <hr className="separator-s" />
              <p className="font-l text-center gray-300-cl">
                <span className="white-bg">
                Donec ullamcorper nulla non metus auctor fringilla. Aenean lacinia bibendum nulla sed consectetur.
                </span>
              </p>
              <hr className="separator-xs" />
              <a href="#form" className="link-xxl center-h" rel="noreferrer">
                <span className="icon"><img src={require("../../../../../../assets/images/campaigns/arrow-down-orange.png")} alt="twice-agency" title="Twice Agency"/></span>
              </a>
            </div>
            <div className="postcard-right"></div>
          </div>
        </div>
        <style jsx>{`
          .postcard-box {
            background-image: url(${BackgroundImage});
          }
          @media screen and (max-width: 959px) {
            .postcard-box {
              background-image: url(${BackgroundImageV});
            }
          }
        `}</style>
      </div>
    )
  }
}

export default PostcardTwo

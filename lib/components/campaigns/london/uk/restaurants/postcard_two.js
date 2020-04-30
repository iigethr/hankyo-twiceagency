// Postcard Two

// Assets
import BackgroundImage from "../../../../../../assets/images/campaigns/london/uk/restaurants/panel-two.jpg";
import BackgroundImageV from "../../../../../../assets/images/campaigns/london/uk/restaurants/panel-two-vertical.jpg";

class PostcardTwo extends React.Component {
  render () {
    return (
      <div className="postcard center-h">
        <div className="postcard-box responsive">
          <div className="postcard-row">
            <div className="postcard-left fill white-bg">
              <p className="font-xxl text-center orange-700-cl">Uncompromising on Quality</p>
              <hr className="separator-s" />
              <p className="font-l text-center gray-300-cl">
                <span className="white-bg">
                  We can search & recommend the most suitable restaurants for the perfect event.
                  Our Concierge Service is focussed to provide what you need, when you need it.
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

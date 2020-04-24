// Postcard Six

// Assets
import BackgroundImage from "../../../assets/images/campaigns/london/panel-one.png";
import BackgroundImageV from "../../../assets/images/campaigns/london/panel-one-vertical.png";

class PostcardSix extends React.Component {
  render () {
    return (
      <div className="postcard center-h">
        <div className="postcard-box responsive">
          <div className="postcard-row">
            <div className="postcard-left"></div>
            <div className="postcard-right fill white-bg">
              <p className="font-xxl text-center orange-500-cl">Welcome to</p>
              <h1 className="font-display text-center orange-500-cl">London</h1>
              <hr className="separator-s" />
              <p className="font-l text-center gray-300-cl">
                <span className="white-bg">
                Curabitur blandit tempus porttitor. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue.
                </span>
              </p>
              <hr className="separator-xs" />
              <a href="https://twice-agency.com/estates/" className="button-xxl orange center-h" rel="noreferrer" target="_blank">
                Click to Find Out More
                <span className="icon right"><img src={require("../../../assets/images/campaigns/arrow-right.png")} alt="twice-agency" title="Twice Agency"/></span>
              </a>
            </div>
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

export default PostcardSix

// Postcard Two

// Assets
import BackgroundImage from "../../../assets/images/campaigns/london/panel-one.png";

class PostcardTwo extends React.Component {
  render () {
    return (
      <div className="postcard center-h">
        <div className="postcard-box">
          <div className="postcard-row">
            <div className="postcard-left transparent">
              <p className="font-xxl text-center white-cl">Welcome to</p>
              <h1 className="font-display text-center uppercase white-cl">London</h1>
              <hr className="separator-xs" />
              <p className="font-l text-center orange-500-cl">
                <span className="white-bg">
                Curabitur blandit tempus porttitor. Maecenas sed diam eget risus varius blandit sit amet non magna.
                </span>
              </p>
              <hr className="separator-xs" />
              <a href="#hero-two" className="link-xxl center-h" rel="noreferrer">
                <span className="icon"><img src={require("../../../assets/images/campaigns/arrow-down-orange.png")} alt="twice-agency" title="Twice Agency"/></span>
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

export default PostcardTwo

// Postcard One

// Assets
import BackgroundImage from "../../../assets/images/campaigns/london/panel-one.png";

class PostcardOne extends React.Component {
  render () {
    return (
      <div className="postcard center-h">
        <div className="postcard-box">
          <div className="postcard-row">
            <div className="postcard-wide">
              <p className="font-xxl text-center white-cl">Welcome to</p>
              <h1 className="font-display text-center uppercase white-cl">London</h1>
              <hr className="separator-s" />
              <p className="font-l text-center orange-500-cl">
                <span className="white-bg">
                Curabitur blandit tempus porttitor. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue.
                </span>
              </p>
              <hr className="separator-xs" />
              <a href="https://twice-agency.com/estates/" className="button-xxl orange center-h" rel="referrer" target="_blank">
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
        `}</style>
      </div>
    )
  }
}

export default PostcardOne

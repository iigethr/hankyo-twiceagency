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
              <p className="font-l bold text-center uppercase orange-500-cl">Bienvenue sur</p>
              <h1 className="font-xxl text-center uppercase white-cl left">la Côte d’Azur</h1>
              <div className="separator-xs" />
              <p className="font-m text-center white-cl left">
                Que vous recherchiez un chef privé pour un dîner décontracté ou une occasion spéciale, un coach sportif à votre villa, yacht ou hôtel, un guide privé qui vous emmène hors des sentiers battus, nous sommes là pour vous aider.
              </p>
              <div className="separator-xs" />
              <p className="font-m text-center white-cl left">
                <strong>Contactez nos experts.</strong>
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

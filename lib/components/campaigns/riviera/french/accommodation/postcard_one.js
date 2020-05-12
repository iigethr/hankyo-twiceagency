// Postcard One

// Assets
import BackgroundImage from "../../../../../../assets/images/campaigns/riviera/accommodation/postcard-1.jpg";

class PostcardOne extends React.Component {
  render () {
    return (
      <div className="postcard center-h">
        <div className="postcard-box">
          <div className="postcard-row">
            <div className="postcard-wide right-third">
              <p className="font-l text-center orange-500-cl">Bienvenue sur</p>
              <h1 className="font-xxl text-center uppercase white-cl left">La Côte d’Azur</h1>
              <div className="separator-xs" />
              <p className="font-m text-center white-cl">
                D’une villa vue mer pour des vacances ressourçantes à un logement premium pour vos voyages d’affaires ou congrès.
              </p>
              <div className="separator-xs" />
              <p className="font-m text-center white-cl">
                <strong>Trouvez la propriété idéale avec un service de conciergerie 5*.</strong>
              </p>
              <div className="separator-s" />
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

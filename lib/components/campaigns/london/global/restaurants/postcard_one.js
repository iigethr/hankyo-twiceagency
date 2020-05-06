// Postcard One

// Assets
import BackgroundImage from "../../../../../../assets/images/global/restaurants/panel-one.jpg";

class PostcardOne extends React.Component {
  render () {
    return (
      <div className="postcard center-h">
        <div className="postcard-box">
          <div className="postcard-row">
            <div className="postcard-wide">
              <p className="font-xl text-center orange-500-cl">WELCOME TO</p>
              <h1 className="font-display text-center uppercase white-cl">LONDON</h1>
              <hr className="separator-s" />
              <p className="font-l text-center white-cl">
                From quirky eateries to sought-after Michelin-starred restaurants, <br />
                access London’s most exclusive and high-end venues even at a moment's notice.
              </p>
              <hr className="separator-xs" />
              <a href="#two" className="link-xxl center-h" rel="referrer">
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

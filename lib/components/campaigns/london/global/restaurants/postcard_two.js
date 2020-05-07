// Postcard Two

// Assets
import BackgroundImage from "../../../../../../assets/images/global/restaurants/panel-two.jpg";
import BackgroundImageV from "../../../../../../assets/images/global/restaurants/panel-two-vertical.jpg";

class PostcardTwo extends React.Component {
  render () {
    return (
      <div className="postcard center-h">
        <div className="postcard-box responsive">
          <div className="postcard-row">
            <div className="postcard-left fill white-bg">
              <p className="font-xl text-center orange-500-cl">ENDLESS POSSIBILITIES</p>
              <hr className="separator-s" />
              <p className="font-m text-center gray-500-cl">
                Choices on the London restaurant circuit are endless. Discover the best places to eat and experience London like never before thanks to our Concierge Service.
              </p>
              <hr className="separator-s"/>
              <ul>
                <li><strong>Exclusive access and privileges</strong> - We know the city inside out and have access to the trendiest venues.</li>
                <li><strong>Save time</strong> - we take the stress out of everyday life so you can focus on the things that matter most to you.</li>
                <li><strong>Advice</strong> - Benefit from our connections and knowledge to make the most of London’s dining scene.</li>
              </ul>
              <hr className="separator-s" />
              <a href="#form" className="link-xxl center-h" rel="referrer">
                <span className="icon"><img src={require("../../../../../../assets/images/campaigns/arrow-down-orange.png")} alt="twice-agency" title="Twice Agency"/></span>
              </a>
            </div>
            <div className="postcard-right misc"></div>
          </div>
        </div>
        <style jsx>{`
          .postcard-box {
            background-image: url(${BackgroundImage});
            background-size: 448px 592px;
            background-position: right center;
          }
          .postcard-right.misc {
            min-height: 476px !important;
          }
          @media screen and (max-width: 959px) {
            .postcard-box {
              background-image: url(${BackgroundImageV});
              background-size: 592px 476px !important;
              background-position: bottom center !important;
            }
            .postcard-right.misc {
              min-height: 476px !important;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default PostcardTwo

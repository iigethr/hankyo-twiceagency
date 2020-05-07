// Postcard Two

// Assets
import BackgroundImage from "../../../../../../assets/images/global/lifestyle/panel-two.jpg";
import BackgroundImageV from "../../../../../../assets/images/global/lifestyle/panel-two-vertical.jpg";

class PostcardTwo extends React.Component {
  render () {
    return (
      <div className="postcard center-h">
        <div className="postcard-box responsive">
          <div className="postcard-row">
            <div className="postcard-left fill white-bg">
              <p className="font-xl text-center orange-500-cl uppercase">BRILLIANTLY UNIQUE</p>
              <hr className="separator-xs" />
              <p className="font-m text-center gray-500-cl">
                Whether you are an individual looking for assistance with your busy life or a corporate looking for unique business benefits we are here to assist. <br />
                <strong>Our mission:</strong> enhance our members’ day-to-day life and fulfill their biggest dreams.
              </p>
              <hr className="separator-s"/>
              <ul className="gray-500-cl">
                <li><strong>Save time</strong> - We take the stress out of everyday life so you can focus on the things that matter most to you.</li>
                <li><strong>Exclusive access and privileges</strong> - We know the city inside out and give you access to the trendiest venues.</li>
                <li><strong>Unforgettable moments</strong> - Enjoy memorable and tailored experiences.</li>
                <li><strong>Bespoke service</strong> - We offer short-term and long-term packages.</li>
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
            min-height: 592px !important;
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

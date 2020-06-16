// Postcard Two

// Assets
import BackgroundImage from "../../../../../../assets/images/campaigns/riviera/concierge/postcard-2-1.png";
import BackgroundImageV from "../../../../../../assets/images/campaigns/riviera/concierge/postcard-2-2.png";

class PostcardTwo extends React.Component {
  render () {
    return (
      <div className="postcard center-h">
        <div className="postcard-box responsive">
          <div className="postcard-row">
            <div className="postcard-left fill white-bg">
              <p className="font-xl text-center orange-500-cl uppercase">BRILLIANTLY BESPOKE</p>
              <hr className="separator-xs" />
              <p className="font-m text-center gray-500-cl">
                From a Michelin-starred chef cooking for you at home to a yoga class next to your pool at sunset, we can help with anything. < br/>
                Our mission is to enhance your day-to-day life and experience the French Riviera at the fullest.
              </p>
              <hr className="separator-s"/>
              <ul className="gray-500-cl">
                <li><strong>Save time</strong> - We take the stress out of trip planning so you can focus on the things that matter most to you.</li>
                <li><strong>Unforgettable moments</strong> - Celebrate special occasions and enjoy tailored experiences brought to you by the most talented professionals in entertainment, wellness and catering at home or explore and sail through the wild landscapes of the French Riviera.</li>
                <li><strong>Bespoke service</strong> - From lifestyle management, conciergerie services to events planning, we offer an array of personalised services.</li>
              </ul>
              <hr className="separator-s" />
              <p className="font-m text-center gray-500-cl">
                Whether you are trying to make all your duties and responsibilities fit into a given day or enjoying some time off during your holidays, we are here to help and support you. So, what can we do for you today?
              </p>
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
            background-size: 448px 640px;
            background-position: right center;
          }
          .postcard-right.misc {
            min-height: 640px !important;
          }
          @media screen and (max-width: 959px) {
            .postcard-box {
              background-image: url(${BackgroundImageV});
              background-size: 592px 476px !important;
              background-position: center bottom !important;
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

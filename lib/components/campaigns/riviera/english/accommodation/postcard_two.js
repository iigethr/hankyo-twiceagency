// Postcard Two

// Assets
import BackgroundImage from "../../../../../../assets/images/campaigns/riviera/accommodation/postcard-2-1.jpg";
import BackgroundImageV from "../../../../../../assets/images/campaigns/riviera/accommodation/postcard-2-2.jpg";

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
                We provide an unrivalled level of local knowledge and personal service to create your perfect tailor-made stay in the beautiful South of France.
              </p>
              <hr className="separator-s"/>
              <ul className="gray-500-cl text-justify">
                <li><strong>Handpicked</strong> - We work closely with our local real estate partners to select the most exclusive rentals and sales on the French Riviera for you.</li>
                <li><strong>Safety</strong> - Because your health and safety is essential to us, we’ve taken steps to ensure you have a safe stay.</li>
                <li><strong>Stressless stay</strong> - Let our in-house five-star concierge service take care of everything, from transfer, reservation and private chef to staffing.</li>
                <li><strong>Tailor-made experiences</strong> - From client entertainment to family friendly activities, experience the French Riviera like never before thanks to our team of trusted local travel experts.</li>
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

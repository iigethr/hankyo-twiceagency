// Postcard Three

// Assets
import BackgroundImage from "../../../../../../assets/images/global/lifestyle/panel-three.jpg";
import BackgroundImageV from "../../../../../../assets/images/global/lifestyle/panel-three-vertical.jpg";

class PostcardThree extends React.Component {
  render () {
    return (
      <div className="postcard center-h">
        <div className="postcard-box responsive">
          <div className="postcard-row">
            <div className="postcard-right fill white-bg">
              <form className="form white-bg" id="form" action="https://submit-form.com/G6AXDTY6foZrW1yQ3HdYR" target="_self" >
                <input type="checkbox" name="_honeypot" tabIndex="-1" autoComplete="off" className="honeypot" />
                <input type="hidden" name="_redirect" value="https://weare.twice-agency.com/campaigns/submitted" />
                <input type="hidden" name="subject" value="London Restaurants - UK" />
                <fieldset>
                  <legend className="orange-500-cl">GET IN TOUCH</legend>
                  <p className="font-s gray-500-cl">Please submit your details below and one of our Lifestyle experts will be in touch shortly.</p>
                  <hr className="separator-s" />
                  <div className="form-row">
                    <div className="form-item half left">
                      <label className="required">First Name</label>
                      <div className="input">
                        <input type="text" name="name" autoComplete="off" required />
                      </div>
                    </div>
                    <div className="form-item half right">
                      <label className="required">Last Name</label>
                      <div className="input">
                        <input type="text" name="surname" autoComplete="off" required />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-item half left">
                      <label className="required">Email</label>
                      <div className="input">
                        <input type="email" name="email" autoComplete="off" required />
                      </div>
                    </div>
                    <div className="form-item half right">
                      <label>Contact Number</label>
                      <div className="input">
                        <input type="text" name="contact" autoComplete="off" placeholder="+44" />
                      </div>
                    </div>
                  </div>
                  <hr className="separator-xs" />
                  <div className="form-row">
                    <div className="form-item">
                      <div className="submit">
                        <input value="SUBMIT" type="submit" className="button-xl orange wide" />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <hr className="separator-s" />
                    <div className="form-item">
                      <div className="gdpr">
                        <label htmlFor="checkbox-gdpr">
                          <input type="checkbox" id="checkbox-gdpr" name="gdpr" value="consent" required />
                          <span className="checkmark"></span>
                            I confirm that I have read and agree with Twice Agency’s <a href="https://twice-agency.com/terms-conditions/" className="orange-dark underline" rel="referrer">T&Cs</a> and <a href="https://twice-agency.com/privacy-policy/" className="orange-dark underline" rel="referrer">Privacy Policy</a>
                        </label>
                      </div>
                    </div>
                    <div className="form-item">
                      <div className="gdpr">
                        <label htmlFor="checkbox-gdpr-marketing">
                          <input type="checkbox" id="checkbox-gdpr-marketing" name="gdpr-marketing" value="consent-marketing" />
                          <span className="checkmark"></span>
                            I wish to receive Twice Agency's offers and newsletters.
                        </label>
                      </div>
                    </div>
                  </div>
                  {/*
                    <div className="form-row">
                      <hr className="separator-xxs" />
                      <p className="font-m text-center gray-500-cl left">You can also visit <a href="https://twice-agency.com/lifestyle/services/" className="orange-cl bold underline" rel="referrer">our website</a> for more information.</p>
                    </div>
                  */}
                </fieldset>
              </form>
            </div>
            <div className="postcard-left"></div>
          </div>
        </div>
        <style jsx>{`
          .postcard-box {
            background-image: url(${BackgroundImage});
            background-size: 448px 476px;
            background-position: left center;
          }
          @media screen and (max-width: 959px) {
            .postcard-box {
              background-image: url(${BackgroundImageV});
              background-size: 592px 476px !important;
              background-position: bottom center !important;
            }
          }
        `}</style>
      </div>
    )
  }
}

export default PostcardThree

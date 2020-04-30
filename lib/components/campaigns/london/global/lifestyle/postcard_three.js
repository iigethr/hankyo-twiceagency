// Postcard Three

// Assets
import BackgroundImage from "../../../../../../assets/images/campaigns/london/uk/lifestyle/panel-three.jpg";
import BackgroundImageV from "../../../../../../assets/images/campaigns/london/uk/lifestyle/panel-three-vertical.jpg";

class PostcardThree extends React.Component {
  render () {
    return (
      <div className="postcard center-h">
        <div className="postcard-box responsive">
          <div className="postcard-row">
            <div className="postcard-right fill white-bg">
              <form className="form white-bg" id="form" action="https://submit-form.com/2oYndgWgARb5SnNwEtMSR" target="_self" >
                <input type="checkbox" name="_honeypot" tabIndex="-1" autoComplete="off" className="honeypot" />
                <input type="hidden" name="_redirect" value="https://weare.twice-agency.com/campaigns/submitted" />
                <fieldset>
                  <legend className="orange-500-cl bold">Get in Touch</legend>
                  <div className="form-row">
                    <div className="form-item">
                      <label className="required">Full Name</label>
                      <div className="input">
                        <input type="text" name="fullname" autoComplete="off" required />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-item">
                      <label className="required">Email</label>
                      <div className="input">
                        <input type="email" name="email" autoComplete="off" required />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-item">
                      <label>Contact Number</label>
                      <div className="input">
                        <input type="text" name="contact" autoComplete="off" />
                      </div>
                    </div>
                  </div>
                  <hr className="separator-xs" />
                  <div className="form-row">
                    <div className="form-item">
                      <div className="submit">
                        <input value="Submit" type="submit" className="button-xl orange wide" />
                      </div>
                    </div>
                  </div>
                  <hr className="separator-xs" />
                  <div className="form-row">
                    <p className="font-m text-center gray-500-cl">You can also visit <a href="https://twice-agency.com/lifestyle/services/" className="orange-dark bold underline" rel="noreferrer">our website</a> for more information.</p>
                  </div>
                </fieldset>
              </form>
            </div>
            <div className="postcard-left"></div>
          </div>
        </div>
        <style jsx>{`
          .postcard-box {
            background-image: url(${BackgroundImage});
          }
          @media screen and (max-width: 959px) {
            .postcard-box {
              background-image: url(${BackgroundImageV});
            }
          }
        `}</style>
      </div>
    )
  }
}

export default PostcardThree

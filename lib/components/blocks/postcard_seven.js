// Postcard Two

// Assets
import BackgroundImage from "../../../assets/images/campaigns/london/panel-one.png";

class PostcardSeven extends React.Component {
  render () {
    return (
      <div className="postcard center-h">
        <div className="postcard-box">
          <div className="postcard-row">
            <div className="postcard-left white-bg">
              <p className="font-xxl text-center orange-500-cl">Welcome to</p>
              <h1 className="font-display text-center uppercase orange-500-cl">London</h1>
              <hr className="separator-xs" />
              <p className="font-l text-center gray-300-cl">
                <span className="white-bg">
                Curabitur blandit tempus porttitor. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue.
                </span>
              </p>
            </div>
            <div className="postcard-right white-bg">
              <form className="form white-bg" id="form" action="https://submit-form.com/QN1v4G5ZdntG5mOusyMLo" target="_self" >
                <input type="checkbox" name="_honeypot" tabIndex="-1" autoComplete="off" className="honeypot" />
                {/* <input type="hidden" name="_redirect" value="https://weare.twice-agency.com/campaigns/submitted" /> */}
                <fieldset>
                  <legend>Get in Touch</legend>
                  <div className="form-row">
                    <div className="form-item">
                      <div className="input">
                        <input type="text" name="fullname" autoComplete="off" placeholder="Full Name" required />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-item">
                      <div className="input">
                        <input type="email" name="email" autoComplete="off" placeholder="Email" required />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-item">
                      <div className="input">
                        <input type="text" name="contact" autoComplete="off" placeholder="Contact Number" required />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-item">
                      <div className="submit">
                        <input value="Submit" type="submit" className="button-xl orange wide" />
                      </div>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PostcardSeven

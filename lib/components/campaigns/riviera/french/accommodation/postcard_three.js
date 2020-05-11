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
            <div className="white-bg">
              <form className="form white-bg" id="form" action="https://submit-form.com/G6AXDTY6foZrW1yQ3HdYR" target="_self" >
                <input type="checkbox" name="_honeypot" tabIndex="-1" autoComplete="off" className="honeypot" />
                <input type="hidden" name="_redirect" value="https://weare.twice-agency.com/campaigns/submitted" />
                <input type="hidden" name="subject" value="London Restaurants - UK" />
                <fieldset>
                  <legend className="orange-500-cl">NOUS CONTACTER</legend>
                  <p className="font-s gray-500-cl">Veuillez soumettre vos coordonnées ci-dessous et l'un de nos experts en immobilier vous contactera rapidement.</p>
                  <hr className="separator-s" />
                  <div className="form-row">
                    <div className="form-item half left">
                      <label className="required">Votre besoin</label>
                      <div className="select">
                        <select type="text" name="need" autoComplete="off" required >
                          <option value="volvo">Location de vacances</option>
                          <option value="saab">Location pour congrès</option>
                          <option value="mercedes">Logement professionnel</option>
                          <option value="audi">Long terme</option>
                          <option value="audi">Propriété à la vente</option>
                          <option value="audi">Autre</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-item half right">
                      <label className="required">Location</label>
                      <div className="select">
                        <select type="text" name="need" autoComplete="off" required >
                          <option value="volvo">Cannes et environs</option>
                          <option value="saab">St Tropez et environs</option>
                          <option value="audi">Monaco et environs</option>
                          <option value="audi">Je ne sais pas</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-item half left">
                      <label className="required">Pénom</label>
                      <div className="input">
                        <input type="text" name="name" autoComplete="off" required />
                      </div>
                    </div>
                    <div className="form-item half right">
                      <label className="required">Nom</label>
                      <div className="input">
                        <input type="text" name="surname" autoComplete="off" required />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-item half left">
                      <label className="required">Adresse e-mail</label>
                      <div className="input">
                        <input type="email" name="email" autoComplete="off" required />
                      </div>
                    </div>
                    <div className="form-item half right">
                      <label>Numéro de téléphone</label>
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
                          Je confirme que j’ai lu et approuvé les <a href="https://twice-agency.com/terms-conditions/" className="orange-dark underline" rel="referrer">T&Cs</a> et la <a href="https://twice-agency.com/privacy-policy/" className="orange-dark underline" rel="referrer">Politique de Confidentialité</a> de Twice Agency.
                        </label>
                      </div>
                    </div>
                    <div className="form-item">
                      <div className="gdpr">
                        <label htmlFor="checkbox-gdpr-marketing">
                          <input type="checkbox" id="checkbox-gdpr-marketing" name="gdpr-marketing" value="consent-marketing" />
                          <span className="checkmark"></span>
                            Je souhaite recevoir les offres et newsletters de Twice Agency.
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

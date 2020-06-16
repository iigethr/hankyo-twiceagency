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
                <input type="checkbox" name="_honeypot" tabIndex="-1" className="honeypot" />
                <input type="hidden" name="_redirect" value="https://weare.twice-agency.com/campaigns/submitted" />
                <input type="hidden" name="subject" value="Riviera - Real Estate - French" />
                <fieldset>
                  <legend className="orange-500-cl">NOUS CONTACTER</legend>
                  <p className="font-m gray-500-cl">Veuillez soumettre vos coordonnées ci-dessous et l'un de nos experts vous contactera rapidement ou appelez nous.</p>
                  <p className="font-s gray-700-cl chip">Agence de Cannes: <a href="tel:+33422840013">+33 (0)422840013</a></p>
                  <p className="font-s gray-700-cl chip">Agence de Londres: <a href="tel:+442034111876">+44 (0)2034111876</a></p>
                  <p className="font-s gray-700-cl chip">WhatsApp: <a href="tel:+447503264532">+44 (0)7503264532</a></p>
                  <hr className="separator-s" />
                  <div className="form-row">
                    <div className="form-item half left">
                      <label className="required">Votre besoin</label>
                      <div className="select">
                        <select type="text" name="need" required >
                          <option disabled selected value="- -"> - - </option>
                          <option value="holiday">Location de vacances</option>
                          <option value="congress">Location pour congrès</option>
                          <option value="business">Logement professionnel</option>
                          <option value="long">Long terme</option>
                          <option value="sale">Propriété à la vente</option>
                          <option value="other">Autre</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-item half right">
                      <label className="required">Localisations</label>
                      <div className="select">
                        <select type="text" name="location" required >
                          <option disabled selected value="- -"> - - </option>
                          <option value="cannes">Cannes et environs</option>
                          <option value="st tropez">St Tropez et environs</option>
                          <option value="monaco">Monaco et environs</option>
                          <option value="don't know">Je ne sais pas</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-item half left">
                      <label className="required">Nombre de chambres</label>
                      <div className="select">
                        <select type="text" name="bedrooms" required >
                          <option disabled selected value="- -"> - - </option>
                          <option value="1">1</option>
                          <option value="2">2</option>
                          <option value="3">3</option>
                          <option value="4">4</option>
                          <option value="5+">5+</option>
                        </select>
                      </div>
                    </div>
                    <div className="form-item half right">
                      <label className="required">Budget par semaine</label>
                      <div className="select">
                        <select type="text" name="budget" required >
                          <option disabled selected value="- -"> - - </option>
                          <option value="<10k">Moins de €10 000</option>
                          <option value="10k-15k">€10 000 - €15 000</option>
                          <option value="15k-20k">€15 000 - €20 000</option>
                          <option value="20k-30k">€20 000 - €30 000</option>
                          <option value="30k-40k">€30 000 - €40 000</option>
                          <option value="40k-50k">€40 000 - €50 000</option>
                          <option value="50k +">Plus de €50 000</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-item half left">
                      <label className="required">Prénom</label>
                      <div className="input">
                        <input type="text" name="name" required />
                      </div>
                    </div>
                    <div className="form-item half right">
                      <label className="required">Nom</label>
                      <div className="input">
                        <input type="text" name="surname" required />
                      </div>
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="form-item half left">
                      <label className="required">Adresse e-mail</label>
                      <div className="input">
                        <input type="email" name="email" required />
                      </div>
                    </div>
                    <div className="form-item half right">
                      <label>Numéro de téléphone</label>
                      <div className="input">
                        <input type="text" name="contact" placeholder="+33" />
                      </div>
                    </div>
                  </div>
                  <hr className="separator-xs" />
                  <div className="form-row">
                    <div className="form-item half left">
                      <div className="submit">
                        <input value="ENVOYER" type="submit" className="button-xl orange wide" />
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

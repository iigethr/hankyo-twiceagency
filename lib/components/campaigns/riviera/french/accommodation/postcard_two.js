// Postcard Two

// Assets
import BackgroundImage from "../../../../../../assets/images/campaigns/riviera/accommodation/postcard-2-1-a.jpg";
import BackgroundImageV from "../../../../../../assets/images/campaigns/riviera/accommodation/postcard-2-2.jpg";

class PostcardTwo extends React.Component {
  render () {
    return (
      <div className="postcard center-h">
        <div className="postcard-box responsive">
          <div className="postcard-row">
            <div className="postcard-left fill white-bg">
              <p className="font-xl text-center orange-500-cl uppercase">BRILLAMMENT PERSONNALISÉ</p>
              <hr className="separator-xs" />
              <p className="font-m text-center gray-500-cl">
                Nous mettons notre expertise locale et notre sens du service à disposition de notre clientèle pour créer des séjours mémorables et inégalables dans le sud de la France
              </p>
              <hr className="separator-s"/>
              <ul className="gray-500-cl text-justify">
                <li><strong>Sélection</strong> - Nous travaillons en étroite collaboration avec nos partenaires immobiliers locaux afin de sélectionner pour vous les propriétés les plus exclusives en location et à la vente sur la Côte d'Azur.</li>
                <li><strong>Sécurité</strong> - Parce que votre santé et votre sécurité sont essentielles à nos yeux, nous avons mis en place des mesures strictes pour vous garantir un séjour en toute sérénité.</li>
                <li><strong>Conciergerie in-house</strong> - Notre service de conciergerie 5* s’occupe de tout tel que transferts, réservations, approvisionnement et chef à domicile.</li>
                <li><strong>Expériences sur-mesure</strong> - Du divertissement pour vos clients aux activités familiales, vivez la Côte d'Azur autrement grâce à notre équipe d'experts locaux.</li>
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
            background-size: 448px 736px;
            background-position: right center;
          }
          .postcard-right.misc {
            min-height: 736px !important;
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

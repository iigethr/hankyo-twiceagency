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
              <p className="font-xl text-center orange-500-cl uppercase">BRILLAMMENT PERSONNALISÉ</p>
              <hr className="separator-xs" />
              <p className="font-m text-center gray-500-cl">
                Qu'il s'agisse d'un chef étoilé cuisinant pour vous à la maison ou d'un cours de yoga au bord de votre piscine au coucher du soleil, nous vous aidons dans tous les domaines.
                Notre engagement est d'améliorer votre vie  <br />
                quotidienne et de vous faire vivre pleinement <br />
                la Côte d'Azur.
              </p>
              <hr className="separator-s"/>
              <ul className="gray-500-cl">
                <li><strong>Gagnez du temps</strong> - Nous vous libérons du stress lié à l'organisation de votre voyage afin que vous puissiez vous concentrer sur les choses qui comptent le plus pour vous.</li>
                <li><strong>Des moments inoubliables</strong> - Célébrez des occasions spéciales et profitez d'expériences sur-mesure offertes par les professionnels les plus talentueux du divertissement, du bien-être et de la restauration chez vous ou explorez et naviguez à travers les paysages sauvages de la Côte d'Azur.</li>
                <li><strong>Un service sur mesure</strong> - De la gestion de votre quotidien à l'organisation d'événements en passant par les services de conciergerie, nous vous proposons une gamme de services personnalisés.</li>
              </ul>
              <hr className="separator-s" />
              <p className="font-m text-center gray-500-cl">
                Que vous cherchiez de l’aide pour répondre à vos besoins quotidiens ou pour profiter de votre temps libre pendant vos vacances, votre lifestyle manager répondra à chacune de vos demandes. Alors, que pouvons-nous faire pour vous aujourd'hui ?
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

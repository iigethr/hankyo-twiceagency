// Covid

class Covid extends React.Component {
  state = {
    isBoxVisible:false
  };

  toggleBox = () => {
    this.setState(prevState => ({ isBoxVisible: !prevState.isBoxVisible }));
  };

  render() {
    const { isBoxVisible } = this.state;
    return (
      <div id="element" className={`overlay box ${!isBoxVisible ? "" : "hide-block-element"}`} onClick={this.toggleBox}>
        <div className="overlay-box center-h">
          <div className="overlay-item writer">
            <h1 className="font-l text-center orange-500-cl">RÉSERVER EN TOUTE CONFIANCE</h1>
            <p className="font-m">
              Le coronavirus a maintenant chamboulé nos vies à tous et, en cette période extrêmement difficile, nos pensées vont vers nos clients et les propriétaires des locations saisonnières. Le bien-être et la sécurité de nos clients sont notre priorité absolue et nous suivons la situation au quotidien.
            </p>
            <p className="font-m">
              Pour votre tranquillité d'esprit, nos partenaires ont adapté leur politique de réservation afin d'être aussi flexibles que possible et un nettoyage professionnel strict est effectué avec soin pour garantir un séjour en tout sérénité à nos clients.
            </p>
            <p className="font-m">
              Notre équipe se tient à votre entière disposition pour toute question que vous pourriez avoir. Si vous souhaitez louer une villa et sortir de la quarantaine en toute sécurité et en isolement avec votre famille, contactez-nous dès aujourd'hui.
            </p>
            <p className="font-s text-center orange-500-cl">Cliquez n'importe où pour fermer</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Covid

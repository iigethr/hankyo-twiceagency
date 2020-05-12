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
            <h1 className="font-l text-center orange-500-cl">BOOK WITH CONFIDENCE</h1>
            <p className="font-m">
              Coronavirus has now touched all of our lives and at this extremely difficult time, our thoughts go out to our customers and holiday home owners. Our clients' wellbeing and safety are our top priority and we are monitoring the situation daily.
            </p>
            <p className="font-m">
              For peace of mind our partners have adapted their booking policy to be as flexible as possible and a strict professional cleaning is carried out thoroughly to guarantee a safe stay to our guests.
            </p>
            <p className="font-m">
              Our team remains at your full disposal for any question you might have. If you would like to rent a villa and sit out the quarantine in safety and seclusion with your family, get in touch today.
            </p>
            <p className="font-s text-center orange-500-cl">Click anywhere to close</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Covid

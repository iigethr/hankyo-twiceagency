// Grid One

class GridOne extends React.Component {
  render () {
    return (
      <div className="grid center-h">
        <div className="grid-box">
          <div className="grid-row">
            <h1 className="font-xxl text-center orange-500-cl">Our Partners</h1>
            <p className="font-l text-center gray-500-cl">
              Curabitur blandit tempus porttitor. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue.
            </p>
            <hr className="separator-xs" />
            <a href="https://twice-agency.com/estates/" className="button-xxl orange center-h" rel="referrer" target="_blank">
              Click to Find Out More
              <span className="icon right"><img src={require("../../../assets/images/campaigns/arrow-right.png")} alt="twice-agency" title="Twice Agency"/></span>
            </a>
            <hr className="separator-s" />
          </div>
          <div className="grid-row">
            <div className="grid-item">
              <div className="grid-inner">
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
              </div>
            </div>
            <div className="grid-item">
              <div className="grid-inner">
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default GridOne

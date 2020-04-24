// Postcard Two

class PostcardFour extends React.Component {
  render () {
    return (
      <div className="postcard center-h">
        <div className="postcard-box">
          <div className="postcard-row">
            <p className="font-xxl text-center orange-500-cl">Our Partners</p>
            <hr className="separator-s" />
          </div>
          <div className="postcard-row">
            <div className="postcard-grid">
            </div>
            <div className="postcard-grid">
            </div>
            <div className="postcard-grid">
            </div>
            <div className="postcard-grid">
            </div>
          </div>
          <hr className="separator-s" />
          <div className="postcard-row">
            <div className="postcard-grid">
            </div>
            <div className="postcard-grid">
            </div>
            <div className="postcard-grid">
            </div>
            <div className="postcard-grid">
            </div>
          </div>
          <div className="postcard-row">
            <hr className="separator-s" />
            <p className="font-l text-center gray-500-cl">
              Curabitur blandit tempus porttitor. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue.
            </p>
            <hr className="separator-xs" />
            <a href="https://twice-agency.com/estates/" className="button-xxl orange center-h" rel="noreferrer" target="_blank">
              Click to Find Out More
              <span className="icon right"><img src={require("../../../assets/images/campaigns/arrow-right.png")} alt="twice-agency" title="Twice Agency"/></span>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

export default PostcardFour

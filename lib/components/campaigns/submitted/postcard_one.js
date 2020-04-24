// Postcard One

class PostcardOne extends React.Component {
  render () {
    return (
      <div className="postcard center-h">
        <div className="postcard-box">
          <div className="postcard-row">
            <div className="postcard-wide">
              <h1 className="font-display text-center uppercase orange-500-cl">Thank You</h1>
              <p className="font-xl text-center orange-500-cl">Your request has been submitted</p>
              <hr className="separator-s" />
              <p className="font-l text-center gray-300-cl">
                We will get in touch with you as soon as possible. <br />
                In the meantime feel free to click the button bellow and see what other services we provide.
              </p>
              <hr className="separator-m" />
              <a href="https://twice-agency.com/lifestyle/services/" className="button-xxl orange center-h" rel="noreferrer">
                Click to Find Out More
                <span className="icon right"><img src={require("../../../../assets/images/campaigns/arrow-right.png")} alt="twice-agency" title="Twice Agency"/></span>
              </a>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PostcardOne

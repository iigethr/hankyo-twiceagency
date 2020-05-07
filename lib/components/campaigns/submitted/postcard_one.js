// Postcard One

class PostcardOne extends React.Component {
  render () {
    return (
      <div className="postcard center-h">
        <div className="postcard-box">
          <div className="postcard-row">
            <div className="postcard-wide">
              <hr className="separator-l" />
              <h1 className="font-xl text-center uppercase orange-500-cl">Thank you, your request has been submitted!</h1>
              <hr className="separator-xs" />
              <p className="font-m text-center gray-300-cl">
                In the meantime feel free to visit our website to discover what else your lifestyle manager can do for you
              </p>
              <hr className="separator-s" />
              <a href="https://twice-agency.com/lifestyle/services/" className="button-xxl orange center-h" rel="referrer">
                BRING ME THERE
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

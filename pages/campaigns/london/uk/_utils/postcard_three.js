// Postcard Two

// Assets
import BackgroundImage from "../../../../../assets/images/campaigns/london/panel-one.png";

class PostcardThree extends React.Component {
  render () {
    return (
      <div className="postcard center-h">
        <div className="postcard-box">
          <div className="postcard-row">
            <div className="postcard-right transparent">
              <p className="font-xxl text-center white-cl">Welcome to</p>
              <h1 className="font-display text-center uppercase white-cl">London</h1>
              <hr className="separator-s" />
              <p className="font-l text-center orange-500-cl">
                <span className="white-bg">
                Curabitur blandit tempus porttitor. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue.
                </span>
              </p>
            </div>
          </div>
        </div>
        <style jsx>{`
          .postcard-box {
            background-image: url(${BackgroundImage});
          }
        `}</style>
      </div>
    )
  }
}

export default PostcardThree

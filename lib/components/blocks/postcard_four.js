// Postcard Two

// Assets
import BackgroundImage from "../../../assets/images/campaigns/london/panel-one.png";

class PostcardFour extends React.Component {
  render () {
    return (
      <div className="postcard center-h">
        <div className="postcard-box">
          <div className="postcard-row">
            <div className="postcard-wide white-bg">
              <p className="font-xxl text-center orange-500-cl">Welcome to</p>
              <h1 className="font-display text-center uppercase orange-500-cl">London</h1>
              <hr className="separator-s" />
              <p className="font-l text-center gray-500-cl">
                Curabitur blandit tempus porttitor. Maecenas sed diam eget risus varius blandit sit amet non magna. Nulla vitae elit libero, a pharetra augue.
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

export default PostcardFour

// Submitted

// Components
import PostcardOne from "../../lib/components/campaigns/submitted/postcard_one"

// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Blocks extends React.Component {
  componentDidMount() {
    ZahaAlignments.centerH()
  }

  render () {
    return (
      <div>
        <hr className="separator-s" />
        <PostcardOne />
        <hr className="separator-s" />
      </div>
    )
  }
}

export default Blocks

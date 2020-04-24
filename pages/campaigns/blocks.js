// London UK Restaurants

// Components
import GridOne from "../../lib/components/blocks/grid_one"
import PostcardOne from "../../lib/components/blocks/postcard_one"
import PostcardTwo from "../../lib/components/blocks/postcard_two"
import PostcardThree from "../../lib/components/blocks/postcard_three"
import PostcardFour from "../../lib/components/blocks/postcard_four"
import PostcardFive from "../../lib/components/blocks/postcard_five"
import PostcardSix from "../../lib/components/blocks/postcard_six"
import PostcardSeven from "../../lib/components/blocks/postcard_seven"
import PostcardEight from "../../lib/components/blocks/postcard_eight"
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
        <PostcardTwo />
        <hr className="separator-s" />
        <PostcardThree />
        <hr className="separator-s" />
        <PostcardFour />
        <hr className="separator-s" />
        <PostcardFive />
        <hr className="separator-s" />
        <PostcardSix />
        <hr className="separator-s" />
        <PostcardSeven />
        <hr className="separator-s" />
        <PostcardEight />
        <hr className="separator-s" />
        <GridOne />
        <hr className="separator-s" />
      </div>
    )
  }
}

export default Blocks

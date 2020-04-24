// London UK Restaurants

// Components
import Head from "next/head"
import PostcardOne from "../../../../lib/components/blocks/postcard_one"
import PostcardTwo from "../../../../lib/components/blocks/postcard_two"
import PostcardThree from "../../../../lib/components/blocks/postcard_three"
import PostcardFour from "../../../../lib/components/blocks/postcard_four"
import PostcardFive from "../../../../lib/components/blocks/postcard_five"
import PostcardSix from "../../../../lib/components/blocks/postcard_six"
import PostcardSeven from "../../../../lib/components/blocks/postcard_seven"
import PostcardEight from "../../../../lib/components/blocks/postcard_eight"
import Services from "../../../campaigns/london/uk/services"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class CampaignOne extends React.Component {
  componentDidMount() {
    ZahaAlignments.centerH()
  }

  render () {
    return (
      <div>
        <Head>
          <title>Benefit from a premium service of reservations for restaurants | Twice Agency</title>
          <meta name="description" content="We are here to advise you for any sort of reservation, be it short notice or an already fully booked venue." />
          <meta property="og:url" content="https://weare.twice-agency.com/campaigns/london/uk/restaurants" />
          <link rel="canonical" href="https://weare.twice-agency.com/campaigns/london/uk/restaurants" />
        </Head>
        <hr className="separator-s" />
        <PostcardOne />
        <PostcardTwo />
        <PostcardThree />
        <PostcardFour />
        <PostcardFive />
        <PostcardSix />
        <PostcardSeven />
        <PostcardEight />
        <Services />
      </div>
    )
  }
}

export default CampaignOne

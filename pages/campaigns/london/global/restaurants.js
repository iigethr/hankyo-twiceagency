// London Global Restaurants

// Components
import Head from "next/head"
import PostcardOne from "../../../../lib/components/campaigns/london/global/restaurants/postcard_one"
import PostcardTwo from "../../../../lib/components/campaigns/london/global/restaurants/postcard_two"
import PostcardThree from "../../../../lib/components/campaigns/london/global/restaurants/postcard_three"
import GridOne from "../../../../lib/components/campaigns/london/global/restaurants/grid_one"
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
          <meta property="og:url" content="https://weare.twice-agency.com/campaigns/london/global/restaurants" />
          <link rel="canonical" href="https://weare.twice-agency.com/campaigns/london/global/restaurants" />
        </Head>
        <hr className="separator-m" id="top" />
        <PostcardOne />
        <hr className="separator-m" id="two" />
        <PostcardTwo />
        <hr className="separator-m" id="form" />
        <PostcardThree />
        <hr className="separator-m" id="partners"/>
        <GridOne />
        <hr className="separator-m" id="bottom" />
      </div>
    )
  }
}

export default CampaignOne

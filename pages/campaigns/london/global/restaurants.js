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
          <title>Michelin Star Restaurants - London Reservations | Twice Agency</title>
          <meta name="description" content="We are proud to partner with the best in London. We do the heavy lifting, you explore." />
          <meta property="og:url" content="https://weare.twice-agency.com/campaigns/london/uk/restaurants" />
          <link rel="canonical" href="https://weare.twice-agency.com/campaigns/london/uk/restaurants" />
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

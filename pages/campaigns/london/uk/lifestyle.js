// London UK Lifestyle

// Components
import Head from "next/head"
import PostcardOne from "../../../../lib/components/campaigns/london/uk/lifestyle/postcard_one"
import PostcardTwo from "../../../../lib/components/campaigns/london/uk/lifestyle/postcard_two"
import PostcardThree from "../../../../lib/components/campaigns/london/uk/lifestyle/postcard_three"
import GridOne from "../../../../lib/components/campaigns/london/uk/lifestyle/grid_one"
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
          <title>Twice Agency - Concierge Services</title>
          <meta name="description" content="From private dining, ticketing to exclusive access to VIP events, we have it all covered." />
          <meta property="og:url" content="https://weare.twice-agency.com/campaigns/london/uk/lifestyle" />
          <link rel="canonical" href="https://weare.twice-agency.com/campaigns/london/uk/lifestyle" />
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

// London UK Restaurants

// Components
import Head from "next/head"
import PanelOne from "../../../campaigns/london/uk/panel_one"
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
        <PanelOne />
      </div>
    )
  }
}

export default CampaignOne

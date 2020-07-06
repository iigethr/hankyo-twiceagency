// Riviera English Real Estate

// Components
import Head from "next/head"
import PostcardOne from "../../../../lib/components/campaigns/riviera/french/concierge/postcard_one"
import PostcardTwo from "../../../../lib/components/campaigns/riviera/french/concierge/postcard_two"
import PostcardThree from "../../../../lib/components/campaigns/riviera/french/concierge/postcard_three"
import GridOne from "../../../../lib/components/campaigns/riviera/french/concierge/grid_one"
import Covid from "../../../../lib/components/covid"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class CampaignOne extends React.Component {
  componentDidMount() {
    ZahaAlignments.centerH()
    window.dataLayer = window.dataLayer || [];
    function gtag(){dataLayer.push(arguments);}
    gtag('js', new Date());

    gtag('config', 'AW-763469410');
  }

  render () {
    return (
      <div>
        <Head>
          <title>Twice Agency - Concierge Services</title>
          <meta name="description" content="From private dining, ticketing to exclusive access to VIP events, we have it all covered." />
          <meta property="og:url" content="https://weare.twice-agency.com/campaigns/riviera/french/concierge" />
          <link rel="canonical" href="https://weare.twice-agency.com/campaigns/riviera/french/concierge" />
          <script async src="https://www.googletagmanager.com/gtag/js?id=AW-763469410"></script>
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

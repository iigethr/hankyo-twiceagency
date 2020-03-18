// Campaign One

// Data
import campaign_zero from "js-yaml-loader!../../data/campaigns/campaign_zero.yml"
// Components
import Head from "next/head"
import PanelOne from "../../lib/components/campaigns/zero/panels/panel_one"
import PanelTwo from "../../lib/components/campaigns/zero/panels/panel_two"
import Content from "../../lib/components/campaigns/zero/content"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class CampaignOne extends React.Component {
  static async getInitialProps() {
    return {
      campaign_zero: campaign_zero
    }
  }

  componentDidMount() {
    ZahaAlignments.centerH()
  }

  render () {
    const campaign = this.props.campaign_zero.campaign_zero
    return (
      <div>
        <Head>
          <title>{campaign.title}</title>
          <meta name="description" content={campaign.description} />
        </Head>
        <PanelOne campaign={campaign} />
        <PanelTwo campaign={campaign} />
        <Content />
      </div>
    )
  }
}

export default CampaignOne

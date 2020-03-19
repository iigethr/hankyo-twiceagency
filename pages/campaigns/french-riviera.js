// French Riviera

// Data
import french_riviera from "js-yaml-loader!../../data/campaigns/french-riviera.yml"
// Components
import Head from "next/head"
import PanelOne from "../../lib/components/campaigns/french-riviera/panels/panel_one"
import PanelTwo from "../../lib/components/campaigns/french-riviera/panels/panel_two"
import PanelThree from "../../lib/components/campaigns/french-riviera/panels/panel_three"
import Content from "../../lib/components/campaigns/french-riviera/content"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class CampaignOne extends React.Component {
  static async getInitialProps() {
    return {
      french_riviera: french_riviera
    }
  }

  componentDidMount() {
    ZahaAlignments.centerH()
  }

  render () {
    const campaign = this.props.french_riviera.french_riviera
    return (
      <div>
        <Head>
          <title>{campaign.title}</title>
          <meta name="description" content={campaign.description} />
        </Head>
        <PanelOne campaign={campaign} />
        <PanelTwo campaign={campaign} />
        <PanelThree campaign={campaign} />
        <Content />
      </div>
    )
  }
}

export default CampaignOne

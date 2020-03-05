// Campaign One

// Components
import Head from "next/head"
import Notifications from "../../lib/globals/notifications"
import Header from "../../lib/globals/header"
import Footer from "../../lib/globals/footer"
import Advisory from "../../lib/globals/advisory"
import HeroOne from "../../lib/components/campaigns/one/hero_one"
import HeroTwo from "../../lib/components/campaigns/one/hero_two"
import HeroThree from "../../lib/components/campaigns/one/hero_three"
// Data
import config from "js-yaml-loader!../../data/config.yml"
import campaign_one from "js-yaml-loader!../../data/campaigns/campaign_one.yml"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class CampaignOne extends React.Component {
  static async getInitialProps() {
    return {
      campaign_one: campaign_one,
      config: config
    }
  }

  componentDidMount() {
    ZahaAlignments.centerH()
  }

  render () {
    const config = this.props.config.config
    const campaign = this.props.campaign_one.campaign_one
    return (
      <div>
        <Head>
          <title>{campaign.title}</title>
          <meta name="description" content={campaign.description} />
        </Head>
        <Notifications />
        <div className="campaign-one">
          <Header />
          <main className="universal main">
            <div className="universal-box">
              <div className="universal-row">
                <div className="artboard-l center-h">
                  <HeroOne campaign={campaign} />
                  <HeroTwo campaign={campaign} />
                  <HeroThree campaign={campaign} />
                </div>
              </div>
            </div>
          </main>
        </div>
        <Footer config={config}/>
        <Advisory />
      </div>
    )
  }
}

export default CampaignOne

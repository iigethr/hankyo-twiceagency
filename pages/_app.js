// _app

// Components
import React from "react"
import App from "next/app"
import TagManager from 'react-gtm-module'
// Layouts
import CampaignLayout from "../layouts/campaign"
import PrimaryLayout from "../layouts/primary"
import SecondaryLayout from "../layouts/secondary"
// Data
import meta from "js-yaml-loader!../data/meta.yml"
import config from "js-yaml-loader!../data/config.yml"
import project from "js-yaml-loader!../data/project.yml"
// SCSS
import "../assets/stylesheets/tadao.scss"

const tagManagerArgs = {
  id: "GTM-XXXXXXX"
}

class MyApp extends App {
  static async getInitialProps({ Component, router, ctx }) {
    let pageProps = {}
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    return { pageProps, meta: meta, config: config, project: project }
  }

  componentDidMount () {
    TagManager.initialize(tagManagerArgs)
  }

  render() {
    const { Component, pageProps, router, config, project } = this.props
    if (router.pathname.startsWith("/campaigns")) {
      return (
        <CampaignLayout>
          <Component {...pageProps} {...meta} {...config} {...project} />
        </CampaignLayout>
      )
    } else if (router.pathname === "/") {
      return (
        <CampaignLayout>
          <Component {...pageProps} {...meta} {...config} {...project} />
        </CampaignLayout>
      )
    } else {
      return (
        <SecondaryLayout>
          <Component {...pageProps} {...meta} {...config} {...project} />
        </SecondaryLayout>
      )
    }
  }
}
export default MyApp

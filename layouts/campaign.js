// Campaigns Layout

// Components
import React from "react"
import Head from "next/head"
import { initGA, logPageView } from "../lib/globals/google_analytics"

import Header from "../lib/globals/header"
import Footer from "../lib/globals/Footer"
// Modules
import cookies from "next-cookies"
import ZahaAlignments from "@iigethr/zaha_alignments"

class Design extends React.Component {
  constructor(props, ctx) {
    super(props)
    const cookie = cookies(ctx).weLoveCookies
    this.state = {
      value: cookie
    }
  }

  componentDidMount() {
    if ((this.state.value === "withMilk") && (process.env.NODE_ENV || process.env.NODE_ENV === "production")) {
      if (!window.GA_INITIALIZED) {
        initGA()
        window.GA_INITIALIZED = true
      }
      logPageView()
    }

    ZahaAlignments.centerH()
    console.log("Registered - Campaigns Layout")
  }

  render () {
    const { children } = this.props
    const meta = children.props.meta
    const config = children.props.config
    return (
      <div className="root white-bg">
        <Head>
          <title>{meta.title}</title>
          <meta name="description" content={meta.description} />
        </Head>
        <Header />
        <main className="universal main">
          { children }
        </main>
        <Footer config={config} />
      </div>
    )
  }
}

export default Design

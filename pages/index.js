// Index

// Components
import Header from "../lib/globals/header"
import Footer from "../lib/globals/footer"
import Panel from "../lib/components/panel"
// Data
import config from "js-yaml-loader!../data/config.yml"
// Modules
import ZahaAlignments from "@iigethr/zaha_alignments"

class Index extends React.Component {
  static async getInitialProps() {
    return {
      config: config
    }
  }

  componentDidMount() {
    ZahaAlignments.centerH()
    console.log("Registered a Page - Index")
  }

  render () {
    return (
      <div>
        <Header />
        <Panel/>
        <Panel/>
        <Panel/>
        <Footer config={config}/>
      </div>
    )
  }
}

export default Index

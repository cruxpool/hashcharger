import React, { Component } from "react";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import { Shop } from "@material-ui/icons";
import { spacing } from "@material-ui/system";

class HashCharger extends Component {
  constructor(props) {
    super(props);
    let config = props.config;
    this.subuser = config.subuser;
    this.hostaddress = config.hostaddress;
    this.port = config.port;
    this.username = config.username;
    this.password = config.password;
    this.algorithm = config.algorithm;
  }

  componentDidMount() {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/gh/warigroup/hashcharger@1/hashcharger.js";
    script.id = "hashcharger";
    script.setAttribute("token", "a46KwFe23rgtrgaAfrggWo");
    // pass in your dynamic subuser and stratum config here.
    script.setAttribute("subuser", `${this.subuser}`);
    script.setAttribute("stratum-host", `${this.hostaddress}`);
    script.setAttribute("stratum-port", `${this.port}`);
    script.setAttribute("stratum-username", `${this.username}`);
    script.setAttribute("stratum-password", `${this.password}`);
    script.setAttribute("algorithm", `${this.algorithm}`);
    script.setAttribute("theme-navbg", "3626a5");
    script.setAttribute("theme-navtexts", "ffffff");
    script.setAttribute("theme-primary", "3626a5");
    script.setAttribute("theme-secondary", "233f5c");
    script.setAttribute("theme-buttontexts", "ffffff");
    script.setAttribute("theme-tabletexts", "ffffff");
    document.body.appendChild(script);
  }

  componentWillUnmount() {
    const script = document.getElementById("hashcharger");
    document.body.removeChild(script);
  }

  render() {
    return (
      <React.Fragment>
        <Button
          style={{ marginTop: "25px" }}
          className="open-hashcharger"
          variant="contained"
          color="primary"
        >
          Launch HashCharger Modal
        </Button>

        <Fab
          className="open-hashcharger"
          style={{
            position: "fixed",
            bottom: "25px",
            right: "25px",
          }}
          color="primary"
          aria-label="add"
        >
          <Shop />
        </Fab>
      </React.Fragment>
    );
  }
}

export default HashCharger;

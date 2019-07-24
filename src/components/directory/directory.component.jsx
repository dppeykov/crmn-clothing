import React, { Component } from "react";
import data from "./directory-data";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

class Directory extends Component {
  constructor() {
    super();

    this.state = {
      sections: data
    };
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ title, imageUrl, id, size }) => {
          return <MenuItem key={id} title={title} url={imageUrl} size={size} />;
        })}
      </div>
    );
  }
}

export default Directory;

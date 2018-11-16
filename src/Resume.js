import React from "react";
import { Document } from "react-pdf";
import Pdf from "./images/AllanYeznaian.pdf";

class Resume extends React.Component {
  render() {
    return <Document file={Pdf} />;
  }
}
export default Resume;

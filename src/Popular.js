

import Loginform from './Login/Loginform';
import Child from "./Child";

import { useState } from "react";
function Popular() {
  
  const downloadHandler = (disabled) => {
    const count = 56;
    return disabled ? (
      <div className="download-status">
        <img src={downloadedImage} alt=""></img>
        <p className="download-label ">Downloaded</p>
      </div>
    ) : (
      <div className="download-status">
        <img src={downloadsImage} alt="" />
        <p className="download-label">{count}Downloads</p>
      </div>
    );
  };
  function buttonToggleDownload(disabled) {
    return disabled ? "button-disable" : "download-button";
  }
  const papers = [
    {
      subjectname: "Physics",
      paper: "Previous Year paper:",
      paperYear: "2006- set 01/ 02",
      level: [hardImage, "Hard level"],
      downloadStatus: false,
      icon: physicsImage,
      cssClass: "physic-card",
    },
    {
      subjectname: "Mathematics",
      paper: "Previous Year paper:",
      paperYear: "2006- set 01/ 02",
      level: [mediumImage, "Medium level"],
      downloadStatus: true,
      icon: mathematicsImage,
      cssClass: "math-card",
    },
    {
      subjectname: "Chemistry",
      paper: "Previous Year paper:",
      paperYear: "2006- set 01/ 02",
      level: [mediumImage, "Medium level"],
      downloadStatus: false,
      icon: chemistryImage,
      cssClass: "chem-card",
    },
    {
      subjectname: "Biology",
      paper: "Previous Year paper:",
      paperYear: "2006- set 01/ 02",
      level: [mediumImage, "Medium level"],
      downloadStatus: true,
      icon: biologyImage,
      cssClass: "bio-card",
    },
    {
      subjectname: "Civics",
      paper: "Previous Year paper:",
      paperYear: "2006- set 01/ 02",
      level: [easyImage, "Easy level"],
      downloadStatus: false,
      icon: civicsImage,
      cssClass: "civ-card",
    },
    {
      subjectname: "Geography",
      paper: "Previous Year paper:",
      paperYear: "2006- set 01/ 02",
      level: [mediumImage, "Medium level"],
      downloadStatus: true,
      icon: geographyImage,
      cssClass: "geo-card"
    }
  ];
  const [paper, setPaper] = useState(papers);
 
  return (
    <div className="list-card">
      {papers.map((data, idx) => {
        <Child data={data}/>
      })}
    </div>
  );
}
export default Popular;
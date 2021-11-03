import React from "react";
import profilePicture from "../../../static/assets/images/bio/headshot.jpg";

export default function () {
  return (
    <div className="content-page-wrapper">
      <div
        className="left-column"
        style={{
          background: "url(" + profilePicture + ") no-repeat",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      />
      <div className="right-column">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquam
        ligula vitae dolor dapibus, eget pharetra massa auctor. Maecenas maximus
        euismod orci eu porta. Curabitur interdum lectus ex, ac dignissim enim
        consequat vitae. Cras magna sem, porttitor a aliquam quis, consequat
        vitae orci. Proin non faucibus risus. Pellentesque habitant morbi
        tristique senectus et netus et malesuada fames ac turpis egestas. Ut
        hendrerit, nisl eget laoreet commodo, urna diam egestas metus, vitae
        hendrerit velit elit at urna. Etiam lectus metus, viverra at efficitur
        id, lobortis in quam. Phasellus ut sapien a neque euismod commodo nec et
        nulla. Mauris quis lacus ante. Phasellus feugiat orci sapien, ut
        bibendum turpis tempus ut. Vivamus imperdiet tellus nibh, a mollis neque
        euismod ut. Curabitur auctor lorem ac tellus egestas pulvinar. Duis
        interdum, elit eu accumsan pulvinar, turpis sapien placerat sapien, nec
        porta magna tortor at augue.
      </div>
    </div>
  );
}

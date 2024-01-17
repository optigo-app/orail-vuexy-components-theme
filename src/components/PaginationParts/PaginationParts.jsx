import { Pagination, Typography } from "@mui/material";
import React, { useState } from "react";
import { LIGHTPRIMARY, PRIMARY, WHITE } from "../../colorVariables";

const PaginationParts = () => {
  const customStyle = {
    "& .MuiPaginationItem-circular.Mui-selected": {
      backgroundColor: `${PRIMARY}`,
      color: `${WHITE}`,
    },
    "& .MuiPaginationItem-circular.Mui-selected:hover": {
      backgroundColor: `#4337be`,
      color: `${WHITE}`,
    },
  };
  const customStyle1 = {
    "& .MuiPaginationItem-rounded.Mui-selected": {
      backgroundColor: `${PRIMARY}`,
      color: `${WHITE}`,
    },
    "& .MuiPaginationItem-rounded.Mui-selected:hover": {
      backgroundColor: `#4337be`,
      color: `${WHITE}`,
    },
  };
  const customStyle2 = {
    "& .MuiPaginationItem-circular.Mui-selected": {
      color: `${PRIMARY}`,
      backgroundColor: `${LIGHTPRIMARY}`,
      borderColor: `${LIGHTPRIMARY}`,
    },
    "& .MuiPaginationItem-circular.Mui-selected:hover": {
      color: `${PRIMARY}`,
      backgroundColor: `#c6c3e8`,
      borderColor: `${LIGHTPRIMARY}`,
    },
  };

  const [page, setPage] = useState(1);

  const handleChange = (event, value) => {
    setPage(value);
  };
  return (
    <div>
      {/* basic */}
      <div style={{ display: "flex", margin: "1rem" }}>
        <Pagination count={10} sx={customStyle} />
      </div>
      {/* basic outlined*/}
      <div style={{ display: "flex", margin: "1rem" }}>
        <Pagination count={10} variant="outlined" sx={customStyle2} />
      </div>
      {/* basic shpae wise rounded */}
      <div style={{ display: "flex", margin: "1rem" }}>
        <Pagination count={10} shape="rounded" sx={customStyle1} />
      </div>
      <div style={{ display: "flex", margin: "1rem" }}>
        <Pagination
          count={10}
          shape="rounded"
          variant="outlined"
          sx={customStyle1}
        />
      </div>
      <div style={{ margin: "1rem" }}>
        {/* Disabled */}
        <div style={{ display: "flex", margin: "1rem" }}>
          <div style={{ marginRight: "1rem" }}>Disabled </div>{" "}
          <Pagination
            count={10}
            variant="outlined"
            disabled
            sx={customStyle2}
          />
        </div>

        {/* Enabled */}
        <div style={{ display: "flex", margin: "1rem" }}>
          <div style={{ marginRight: "1rem" }}>Enabled </div>{" "}
          <Pagination
            count={10}
            variant="outlined"
            disabled={false}
            sx={customStyle2}
          />
        </div>
      </div>

      {/* Controlled Pagination */}
      <div style={{ margin: "1rem" }}>Controlled Pagination</div>
      <div style={{ display: "flex", margin: "1rem" }}>
        <Typography sx={{ mb: 2 }}>Page: {page}</Typography>
        <Pagination count={10} page={page} onChange={handleChange} />
      </div>
      <div style={{ margin: "2rem" }}>
        {/* Pagination Ranges */}
        <div>
          <div className="demo-space-y">
            <div style={{ margin: "1rem" }}>Pagination Ranges</div>
            <div style={{ margin: "1rem" }}>
              <Pagination
                count={11}
                defaultPage={6}
                siblingCount={0}
                sx={customStyle}
              />
            </div>
            <div style={{ margin: "1rem" }}>
              <Pagination count={11} defaultPage={6} sx={customStyle} />{" "}
              {/* Default ranges */}
            </div>
            <div style={{ margin: "1rem" }}>
              <Pagination
                count={11}
                defaultPage={6}
                siblingCount={0}
                boundaryCount={2}
                sx={customStyle}
              />
            </div>
            <div style={{ margin: "1rem" }}>
              <Pagination
                count={11}
                defaultPage={6}
                boundaryCount={2}
                sx={customStyle}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaginationParts;

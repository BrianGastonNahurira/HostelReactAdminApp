import React from "react";
import "../../components/SideBar/SideBar.css";
export const NotFound = () => {
  return (
    <>
      <div
        className="not-found card"
        style={{ margin: "auto", width: "80vh", height: "80vh" }}
      >
        <h1
          style={{
            marginTop: "25px",
            paddingTop: "200px",
            textAlign: "center",
          }}
        >
          404 PAGE NOT FOUND
        </h1>
        <Link href="/home" style={{ padding: "150px 0px 0px 150px" }}>
          <Button variant="contained">RETURN TO HOME</Button>
        </Link>
      </div>
    </>
  );
};

import React, { useState, useEffect } from "react";

export default function Ardhna() {
  const [item, setItems] = useState([]);
  useEffect(() => {
    getUserData();
  }, []);

  const getUserData = async () => {
    await fetch("https://api.github.com/users")
      .then((res) => res.json())
      .then((res) => {
        setItems(res);
        console.log(res);
      });
  };
  return (
    <>
    <div className="" style={{display:"flex", flexDirection:"column"}}>
    {item.map((res) => (
        <div
        key={res.id}
          style={{
            width: "250px",
            height: "350px",
            background: "#333",
            borderRadius: "10px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            margin: "25px",
            paddingTop:"15px",
            border:"1px solid gray",
          }}
        >
          <img src={res.avatar_url} width={200} style={{borderRadius:"10px"}}></img>
          <p style={{color:"white"}}>ID: {res.id}</p>
          <p style={{color:"white"}}>Login: {res.login}</p>
          <p style={{color:"white"}}>Node ID: {res.node_id}</p>
        </div>
      ))}
    </div>
    </>
  );
}

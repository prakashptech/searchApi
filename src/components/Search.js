// import "./styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";

export default function Search() {
  const [arr, setArr] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then(
      (res) => {
        setLoading(true);
        // console.log(res)
        setArr(res.data);
      },
      (error) => {
        setLoading(true);
        setError(error);
      }
    );
    // .catch((err) => {
    //   alert(err);
    // });
  }, []);
  if (error) {
    return <div>error...{error.message}</div>;
  }
  // else if (!loading){
  //   return (
  //     <div >Loading....</div>
  //   )
  // }
  else {
    return (
      <div className="App">
        <input
          type="text"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          placeholder="enter the items"
        />

        <p>{search}</p>
        <p>
          {arr
            .filter((item) => {
              if (search == "") {
                return item;
              } else if (
                item.name.toLowerCase().includes(search.toLowerCase()) ||
                item.email.toLowerCase().includes(search.toLowerCase()) ||
                item.address.city.toLowerCase().includes(search.toLowerCase())
              ) {
                return item;
              }
            })

            .map((res) => {
              return (
                <ul>
                  <li>{res.email}</li>
                  <li>{res.name}</li>
                  <li>{res.city}</li>
                </ul>
              );
            })}
        </p>

        {!loading && <div style={{ color: "red" }}>Loading...</div>}
      </div>
    );
  }
}

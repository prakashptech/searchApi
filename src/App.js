import "./styles.css";
import React, { useEffect, useState } from "react";
import axios from "axios";
export default function App() {
  const [arr, setArr] = useState([]);
  const [search, setSearch] = useState("");
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        // console.log(res)
        setArr(res.data);
      })
      .catch((err) => {
        alert(err);
      });
  }, []);
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
            } else if (item.name.toLowerCase().includes(search.toLowerCase())) {
              return item;
            }
          })

          .map((res) => {
            return <li>{res.name}</li>;
          })}
      </p>
    </div>
  );
}

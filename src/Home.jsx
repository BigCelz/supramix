import React, { useState } from "react";
import ItemCard from "./Components/ItemCard";
import data from "./data";
import "./Home.css";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";

const Home = () => {
  const [filter, setFilter] = useState('')
   
  const searchText = (event) => {
    setFilter(event.target.value);
  }
  let dataSearch = data.PRODUCTDATA.filter((item) => {
    return Object.keys(item).some((key) =>
      item[key]
        .toString()
        .toLowerCase()
        .includes(filter.toString().toLowerCase())
    );
  });


  return (
    <>
      <section className="home">
        <div className="py-4 container">
          <h1 className="text-center gadgets">Gadgets</h1>
          <div className="row justify-content-center">
             {/* the search section */}
            <div className="col-12  col-sm-12  mb-5 mt-5">
              <div className="mb-3 text-center  col-4 mx-auto">
                <InputGroup className="mb-3">
                  <Form.Control
                    className="form-control"
                    placeholder="Search Item"
                    type="text"
                    value={filter}
                    onChange={searchText.bind(this)}
                  />
                  <InputGroup.Text className="input-text">
                   <i class="fa-solid fa-magnifying-glass"></i>
                  </InputGroup.Text>
                </InputGroup>
              </div>
            </div>

            {dataSearch.map((item, index) => {
              return (
                <ItemCard
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  key={index}
                  item={item}
                />
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;

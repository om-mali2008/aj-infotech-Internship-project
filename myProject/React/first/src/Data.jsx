import { useState, useRef } from "react";
import "./Data.css";

function Data() {
  const [searchobj, setsearch] = useState([]);
  const [searched, setSearched] = useState(false);
  const inref = useRef();

  const mobiles = [
    { id: 1, name: "iPhone 16 Pro", brand: "Apple", price: 129999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSI4VkTAvmhqHoIXaNSldpnWziFzsOYBhMBnclYxdNzFg&s=10" },
    { id: 2, name: "iPhone 16", brand: "Apple", price: 89999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRGwaJrsLbAkIpqdA81uCv1ciGEz2MZbssKvupWpp0whQ&s=10https://picsum.photos/200?2" },
    { id: 3, name: "iPhone 15 Pro", brand: "Apple", price: 109999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSEw_PYgeZEPd9i5EIfEoRq4Jx_QUMzKTx6PsZIJ8HcTg&s=10" },
    { id: 4, name: "iPhone 15", brand: "Apple", price: 79999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRcUK92Apqy-3WgEKFho1DCfYy-K7nNwIE-CotOCuFigg&s=10" },

    { id: 5, name: "Galaxy S25 Ultra", brand: "Samsung", price: 124999, image: "data:image/jpeg;base64,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" },
    { id: 6, name: "Galaxy S25", brand: "Samsung", price: 84999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTsIK9osVtmhDKbM44qTBd5kZCI2mxRD-Sep84F-LGpiw&s=10" },
    { id: 7, name: "Galaxy S24", brand: "Samsung", price: 74999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ1-UZf7Ex2FzQnOuAAtGpLxqQ4iJdXVM74jwqRFc0xg&s=10" },
    { id: 8, name: "Galaxy A56", brand: "Samsung", price: 35999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc2AFNZRswsqo0o2294Zg_uszvmm36y0fGykqwcE1Icw&s=10" },

    { id: 9, name: "OnePlus 13", brand: "OnePlus", price: 69999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_RG7-K0kEk1Nc4wyF2M7QGAKrRLogi7EU3POllBZAsQ&s" },
    { id: 10, name: "OnePlus 13R", brand: "OnePlus", price: 44999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQGHhaBtbx37WRxMqOHUc9Vyqesd_aMfQPv08QYPcJElg&s=10" },
    { id: 11, name: "OnePlus 12", brand: "OnePlus", price: 59999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT-7PD6lMEc2MoOHrr4zvvhsT0h8-vcyUwOAjehC1VDdA&s=10" },
    { id: 12, name: "OnePlus Nord 5", brand: "OnePlus", price: 32999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSgWkq6Fh886kizG2uWznX6kufLLru12BylsJoW4beLg&s=10" },

    { id: 13, name: "Xiaomi 15 Ultra", brand: "Xiaomi", price: 99999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2lXpBIHucc7T4sClAQNMuTF9DyeFZHi-hCF1byMJ8UA&s=10" },
    { id: 14, name: "Xiaomi 15", brand: "Xiaomi", price: 64999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZPKaoUr4oUN4HWRKecr7vG3Z7eplrmEp6OMSpSLoy4A&s=10" },
    { id: 15, name: "Redmi Note 15 Pro", brand: "Xiaomi", price: 29999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyBQIDyFThnuExayMPSJlxJEcmp0NC7yR6Fx9SvBpBUg&s=10" },
    { id: 16, name: "Poco F7", brand: "Xiaomi", price: 31999, image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGoQykSwOEJ9tSuGlYkdfcuwVhzwjI281f_fGriXm_Pw&s" },
  ];

  function Search() {
    const input = inref.current.value.toLowerCase();
    const result = [];

    for (let i = 0; i < mobiles.length; i++) {
      if (
        mobiles[i].name.toLowerCase().includes(input) ||
        mobiles[i].brand.toLowerCase().includes(input)
      ) {
        result.push(mobiles[i]);
      }
    }

    setsearch(result);
    setSearched(true);
  }

  return (
    <div className="Dpage">
      <div className="Dheader">
        <h2>Product Page</h2>

        <input
          type="text"
          className="Dinput"
          ref={inref}
          placeholder="Search by name or brand"
        />

        <button onClick={Search} className="Dbtn">
          Search
        </button>
      </div>

      <div className="Dmain">
        {!searched ? (
          mobiles.map((m) => (
            <div className="box" key={m.id}>
              <img src={m.image} alt={m.name} className="Dimg" />
              <h3>{m.name}</h3>
              <span>Brand: {m.brand}</span>
              <br />
              <span>Price: ₹{m.price}</span>
            </div>
          ))
        ) : searchobj.length > 0 ? (
          searchobj.map((Sm) => (
            <div className="box" key={Sm.id}>
              <img src={Sm.image} alt={Sm.name} className="Dimg" />
              <h3>{Sm.name}</h3>
              <span>Brand: {Sm.brand}</span>
              <br />
              <span>Price: ₹{Sm.price}</span>
            </div>
          ))
        ) : (
          <h2>No Product Found</h2>
        )}
      </div>
    </div>
  );
}

export default Data;
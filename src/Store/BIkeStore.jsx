import React, { createContext, useReducer } from "react";

export const BikeData = createContext({
  getBikesShopList: [],
  getBikeModel: [],
});

const getBikesShopList = [
  {
    id: 1,
    company: "Honda",
    model: "Honda Livo",
    Mileage: "60 kmpl",
    Displacement: "109.51 cc",
    FuelCapacity: "9 L",
    MaxPowe: "8.79 PS",
    url: "/images/bike_1.png",
    type: "comfort",
    price: "Rs 50/Hr",
  },

  {
    id: 2,
    company: "Yamaha",
    model: "Kawasaki B1",
    Mileage: "15 kmpl",
    Displacement: "500 cc",
    FuelCapacity: "15 L",
    MaxPowe: "40.41 PS",
    url: "/images/bike_2.png",
    type: "Sports",
    price: "Rs 200/Hr",
  },
  {
    id: 3,
    company: "Royal Enfield",
    model: "Classic 350",
    Mileage: "35 kmpl",
    Displacement: "349 cc",
    FuelCapacity: "13 L",
    MaxPowe: "20.2 bhp @ 6100 rpm",
    url: "/images/bike_3.png",
    type: "Cruiser",
    price: "Rs 100/Hr",
  },

  {
    id: 4,
    company: "TVS",
    model: " RTR 160 4V",
    Mileage: "41.4 kmpl",
    Displacement: "159.7 cc",
    FuelCapacity: "12 L",
    MaxPowe: "17.31 bhp @ 9250 rpm",
    url: "/images/bike_4.png",
    type: "Sports",
    price: "Rs 60/Hr",
  },
  {
    id: 5,
    company: "Harlely Davidson",
    model: "FatBoy",
    Mileage: "18 kmpl",
    Displacement: "1868 cc",
    FuelCapacity: "18 L",
    MaxPowe: "95.1 PS",
    url: "/images/bike_5.png",
    type: "Cruiser",
    price: "Rs 300/Hr",
  },
  {
    id: 6,
    company: "Tvs",
    model: "Luna",
    Mileage: "38 kmpl",
    Displacement: "100 cc",
    FuelCapacity: "18 L",
    MaxPowe: "95.1 PS",
    url: "/images/bike_6.png",
    type: "comfort",
    price: "Rs 20/Hr",
  },
  {
    id: 7,
    company: "Tre",
    model: "TRE 260",
    Mileage: "18 kmpl",
    Displacement: "260 cc",
    FuelCapacity: "18 L",
    MaxPowe: "95.1 PS",
    url: "/images/bike_7.png",
    type: "Sports",
    price: "Rs 70/Hr",
  },
  {
    id: 8,
    company: "Hero",
    model: "Hero Electric",
    Mileage: "18 kmpl",
    Displacement: "100 cc",
    FuelCapacity: "18 L",
    MaxPowe: "95.1 PS",
    url: "/images/bike_8.png",
    type: "Scooters",
    price: "Rs 20/Hr",
  },
  {
    id: 9,
    company: "Honda",
    model: "Honda Scooter",
    Mileage: "18 kmpl",
    Displacement: "200 cc",
    FuelCapacity: "18 L",
    MaxPowe: "95.1 PS",
    url: "/images/bike_9.png",
    type: "Scooters",
    price: "Rs 40/Hr",
  },
  {
    id: 10,
    company: "Tvs",
    model: "Tvs Scooter",
    Mileage: "18 kmpl",
    Displacement: "100 cc",
    FuelCapacity: "18 L",
    MaxPowe: "95.1 PS",
    url: "/images/bike_10.png",
    type: "Scooters",
    price: "Rs 50/Hr",
  },
  {
    id: 11,
    company: "Harlely Davidson",
    model: "FatBoy 1000",
    Mileage: "18 kmpl",
    Displacement: "1000 cc",
    FuelCapacity: "20 L",
    MaxPowe: "150.1 PS",
    url: "/images/bike_11.png",
    type: "Cruiser",
    price: "Rs 150/Hr",
  },
  {
    id: 12,
    company: "Ktm",
    model: "Duke 200",
    Mileage: "18 kmpl",
    Displacement: "200 cc",
    FuelCapacity: "18 L",
    MaxPowe: "95.1 PS",
    url: "/images/bike_12.png",
    type: "Sports",
    price: "Rs 90/Hr",
  },
];

const bikeReducer = (currentData, action) => {
  let newData = currentData;
  if (action.type == "category") {
    if (action.payload == "All") {
      return getBikesShopList
    } else {
      const filterValue = getBikesShopList.filter(
        (val) => val.type.toUpperCase() == action.payload.toUpperCase()
      );
      return filterValue

    }
  }
  else if (action.type =='search') {
       const filterValue = getBikesShopList.filter((val) => val.company.toUpperCase() == action.payload.toUpperCase());
       return filterValue;
  }
  return newData;
};



const BikeDataProvider = ({ children }) => {


  const [getBikeModels, dispatchBikeModels] = useReducer(
    bikeReducer,
    getBikesShopList
  );

  function handleCategorys(value) {
    dispatchBikeModels({
      type: "category",
      payload: value,
    });

  }
function handleSearcFun(value){
dispatchBikeModels({
  type: "search",
  payload: value
})

}

  const getBikeModel = [
    {
      id: 1,
      company: "Honda",
      model: "Honda Livo",
      Mileage: "60 kmpl",
      Displacement: "109.51 cc",
      FuelCapacity: "9 L",
      MaxPowe: "8.79 PS",
      url: "./public/images/bike_1.png",
    },

    {
      id: 2,
      company: "Yamaha",
      model: "Kawasaki B1",
      Mileage: "15 kmpl",
      Displacement: "500 cc",
      FuelCapacity: "15 L",
      MaxPowe: "40.41 PS",
      url: "./public/images/bike_2.png",
    },
    {
      id: 3,
      company: "Royal Enfield",
      model: "Classic 350",
      Mileage: "35 kmpl",
      Displacement: "349 cc",
      FuelCapacity: "13 L",
      MaxPowe: "20.2 bhp @ 6100 rpm",
      url: "./public/images/bike_3.png",
    },

    {
      id: 4,
      company: "TVS",
      model: " RTR 160 4V",
      Mileage: "41.4 kmpl",
      Displacement: "159.7 cc",
      FuelCapacity: "12 L",
      MaxPowe: "17.31 bhp @ 9250 rpm",
      url: "./public/images/bike_4.png",
    },
    {
      id: 5,
      company: "Harlely Davidson",
      model: "FatBoy",
      Mileage: "18 kmpl",
      Displacement: "1868 cc",
      FuelCapacity: "18 L",
      MaxPowe: "95.1 PS",
      url: "./public/images/bike_5.png",
    },
  ];

  return (
    <BikeData.Provider value={{ getBikeModel, getBikeModels, handleCategorys, handleSearcFun }}>
      {children}
    </BikeData.Provider>
  );
};
export default BikeDataProvider;

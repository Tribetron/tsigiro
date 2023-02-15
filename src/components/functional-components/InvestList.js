import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { propertyActions } from "../../redux/store";
import LoadingBox from "./LoadingBox";
import Investments from "./Investments";

function InvestList() {
  const dispatch = useDispatch();
  const { properties } = useSelector((x) => x.properties);
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(propertyActions.getAll()).then((properties) => {
      setData(properties);
      setLoading(false);
    });
  }, []);

  {
    return loading ? (
      <LoadingBox />
    ) : (
      data.payload.map((properties) => {
        return (
          <Investments
            key={properties.id}
            name={properties.name}
            location={properties.location}
            price={properties.details.price}
            baths={properties.details.bathrooms}
            bedrooms={properties.details.bedrooms}
            description={properties.description}
            images={properties.images}
          />
        );
      })
    );
  }
}

export default InvestList;

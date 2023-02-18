import React, { useState } from "react";
import Property from "./Property";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { propertyActions } from "../../redux/store";
import LoadingBox from "./LoadingBox";

function PropertyList() {
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
          <Property
            key={properties.id}
            name={properties.name}
            location={properties.location}
            price={properties.price}
            bathrooms={properties.bathrooms}
            bedrooms={properties.bedrooms}
            rooms={properties.rooms}
            description={properties.description}
            images={properties.images}
            propertyID={properties.propertyID}
            x={properties.dimensionsX}
            y={properties.dimensionsY}
            propertyStatus={properties.propertyStatus}
            size={properties.size}
          />
        );
      })
    );
  }
}

export default PropertyList;

import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { investmentActions } from "../../redux/store";
import LoadingBox from "./LoadingBox";
import Investments from "./Investments";

function InvestList() {
  const dispatch = useDispatch();
  const { investments } = useSelector((x) => x.investments);
  const [data, setData] = useState("");
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    dispatch(investmentActions.getAllInvestments()).then((investments) => {
      setData(investments);
      setLoading(false);
    });
  }, []);

  {
    return loading ? (
      <LoadingBox />
    ) : (
      data.payload.map((investments) => {
        return (
          <Investments
            key={investments.id}
            name={investments.name}
            description={investments.description}
            location={investments.location}
            price={investments.price}
            fundingTarget={investments.fundingTarget}
            interest={investments.interest}
            rent={investments.rent}
            marketValuation={investments.marketValuation}
            discount={investments.discount}
            currentInvestment={investments.currentInvestment}
            bathrooms={investments.bathrooms}
            bedrooms={investments.bedrooms}
            rooms={investments.rooms}
            area={investments.area}
            type={investments.type}
            images={investments.images}
          />
        );
      })
    );
  }
}

export default InvestList;

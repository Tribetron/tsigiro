import React, { useState } from "react";
import { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { propertyActions } from "../../redux/store";
import Table from "react-bootstrap/Table";

function Request({ id: id, name: name, type: type, requestObj: requestObj }) {
  const dispatch = useDispatch();
  const { properties } = useSelector((x) => x.properties);
  const [assets, setAssets] = useState("");

  useEffect(() => {
    dispatch(propertyActions.getAll()).then((properties) => {
      setAssets(properties);
    });
  }, []);

  console.log(requestObj);

  let publicUrl = process.env.PUBLIC_URL + "/";
  return <div className="ltn__myaccount-tab-content-inner"></div>;
}

export default Request;

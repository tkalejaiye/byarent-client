import React from "react";

// Style
import "../styles/components/_propertyListingTile.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faBath,
  faRulerCombined
} from "@fortawesome/free-solid-svg-icons";

export default ({ property }) => {
  console.log(property.image);
  return (
    <div className="property-list__listing">
      <img src={property.image} alt="property" />

      <div className="property-listing__details">
        <div className="property-listing__address">
          <p>{property.address.streetAddress}</p>
          <p> {property.address.cityOrTown}</p>
          <p>{property.address.state}</p>
        </div>

        <div className="property-listing__stats">
          <div className="property-listing__singlestat">
            <FontAwesomeIcon icon={faBed} />
            <p>{property.propertyStats.bedrooms} bed</p>
          </div>
          <div className="property-listing__singlestat">
            <FontAwesomeIcon icon={faBath} />
            <p>{property.propertyStats.bathrooms} bath</p>
          </div>
          <div className="property-listing__singlestat">
            <FontAwesomeIcon icon={faRulerCombined} />
            <p>{property.propertyStats.size} sq ft</p>
          </div>
        </div>
      </div>
    </div>
  );
};

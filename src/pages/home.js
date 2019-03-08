import React, { Component } from "react";

import "../styles/components/_hero.scss";

// Components
import PropertyListingTile from "../components/PropertyListingTile";

// Images *DUMMY TEST DATA!! Will be removed once api is fully implemented
import image1 from "../assets/brian-babb-256298-unsplash.jpg";
import image2 from "../assets/jesse-roberts-146556-unsplash.jpg";
import image3 from "../assets/outsite-co-322866-unsplash.jpg";
import image4 from "../assets/rowan-heuvel-51244-unsplash.jpg";

const dummyProperties = [
  {
    image: image1,
    address: {
      streetAddress: "633 Merchant Drive",
      cityOrTown: "Ikoyi",
      state: "Lagos"
    },
    propertyStats: { bedrooms: 4, bathrooms: 3, size: 3293 }
  },
  {
    image: image2,
    address: {
      streetAddress: "24 Durosinmi Etti Rd",
      cityOrTown: "Lekki",
      state: "Lagos"
    },
    propertyStats: { bedrooms: "2", bathrooms: "2", size: "999" }
  },
  {
    image: image3,
    address: {
      streetAddress: "2 Alexander Rd",
      cityOrTown: "Ikoyi",
      state: "Lagos"
    },
    propertyStats: { bedrooms: "6", bathrooms: "5", size: "4,245" }
  },
  {
    image: image4,
    address: {
      streetAddress: "33 Egbuson Rd",
      cityOrTown: "Ajah",
      state: "Lagos"
    },
    propertyStats: { bedrooms: "4", bathrooms: "3", size: "3293" }
  }
];

export default class Home extends Component {
  render() {
    return (
      <div className="home">
        <div className="hero">
          <h1 style={{ color: "#fff" }}>Find your perfect home</h1>
          <div className="hero-searchBar">
            <input type="text" placeholder="Address, City, or Town" />
            <button>Search</button>
          </div>
        </div>

        <div className="about">
          <h2>About Byarent</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus
            beatae adipisci, nesciunt esse a repellat dolorem. Nisi fugiat ea,
            id rerum aperiam, quod, beatae culpa deleniti delectus ipsam non!
            Aliquam doloribus earum itaque esse, aut asperiores fugiat hic fugit
            cumque velit corrupti commodi expedita voluptates, praesentium ab
            tempora tenetur aperiam? Natus ea repellat non ut, tempore
            doloremque voluptate. Quas, magnam beatae. Adipisci quas corrupti
            velit, sint dolorem quo ea nulla ipsam esse dolore minima cumque
            incidunt aut quod natus voluptas, laborum enim saepe sequi! Repellat
            nisi minus omnis. Perspiciatis labore sit dolor temporibus eius
            eveniet molestias, eligendi dolores aspernatur illum?
          </p>
        </div>
        <div className="property-list__rentals">
          <h2>Latest Rental Listings</h2>
          <div className="property-listing-row">
            <PropertyListingTile property={dummyProperties[0]} />
            <PropertyListingTile property={dummyProperties[1]} />
            <PropertyListingTile property={dummyProperties[2]} />
            <PropertyListingTile property={dummyProperties[3]} />
          </div>
        </div>
      </div>
    );
  }
}

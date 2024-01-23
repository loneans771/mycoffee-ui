"use client";
import "leaflet/dist/leaflet.css";
import React, { useEffect, useState, useRef } from "react";
import L from "leaflet";
import {
  Stepper,
  Step,
  StepLabel,
  Container,
  Card,
  Hidden,
} from "@mui/material";

const customIcon = new L.Icon({
  iconUrl: "icon/loc.png",
  iconSize: [32, 32], // Adjust the size of the icon
  iconAnchor: [16, 32], // Adjust the anchor point if needed
  popupAnchor: [0, -32], // Adjust the popup anchor point if needed
});

const Map = () => {
  const [isClient, setIsClient] = useState(false);
  const [activeStep, setActiveStep] = useState(0);
  const data = [
    { name: "Kintamani's Farmers", coordinates: [-8.409518, 115.1889] },
    { name: "Kintamani's Collectors", coordinates: [-8.409498, 114.1889] },
    { name: "Kintamani's Roasters", coordinates: [-7.009518, 112.1889] },
    { name: "Kintamani's Vendor", coordinates: [40.8566, -1.3522] },
    { name: "Kintamani's Consumers", coordinates: [48.8566, 2.3522] },
    // Add more locations as needed
  ];

  const [activeLocation, setActiveLocation] = useState(0);
  const [mapCenter, setMapCenter] = useState(data[0].coordinates);

  const handleStepClick = (index) => {
    setActiveLocation(index);
    setMapCenter(data[index].coordinates);

    // Center the map on the selected location
    // const selectedLocation = data[index];
    // if (selectedLocation) {
    //   const { coordinates } = selectedLocation;
    //   setMapCenter(coordinates);
    // }
  };
  const mapRef = useRef(null);

  const ListofObjects = () => {
    const [showFullText, setShowFullText] = useState(false);
    const contentRef = useRef(null);

    useEffect(() => {
      if (showFullText && contentRef.current) {
        contentRef.current.scrollIntoView({ behavior: "smooth" });
      }
    }, [showFullText]);

    const toggleShowFullText = () => {
      setShowFullText(!showFullText);
    };
    const ellipsisStyle = {
      maxWidth: "200px",
      overflow: "hidden",
      textOverflow: "ellipsis",
    };

    const items = [
      {
        text: "Kintamani's Farmers",
        imageUrl: "logo/beans.jpg",
        imageUrl2: "logo/ind.png",
        imageUrl3: "logo/arabicabeans.png",
        imageUrl4: "logo/chain.svg",
        itemdesc:
          "Besides being famous for its natural beauty, it turns out that Bali is also famous for its kintamani coffee. Bali Kintamani coffee is produced from arabica coffee plants that are planted in the Kintamani highlands.",
        itemclass: "1 of 5",
        itemsorigin: "Indonesia",
        itemsbeans: "Arabica",
        Methods: "FullWashed",
      },
      {
        text: "Kintamani's Collectors",
        imageUrl: "logo/beans.jpg",
        imageUrl2: "logo/ind.png",
        imageUrl3: "logo/arabicabeans.png",
        imageUrl4: "logo/chain.svg",
        itemdesc: "the origin is come from awdjaksdksaow",
        itemclass: "2 of 5",
        itemsorigin: "Indonesia",
        itemsbeans: "Arabica",
        Methods: "FullWashed",
      },
      {
        text: "Kintamani's Roasters",
        imageUrl: "logo/beans.jpg",
        imageUrl2: "logo/ind.png",
        imageUrl3: "logo/arabicabeans.png",
        imageUrl4: "logo/chain.svg",
        itemdesc: "the beans also have some quality awdaksdwalds",
        itemclass: "3 of 5",
        itemsorigin: "Indonesia",
        itemsbeans: "Arabica",
        Methods: "FullWashed",
      },
      {
        text: "Kintamani's Vendor",
        imageUrl: "logo/beans.jpg",
        imageUrl2: "logo/ind.png",
        imageUrl3: "logo/arabicabeans.png",
        imageUrl4: "logo/chain.svg",
        itemdesc: "also the awdjskdwaosdwakswdls",
        itemclass: "4 of 5",
        itemsorigin: "Indonesia",
        itemsbeans: "Arabica",
        Methods: "FullWashed",
      },
      {
        text: "Kintamani's Consumers",
        imageUrl: "logo/beans.jpg",
        imageUrl2: "logo/ind.png",
        imageUrl3: "logo/arabicabeans.png",
        imageUrl4: "logo/chain.svg",
        itemdesc: "also the awdjskdwaosdwakswdls",
        itemclass: "5 of 5",
        itemsorigin: "Indonesia",
        itemsbeans: "Arabica",
        Methods: "FullWashed",
      },
      // Add more items as needed
    ];
    const selectedStepItem = items[activeLocation];

    return (
      <ul>
        <Container>
          <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
              <div className="mx-auto max-w-2xl lg:mx-0">
                <div className="flex items-center">
                  <img
                    src="logo/coffeebeans.png"
                    className="h-10 w-10"
                    alt="Coffee Beans Logo"
                  />
                  <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                    {selectedStepItem.text}
                  </h2>
                </div>
                <p className="mt-2 text-lg leading-8 text-gray-600">
                  {selectedStepItem.itemclass}
                </p>
              </div>
              <div className="mx-auto mt-10 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 border-t border-gray-200 pt-10 sm:mt-16 sm:pt-16 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <article
                  key={selectedStepItem.text}
                  className="flex max-w-xl flex-col items-start justify-between"
                >
                  <div className="flex items-center gap-x-4 text-md">
                    <div className="flex items-center">
                      <img
                        src="logo/coffeebeans.png"
                        className="h-5 w-5"
                        alt="Coffee Beans Logo"
                      />
                      About the Coffee
                    </div>
                  </div>
                  <div className="group relative">
                    <h3 className="line-clamp-2 mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"></h3>
                    <p
                      style={ellipsisStyle}
                      className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600"
                    >
                      {showFullText
                        ? selectedStepItem.itemdesc
                        : `${selectedStepItem.itemdesc.slice(0, 100)}...`}
                    </p>
                    {!showFullText && (
                      <a href="#read-more" onClick={toggleShowFullText}>
                        Read more
                      </a>
                    )}
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      src={selectedStepItem.imageUrl}
                      alt=""
                      className="h-40 w-40 rounded-full bg-gray-50"
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <a href={selectedStepItem.itemdesc}>
                          <span className="absolute inset-0" />
                          {/* {post.author.name} */}
                        </a>
                      </p>
                      {/* <p className="text-gray-600">{post.author.role}</p> */}
                    </div>
                  </div>
                </article>
                <article
                  key={selectedStepItem.text}
                  className="flex max-w-xl flex-col items-start justify-between"
                >
                  <div className="flex items-center gap-x-4 text-md">
                    <div className="flex items-center">
                      <img
                        src="logo/coffeebeans.png"
                        className="h-5 w-5"
                        alt="Coffee Beans Logo"
                      />
                      About the Origin
                    </div>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={selectedStepItem.itemscore}>
                        <span className="absolute inset-0" />
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {selectedStepItem.itemsorigin}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      src={selectedStepItem.imageUrl2}
                      alt=""
                      className="h-40 w-40 ove rounded-full bg-gray-500"
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <a href={selectedStepItem.itemdesc}>
                          <span className="absolute inset-0" />
                          {/* {post.author.name} */}
                        </a>
                      </p>
                      {/* <p className="text-gray-600">{post.author.role}</p> */}
                    </div>
                  </div>
                </article>
                <article
                  key={selectedStepItem.text}
                  className="flex max-w-xl flex-col items-start justify-between"
                >
                  <div className="flex items-center gap-x-4 text-md">
                    <div className="flex items-center">
                      <img
                        src="logo/coffeebeans.png"
                        className="h-5 w-5"
                        alt="Coffee Beans Logo"
                      />
                      About the Beans
                    </div>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={selectedStepItem.itemscore}>
                        <span className="absolute inset-0" />
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {selectedStepItem.itemsbeans}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      src={selectedStepItem.imageUrl3}
                      alt=""
                      className="h-40 w-40 rounded-full bg-gray-50"
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <a href={selectedStepItem.itemdesc}>
                          <span className="absolute inset-0" />
                          {/* {post.author.name} */}
                        </a>
                      </p>
                      {/* <p className="text-gray-600">{post.author.role}</p> */}
                    </div>
                  </div>
                </article>
                <article
                  key={selectedStepItem.text}
                  className="flex max-w-xl flex-col items-start justify-between"
                >
                  <div className="flex items-center gap-x-4 text-md">
                    <div className="flex items-center">
                      <img
                        src="logo/coffeebeans.png"
                        className="h-5 w-5"
                        alt="Coffee Beans Logo"
                      />
                      About Processing Method
                    </div>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={selectedStepItem.itemscore}>
                        <span className="absolute inset-0" />
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {selectedStepItem.Methods}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      src={selectedStepItem.imageUrl4}
                      alt=""
                      className="h-40 w-40 rounded-full bg-gray-50"
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <a href={selectedStepItem.itemdesc}>
                          <span className="absolute inset-0" />
                          {/* {post.author.name} */}
                        </a>
                      </p>
                      {/* <p className="text-gray-600">{post.author.role}</p> */}
                    </div>
                  </div>
                </article>
              </div>
            </div>
          </div>
        </Container>
      </ul>
    );
  };

  // const customIcon = new L.DivIcon({
  //   iconUrl: '../../public/icon/locationss.gif', // Replace with the path to your custom GIF icon
  //   iconSize: [32, 32], // Adjust the size of the icon
  //   iconAnchor: [16, 32], // Adjust the anchor point if needed
  //   popupAnchor: [0, -32], // Adjust the popup anchor point if needed
  // });

  useEffect(() => {
    // Update map center when activeLocation changes
    if (mapRef.current) {
      mapRef.current.setView(data[activeLocation].coordinates, 2);
    }
  }, [activeLocation]);

  useEffect(() => {
    // Check if running on the client side
    setIsClient(true);
  }, []);

  if (!isClient) {
    return null; // Return null if not on the client side
  }

  const {
    MapContainer,
    TileLayer,
    Marker,
    Popup,
    Polyline,
  } = require("react-leaflet");
  // Import 'leaflet/dist/leaflet.css' only on the client side
  const getPolylinePositions = () => {
    return data.map((location) => location.coordinates);
  };
  require("leaflet/dist/leaflet.css");
  console.log(mapCenter);
  return (
    <div>
      <MapContainer
        key={mapCenter.toString()} // Add this key attribute
        center={mapCenter}
        zoom={12}
        style={{ height: "400px", width: "100%" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        />

        {data.map((location, index) => (
          <Marker
            key={index}
            position={location.coordinates}
            icon={customIcon}
            onClick={() => handleStepClick(index)}
          >
            <Popup>{location.name}</Popup>
          </Marker>
        ))}

        {activeLocation < data.length && (
          <Polyline positions={getPolylinePositions()} color="blue" />
        )}
      </MapContainer>

      <Stepper
        alternativeLabel
        style={{ paddingTop: "3em", paddingBottom: "5em" }}
      >
        {data.map((location, index) => (
          <Step key={index} completed={true}>
            <StepLabel onClick={() => handleStepClick(index)}>
              {location.name}
            </StepLabel>
          </Step>
        ))}
      </Stepper>
      <Card style={{ paddingBottom: "7em" }}>
        <div className="background-container flex items-center justify-center rounded-md">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-11">
              <h4 className="text-2xl font-mono" style={{ color: "white" }}>
                Coffee Tracker
              </h4>
            </div>
          </div>
        </div>
      </Card>
      <style jsx>{`
.background-container {
  position: absolute;
  width: 100%;
  height: 100px; /* Set the desired height or adjust as needed */
  background-image: url('logo/logo2.jpg'); /* Replace with your actual background image path */
  background-size: cover;
  background-position: center;
  overflow: hidden;
}

.background-container::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%; /* Adjust this value to control the fade percentage */
  height: 100%;
  background: linear-gradient(to left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  z-index: 1;
}

.image-container {
  position: relative;
}

.fade-effect {
  width: 100%;
  height: auto;
}

.ellipsis-text {
  display: -webkit-box;
  -webkit-line-clamp: 3; /* Number of lines to show */
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  margin-top: 5px; /* Adjust as needed */
  font-size: 0.875rem; /* Adjust as needed */
  line-height: 1.5; /* Adjust as needed */
  color: #718096; /* Adjust as needed */
}

.fade-effect::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 50%; /* Adjust this value to control the fade percentage */
  height: 100%;
  background: linear-gradient(to right, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1));
  z-index: 1;
}
.information-container {
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  padding: 8rem; /* Adjust as needed */
}

.text-blue-500 {
  fill: none;
  stroke: #3498db; /* Change to your preferred color */
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: 2;
}
        }
      `}</style>

      <ListofObjects />
      <Card style={{ paddingBottom: "7em" }}>
        <div className="background-container flex items-center justify-center rounded-md">
          <div className="grid grid-cols-12 gap-1">
            <div className="col-span-11">
              <h4 className="text-2xl font-mono" style={{ color: "white" }}>
                Informations
              </h4>
            </div>
          </div>
        </div>
      </Card>

      <div id="read-more">
        <div className="bg-white py-24 sm:py-32">
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <div className="flex items-center">
                <img
                  src="logo/coffeebeans.png"
                  className="h-10 w-10"
                  alt="Coffee Beans Logo"
                />
                <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                  Arabica Beans
                </h2>
              </div>
            </div>
            <article
              key={activeLocation}
              className="flex max-w-xl flex-col items-start justify-between pt-5"
            >
              <div className="flex items-center gap-x-4 text-md"></div>
              <div className="group relative">
                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                  {/* <a href=>
                        <span className="absolute inset-0" />
                      </a> */}
                </h3>
                  <img
                    src="logo/coffeebeans.png"
                    className="h-5 w-5"
                    alt="Coffee Beans Logo"
                  />
                  <p className="line-clamp-7 text-sm leading-6 text-gray-600">
                    Besides being famous for its natural beauty, it turns out
                    that Bali is also famous for its kintamani coffee. Bali
                    Kintamani coffee is produced from arabica coffee plants that
                    are planted in the Kintamani highlands, precisely in
                    Kintamani Village, Bangli Regency, Bali Province, with an
                    altitude above 900 meters above sea level. The Kintamani
                    area is located on the slopes of the Batur volcano. With
                    Entisel and Inceptisol (Regusol) soil types. This area has
                    cool and dry air with a lot of rainfall during the 6-7
                    months of the rainy season. Arabica coffee plants are formed
                    from selected varieties. Coffee trees are planted under
                    shade trees and combined with other crops and managed and
                    given organic fertilizers. This coffee has a distinctive
                    taste, namely citrus aroma with a low acidity level, so it
                    is in great demand by international consumers.
                  </p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={"logo/logo3.jpg"}
                  alt=""
                  className="h-40 w-40 ove rounded-full bg-gray-500"
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900"></p>
                  {/* <p className="text-gray-600">{post.author.role}</p> */}
                </div>
              </div>
            </article>
          </div>
        </div>
        {/* Add more content or components for the additional information */}
      </div>
    </div>
  );
};

export default Map;

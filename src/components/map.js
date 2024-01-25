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
    { name: "Kintamani Farmers", coordinates: [-8.2574, 115.354] },
    { name: "Kintamani Collector", coordinates: [-8.5069, 115.2625] },
    { name: "Kintamani Processor", coordinates: [-8.6478, 115.1385] },
    { name: "Kintamani Trader", coordinates: [-6.1403, 106.7559] },
    { name: "Kintamani Roaster", coordinates: [48.8566, 2.3522] },
    { name: "Kintamani Vendor", coordinates: [45.764, 4.8357] },
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

  const datas = [
    {
      names1: "Arabica Coffee",
      names2: "Certified",
      information1: (
        <div>
          The vibrant red cherries are carefully plucked, signaling the
          beginning of a meticulous journey from tree to cup. The farmers,
          guardians of this precious harvest, choose between wet processing or
          the art of natural drying, each method adding its own brushstroke to
          the canvas of flavor. As the coffee beans make their way through the
          processing mills, the air is filled with the aroma of possibility. The
          beans, now transformed, carry the essence of Kintamani – a
          well-balanced symphony of flavors. Notes of citrus, floral undertones,
          and a subtle hint of earthiness characterize this unique brew, a
          testament to the terroir of the region.
        </div>
      ),
      information2:
        "the community. It also provides an opportunity for farmers to learn about sustain",
      image1: "logo/arabicans.png",
      image2: "logo/certified.png",
    },
    {
      names1: "Arabica Coffee",
      names2: "Certified",
      information1: (
        <div>
          The vibrant red cherries are carefully plucked, signaling the
          beginning of a meticulous journey from tree to cup. The farmers,
          guardians of this precious harvest, choose between wet processing or
          the art of natural drying, each method adding its own brushstroke to
          the canvas of flavor. As the coffee beans make their way through the
          processing mills, the air is filled with the aroma of possibility. The
          beans, now transformed, carry the essence of Kintamani – a
          well-balanced symphony of flavors. Notes of citrus, floral undertones,
          and a subtle hint of earthiness characterize this unique brew, a
          testament to the terroir of the region.
        </div>
      ),
      information2:
        "the community. It also provides an opportunity for farmers to learn about sustain",
      image1: "logo/arabicans.png",
      image2: "logo/fairtradess.png",
    },
    {
      names1: " ",
      names2: " ",
      information1: " ",
      information2: " ",
      image1: " ",
      image2: " ",
    },
    {
      names1: " ",
      names2: " ",
      information1: " ",
      information2: " ",
      image1: " ",
      image2: " ",
    },
    {
      names1: " ",
      names2: " ",
      information1: " ",
      information2: " ",
      image1: " ",
      image2: " ",
    },
    {
      names1: " ",
      names2: " ",
      information1: " ",
      information2: " ",
      image1: " ",
      image2: " ",
    },
  ];

  const selectedStepItems = datas[activeLocation];

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
      display: "block",
      maxWidth: "200px",
      maxHeight: "400px", // Adjust the height as needed
      overflow: "hidden",
      textOverflow: "ellipsis",
      boxSizing: "border-box",
    };

    const items = [
      {
        names: "Kintamani Farmers",
        imageUrl: "logo/snapshot_locationfarm.png",
        itemdesc1: "-8.2574 , 115.3540 Near Gunung Batur Bukit Payang - Bali",
        itemdesc2: "this coffee was harvested at 1200m at surface",
        itemdesc3: "12 - 01 - 2023",
        itemdesc4: "Arabica",
        itemdesc5:
          "Grown in the range of altitude between 1.200 - 1.500 MASL, this coffee came from Batukaang village in Kintamani, Bali.",
        itemdesc6: (
          <div>
            Carbon Footprint = Fuel Consumed * Emission Factor <br />
            Carbon Footprint = 6,6 liters * 2,68 kg CO2/liter ≈ 17,648 kg CO2
          </div>
        ),
        itemdesc7: "1500 Hectares",
        itemdesc8: "gatau",
        itemclass: "1 of 6",
        iteminfo: "Location",
        iteminfo2: "Altitude",
        iteminfo3: "Harvest Date",
        iteminfo4: "Bean Type",
        iteminfo5: "Origin Coffee",
        iteminfo6: "Carbon Footprint",
        iteminfo7: "planting area",
        iteminfo8: "Carbon Footprint",
        itemsoninformation: "Arabica Beans",
        itemsoncertified: "logo/certified.png",
        Methods: "FullWashed",
      },
      {
        names: "Kintamani Collectors",
        imageUrl: "logo/snapshot_ubud.png",
        imageUrl3: "logo/fairtradess.png",
        itemdesc1: "(-8.5069, 115.2625) near Ubud - Bali",
        itemdesc2: "Arabica",
        itemdesc3: "✅ Fair Trades",
        itemdesc4: <div>The Origin of Kintamani beans from Bali</div>,
        itemdesc5: (
          <div>
            Carbon Footprint = Fuel Consumed * Emission Factor
            <br />
            Carbon Footprint = 5,6 liters * 2,68 kg CO2/liter ≈ 15,008 kg CO2
          </div>
        ),
        itemdesc6: "4000 t / month",
        itemdesc7: " 3900 t / month",
        itemclass: "2 of 6",
        iteminfo: "Location",
        iteminfo2: "Type Beans",
        iteminfo3: "Certified",
        iteminfo4: "Origin",
        iteminfo5: "Carbon Footprint",
        iteminfo6: "Many to Buy",
        iteminfo7: "Many to Sell",
        itemsorigin: "",
        itemsbeans: " ",
        Methods: " ",
      },
      {
        names: "Kintamani Processors",
        imageUrl: "logo/snapshot_canggu.png",
        itemdesc1: "(-8.6478, 115.1385) near Canggu - Bali",
        itemdesc2: "Full Washed",
        itemdesc3: "2400 t / month",
        itemdesc4: (
          <div>
            For canggu to Jakarta <br />
            Carbon Footprint = Fuel Consumed * Emission Factor <br />
            Carbon Footprint = 236 liters * 2.68 kg CO2/liter ≈ 632,48 kg CO2
          </div>
        ),
        itemclass: "3 of 6",
        iteminfo: "Location",
        iteminfo2: "Process",
        iteminfo3: "Volume to Process",
        iteminfo4: "Carbon Footprint",
        itemsorigin: " ",
        itemsbeans: " ",
        Methods: " ",
      },
      {
        names: "Kintamani Traders",
        imageUrl: "logo/snapshot_kapuk.png",
        itemdesc1: "(-6.1403, 106.7559) near Kapuk - Jakarta",
        itemdesc2: (
          <div>
            in 1 weeks on warehouse <br />
            Carbon Footprint=1,000,000kg × 0,1kg CO2/kg
            <br />
            Carbon Footprint=100,000 kg CO2
          </div>
        ),
        itemdesc3: "26 - 1 - 2023",
        itemdesc4: (
          <div>
            From kapuk to Paris France <br />
            Carbon Footprint=Fuel Consumed × Emission Factor <br />
            Carbon Footprint=2313,2 liters × 2,68 kg CO2/liter ≈ 6194,496 kg CO2
          </div>
        ),
        itemclass: "4 of 6",
        iteminfo: "Location",
        iteminfo2: "Long Coffee in Warehouse",
        iteminfo3: "Shipping date",
        iteminfo4: "Carbon Footprint",
        itemsorigin: " ",
        itemsbeans: " ",
        Methods: " ",
      },
      {
        names: "Kintamani Roaster",
        imageUrl: "logo/snapshot_paris.png",
        itemdesc1: "(48.8566, 2.3522) near from Paris - France",
        itemdesc2: (
          <div>
            Acidity: ★★★
            <br />
            Aftertaste: ★★★
            <br />
            Sweetness: ★★
            <br />
            Body: ★★★
            <br />
          </div>
        ),
        itemdesc3: (
          <div>
            <img src="logo/coffeebeans.png" alt="Your Alt Text" />
            medium Dark
          </div>
        ),
        itemdesc4: (
          <div>
            Mango{" "}
            <img className="h-7 w-7" src="logo/mango.png" alt="Your Alt Text" />
            Raisin{" "}
            <img
              className="h-7 w-7"
              src="logo/raisins.png"
              alt="Your Alt Text"
            />
            Chocolate Cookie{" "}
            <img
              className="h-7 w-7"
              src="logo/cookie.png"
              alt="Your Alt Text"
            />
          </div>
        ),
        itemdesc5: (
          <div>
            From Paris France to Lyon <br />
            Carbon Footprint=Fuel Consumed × Emission Factor <br />
            Carbon Footprint=76,6 liters × 2,68 kg CO2/liter ≈ 205,088 kg CO2
          </div>
        ),
        itemclass: "5 of 6",
        iteminfo: "Location",
        iteminfo2: "Tasting Notes",
        iteminfo3: "Roasting Level",
        iteminfo4: "Cupping Notes",
        iteminfo5: "Carbon Footprint",
        itemsorigin: " ",
        itemsbeans: " ",
        Methods: " ",
      },
      {
        names: "Kintamani Vendor",
        imageUrl: "logo/snapshot_lyon.png",
        itemdesc1: "(45.764, 4.8357) near from Lyon - France",
        itemdesc2: "900 t / month",
        itemdesc3: (
          <div>
            in 1 weeks on warehouse <br />
            Carbon Footprint=1,000,000kg × 0,1kg CO2/kg
            <br />
            Carbon Footprint=100,000 kg CO2
          </div>
        ),
        itemdesc4: "",
        itemclass: "6 of 6",
        iteminfo: "Location",
        iteminfo2: "Sale per Month",
        iteminfo3: "Carbon Footprint",
        iteminfo4: " ",
        itemsorigin: " ",
        itemsbeans: " ",
        Methods: " ",
      },
      // Add more items as needed
    ];
    const selectedStepItem = items[activeLocation];
    // const selectedStepItems = items1[activeLocation];

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
                    {selectedStepItem.names}
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
                      {selectedStepItem.iteminfo}
                    </div>
                  </div>
                  <div className="group relative">
                    <h3 className="line-clamp-2 mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600"></h3>
                    <p
                      style={ellipsisStyle}
                      className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600"
                    >
                      {selectedStepItem.itemdesc1}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      src={selectedStepItem.imageUrl}
                      alt=""
                      className="h-40 w-40 rounded-full bg-gray-50"
                      style={{
                        display: selectedStepItem.imageUrl ? "block" : "none",
                      }}
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
                  key={selectedStepItem.names}
                  className="flex max-w-xl flex-col items-start"
                >
                  <div className="flex items-center gap-x-4 text-md">
                    {selectedStepItem.iteminfo2 &&
                      selectedStepItem.iteminfo2.trim() !== "" && (
                        <div className="flex items-center">
                          <img
                            src="logo/coffeebeans.png"
                            className="h-5 w-5"
                            alt="Coffee Beans Logo"
                          />
                          {selectedStepItem.iteminfo2}
                        </div>
                      )}
                  </div>
                  <div className="group relative">
                    <p
                      style={ellipsisStyle}
                      className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600"
                    >
                      {selectedStepItem.itemdesc2}
                    </p>
                  </div>
                </article>
                <article
                  key={selectedStepItem.text}
                  className="flex max-w-xl flex-col items-start"
                >
                  <div className="flex items-center gap-x-4 text-md">
                    {selectedStepItem.iteminfo3 &&
                      selectedStepItem.iteminfo3.trim() !== "" && (
                        <div className="flex items-center">
                          <img
                            src="logo/coffeebeans.png"
                            className="h-5 w-5"
                            alt="Coffee Beans Logo"
                          />
                          {selectedStepItem.iteminfo3}
                        </div>
                      )}
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={selectedStepItem.itemscore}>
                        <span className="absolute inset-0" />
                      </a>
                    </h3>
                    <p
                      style={ellipsisStyle}
                      className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600"
                    >
                      {selectedStepItem.itemdesc3}
                    </p>
                  </div>

                  <div className="relative mt-8 flex items-center gap-x-4">
                    {selectedStepItem.imageUrl3 &&
                      selectedStepItem.imageUrl3.trim() !== "" && (
                        <img
                          src={selectedStepItem.imageUrl3}
                          alt=""
                          className="h-40 w-40  bg-gray-50"
                        />
                      )}
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900"></p>
                      {/* <p className="text-gray-600">{post.author.role}</p> */}
                    </div>
                  </div>
                </article>
                <article
                  key={selectedStepItem.text}
                  className="flex max-w-xl flex-col items-start"
                >
                  <div className="flex items-center gap-x-4 text-md">
                    {selectedStepItem.iteminfo4 &&
                      selectedStepItem.iteminfo4.trim() !== "" && (
                        <div className="flex items-center">
                          <img
                            src="logo/coffeebeans.png"
                            className="h-5 w-5"
                            alt="Coffee Beans Logo"
                          />
                          {selectedStepItem.iteminfo4}
                        </div>
                      )}
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={selectedStepItem.itemscore}>
                        <span className="absolute inset-0" />
                      </a>
                    </h3>
                    <p
                      style={ellipsisStyle}
                      className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600"
                    >
                      {selectedStepItem.itemdesc4}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      src={selectedStepItem.imageUrl4}
                      alt=""
                      className="h-40 w-40 rounded-full bg-gray-50"
                      style={{
                        display: selectedStepItem.imageUrl4 ? "block" : "none",
                      }}
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
                    {selectedStepItem.iteminfo5 &&
                      selectedStepItem.iteminfo5.trim() !== "" && (
                        <div className="flex items-center">
                          <img
                            src="logo/coffeebeans.png"
                            className="h-5 w-5"
                            alt="Coffee Beans Logo"
                          />
                          <p style={ellipsisStyle}>
                            {" "}
                            {selectedStepItem.iteminfo5}
                          </p>
                        </div>
                      )}
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={selectedStepItem.itemscore}>
                        <span className="absolute inset-0" />
                      </a>
                    </h3>
                    <p
                      style={ellipsisStyle}
                      className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600"
                    >
                      {selectedStepItem.itemdesc5}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      src={selectedStepItem.imageUrl5}
                      alt=""
                      className="h-40 w-40 rounded-full bg-gray-50"
                      style={{
                        display: selectedStepItem.imageUrl5 ? "block" : "none",
                      }}
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
                  className="flex max-w-xl flex-col items-start"
                >
                  <div className="flex items-center gap-x-4 text-md">
                    {selectedStepItem.iteminfo6 &&
                      selectedStepItem.iteminfo6.trim() !== "" && (
                        <div className="flex items-center">
                          <img
                            src="logo/coffeebeans.png"
                            className="h-5 w-5"
                            alt="Coffee Beans Logo"
                          />
                          {selectedStepItem.iteminfo6}
                        </div>
                      )}
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={selectedStepItem.itemscore}>
                        <span className="absolute inset-0" />
                      </a>
                    </h3>
                    <p
                      style={ellipsisStyle}
                      className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600"
                    >
                      {selectedStepItem.itemdesc6}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      src={selectedStepItem.imageUrl6}
                      alt=""
                      className="h-40 w-40 rounded-full bg-gray-50"
                      style={{
                        display: selectedStepItem.imageUrl6 ? "block" : "none",
                      }}
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
                  className="flex max-w-xl flex-col items-start"
                >
                  <div className="flex items-center gap-x-4 text-md">
                    {selectedStepItem.iteminfo7 &&
                      selectedStepItem.iteminfo7.trim() !== "" && (
                        <div className="flex items-center">
                          <img
                            src="logo/coffeebeans.png"
                            className="h-5 w-5"
                            alt="Coffee Beans Logo"
                          />
                          {selectedStepItem.iteminfo7}
                        </div>
                      )}
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={selectedStepItem.itemscore}>
                        <span className="absolute inset-0" />
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {selectedStepItem.itemdesc7}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      src={selectedStepItem.imageUrl7}
                      alt=""
                      className="h-40 w-40 rounded-full bg-gray-50"
                      style={{
                        display: selectedStepItem.imageUrl7 ? "block" : "none",
                      }}
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
                {/* <article
                  key={selectedStepItem.text}
                  className="flex max-w-xl flex-col items-start"
                >
                  <div className="flex items-center gap-x-4 text-md">
                    {selectedStepItem.iteminfo6 &&
                      selectedStepItem.iteminfo6.trim() !== "" && (
                        <div className="flex items-center">
                          <img
                            src="logo/coffeebeans.png"
                            className="h-5 w-5"
                            alt="Coffee Beans Logo"
                          />
                          {selectedStepItem.iteminfo6}
                        </div>
                      )}
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                      <a href={selectedStepItem.itemscore}>
                        <span className="absolute inset-0" />
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-gray-600">
                      {selectedStepItem.itemdesc6}
                    </p>
                  </div>
                  <div className="relative mt-8 flex items-center gap-x-4">
                    <img
                      src={selectedStepItem.imageUrl6}
                      alt=""
                      className="h-40 w-40 rounded-full bg-gray-50"
                      style={{
                        display: selectedStepItem.imageUrl6 ? "block" : "none",
                      }}
                    />
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-gray-900">
                        <a href={selectedStepItem.itemdesc}>
                          <span className="absolute inset-0" />
                      
                        </a>
                      </p>
              
                    </div>
                  </div>
                </article> */}
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
        style={{ height: 400 }}
        className="md:h-80vh w-full"
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
            <div className="col-span-3 flex items-center">
              {/* Adjust the col-span to control the image size */}
              <img
                src="logo/newapplogo.png"
                alt="Smart Coffee"
                className="w-20 h-20 rounded-l-md"
                style={{ marginLeft: 0 }} // Set marginLeft to 0 to align the logo to the very left
              />
            </div>
            <div className="col-span-9 flex items-center">
              {/* Align both columns to the center */}
              <h4 className="text-2xl font-mono" style={{ color: "white" }}>
                Smart Coffee
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
              {selectedStepItems.names1 &&
                selectedStepItems.names1.trim() !== "" && (
                  <div className="flex items-center">
                    <img
                      src="logo/coffeebeans.png"
                      className="h-10 w-10"
                      alt="Coffee Beans Logo"
                    />
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                      {selectedStepItems.names1}
                    </h2>
                  </div>
                )}
            </div>
            <article
              key={activeLocation}
              className="flex max-w-xl flex-col items-start justify-between pt-5"
            >
              <div className="flex items-center gap-x-4 text-md">
                {selectedStepItems.information1}
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={selectedStepItems.image1}
                  alt=""
                  className="h-70 w-70 rounded-full bg-gray-50"
                  style={{
                    display: selectedStepItems.image1 ? "block" : "none",
                  }}
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900"></p>
                  {/* <p className="text-gray-600">{post.author.role}</p> */}
                </div>
              </div>
            </article>
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8 pt-10">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <div className="flex items-center">
                {selectedStepItems.names2 &&
                  selectedStepItems.names2.trim() !== "" && (
                    <div className="flex items-center">
                      <img
                        src="logo/coffeebeans.png"
                        className="h-10 w-10"
                        alt="Coffee Beans Logo"
                      />
                      <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                        {selectedStepItems.names2}
                      </h2>
                    </div>
                  )}
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
                <p className="line-clamp-7 text-sm leading-6 text-gray-600"></p>
              </div>
              <div className="relative mt-8 flex items-center gap-x-4">
                <img
                  src={selectedStepItems.image2}
                  alt=""
                  className="h-70 w-70  bg-gray-50"
                  style={{
                    display: selectedStepItems.image2 ? "block" : "none",
                  }}
                />
                <div className="text-sm leading-6">
                  <p className="font-semibold text-gray-900"></p>
                  {/* <p className="text-gray-600">{post.author.role}</p> */}
                </div>
              </div>
            </article>
          </div>
        </div>
        <footer className="bg-blue-300 py-8">
          <div className="container mx-auto">
            <div className="flex flex-wrap items-center justify-between">
              <div className="w-full px-2 md:w-6/12 flex items-center">
                <h4 className="text-md font-semibold text-black">
                  Powered by:
                </h4>
                <div className="md:block">
                  <img
                    src="logo/chain.svg"
                    className="w-30 h-30 bg-white p-2 rounded-full logo"
                    alt="Logo"
                  />
                </div>
              </div>
              <div className="w-full px-4 md:w-6/12">
                <div className="flex items-center justify-between">
                  <div className="hidden md:block">
                    {/* <ul className="flex items-center space-x-6 text-gray-200">
                      <li>
                        <a href="#" className="hover:text-gray-300">
                          Facebook
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-gray-300">
                          Twitter
                        </a>
                      </li>
                      <li>
                        <a href="#" className="hover:text-gray-300">
                          LinkedIn
                        </a>
                      </li>
                    </ul> */}
                  </div>
                  <div className="hidden md:block">
                    {/* <img
                      src="logo/chain.svg"
                      className="w-30 h-30 bg-white p-2 rounded-full logo"
                      alt="Logo"
                    /> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
        {/* Add more content or components for the additional information */}
      </div>
    </div>
  );
};
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>;

export default Map;

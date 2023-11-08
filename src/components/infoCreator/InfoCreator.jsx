import React, { useEffect, useState } from "react";
import { MapContainer, TileLayer, useMap, Marker, Popup } from "react-leaflet";
import Nominatim from "nominatim-geocoder";

const InfoCreator = () => {
  /* const [lat, setLat] = useState(null);
  const [lon, setLon] = useState(null);

  const geocoder = new Nominatim();

  const getCoordinate = async () => {
    await geocoder
      .search({ q: "Torino, Italy" })
      .then((response) => {
        console.log(response);
        setLat(response[0].lat);
        setLon(response[0].lon);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getCoordinate();
  }, []);*/

  return (
    <div className="mt-8 max-w-xs sm:max-w-sm md:max-w-screen-sm lg:max-w-screen-lg mx-auto flex flex-col items-center bg-white border border-gray-200 rounded-xl shadow lg:flex-row hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
      <img
        className="object-cover w-full lg:w-1/2 rounded-t-xl h-full lg:rounded-l-xl lg:rounded-r-none"
        src="https://images.pexels.com/photos/2860902/pexels-photo-2860902.jpeg?auto=compress&cs=tinysrgb&w=1280"
        alt=""
      />
      <div className="flex flex-col w-full h-full lg:w-1/2 justify-between p-4 leading-normal">
        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Informazioni Artista
        </h5>
        <p className="mb-3 text-center font-normal text-gray-700 dark:text-gray-400">
          John Snow
        </p>
        <div className="m-4 w-full grid grid-cols-3">
          <div className="flex flex-col items-center truncate">
            <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
              Nazione
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Italia
            </p>
          </div>
          <div className="flex flex-col items-center truncate">
            <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
              Regione
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Piemonte
            </p>
          </div>
          <div className="flex flex-col items-center truncate">
            <p className="mb-3 font-bold text-gray-700 dark:text-gray-400">
              Città
            </p>
            <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
              Torino
            </p>
          </div>
        </div>
        <p className="m-6 text-center font-normal text-gray-700 dark:text-gray-400">
          Indirizzo: Via del campo 12
        </p>

        <div className="h-56">
          {/*lat && (
            <MapContainer
              className="h-full"
              center={[lat, lon]}
              zoom={13}
              scrollWheelZoom={false}
            >
              <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
              />
              <Marker position={[lat, lon]}>
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            </MapContainer>
          )*/}
        </div>
      </div>
    </div>
  );
};

export default InfoCreator;

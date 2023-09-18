import Amenities from "@/components/Amenities";
import StarIcon from "@/components/StarIcon";
import TravelImages from "@/components/TravelImages";
import TravelWeather from "@/components/TravelWeather";
import { GET_SINGLE_TRAVEL } from "@/gql/getSingleTravel";
import { cmsConnect } from "@/utils/cmsConnector";
import React from "react";

export async function getData(slug) {
  const data = await cmsConnect(GET_SINGLE_TRAVEL, { slug: slug });

  return data;
}

export default async function OfferPage({ params }) {
  const { offer } = await getData(params.nazwa);

  const travelRating = () => {
    const items = [];

    for (let i = 0; i < offer.stars; i++) {
      items.push(i);
    }
    return items;
  };

  return (
    <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8 text-sm">
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">

          <div className="my-4">
            <h1 className="text-4xl font-bold">{offer.title}</h1>

            <div className="flex">
              {travelRating().map((item) => <StarIcon key={item}/>)}
            </div>

          </div>

          <TravelImages images={offer.images} />

          <div className="mt-10">
             <h3 className="text-3xl font-bold mb-2 custom-title">Atuty oferty</h3>
             <p>{offer.short}</p>

             <Amenities items={offer.amenities}/>
             
          </div>

          <div className="description" dangerouslySetInnerHTML={{__html: offer.description.html}}></div>


        </div>

        <div className="col-span-1">2</div>
      </div>

      <div className="my-10"> 
         <TravelWeather location={offer.location}/>
      </div>

    </div>
  );
}

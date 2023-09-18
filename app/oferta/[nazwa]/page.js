
import TravelImages from '@/components/TravelImages'
import { GET_SINGLE_TRAVEL } from '@/gql/getSingleTravel'
import { cmsConnect } from '@/utils/cmsConnector'
import React from 'react'



export async function getData (slug) {
    const data = await cmsConnect(GET_SINGLE_TRAVEL,{"slug":slug})

    return data
}


export default async function OfferPage({params}) {

    const {offer} = await getData(params.nazwa)
    

    console.log(offer.images[0])

  return (
    <div className='mx-auto max-w-7xl px-2 sm:px-6 lg:px-8'>

      <div className="grid grid-cols-3 gap-4">

        <div className="col-span-2">
           <TravelImages images={offer.images}/>
        </div>

        <div className="col-span-1">2</div>

     </div>

    </div>
  )
}

import { GET_SINGLE_TRAVEL } from '@/gql/getSingleTravel'
import { cmsConnect } from '@/utils/cmsConnector'
import React from 'react'


export async function getData (slug) {
    const data = await cmsConnect(GET_SINGLE_TRAVEL,{"slug":slug})

    return data
}


export default async function OfferPage({params}) {

    const data = await getData(params.nazwa)
    

    console.log(data)

  return (
    <div>page</div>
  )
}

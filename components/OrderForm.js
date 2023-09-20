"use client"
import { POST_NEW_ORDER } from '@/gql/postNewOrder'
import axios from 'axios'
import React, { useState } from 'react'

const OrderForm = () => {
  const [order, setOrder] = useState({
    persons: 2,
    start: "",
    end: "",
    finalPrice: 0,
    airport: "",
    food: "",
  })

  const handleChange = (e) => {

    

    setOrder({
        ...order,
        finalPrice: order.persons * 2000,
        [e.target.name]: e.target.name === "persons" ? Number(e.target.value) : e.target.value
    })
  }

  console.log(order)


  const handlePlaceOrder = async () => {

    const url = "https://api-eu-central-1-shared-euc1-02.hygraph.com/v2/clmoi6ocx2it701t98inn4p4n/master"
    // TODO ukryć klucz (nie chce działać .env)
    const token = "eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6ImdjbXMtbWFpbi1wcm9kdWN0aW9uIn0.eyJ2ZXJzaW9uIjozLCJpYXQiOjE2OTUwMjE0NzgsImF1ZCI6WyJodHRwczovL2FwaS1ldS1jZW50cmFsLTEtc2hhcmVkLWV1YzEtMDIuaHlncmFwaC5jb20vdjIvY2xtb2k2b2N4Mml0NzAxdDk4aW5uNHA0bi9tYXN0ZXIiLCJtYW5hZ2VtZW50LW5leHQuZ3JhcGhjbXMuY29tIl0sImlzcyI6Imh0dHBzOi8vbWFuYWdlbWVudC5ncmFwaGNtcy5jb20vIiwic3ViIjoiZGRjNDE3ZDUtMDFkMC00ZWM0LWE4MjAtODhhNzU0NTM2YmZmIiwianRpIjoiY2xtb2swdmQ3MmtqdDAxdWoyY3dhMjZnMCJ9.5WHGUmeF_YESNMEvtyYHc9nf20EUFlN7ATX8A8nrWJTBJ_EuhIFiD14sIWLvbT1BU-yXdyyfcvzXV7474gp7wNLPeFGTa5RyuGs5CjdTDVpn_sa77FA8B7B790r3sFn3ruT1WIXcTZ8QJmVfS84wDBy6fYEG_aCzG7uLg2Gx3vX0SzKDnkFg-_jYkeyYq-7_tkSczKpr5tTNNhj0ppVSGvxyQZ1KVF1auMCPi8AumbGmvoCMJeOE_EhoUz_GeCdDsaxE90jmVYsaBIyf-pL_VroUwYWxpBmDXu8T6XhJEV4sGJykWRV9CyHQMpR42TD6X6tXCbIjPeVFFuedLKeE4GFJUlwWhhy4A6_bh2zoE5d9BZ8guqs2uvXQjWGoFdJcYArH0WiPQhZWlNPm81XpXgz6rJViAb_pi50ePiTpx3YYLRHoyaniDBsyOgnhZktnFjB8S2YV7AmvRiafTDTDZXwPfWk8KbmPbnBxhXS-3wDV7qwcthyP9LjAXIuqcU_n9dd-VoImRJDtZIk-s_BmjTC0niTM3nkMY1Xa14GY8mMTL3w-Nn0npjgJbUy-pI74fI7r2rPD8e4zmcngGoyas7zZ8Gvu4oaOqszSwihObGseQxWGvacqdGZSS562b3txMBF5JChdabTCnG-ip9zkxKKjiDWecZaORK6QhaP99q0"


    if(
        order.persons < 1 || 
        !order.start ||
        !order.end ||
        !order.airport ||
        !order.food
    ) {
        console.log("Nie wypełniono wszystkich pól")
        return;
    }

    try {
        const response = await axios.post(
           url, 
           {
            query:POST_NEW_ORDER,
            variables:order
           },
           {
            headers: {
                "Content-Type" : "application/json",
                Authorization: `Bearer ${token}`
            }
           }
        )

        console.log(response.data)


    } catch (error) {
        console.log(error)
    }

  }


  return (
    <div>

        <form>
             <input onChange={handleChange} value={order.persons} type="number" name="persons" placeholder='Wpisz liczbę osób' />
             <br />
             <label htmlFor="">Wybierz datę wyjazdu</label>
             <input onChange={handleChange} value={order.start} type="date" name="start"/>
             <br/>
             <label htmlFor="">Wybierz datę powrotu</label>
             <input onChange={handleChange} value={order.end} type="date" name="end"/>
             <br />
             <select onChange={handleChange} name="airport">
                <option value="">Wybierz lotnisko</option>
                <option value="warszawa">Warszawa</option>
                <option value="krakow">Kraków</option>
                <option value="katowice">Katowice</option>
                <option value="wroclaw">Wrocław</option>
                <option value="rzeszow">Rzeszów</option>
             </select>
             <br />
             <select onChange={handleChange} name="food">
                <option value="">Wybierz wyżywienie</option>
                <option value="all_inclusive">All Inclusive</option>
                <option value="breakfast">Śniadania</option>
                <option value="dinner">Śniadania i obiadokolacje</option>
             </select>


        </form>

        <p>Do zapłaty: {order.finalPrice}</p>


        <button onClick={handlePlaceOrder}>Rezerwuj</button>
    </div>
  )
}

export default OrderForm
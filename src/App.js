import {useEffect, useState} from 'react'
import "./App.css"; 
import axios from 'axios'; 
import CardPrincipal from './CardPrincipal';
import TableCoins from './TableCoins';
import Card from './Card'
import Convert from './Convert';
import Footer from './Footer'

export default function App() {
  const [coins, setCoins] = useState([])
  const getData = async () =>{
    const res = await axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=4&page=1&sparkline=false&price_change_percentage=24h")
    console.log(res.data);
    setCoins(res.data);
  }
  useEffect(()=>{
    getData(); 
  }, [])
  return (
    <div className='App'>
      <main>
        <CardPrincipal/>
        <div className="cards_con">
          <Card/>
          <Card/>
          <Card/>
        </div>
      </main>
      <Convert/>
      <TableCoins coins={coins}/>
      <Footer/>
    </div>
  )
}

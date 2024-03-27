import React, { useEffect, useState } from 'react'  

const URL = "http://localhost:3000/products"
const Product = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        const getData = async () => {
            const res = await fetch(URL)
            const data = await res.json()
            setData(data)
        }
        getData()
    }, [])
  return (
    <div>
      {data.map((item) => {
          return(
              <div>
                  <h1>{item.name}</h1>
              </div>
          )
    })}
    </div>
  )
}

export default Product

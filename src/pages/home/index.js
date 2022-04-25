import { useEffect, useState } from "react";
import withIndexing from "src/components/HOC/withIndexing";
import ProductItem from "./components/ProductItem";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    getData();
  }, [])

  const getData = async () => {
    const url = 'https://fudapp-server.herokuapp.com/foods/';
    const resp = await fetch(url);
    const { data }= await resp.json();
    setProducts( data );
  }

  return (
    <div>
      <h1> HOME </h1>   
      <div className='card-img'>
        {
          products.map(data => (
            <ProductItem
              key={data.id}
              name={data.name}
              image={data.image}
            />
          ))
        }
      </div>
    </div>
  )
}

export default withIndexing(Home, 'home');
import React, { useState, useEffect } from 'react'
import { Image } from './image';
import './styles.css'
//import { useNavigate } from "react-router-dom";

const Home = ({ category }) => {

    const [images, setImages] = useState([]);

    useEffect(() => {
        getData();
    }, [])

    const getData = async () => {
        const url = 'http://localhost:7789/foods/';
        const resp = await fetch(url);
        const {data}= await resp.json();
        console.log(data)
        const products = data.map(data => {
            return {
                id: data.id,
                name: data.name,
                image: data.image
            }
        })

        console.log(products);
        setImages(products);
    }

/*     let navigate = useNavigate(); 
    const routeChangeLogin = () =>{ 
      let path = `/auth/login`; 
      navigate(path);
    }

    const routeChangeRegister = () =>{ 
        let path = `/auth/register`; 
        navigate(path);
      } */


    return (
        <>
           {/*  <button onClick={routeChangeLogin}>LOGIN</button>
            <button onClick={routeChangeRegister}>REGISTER</button> */}
            <h1 className='title'>PLATOS</h1>
            <div className='card-img'>

                {
                    images.map(data => (
                        <Image
                            key={data.id}
                            {...data }
                        />
                    ))
                }

            </div>

        </>
    )
}

export default Home;
import React from "react";
// import { BsThreeDots } from "react-icons/bs";
// import { FaEthereum } from "react-icons/fa";
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import { Route, Routes } from "react-router-dom"
import { useState, useEffect } from 'react'
import toy from '../json/toy.json'
import clone from '../json/clone.json'
import styled from "styled-components";
import "../components/shop.css";
import ScrollToTop from "react-scroll-to-top";
import { ReactComponent as MySVG } from "../image/capslock.fill.svg";
import Login from "./Login"
import marketplace1 from "../image/profile.png";
import marketplace2 from "../image/02.png";
import marketplace3 from "../image/03.png";
import marketplace4 from "../image/04.png";
import marketplace5 from "../image/05.png";
import marketplace6 from "../image/06.png";
import marketplace7 from "../image/07.png";
import marketplace8 from "../image/08.png";
import Button from "./Button";
import ClipLoader from "react-spinners/ClipLoader";






export function Profile(products) {
  

  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])

  

  return (

    <>
      <ScrollToTop smooth component={<MySVG />} />
      <div className="row1">
        <img src={marketplace1} alt="marketplace" />
        <h1>Andy</h1>
        </div>
        <div className="row2">
            <h4>Post</h4>
            <h4>Collections</h4>
            <h4>Like</h4>
            <h4>About</h4>
            <h4>Tag</h4>
        </div>
        
      

      <div className="container-box1">
      {
        loading ?
          <ClipLoader
            color={'#6F2ADD'}
            loading={loading}

            size={80}

          />
          :
          
          <div className="marketPlaces">
          {toy.map(({ image1, image2, image3, img, name, auther, price, item, handleClick}) => {
            return (
              <div className="marketplace">
                <div className="image">
                    <img src={img} alt="marketplace" />
                </div>
                
                <div className="name">
                

                </div>
                

                
                
              </div>
            );
          })}
        </div>
      };
        
      </div>

    </>


  );
}

export default Profile;


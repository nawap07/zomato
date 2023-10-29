import React from 'react'
import "./topBrands.css";
import NextArrow from '../../common/carousel/nextArrow';
import PreviousArrow from '../../common/carousel/previousArrow';
import Slider from 'react-slick';

const brandsList=[
    {
        id:1,
        time:"35 sec",
        title:"La Pino'z Pizza",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/144bce4c7101359f0c0b54b8fc761a6f_1648017785.png?output-format=webp",
    },
    {
        id:2,
        time:"25 sec",
        title:"Domino's Pizza",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/5caf38856d23347b351bb7abf97134d3_1521806923.png?output-format=webp",
    },
    {
        id:3,
        time:"39 sec",
        title:"Biryani Mahal",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/c505604a9a42be5e6d3644e4a28acd84_1678081788.png?output-format=webp",
    },
    {
        id:4,
        time:"28 sec",
        title:"KFC",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/466f8fc74274145f3b21795c3d21816d_1589433965.png?output-format=webp",
    },
    {
        id:5,
        time:"28 sec",
        title:"Pizza hut",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/2f32014b8ff892ba75217e3ef050e1bd_1648017751.png?output-format=webp",
    },
    {
        id:6,
        time:"45 sec",
        title:"Biryani By Kilo",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/0c45494107cfd8e2d6e9bd855bfec678_1669019617.png?output-format=webp",
    },
    {
        id:7,
        time:"20 sec",
        title:"Chicago Pizza",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/1dc9563533730bc3829922fa50c9814b_1654533773.png?output-format=webp",
    },
    {
        id:8,
        time:"42 sec",
        title:"Barbeque Nat",
        cover:"https://b.zmtcdn.com/data/brand_creatives/logos/5f9362ffa7a5a54258ce9b7ed6ed2334_1625245208.png?output-format=webp",
    },
];
const settings = {
    infinite:false,
    slidesToShow: 6,
    slidesToScroll: 1,
    nextArrow:  <NextArrow/>,
    prevArrow: <PreviousArrow/>,
  };

const TopBrands = () => {
  return (
    <div className='top-brands max-width'>
        <div className='collection-title'>Top brands for you</div>
        <Slider {...settings}>
            {
                brandsList.map((lists)=>{
                    return (
                        <div key={lists.id}>
                            <div className="top-brands-cover">
                                <img src={lists.cover} alt={lists.title} className='top-brands-images' />
                            </div>
                            <div className='divCenter font'>{lists.time}</div>
                            <div className='divCenter'>{lists.title}</div>
                        </div>
                    )
                })
            }
        </Slider>
    </div>
  )
}

export default TopBrands;
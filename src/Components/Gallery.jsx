import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';

import data from './constant/Gallery'
export default function StandardImageList() {
  const [expanded, setExpanded] = React.useState(false)
  const dataForDisplay = expanded ? data : data.slice(0, 6)
  return (
    <div id='gallery' className='md:px-[5%] max-md:px-[3%] my-[2rem]'>
      <h1 className='text-[35px] font-[700] capitalize text-center tracking-wider text-orange-400 mb-4'><span className='text-black'>Our</span> Gallery</h1>
      <div className='max-md:hidden'>
        <ImageList sx={{ width:'100%', height: '100%',columnCount:{
      xl:4,
      lg:4,
      md:2,
      sm:1,
      xs:1,
      xxs:1,
    } }} cols={3} >
      {dataForDisplay.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
    <div className='md:hidden'>
        <ImageList sx={{ width:'100%', height: '100%',columnCount:{
      xl:4,
      lg:4,
      md:2,
      sm:1,
      xs:1,
      xxs:1,
    } }} cols={2} >
      {dataForDisplay.map((item) => (
        <ImageListItem key={item.img}>
          <img
            srcSet={`${item.img}?w=164&h=164&fit=crop&auto=format&dpr=2 2x`}
            src={`${item.img}?w=164&h=164&fit=crop&auto=format`}
            alt={item.title}
            loading="lazy"
          />
        </ImageListItem>
      ))}
    </ImageList>
    </div>
    <button type="button" className='text-white font-bold bg-orange-400 px-2 py-2 mt-[2rem] justify-center items-center ml-[47%]' onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Show Less' : 'Show More'} 
        </button>
    </div>
  );
}


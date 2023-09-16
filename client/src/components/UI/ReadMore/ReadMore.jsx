import React from 'react';
import { Link } from 'react-router-dom';
import sl from './readMore.module.scss';



const ReadMore = ({children, img, className, ...props}) => {
  return (
    <Link {...props} className={`${sl.read__more} ${className}`}>
        {children}
        <img src={img} className='self-center'/>
    </Link>
    
  )
}

export default ReadMore
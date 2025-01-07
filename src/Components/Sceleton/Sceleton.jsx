import React from 'react';
import ContentLoader from "react-content-loader"

const Sceleton = (props) => (
    <ContentLoader 
        className='sceleton'
        speed={3}
        width={650}
        height={60}
        viewBox="0 0 650 60"
        backgroundColor="#d5d5d5"
        foregroundColor="#ededed"
        {...props}
    >
        <rect x="-10" y="0" rx="0" ry="0" width="650" height="60" />
    </ContentLoader>
    
)

export default Sceleton
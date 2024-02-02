import React from 'react'
import { DATAPOST } from "@/DATA";
import Image from 'next/image';
import Category from './components/category/Category';

const Blogs = () => {
  return (
    <div>
      <Category />
        {DATAPOST.map(item => (
            <div key={item.id}>
                <Image src="/images/1.png" width={300} height={300} title={item.title} alt={item.slug}/>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
            </div>
        ))}
    </div>
  )
}

export default Blogs

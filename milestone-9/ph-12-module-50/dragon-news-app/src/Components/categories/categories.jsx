import React, { use } from 'react';
import { NavLink } from 'react-router';



const categoriesPromise = fetch('/categories.json').then((res)=> res.json());
const Categories = () => {
   
   
  const categories = use(categoriesPromise);
    return (
        
        <div className='grid grid-cols-1 gap-3 '>
            <h1 className='font-bold text-lg'>Categories({categories.length})</h1>
            {
                categories.map((category)=><NavLink key={category.id} to={`/category/${category.id}`} className='cat  hover:bg-base-200 text-lg font-semibold text-accent px-3 w-[70%]'>{category.name}</NavLink>)
            }
           
        </div>
    );
};

export default Categories;

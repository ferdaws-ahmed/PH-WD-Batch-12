import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';

import NewsCard from '../newsCart/newsCart';

const CategoryNews = () => {
    const  {id} = useParams();
    const data = useLoaderData();
    
    const [categoryNews, setCategoryNews] = useState([]);

    useEffect(()=>{

        if(id == '0'){
            setCategoryNews(data)
            return;
        }
        
        else if( id == '1'){
            const filteredNews = data.filter(news => news.others.is_today_pick == true)
                setCategoryNews(filteredNews);
            
        }
        
        else{
            const filteredNews = data.filter(news=> news.category_id == id);
         setCategoryNews(filteredNews)
        }

        
    },[id, data])
    return (
        <div>
            <h1 className='text-lg font-bold mb-5'>Total ({categoryNews.length}) news found</h1>

            <div>
                {
                    categoryNews.map((news)=> <NewsCard key={news.id} news={news}></NewsCard>)
                }
            </div>
        </div>
    );
};

export default CategoryNews;

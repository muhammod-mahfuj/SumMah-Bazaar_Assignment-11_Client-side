import React, { useEffect, useState } from 'react';
import Query from '../Shared/Query';


const RecentQueries = () => {
    const [queries,setQueries] = useState([]);

 
    useEffect(() => {
       fetch("https://summah-bazaar-server-4bd2hiudw-mahfuj543s-projects.vercel.app/queries")
       .then(res => res.json())
       .then(data => setQueries(data))
    },[])
    
          const handleDeleteFromList = (id) => {
            setQueries(prev => prev.filter(q => q._id !== id));
            };

    return (
        <div className='my-28 '>
            <div className="text-center my-12 font-poppins">
                <h2 className="text-4xl font-bold mb-4">🆕 Recent Product Queries</h2>
                <p className="text-lg text-gray-600 leading-relaxed">
                    See what our users are currently asking about their favorite tech items. <br />
                    Discover trending questions and join the conversation by sharing your own product queries today!
                </p>
            </div>
            <div className='flex gap-7 justify-around flex-wrap'>
                {
                    queries.map(query => <Query key={query._id} onDelete={() => handleDeleteFromList(query._id)} query={query} ></Query>)
                }
            </div>
        </div>
    );
};

export default RecentQueries;
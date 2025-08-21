import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Query from '../Shared/Query';
import AuthContext from '../contexts/AuthContexts/AuthContext';


const MyQueries = () => {
        const [queries,setQueries] = useState([]);
        
        const { users } = useContext(AuthContext);
        console.log(users, users.email)

        const handleDeleteFromList = (id) => {
            setQueries(prev => prev.filter(q => q._id !== id));
            };


        useEffect(() => {
           fetch(`http://localhost:3000/queries?email=${users.email}`) //  just current user queries
           .then(res => res.json())
           .then(data => setQueries(data))
        },[users.email]);
          console.log(queries)
    return (
        <div>
            <div className="hero min-h-96"
                    style={{
                        backgroundImage: "url(https://img.daisyui.com/images/stock/photo-1507358522600-9f71e620c44e.webp)",
                    }}>
                    <div className="hero-overlay bg-opacity-60"></div>
                    <div className="hero-content text-neutral-content text-center">
                        <div className="max-w-xl">
                            <h1 className="mb-6 text-5xl font-bold">My Queries</h1>
                            <p className="mb-6">
                                Here you can view and manage all the product queries you’ve added to SumMah Bazaar. Stay organized, track your requests, and easily update or 
                                remove queries anytime. Whether you're looking for tech alternatives or product advice, your queries are listed here for quick access.
                            </p>
                            <Link to="/myQueries/addQuery" className="btn btn-primary">Add Queries</Link>
                        </div>
                    </div>
            </div>
            <div className='flex my-20 gap-7 justify-around flex-wrap'>
                {
                   queries.map(query => <Query key={query._id} onDelete={() => handleDeleteFromList(query._id)} query={query}></Query>)
                }
            </div>
        </div>
    );
};

export default MyQueries;
import React, { useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';

const Queries = () => {
    const allQueries = useLoaderData();

     const [queries,setQueries] = useState(allQueries);


    return (


        <div className="max-w-7xl mx-auto my-10 px-4">
            <div className='text-center mb-14'>
                       <h2 className="text-4xl font-bold text-center mb-4">📋 All Queries</h2>
                       <p className='text-lg'>There are all queries made users. <br /> Here users can recommend their products</p>
            </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                {
                    queries.map(query => (
                        <div key={query._id} className="card bg-base-100 shadow-xl">
                        <figure>
                            <img src={query.producturl} alt={query.productName} className="h-56 w-full object-cover" />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{query.productName}</h2>
                            <p><span className="font-medium">Brand:</span> {query.productBrand}</p>
                            <p className="text-sm text-gray-500 mb-2">{query.queryTitle}</p>
                            <p className="text-sm text-gray-700">🔥 <strong>{query.recommendationCount}</strong> Recommendations</p>

                            <div className="card-actions justify-end mt-4">
                            <Link to={`/myQueries/${query._id}`} className="btn btn-sm btn-success">
                                👍 Recommend
                            </Link>
                            </div>
                        </div>
                        </div>
                    ))
                }
        </div>
    </div>
    );
};

export default Queries;

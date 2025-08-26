import React, { useContext, useEffect, useState } from 'react';
import AuthContext from '../contexts/AuthContexts/AuthContext';

const RecommendationForMe = () => {
    const {users} = useContext(AuthContext);
    const [recommendations, setRecommendations] = useState([]);

    useEffect(() => {
       if(users?.email){
           fetch(`https://summah-bazaar-server-4bd2hiudw-mahfuj543s-projects.vercel.app/recommendations?userEmail=${users.email}`)
           .then(res => res.json())
           .then(data => setRecommendations(data))
       }
    },[users?.email]);
    

    console.log(recommendations);firebase 

    return (
     <div className='my-10'>
      <h2 className='text-4xl font-bold text-center mb-5'>Recommendations For My Queries</h2>
      <div className="overflow-x-auto">
        <table className="w-11/12 mx-auto border border-gray-300">
          <thead className="bg-gray-100">
            <tr className="text-center">
              <th className="py-2 px-4 border">Recommender</th>
              <th className="py-2 px-4 border">Product Name</th>
              <th className="py-2 px-4 border">Title</th>
              <th className="py-2 px-4 border">Reason</th>
              <th className="py-2 px-4 border">Query Title</th>
              <th className="py-2 px-4 border">Date</th>
            </tr>
          </thead>
          <tbody>
            {recommendations.map((rec) => (
              <tr key={rec._id} className="text-sm text-center">
                <td className="py-2 px-4 border">{rec.RecomUserName} <br />({rec.RecomUserEmail})</td>
                <td className="py-2 px-4 border">{rec.productName}</td>
                <td className="py-2 px-4 border">{rec.title}</td>
                <td className="py-2 px-4 border">{rec.boycottReason}</td>
                <td className="py-2 px-4 border">{rec.queryTitle}</td>
                <td className="py-2 px-4 border">
                  {new Date(rec.date).toLocaleString()}
                </td>
              </tr>
            ))}
            {recommendations.length === 0 && (
              <tr>
                <td colSpan="6" className="text-center py-6 text-gray-500">
                  No recommendations found for your queries.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default RecommendationForMe;
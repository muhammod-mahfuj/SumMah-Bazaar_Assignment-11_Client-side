import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Recommendations from '../Recommendations/Recommendations';

const QueriesDetails = () => {
    const Query = useLoaderData();

    const {date,productBrand,productName,producturl,queryTitle,recommendationCount,userEmail,userImage,userName,whyBoycott,_id} = Query;
   

 return (
    <div className="w-11/12 md:w-2/3 lg:w-1/2 mx-auto my-14 font-poppins">
      <div className='font-bold text-center text-5xl my-10'> Query Details</div>
      <div className="card bg-white shadow-lg rounded-xl overflow-hidden border border-gray-200">
        <figure className="h-[320px] overflow-hidden">
          <img
            src={producturl} 
            alt={productName}
            className="h-full w-full object-cover transition-transform duration-300 hover:scale-105"
          />
        </figure>

        <div className="card-body p-6">
          <h2 className="text-3xl font-bold text-gray-800 mb-3">
            {productName}
          </h2>
          <p className="text-gray-500 text-base mb-1"><span className='font-bold text-xl'>Brand : </span> {productBrand}</p>

          <div className="my-4">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              📝 Query
            </h3>
            <p className="text-gray-700">{queryTitle}</p>
          </div>

          <div className="my-4">
            <h3 className="text-xl font-semibold text-gray-700 mb-2">
              ❌ Boycotting Reason
            </h3>
            <p className="text-gray-700 leading-relaxed">{whyBoycott}</p>
          </div>

          <div className="flex items-center gap-4 mt-6">
            <img
              src={userImage}
              alt={userName}
              className="w-14 h-14 rounded-full object-cover border-2 border-gray-300"
            />
            <div>
              <p className="text-base font-semibold text-gray-800">
                {userName}
              </p>
              <p className="text-sm text-gray-500">{userEmail}</p>
            </div>
          </div>

          <div className="flex justify-between items-center mt-6 border-t pt-4">
            <p className="text-sm text-gray-500">
              📅 {new Date(date).toLocaleDateString()}
            </p>
            <p className="text-orange-500 font-semibold text-sm">
              🔥 {recommendationCount} Recommendations
            </p>
          </div>
        </div>
      </div>
      <div>
        <div>
          <Recommendations Query={Query}></Recommendations>
        </div>
      </div>
    </div>
  );
};

export default QueriesDetails;
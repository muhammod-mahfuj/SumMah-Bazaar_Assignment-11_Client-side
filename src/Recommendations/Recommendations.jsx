import React, { useContext } from 'react';
import AuthContext from '../contexts/AuthContexts/AuthContext';

const Recommendations = ({Query}) => {
    const {date,productBrand,productName,producturl,queryTitle,recommendationCount,userEmail,userImage,userName,whyBoycott,_id} = Query;

    const {users} = useContext(AuthContext);

    const handleRecommendations = (e) => {
         e.preventDefault();
         const form = e.target;

         const recommendation = {
                title : form.title.value,
                productName : form.productname.value,
                productImage : form.productImage.value,
                boycottReason : form.reason.value,
                queryId : _id,
                queryTitle : queryTitle,
                queryProductName : productName,
                userName : userName,
                userEmail : userEmail,
                RecomUserName : users?.displayName,
                RecomUserEmail : users?.email,
                date: new Date(),
         };

         fetch("https://summah-bazaar-server-4bd2hiudw-mahfuj543s-projects.vercel.app/recommendations", {
            method: "POST",
            headers: {
                "content-type" : "application/json"
             },
            body: JSON.stringify(recommendation)
         })
         .then(res => res.json())
         .then(data => {
            console.log("data poosted successfully", data);
            form.reset();
        })
    }

return (
    <div className="bg-white p-6 shadow-md rounded-lg my-10 max-w-7xl mx-auto">
      <h2 className="text-3xl font-bold mb-7 text-center">Add a Recommendation</h2>
      <form onSubmit={handleRecommendations} className="space-y-4">
        <input
          type="text"
          name="title"

          placeholder="Recommendation Title"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="productname"

          placeholder="Recommended Product Name"
          className="input input-bordered w-full"
          required
        />
        <input
          type="text"
          name="productImage"

          placeholder="Recommended Product Image URL"
          className="input input-bordered w-full"
          required
        />
        <textarea
          name="reason"

          placeholder="Why do you recommend this product?"
          className="textarea textarea-bordered w-full"
          required
        ></textarea>
        <button type="submit" className="btn btn-primary w-full">Add Recommendation</button>
      </form>
    </div>
  );
};

export default Recommendations;
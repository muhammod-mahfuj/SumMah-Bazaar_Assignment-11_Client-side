import React, { useContext } from 'react';
import AuthContext from '../contexts/AuthContexts/AuthContext';

const AddQuery = () => {
    const {users} = useContext(AuthContext);
    
    const handleProductQuery = (e) => {
         e.preventDefault();

         const form = e.target;
         const queryData = {
          productName : form.name.value,
          productBrand :form.brand.value,
          producturl : form.url.value,
          queryTitle : form.queryTitle.value,
          whyBoycott : form.whyBoycott.value,
          date: new Date(),
          recommendationCount: 0,
          userName : users.displayName,
          userEmail : users.email,
          userImage : users.photoURL
         }

         fetch("https://summah-bazaar-server-4bd2hiudw-mahfuj543s-projects.vercel.app/queries", {
             method:"POST",
             headers: {
                "content-type" : "application/json"
             },
             body: JSON.stringify(queryData)
         })
         .then(res => res.json())
         .then(data => {
            console.log("successfull",data)
            form.reset();
        })
    }

    return (
        <div>
           <div className="max-w-3xl mx-auto my-10 p-8 rounded-lg shadow-lg bg-white font-poppins">
                <h2 className="text-3xl font-bold mb-6 text-center">📝 Add a New Product Query</h2>
                
                <form onSubmit={handleProductQuery} className="space-y-5">
                    <input
                    type="text"
                    name='name'
                    placeholder="Product Name"
                    className="input input-bordered w-full"
                    required
                    />

                    <input
                    type="text"
                    name='brand'
                    placeholder="Product Brand"
                    className="input input-bordered w-full"
                    required
                    />

                    <input
                    type="text"
                    name='url'
                    placeholder="Product Image URL"
                    className="input input-bordered w-full"
                    required
                    />

                    <input
                    type="text"
                    name='queryTitle'
                    placeholder="Query Title (e.g., Is there a better product with similar quality?)"
                    className="input input-bordered w-full"
                    required
                    />

                    <textarea
                    name='whyBoycott'
                    placeholder="Boycotting Reason Details"
                    className="textarea textarea-bordered w-full"
                    rows="4"
                    required
                    ></textarea>

                    <button type="submit" className="btn btn-primary w-full">
                    ➕ Add Query
                    </button>
                </form>
         </div>
    </div>
    );
};

export default AddQuery;
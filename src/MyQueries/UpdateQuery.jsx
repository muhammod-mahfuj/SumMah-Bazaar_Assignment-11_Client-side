import React, { useContext } from 'react';
import AuthContext from '../contexts/AuthContexts/AuthContext';
import { useLoaderData } from 'react-router-dom';

const UpdateQuery = () => {
   const {users} = useContext(AuthContext);
   const query =useLoaderData();
  

    const handleUpdateQuery = (e) => {
         e.preventDefault();

         const form = e.target;
         const queryData = {
          productName : form.name.value,
          productBrand :form.brand.value,
          producturl : form.url.value,
          queryTitle : form.queryTitle.value,
          whyBoycott : form.whyBoycott.value,
          date: new Date(),
         }

         fetch(`http://localhost:3000/queries/${query._id}`, {
             method:"PATCH",
             headers: {
                "content-type" : "application/json"
             },
             body: JSON.stringify(queryData)
         })
         .then(res => res.json())
         .then(data => {
            console.log("successfully Update",data)
            form.reset();
        })
    }

    return (
        <div>
           <div className="max-w-3xl mx-auto my-10 p-8 rounded-lg shadow-lg bg-white font-poppins">
                <h2 className="text-3xl font-bold mb-6 text-center">📝Update The Product Query</h2>
                
                <form onSubmit={handleUpdateQuery} className="space-y-5">
                    <input
                    type="text"
                    name='name'
                    placeholder="Product Name"
                    className="input input-bordered w-full"
                    defaultValue={query.productName}
                    required
                    />

                    <input
                    type="text"
                    name='brand'
                    placeholder="Product Brand"
                    className="input input-bordered w-full"
                     defaultValue={query.productBrand}
                    required
                    />

                    <input
                    type="text"
                    name='url'
                    placeholder="Product Image URL"
                    className="input input-bordered w-full"
                     defaultValue={query.producturl}
                    required
                    />

                    <input
                    type="text"
                    name='queryTitle'
                    placeholder="Query Title (e.g., Is there a better product with similar quality?)"
                    className="input input-bordered w-full"
                     defaultValue={query.queryTitle}
                    required
                    />

                    <textarea
                    name='whyBoycott'
                    placeholder="Boycotting Reason Details"
                    className="textarea textarea-bordered w-full"
                     defaultValue={query.whyBoycott}
                    rows="4"
                    required
                    ></textarea>

                    <button type="submit" className="btn btn-primary w-full">
                    ➕ Update Query
                    </button>
                </form>
         </div>
    </div>
    );
};

export default UpdateQuery;
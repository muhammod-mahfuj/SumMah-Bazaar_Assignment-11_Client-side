import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Swal from 'sweetalert2'

const MyRecommendations = () => {
   const recommendations = useLoaderData();
   const [recoms, setRecoms] = useState(recommendations)

//  const {title,productName,productImage,boycottReason,queryId,queryTitle,queryProductName,userName,userEmail,RecomUserName,RecomUserEmail,date} = recommendations;

     const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
            }).then((result) => {
            if (result.isConfirmed) {
               fetch(`https://summah-bazaar-server-4bd2hiudw-mahfuj543s-projects.vercel.app/recommendations/${id}`, {
                method: "DELETE"
               })
               .then( res => res.json())
               .then(data => {
                if(data.deletedCount > 0) {
                      Swal.fire({
                        title: "Deleted!",
                        text: `Your file has been deleted.`,
                        icon: "success"
                        });
                        console.log("successfully deleted");
                        setRecoms(prev => prev.filter(re => re._id !== id))
                    };

               })
             
            }
        });
     }

   

    return (
        <div>
            <div className='my-20'>
                <h2 className='font-bold text-5xl text-center mb-5'> Recommendations </h2>

                    <table className="w-3/4 border border-gray-300 my-8 mx-auto">
                        <thead className="bg-gray-100">
                        <tr>
                            <th className="py-2 px-4 border">Product Image</th>
                            <th className="py-2 px-4 border">Product Name</th>
                            <th className="py-2 px-4 border">Title</th>
                            <th className="py-2 px-4 border">Reason</th>
                            <th className="py-2 px-4 border">Query Title</th>
                            <th className="py-2 px-4 border">Date</th>
                            <th className="py-2 px-4 border">Action</th>
                        </tr>
                        </thead>
                        <tbody>
                        {recoms.map(rec => (
                            <tr key={rec.queryId} className="text-sm text-center">
                            <td className="py-2 px-4 border">
                                
                                <img
                                src={rec.productImage}
                                alt={rec.productName}
                                className="h-10 mx-auto object-cover"
                                />
                            </td>
                            <td className="py-2 px-4 border">{rec.productName}</td>
                            <td className="py-2 px-4 border">{rec.title}</td>
                            <td className="py-2 px-4 border">{rec.boycottReason}</td>
                            <td className="py-2 px-4 border">{rec.queryTitle}</td>
                            <td className="py-2 px-4 border">
                                {new Date(rec.date).toLocaleString()}
                            </td>
                            <td className="py-2 px-4 border">
                                <button
                                className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                                 onClick={() => handleDelete(rec._id)}
                                >
                                Delete
                                </button>
                            </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
            </div>
        </div>
    );
};

export default MyRecommendations;
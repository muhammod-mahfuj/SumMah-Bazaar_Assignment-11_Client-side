
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2'

const Query = ({ query ,onDelete }) => {
    

    const {productName,productBrand,producturl,queryTitle,whyBoycott,date, userName,userEmail,userImage,recommendationCount,_id} = query;

    const HandleDelete = () => {

      
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
                 fetch(`http://localhost:3000/queries/${_id}`,{
                    method: "DELETE"
                  })
                  .then(res => res.json())
                  .then(data => {
                    if(data.deletedCount > 0) {
                      Swal.fire({
                        title: "Deleted!",
                        text: "Your file has been deleted.",
                        icon: "success"
                      });
                 onDelete(_id);
              }
            });
        }
       })
    } 


return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src={producturl}
          alt={productName}
          className="h-56 w-full object-cover"
        />
      </figure>
      <div className="card-body font-poppins">
        <h2 className="card-title">{productName}</h2>
        <p className="text-gray-500 text-sm">Brand: {productBrand}</p>
        <p className="font-semibold mt-2">{queryTitle}</p>
        <p className="text-sm text-gray-600 mb-2">Reason: {whyBoycott}</p>

        <div className="flex items-center gap-3 mt-4">
          <img
            src={userImage}
            alt={userName}
            className="w-10 h-10 rounded-full object-cover border"
          />
          <div>
            <p className="text-sm font-medium">{userName}</p>
            <p className="text-xs text-gray-500">{userEmail}</p>
          </div>
        </div>

        <div className="mt-4 flex justify-between items-center">
          <p className="text-sm text-gray-500">📅 {new Date(date).toLocaleDateString()}</p>
          <p className="text-sm text-orange-500 font-semibold">
            🔥 {recommendationCount} Recommendations
          </p>
        </div>

       <div className="card-actions justify-end mt-4 flex flex-wrap gap-2">
        <Link to={`/myQueries/${_id}`} className="btn btn-sm btn-info">View Details</Link>
        <Link to={`/update/${_id}`} className="btn btn-sm btn-warning">Update</Link>
        <button onClick={HandleDelete} className="btn btn-sm btn-error">Delete</button>
      </div>
      </div>
    </div>
  );
};

export default Query;
import { useState } from "react";

function FarmerCard({ farmer }) {
  const [showModal, setShowModal] = useState(false);

  return (
    <>
      <div className="bg-white rounded-xl shadow-md hover:shadow-xl transition p-5">

        <h3 className="text-xl font-semibold text-gray-800">
          {farmer.name}
        </h3>

        <p className="text-gray-500 mt-1">
          📍 {farmer.location}
        </p>

        <p className="mt-2 text-green-600 font-bold">
          ${farmer.price}
        </p>

        <button
          onClick={() => setShowModal(true)}
          className="mt-4 w-full bg-emerald-500 text-white py-2 rounded-lg hover:bg-emerald-600 transition"
        >
          Send Request
        </button>
      </div>

      {/* Request Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center">
          <div className="bg-white p-6 rounded-lg w-96">

            <h2 className="text-lg font-bold mb-4">Send Request</h2>

            <input
              type="number"
              placeholder="Enter Quantity"
              className="w-full p-2 border rounded mb-4"
            />

            <div className="flex justify-end space-x-3">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded"
              >
                Cancel
              </button>

              <button className="px-4 py-2 bg-green-600 text-white rounded">
                Confirm
              </button>
            </div>

          </div>
        </div>
      )}
    </>
  );
}

export default FarmerCard;

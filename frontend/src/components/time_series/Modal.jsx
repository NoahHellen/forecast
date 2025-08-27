import React, { useRef } from "react";
import { useDatabase } from "../../state/api";
import { DollarSignIcon, PlusCircleIcon } from "lucide-react";

function Modal() {
  const { addRow, formData, setFormData, loading } = useDatabase();

  const dialogRef = useRef(null);

  const handleSubmit = async (event) => {
    try {
      await addRow(event);
    } catch (error) {
      console.error(error);
    } finally {
      dialogRef.current.close();
    }
  };

  return (
    <dialog id="modal" ref={dialogRef} className="modal">
      <div className="modal-box">
        {/* Close button. */}
        <form method="dialog">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
            X
          </button>
        </form>

        {/* Form title. */}
        <div className="flex justify-between items-center">
          <h3 className="font-bold"> Append data set </h3>
        </div>
        <div className="flex justify-center">
          <input type="file" className="file-input file-input-ghost" />
        </div>

        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid gap-6">
            {/* Date */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">Date</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                  <DollarSignIcon className="size-5" />
                </div>
                <input
                  type="date"
                  className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200"
                  value={formData.date}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      date: event.target.value,
                    })
                  }
                />
              </div>
            </div>

            {/* Price */}
            <div className="form-control">
              <label className="label">
                <span className="label-text text-base font-medium">Price</span>
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-base-content/50">
                  <DollarSignIcon className="size-5" />
                </div>
                <input
                  type="number"
                  min="0.00"
                  step="0.01"
                  placeholder="0.00"
                  className="input input-bordered w-full pl-10 py-3 focus:input-primary transition-colors duration-200"
                  value={formData.price}
                  onChange={(event) =>
                    setFormData({
                      ...formData,
                      price: event.target.value,
                    })
                  }
                />
              </div>
            </div>
          </div>

          {/* Form actions */}
          <div className="modal-action">
            <form method="dialog">
              <button className="btn btn-ghost">Cancel</button>
            </form>
            <button
              type="submit"
              className="btn btn-primary min-w-[120px]"
              disabled={!formData.date || !formData.price || loading}
            >
              {loading ? (
                <span className="loading loading-spinner loading-sm" />
              ) : (
                <>
                  <PlusCircleIcon className="size-5 mr-2" />
                  Append data set
                </>
              )}
            </button>
          </div>
        </form>
      </div>

      {/* Click anywhere to close */}
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default Modal;

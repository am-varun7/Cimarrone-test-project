import { useState } from "react";
import { applyLeave } from "../../api/employeeApi";

const ApplyLeaveForm = ({ onSuccess }) => {
  const [form, setForm] = useState({
    reason: "",
    startDate: "",
    endDate: "",
  });

  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });

    setError("");
  };

  const getDays = () => {
    if (!form.startDate || !form.endDate) return 0;

    const start = new Date(form.startDate);
    const end = new Date(form.endDate);

    const diff =
      Math.ceil(
        (end - start) /
          (1000 * 60 * 60 * 24)
      ) + 1;

    return diff > 0 ? diff : 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (!form.reason.trim()) {
        return setError(
          "Please enter a reason."
        );
      }

      if (!form.startDate) {
        return setError(
          "Please select start date."
        );
      }

      if (!form.endDate) {
        return setError(
          "Please select end date."
        );
      }

      if (
        new Date(form.endDate) <
        new Date(form.startDate)
      ) {
        return setError(
          "End date cannot be before start date."
        );
      }

      const today = new Date();

      today.setHours(0, 0, 0, 0);

      if (
        new Date(form.startDate) < today
      ) {
        return setError(
          "Cannot apply leave for past dates."
        );
      }

      await applyLeave({
        reason: form.reason,
        startDate: form.startDate,
        endDate: form.endDate,
      });

      setSubmitted(true);

      setError("");

      setForm({
        reason: "",
        startDate: "",
        endDate: "",
      });

      if (onSuccess) {
        onSuccess();
      }

      setTimeout(() => {
        setSubmitted(false);
      }, 3000);

    } catch (error) {
      setError(
        error.message ||
          "Failed to submit leave request"
      );
    }
  };

  return (
    <div>
      <h3 className="text-base font-semibold text-gray-800 mb-3">
        Apply for Leave
      </h3>

      <div className="bg-white rounded-xl border border-gray-200 p-5 shadow-sm">

        {submitted && (
          <div className="mb-4 bg-green-50 border border-green-200 text-green-700 text-sm px-4 py-2.5 rounded-lg">
            Leave request submitted successfully!
          </div>
        )}

        {error && (
          <div className="mb-4 bg-red-50 border border-red-200 text-red-600 text-sm px-4 py-2.5 rounded-lg">
            {error}
          </div>
        )}

        <form
          onSubmit={handleSubmit}
          className="space-y-4"
        >

          <div>
            <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
              Reason For Leave
            </label>

            <textarea
              name="reason"
              value={form.reason}
              onChange={handleChange}
              rows={3}
              placeholder="Enter leave reason..."
              className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                Start Date
              </label>

              <input
                type="date"
                name="startDate"
                value={form.startDate}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                End Date
              </label>

              <input
                type="date"
                name="endDate"
                value={form.endDate}
                onChange={handleChange}
                className="w-full border border-gray-200 rounded-lg px-3 py-2 text-sm"
              />
            </div>

          </div>

          {getDays() > 0 && (
            <p className="text-xs text-blue-600 font-medium">
              Duration: {getDays()} day
              {getDays() > 1 ? "s" : ""}
            </p>
          )}

          <button
            type="submit"
            className="bg-blue-600 hover:bg-blue-700 text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors"
          >
            Submit Leave Request
          </button>

        </form>
      </div>
    </div>
  );
};

export default ApplyLeaveForm;
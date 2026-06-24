import { useState } from "react";
import Navbar from "./Navbar";
import LeaveBalance from "./LeaveBalance";
import LeaveHistory from "./LeaveHistory";
import ApplyLeaveForm from "./ApplyLeaveForm";
import {
  employee,
  managers,
  initialLeaves,
  initialBalance,
} from "../data/dummydata";

function EmployeeDashboard() {
  const [leaves, setLeaves] = useState(initialLeaves);
  const [balance, setBalance] = useState(initialBalance);

  const handleApplyLeave = (newLeave) => {
    const entry = {
      id: Date.now(),
      reason: newLeave.reason,
      startDate: newLeave.startDate,
      endDate: newLeave.endDate,
      days: newLeave.days,
      status: "Pending",
    };

    setLeaves((prev) => [entry, ...prev]);

    setBalance((prev) => ({
      ...prev,
      pending: prev.pending + newLeave.days,
      remaining: prev.remaining - newLeave.days,
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar employee={employee} />
      <main className="max-w-5xl mx-auto px-4 py-6 space-y-6">
        <LeaveBalance balance={balance} />
        <LeaveHistory leaves={leaves} />
        <ApplyLeaveForm managers={managers} onSubmit={handleApplyLeave} />
      </main>
    </div>
  );
}

export default EmployeeDashboard;
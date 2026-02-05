import { Ban, ChevronDown, ChevronLeft, ChevronRight, CircleCheckBig, CircleX, Eye, Filter, Search } from 'lucide-react';
import React, { useState } from 'react';
import { WarningToast } from '../../config/type';



const Role = {
  SELLER: "Seller",
  BUYER: "Buyer",
} as const;

const UserList = [
  {
    name: "John Smith",
    email: "john.smith@gmail.com",
    role: "Seller",
    varified_status: "Verified",
    status: "Active",
  },
  {
    name: "Emma Johnson",
    email: "emma.johnson@gmail.com",
    role: "Buyer",
    varified_status: "Verified",
    status: "Active",
  },
  {
    name: "Michael Brown",
    email: "michael.brown@gmail.com",
    role: "Seller",
    varified_status: "Unverified",
    status: " Suspended",
  },
  {
    name: "Sophia Williams",
    email: "sophia.williams@gmail.com",
    role: "Buyer",
    varified_status: "Verified",
    status: "Active",
  },
  {
    name: "David Jones",
    email: "david.jones@gmail.com",
    role: "Admin",
    varified_status: "Verified",
    status: "Active",
  },
  {
    name: "Olivia Garcia",
    email: "olivia.garcia@gmail.com",
    role: "Seller",
    varified_status: "Verified",
    status: " Suspended",
  },
  {
    name: "James Miller",
    email: "james.miller@gmail.com",
    role: "Buyer",
    varified_status: "Unverified",
    status: "Active",
  },
  {
    name: "Ava Martinez",
    email: "ava.martinez@gmail.com",
    role: "Seller",
    varified_status: "Verified",
    status: "Active",
  },
  {
    name: "William Anderson",
    email: "william.anderson@gmail.com",
    role: "Buyer",
    varified_status: "Verified",
    status: " Suspended",
  },
  {
    name: "Isabella Taylor",
    email: "isabella.taylor@gmail.com",
    role: "Seller",
    varified_status: "Verified",
    status: "Active",
  },
  {
    name: "Benjamin Thomas",
    email: "benjamin.thomas@gmail.com",
    role: "Buyer",
    varified_status: "Unverified",
    status: " Suspended",
  },
  {
    name: "Mia Hernandez",
    email: "mia.hernandez@gmail.com",
    role: "Seller",
    varified_status: "Verified",
    status: "Active",
  },
  {
    name: "Lucas Moore",
    email: "lucas.moore@gmail.com",
    role: "Buyer",
    varified_status: "Verified",
    status: "Active",
  },
  {
    name: "Charlotte Martin",
    email: "charlotte.martin@gmail.com",
    role: "Admin",
    varified_status: "Verified",
    status: "Active",
  },
  {
    name: "Henry Lee",
    email: "henry.lee@gmail.com",
    role: "Seller",
    varified_status: "Unverified",
    status: " Suspended",
  },
  {
    name: "Amelia Perez",
    email: "amelia.perez@gmail.com",
    role: "Buyer",
    varified_status: "Verified",
    status: "Active",
  },
  {
    name: "Alexander White",
    email: "alexander.white@gmail.com",
    role: "Seller",
    varified_status: "Verified",
    status: "Active",
  },
  {
    name: "Evelyn Harris",
    email: "evelyn.harris@gmail.com",
    role: "Buyer",
    varified_status: "Unverified",
    status: " Suspended",
  },
  {
    name: "Daniel Clark",
    email: "daniel.clark@gmail.com",
    role: "Seller",
    varified_status: "Verified",
    status: "Active",
  },
  {
    name: "Harper Lewis",
    email: "harper.lewis@gmail.com",
    role: "Buyer",
    varified_status: "Verified",
    status: "Active",
  },
]




const UserManagement: React.FC = () => {

  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");

  const users = ["All", "Buyer", "Seller"];
  const statuses = ["All", "Verified", "Unverified", "Transit"];

  // Pagination State
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = UserList.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(UserList.length / itemsPerPage);

  return (
    <div className="w-full   space-y-4">



      <div className="flex flex-col w-full lg:flex-row gap-4 mb-6 items-center bg-[#0F172A]/50 p-4 rounded-2xl border border-white/5 backdrop-blur-sm relative z-50">

        {/* Search Input */}
        <div className="relative w-full lg:flex-1">
          <span className="absolute inset-y-0 left-4 flex items-center text-slate-400">
            <Search size={18} />
          </span>
          <input
            type="text"
            placeholder="Search by name or email..."
            className="w-full bg-[#0B1120] border border-white/10 rounded-xl py-3 pl-12 pr-4 text-white placeholder:text-slate-500 focus:outline-none focus:ring-2 focus:ring-sky-500/50 transition-all"
          />
        </div>

        {/* Filter Buttons */}
        <div className="flex flex-wrap md:flex-nowrap gap-3 w-full lg:w-auto relative">

          {/* User Filter */}
          <div className="relative">
            <button
              onClick={() => setIsUserDropdownOpen((prev) => !prev)}
              className="flex items-center gap-2 bg-[#0F172A] border border-white/10 px-5 py-3 rounded-xl text-slate-300 hover:bg-slate-800 transition-colors shrink-0"
            >
              <Filter size={18} />
              <span className="font-medium text-sm">{selectedUser}</span>
              <ChevronDown size={18} />
            </button>

            {isUserDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-36 bg-[#0F172A] border border-white/10 rounded-xl overflow-visible shadow-lg z-[9999]">
                {users.map((user) => (
                  <div
                    key={user}
                    onClick={() => {
                      setSelectedUser(user);
                        WarningToast()
                      setIsUserDropdownOpen(false);
                    }}
                    className="px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 cursor-pointer"
                  >
                    {user}
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Status Filter */}
          <div className="relative">
            <button
              onClick={() => setIsStatusDropdownOpen((prev) => !prev)}
              className="flex items-center justify-between gap-4 bg-[#0F172A] border border-white/10 px-5 py-3 rounded-xl text-slate-300 hover:bg-slate-800 transition-colors w-full md:w-36"
            >
              <span className="font-medium text-sm">{selectedStatus}</span>
              <ChevronDown size={18} />
            </button>

            {isStatusDropdownOpen && (
              <div className="absolute top-full left-0 mt-2 w-36 bg-[#0F172A] border border-white/10 rounded-xl overflow-visible shadow-lg z-[9999]">
                {statuses.map((status) => (
                  <div
                    key={status}
                    onClick={() => {
                      setSelectedStatus(status);
                      WarningToast()
                      setIsStatusDropdownOpen(false);
                    }}
                    className="px-4 py-2 text-sm text-slate-300 hover:bg-slate-800 cursor-pointer"
                  >
                    {status}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>


      <div className="bg-[#0f1825] backdrop-blur-md border  border-white/20 sm:p-4 rounded-2xl overflow-hidden shadow-xl">
        <div className="overflow-x-auto custom-scrollbar">
          <table className="w-full  text-left border-collapse">
            <thead>
              <tr className="bg-[#0B1220] rounded-2xl px-3 py-7 border-b border-white/10 text-white">
                <th className="px-6 py-4 text-[16px] font-bold   ">User Name</th>
                <th className="px-6 py-4 text-[16px] font-bold   ">Email</th>
                <th className="px-6 py-4 text-[16px] font-bold   ">Role</th>
                <th className="px-6 py-4 text-center text-[16px] font-bold   ">Verification Statuse</th>
                <th className="px-6 py-4 text-[16px] font-bold    text-center">Status</th>
                <th className="px-6 py-4 text-[16px] font-bold    text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {currentItems?.map((user, key) => (
                <tr key={key} className="hover:bg-white/5 rounded-lg transition-colors group">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 sm:gap-3">
                      <div className="w-10 h-10 rounded-full bg-sky-500/20 flex items-center justify-center text-sky-400 font-bold border border-sky-500/30">
                        {user.name.charAt(0)}
                      </div>
                      <div>
                        <p className="text-white font-medium text-sm">{user.name}</p>

                      </div>
                    </div>
                  </td>
                  <td className='px-6 py-4'>
                    <p className="text-[#9CA3AF] text-sm">{user.email}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className={` text-sm font-medium px-4 py-1 rounded-full
      ${user?.role === Role.SELLER ? 'bg-[#2B7FFF33] text-[#51A2FF]' : 'bg-[#AD46FF33] text-[#C27AFF]'}
    `}
                    >
                      {user.role}
                    </span>
                  </td>


                  <td className={`px-6 } flex  justify-center  py-4 text-[#9CA3AF] text-center text-sm`}>
                    <div className='flex items-center gap-x-3'>

                      {user?.varified_status == "Verified" ? <CircleCheckBig className='text-emerald-400 transition-colors' size={20} /> : <CircleX size={20} className='text-red-400' />} {user?.varified_status}

                    </div>
                  </td>

                  <td className="px-6 py-4 text-center">
                    <span className={`px-3 py-1 rounded-full  text-sm font-bold border ${user.status === 'Active'
                      ? 'bg-emerald-500/30 text-emerald-400 border-emerald-500/20'
                      : 'bg-red-500/10 text-red-400 border-red-500/20'
                      }`}>
                      {user.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-right">
                    <div className="flex justify-end gap-2  transition-opacity">
                      <button className="p-2 hover:bg-white/10 rounded-lg text-white transition-colors">
                        <Eye onClick={WarningToast} size={20} />
                      </button>
                      <button className="p-2 hover:bg-white/10 rounded-lg text-emerald-400 transition-colors">
                        <CircleCheckBig size={20} />
                      </button>
                      <button className="p-2 hover:bg-red-500/20 rounded-lg text-[#FF6467] transition-colors">
                        <Ban size={20} />
                      </button>
                    </div>

                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination Controls */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 px-2 py-4">
        <p className="text-sm text-[#9CA3AF]">
          Showing <span className="text-white font-bold">{indexOfFirstItem + 1}</span> to{' '}
          <span className="text-white font-bold">{Math.min(indexOfLastItem, UserList.length)}</span> of{' '}
          <span className="text-white font-bold">{UserList.length}</span> results
        </p>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft size={20} />
          </button>

          <div className="flex gap-1">
            {Array.from({ length: totalPages }, (_, i) => (
              <button
                key={i + 1}
                onClick={() => setCurrentPage(i + 1)}
                className={`w-10 h-10 rounded-xl font-bold text-sm transition-all border ${currentPage === i + 1
                  ? 'bg-sky-500 border-sky-400 text-white shadow-lg shadow-sky-500/20'
                  : 'bg-white/5 border-white/10 text-slate-400 hover:text-white hover:bg-white/10'
                  }`}
              >
                {i + 1}
              </button>
            ))}
          </div>

          <button
            onClick={() => setCurrentPage((prev) => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="p-2 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserManagement;
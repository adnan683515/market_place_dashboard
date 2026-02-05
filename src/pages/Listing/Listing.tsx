import { CheckCircle2, ChevronDown, ChevronLeft, ChevronRight, Eye, Filter, MoreHorizontal, Search, Trash2, TrendingUp, XCircle } from "lucide-react";
import { useState } from "react";
import { Link } from "react-router";
import { WarningToast } from "../../config/type";


const ListingArray = [
  {
    title: "Total Listings",
    total: 45,
    colour: '#C27AFF'
  }, {
    title: "Pending Approval",
    total: 4,
    colour: '#FDC700'
  }, {
    title: "Approved",
    total: 10,
    colour: "#05DF72"
  }, {
    title: "Boosted",
    total: 5,
    colour: "#51A2FF"
  }
]


interface Listing {
  id: string;
  title: string;
  userName: string;
  status: 'Approved' | 'Pending' | 'Rejected';
  category: string;
  price: string;
  boosted: boolean;
}



export default function Listing() {

  const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
  const [isStatusDropdownOpen, setIsStatusDropdownOpen] = useState(false);
  const [selectedUser, setSelectedUser] = useState("All");
  const [selectedStatus, setSelectedStatus] = useState("All");


  const users = ["All", "Buyer", "Seller"];
  const statuses = ["All", "Verified", "Unverified", "Transit"];




  const data: Listing[] = [
    { id: '1', title: '2019 BMW M3 - Competition Package', userName: 'John Smith', status: 'Approved', category: 'Vehicle', price: '$62,500', boosted: true },
    { id: '2', title: 'Performance Exhaust System - Stainless Steel', userName: 'TuneWorks', status: 'Approved', category: 'Parts', price: '$1,200', boosted: false },
    { id: '3', title: '2021 Audi RS6 Avant', userName: 'Mike Johnson', status: 'Pending', category: 'Vehicle', price: '$95,000', boosted: false },
    { id: '4', title: 'Turbo Kit - Universal Fit', userName: 'AutoParts Pro', status: 'Approved', category: 'Parts', price: '$3,500', boosted: true },
    { id: '5', title: '2018 Porsche 911 GT3', userName: 'Emily Brown', status: 'Pending', category: 'Vehicle', price: '$145,000', boosted: false },
    { id: '6', title: 'Coilover Suspension Kit', userName: 'TuneWorks', status: 'Approved', category: 'Parts', price: '$850', boosted: false },
    { id: '7', title: '2020 Mercedes-AMG C63S', userName: 'David Wilson', status: 'Rejected', category: 'Vehicle', price: '$68,000', boosted: false },
  ];




  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(data.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = data.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };


  const getStatusStyles = (status: string) => {
    switch (status) {
      case 'Approved': return 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20';
      case 'Pending': return 'bg-amber-500/10 text-amber-500 border-amber-500/50';
      case 'Rejected': return 'bg-red-500/10 text-red-500 border-red-500/20';
      default: return '';
    }
  };

  const getCategoryStyles = (cat: string) => {
    return cat === 'Vehicle'
      ? 'bg-sky-500/10 text-sky-500 border-sky-500/20'
      : 'bg-purple-500/10 text-purple-500 border-purple-500/20';
  };

  return (
    <div>


      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mt-2 sm:gap-0 lg:gap-x-6">
        {
          ListingArray?.map((item, key) => {
            return <div key={key} className=" rounded-lg px-4 py-5 bg-[#0F172A] border border-white/10  flex flex-col gap-y-3">
              <h1 className="text-sm text-white">{item?.title}</h1>
              <p className={`text-2xl font-semibold text-[${item?.colour}]`}>{item?.total}</p>
            </div>
          })
        }
      </div>


      <div className="flex mt-7 flex-col w-full lg:flex-row gap-4 mb-6 items-center bg-[#0F172A]/50 p-4 rounded-2xl border border-white/5 backdrop-blur-sm relative z-50">

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
              <div className="absolute top-full left-0 mt-2 w-36 bg-[#0F172A] border border-white/10 rounded-xl overflow-visible shadow-lg z-9999">
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
              <div className="absolute top-full left-0 mt-2 w-36 bg-[#0F172A] border border-white/10 rounded-xl overflow-visible shadow-lg z-9999">
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






      <div className="w-full bg-[#0B1120] rounded-2xl border border-white/5 overflow-hidden shadow-2xl">
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse min-w-250">
            <thead>
              <tr className="border-b border-white/5 tracking-wider bg-[#0F172A]/50">
                <th className="px-6 py-5 text-sm sm:text-[16px] font-semibold text-slate-300">Listing Title</th>
                <th className="px-6 py-5 text-sm sm:text-[16px] font-semibold text-slate-300">User Name</th>
                <th className="px-6 py-5 text-sm sm:text-[16px] font-semibold text-slate-300">Status</th>
                <th className="px-6 py-5 text-sm sm:text-[16px] font-semibold text-slate-300">Category</th>
                <th className="px-6 py-5 text-sm sm:text-[16px] font-semibold text-slate-300">Price</th>
                <th className="px-6 py-5  text-sm sm:text-[16px]  font-semibold text-slate-300">Boosted</th>
                <th className="px-6 py-5 text-sm sm:text-[16px] font-semibold text-slate-300">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5">
              {currentItems.map((item, key) => (
                <tr key={key} className="hover:bg-white/2 transition-colors">
                  <td className="px-6 py-5 text-[12px] sm:text-[16px] text-white font-medium">{item.title}</td>
                  <td className="px-6 py-5 text-[12px] sm:text-[16px] text-white">{item.userName}</td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1 rounded-full text-[12px] font-semibold border ${getStatusStyles(item.status)}`}>
                      {item.status}
                    </span>
                  </td>
                  <td className="px-6 py-5">
                    <span className={`px-3 py-1 rounded-full text-[14px] font-semibold border ${getCategoryStyles(item.category)}`}>
                      {item.category}
                    </span>
                  </td>
                  <td className="px-6 py-5  text-sm sm:text-[16px] font-bold text-white">{item.price}</td>
                  <td className="px-6 py-5 text-[16px">
                    {item.boosted ? (
                      <div className="flex items-center gap-1 text-[#1F3A5F] font-semibold">
                        <TrendingUp size={14} /> Yes
                      </div>
                    ) : (
                      <span className=" text-sm sm:text-[16px] text-white">No</span>
                    )}
                  </td>
                  <td className="px-6 py-5">
                    <div className="flex items-center gap-x-5">
                      <Link to={'/dashboard/listing/:id'}>

                        <button className="text-white transition-colors"><Eye className=" cursor-pointer" size={20} /></button>

                      </Link>

                      {item.status === 'Pending' && (
                        <>
                          <button className="text-emerald-500 hover:text-emerald-400"><CheckCircle2 size={20} /></button>
                          <button className="text-red-500 hover:text-red-400"><XCircle size={20} /></button>
                        </>
                      )}
                      <button className="text-white transition-colors"><TrendingUp size={20} /></button>

                      <button onClick={()=>WarningToast()} className="text-red-500/70 hover:text-red-500 transition-colors"><Trash2 className="text-[#FF6467]" size={20} /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>



      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mt-6 px-2 py-4">
        {/* রেজাল্ট ইনফো */}
        <p className="text-sm text-slate-400 font-medium order-2 sm:order-1">
          Showing <span className="text-white font-bold">{indexOfFirstItem + 1}</span> to{' '}
          <span className="text-white font-bold">{Math.min(indexOfLastItem, data.length)}</span> of{' '}
          <span className="text-white font-bold">{data.length}</span> results
        </p>

        {/* নেভিগেশন বাটন */}
        <div className="flex items-center gap-2 order-1 sm:order-2">
          {/* Previous Button */}
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="p-2.5 rounded-xl bg-[#0F172A] border border-white/10 text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronLeft size={20} />
          </button>

          {/* পেজ নাম্বারসমূহ */}
          <div className="flex gap-1.5">
            {/* প্রথম ৩টি পেজ বাটন জেনারেট করা */}
            {[...Array(totalPages)].map((_, i) => {
              const pageNum = i + 1;
              if (pageNum <= 3) {
                return (
                  <button
                    key={pageNum}
                    onClick={() => handlePageChange(pageNum)}
                    className={`w-10 h-10 rounded-xl font-bold text-sm transition-all border ${currentPage === pageNum
                      ? 'bg-sky-500 border-sky-400 text-white shadow-lg shadow-sky-500/20'
                      : 'bg-[#0F172A] border-white/10 text-slate-400 hover:text-white hover:bg-slate-800'
                      }`}
                  >
                    {pageNum}
                  </button>
                );
              }
              return null;
            })}

            {/* এলিপসিস (যদি পেজ ৩ এর বেশি হয়) */}
            {totalPages > 3 && (
              <div className="w-10 h-10 flex items-center justify-center text-slate-500">
                <MoreHorizontal size={20} />
              </div>
            )}

            {/* শেষ পেজ বাটন */}
            {totalPages > 3 && (
              <button
                onClick={() => handlePageChange(totalPages)}
                className={`w-10 h-10 rounded-xl font-bold text-sm transition-all border ${currentPage === totalPages
                  ? 'bg-sky-500 border-sky-400 text-white shadow-lg shadow-sky-500/20'
                  : 'bg-[#0F172A] border-white/10 text-slate-400 hover:text-white hover:bg-slate-800'
                  }`}
              >
                {totalPages}
              </button>
            )}
          </div>

          {/* Next Button */}
          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="p-2.5 rounded-xl bg-[#0F172A] border border-white/10 text-slate-400 hover:text-white hover:bg-slate-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>




    </div>
  )
}

import { AnimatePresence, motion } from 'framer-motion';
import {
  Bell,
  ChartNoAxesColumnIncreasing,
  CircleCheck,
  Flag,
  LayoutDashboard,
  LogOut,
  Menu,
  Settings,
  TrendingUp,
  Users,
  X
} from 'lucide-react';
import React, { useState } from 'react';
import { NavLink, Outlet } from 'react-router';
import logo from '../assets/Logo.png';
import admin from '../assets/admin.png';

const MainLayout: React.FC = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const menuItems = [
    { icon: LayoutDashboard, label: 'Dashboard', path: '/dashboard/dashboard' },
    { icon: Menu, label: 'User Management', path: '/dashboard/products' },
    { icon: CircleCheck, label: 'Listings', path: '/dashboard/categories' },
    { icon: Users, label: 'Verification', path: '/dashboard/customers' },
    { icon: Flag, label: 'Moderation', path: '/dashboard/settings' },
    { icon: TrendingUp, label: 'Boosted Listings', path: '/dashboard/settings' },
    { icon: Bell, label: 'Notifications', path: '/dashboard/settings' },
    { icon: ChartNoAxesColumnIncreasing, label: 'Analytics', path: '/dashboard/settings' },
    { icon: Settings, label: 'Settings', path: '/dashboard/settings' },
  ];

  return (
    <div className="h-screen w-full bg-(--back) flex overflow-hidden">

      <AnimatePresence>
        {isSidebarOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsSidebarOpen(false)}
              className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-60 lg:hidden"
            />
            <motion.aside
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-70 bg-(--side) z-70 shadow-2xl sm:p-6 lg:hidden"
            >
              <SidebarContent items={menuItems} onClose={() => setIsSidebarOpen(false)} />
            </motion.aside>
          </>
        )}
      </AnimatePresence>


      <aside className="hidden lg:flex flex-col w-70 bg-(--side) border-r border p-2.5 sticky top-0 h-screen shrink-0">
        <SidebarContent items={menuItems} />
      </aside>


      <div className="flex-1 flex flex-col min-w-0 h-full overflow-hidden md:pl-10 p-2 ">


        <header className="border-b border-dotted border-gray-500 py-1 sm:py-2 flex items-center justify-between sticky top-0 z-50 shrink-0">
          <div className="flex items-center gap-4">
            <button onClick={() => setIsSidebarOpen(true)} className="lg:hidden p-2 text-slate-600 hover:bg-slate-100 rounded-lg">
              <Menu size={24} />
            </button>
            <div>
              <h1 className='text-[16px] sm:text-[32px] text-white font-semibold'>Dashboard</h1>
              <h2 className="hidden sm:block sm:text-[14px] text-[#9CA3AF] capitalize">
                Welcome back! Here's what's happening.
              </h2>
            </div>
          </div>

          <div className="flex items-center">
            <div className="flex items-center">
              <div>
                <h1 className='text-white text-[14px] font-bold leading-5 text-right'>Admin User</h1>
                <p className='text-[#9CA3AF] text-[12px] text-right'>Administrator</p>
              </div>
              <div className='rounded-full w-17 ml-3'>
                <img className='w-full object-cover h-full rounded-full' src={admin} alt="" />
              </div>
            </div>
          </div>
        </header>

        <main className="flex-1 overflow-y-auto">
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
            className=""
          >
            <Outlet />
          </motion.div>
        </main>
      </div>
    </div>
  );
};


// eslint-disable-next-line @typescript-eslint/no-explicit-any
const SidebarContent = ({ items, onClose }: { items: any[], onClose?: () => void }) => (
  <div className="flex flex-col h-full">
    <div className="mb-4 px-2 flex justify-between items-center shrink-0">
      <img className='w-[80%] sm:w-full' src={logo} alt="" />
      {onClose && <button onClick={onClose} className="lg:hidden p-1 text-white"><X size={20} /></button>}
    </div>


    <nav className="flex-1 overflow-y-auto sm:px-3 sm:space-y-5">
      {items.map((item) => (
        <NavLink
          key={item.label}
          to={item.path}
          onClick={onClose}
          className={() => `
            flex items-center gap-3 hover:scale-95 text-white px-4 py-3 rounded-xl transition-all leading-2 capitalize sm:text-[20px] group hover:bg-[#1F3A5F] `}
        >
          <item.icon size={20} className="group-hover:scale-110 transition-transform" />
          {item.label}
        </NavLink>
      ))}
    </nav>

    <div className="pt-4 shrink-0">
      <button className="w-full flex items-center gap-3 px-4 py-2 text-red-500 hover:scale-95 transition duration-700 rounded-xl cursor-pointer border border-red-500 text-[20px]">
        <LogOut size={20} /> Logout
      </button>
    </div>
  </div>
);

export default MainLayout;
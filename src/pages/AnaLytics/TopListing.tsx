import React from 'react';

interface ListingData {
  id: string | number;
  title: string;
  views: string;
  inquiries: string;
  conversionRate: string;
}

const data: ListingData[] = [
  { id: 1, title: '2019 BMW M3 - Competition Package', views: '1,247', inquiries: '89', conversionRate: '7.1%' },
  { id: 2, title: 'Turbo Kit - Universal Fit', views: '856', inquiries: '62', conversionRate: '7.2%' },
  { id: 3, title: '2021 Porsche 911 Turbo S', views: '1,891', inquiries: '134', conversionRate: '7.1%' },
  { id: 4, title: 'Carbon Fiber Body Kit', views: '2,103', inquiries: '156', conversionRate: '7.4%' },
  { id: 5, title: 'Performance Exhaust System', views: '734', inquiries: '48', conversionRate: '6.5%' },
];

const TopPerformingListings: React.FC = () => {
  return (
    <div className="w-full ">
      {/* Main Container with subtle border and rounded corners */}
      <div className="bg-[#111827] border border-gray-800/40 rounded-xl overflow-hidden shadow-2xl">
        

        <div className="bg-[#111827] px-6 py-5">
          <h2 className="text-white text-[20px] font-semibold tracking-tight">
            Top Performing Listings
          </h2>
        </div>


        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              {/* Table Column Headers - Pure Black to match Title */}
              <tr className="bg-[#0B1220]  text-[18px] tracking-wider text-white  border-b border-gray-800/50">
                <th className="px-6 py-4">Listing Title</th>
                <th className="px-6 py-4">Views</th>
                <th className="px-6 py-4">Inquiries</th>
                <th className="px-6 py-4">Conversion Rate</th>
              </tr>
            </thead>

            {/* Table Body - Deep Charcoal/Navy Background */}
            <tbody className="bg-[#111827] divide-y divide-gray-800/20">
              {data.map((item) => (
                <tr 
                  key={item.id} 
                  className="group hover:bg-white/2 transition-colors duration-200"
                >
                  <td className="px-6 py-5 text-[16px] text-gray-300 font-medium">
                    {item.title}
                  </td>
                  <td className="px-6 py-5 text-[16px] text-gray-400">
                    {item.views}
                  </td>
                  <td className="px-6 py-5 text-[16px] text-gray-400">
                    {item.inquiries}
                  </td>
                  <td className="px-6 py-5">
                    <span className="text-emerald-500 text-[16px] font-semibold">
                      {item.conversionRate}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default TopPerformingListings;
import useEmblaCarousel from 'embla-carousel-react';
import {
    Calendar,
    ChevronLeft, ChevronRight,
    FileText,
    Fuel,
    Gauge,
    Palette,
    Settings
} from 'lucide-react';
import { useCallback } from 'react';
import Review from './Review';

const DetailsOfListing = () => {
  // Slider Logic
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });

  const scrollPrev = useCallback(() => emblaApi && emblaApi.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi && emblaApi.scrollNext(), [emblaApi]);

  const vehicleSpecs = [
    { label: 'Year', value: '1967', icon: Calendar },
    { label: 'Mileage', value: '42k Mi', icon: Gauge },
    { label: 'Transmission', value: 'Manual', icon: Settings },
    { label: 'Fuel Type', value: 'Petrol', icon: Fuel },
    { label: 'Color', value: 'Turquoise', icon: Palette },
    { label: 'Title', value: 'Clean', icon: FileText },
  ];

  return (
    <div className="">

  

      <main className="  grid grid-cols-1 lg:grid-cols-12 sm:gap-8 pb-20">
        
   
        <div className="col-span-full lg:col-span-8 space-y-8">
          
          {/* Main Slider */}
          <div className="relative group bg-black rounded-3xl overflow-hidden shadow-2xl">
            <div className="overflow-hidden" ref={emblaRef}>
              <div className="flex">
                {[1, 2, 3].map((idx) => (
                  <div key={idx} className="relative flex-[0_0_100%] min-w-0 h-100 md:h-137.5">
                    <img
                      src={`https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&q=80&w=1200`}
                      alt="Vehicle"
                      className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                    />
                  </div>
                ))}
              </div>
            </div>
            
            {/* Slider Controls */}
            <button onClick={scrollPrev} className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/90 backdrop-blur-md p-4 rounded-full text-white hover:text-black transition-all opacity-0 group-hover:opacity-100 shadow-xl">
              <ChevronLeft size={28} />
            </button>
            <button onClick={scrollNext} className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-white/90 backdrop-blur-md p-4 rounded-full text-white hover:text-black transition-all opacity-0 group-hover:opacity-100 shadow-xl">
              <ChevronRight size={28} />
            </button>
          </div>

          {/* Details & Description Section */}
          <div className="  p-8 rounded-3xl
  bg-linear-to-br from-white/5 to-white/10
  backdrop-blur-xl
  border border-white/20
  ring-1 ring-white/10
  shadow-lg
  hover:shadow-xl hover:-translate-y-0.5
  transition-all duration-300">
            <h2 className="text-2xl font-bold text-white mb-6">Vehicle Overview</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
              {vehicleSpecs.map((spec, i) => (
                <div key={i} className="flex items-center gap-4 p-4 rounded-2xl  border border-transparent hover:border-slate-200 transition-all">
                  <div className="p-3  rounded-xl shadow-sm text-blue-600">
                    <spec.icon size={24} />
                  </div>
                  <div>
                    <p className="text-xs uppercase text-slate-400 font-bold tracking-wider">{spec.label}</p>
                    <p className="text-sm  text-gray-200">{spec.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <hr className="my-8 border-slate-100" />

            <h2 className="text-2xl font-bold text-white mb-4">Description</h2>
            <div className="prose prose-slate max-w-none">
              <p className="text-white leading-relaxed text-lg">
                Fully Restored 1967 Volkswagen Transporter Type 2. This "Walk-Through" Model Has Undergone A Meticulous 24-Month Frame-Off Restoration By Wolfsburg Restorations. Original 1600cc Dual-Port Engine Rebuilt To Factory Specs.
              </p>
              <p className="text-gray-200 text-lg mt-4">
                The interior features custom upholstery with horsehair padding as per original factory delivery. Every nut and bolt has been replaced with stainless steel components where applicable.
              </p>
            </div>
          </div>


        </div>

        {/* RIGHT COLUMN: Price, Seller & Actions (4 Columns) */}
 
        <div className='col-span-4'>
       <Review></Review>
        </div>

      </main>
    </div>
  );
};

export default DetailsOfListing;
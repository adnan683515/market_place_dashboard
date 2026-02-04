import EngagementMetrics from "./EngagementMetrics";
import TopPerformingListings from "./TopListing";
import UserGrowth from "./UserGrowth";


export default function Analytics() {
  return (
    <div className="flex flex-col gap-5">
      <UserGrowth></UserGrowth>


<TopPerformingListings></TopPerformingListings>
      <EngagementMetrics></EngagementMetrics>
    </div>
  )
}

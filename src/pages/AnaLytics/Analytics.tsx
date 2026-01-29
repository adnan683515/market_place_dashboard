import EngagementMetrics from "./EngagementMetrics";
import UserGrowth from "./UserGrowth";


export default function Analytics() {
  return (
    <div className="flex flex-col gap-5">
      <UserGrowth></UserGrowth>

      <EngagementMetrics></EngagementMetrics>
    </div>
  )
}

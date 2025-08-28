import RiderOrderList from "@/components/rider/RiderOrderList";
import RiderOverview from "@/components/rider/RiderOverview";

export default function page() {
  return (
    <div style={{padding: "24px"}}>
        <RiderOverview/>
        <RiderOrderList/>
    </div>
  )
}

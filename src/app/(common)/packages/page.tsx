import AllPackage from "@/components/pages/Packages/AllPackage";
import PackageHero from "@/components/pages/Packages/PackageHero";
import Contact from "@/components/shared/Contact/Contact";

export default function page() {
  return (
    <div>
        <PackageHero/>
        <AllPackage/>
        <Contact/>
    </div>
  )
}

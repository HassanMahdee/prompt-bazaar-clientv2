import FeatureCard from "./featureCard";

export default function FeatureGrid() {
  return (
    <div className="container-xy">
      <h2 className="section-title">Featured Section</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <FeatureCard />
        <FeatureCard />
        <FeatureCard />
      </div>
    </div>
  );
}

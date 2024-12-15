import {cn} from "@/lib/utils";

export function FeatureCard({ title, description, icon: Icon, className }) {
  return (
    <div className={cn(
      "group bg-white rounded-xl shadow-lg p-8 transform hover:scale-105 transition-all duration-300",
      className
    )}>
      <Icon className="w-12 h-12 text-blue-500 mb-4" />
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
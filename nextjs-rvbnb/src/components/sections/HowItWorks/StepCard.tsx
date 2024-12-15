import {cn} from "@/lib/utils";

export function StepCard({ icon: Icon, title, description, className }) {
  return (
    <div className={cn(
      "text-center p-8 bg-white rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:scale-105",
      className
    )}>
      <div className="flex justify-center mb-6">
        <Icon className="w-12 h-12 text-blue-500" />
      </div>
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}
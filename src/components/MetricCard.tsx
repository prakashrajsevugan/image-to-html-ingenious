interface MetricCardProps {
  label: string;
  value: string;
}

export const MetricCard = ({ label, value }: MetricCardProps) => {
  return (
    <div className="bg-card/50 backdrop-blur-sm border border-border rounded-lg p-4 hover:border-primary/50 transition-all duration-300">
      <p className="text-muted-foreground text-sm mb-1">{label}</p>
      <p className="text-foreground text-2xl font-bold">{value}</p>
    </div>
  );
};

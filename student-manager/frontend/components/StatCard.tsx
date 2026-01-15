type StatCardProps = {
  title: string;
  value: string | number;
  delta?: string;
};

export default function StatCard({ title, value, delta }: StatCardProps) {
  return (
    <div className="stat-card">
      <div className="text-sm text-slate-500">{title}</div>
      <div className="mt-2 text-2xl font-bold">{value}</div>
      {delta && <div className="text-xs text-green-600 mt-1">{delta}</div>}
    </div>
  );
}


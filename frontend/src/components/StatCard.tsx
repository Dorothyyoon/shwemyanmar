interface StatCardProps {
  title: string;
  value: string;
}

export default function StatCard({ title, value }: StatCardProps) {
  return (
    <div className="rounded-xl border border-amber-100 bg-amber-50/50 p-4">
      <p className="text-sm text-stone-500">{title}</p>

      <p className="mt-3 font-serif text-3xl font-bold text-stone-800">
        {value}
      </p>
    </div>
  );
}

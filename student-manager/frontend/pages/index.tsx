import Layout from "../components/Layout";
import StatCard from "../components/StatCard";

const mockStats = [
  { title: "Tổng sinh viên", value: 1240, delta: "+4.2%" },
  { title: "Tổng giảng viên", value: 82, delta: "+1.1%" },
  { title: "Lớp học", value: 48, delta: "+0.5%" },
  { title: "Điểm trung bình", value: "7.8", delta: "+0.2" },
];

export default function DashboardPage() {
  return (
    <Layout>
      <section>
        <div className="stat-grid">
          {mockStats.map((s) => (
            <StatCard key={s.title} title={s.title} value={s.value} delta={s.delta} />
          ))}
        </div>
      </section>
    </Layout>
  );
}


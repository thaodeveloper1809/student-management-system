import Layout from "../components/Layout";
import { useEffect, useState } from "react";
import StudentTable from "../components/StudentTable";
import StudentModal from "../components/StudentModal";
import { supabase } from "../lib/supabaseClient";

type DBStudent = {
  id: number;
  name: string;
  student_code?: string;
  class?: string;
  email?: string;
  created_at?: string;
  status?: string;
};

export default function StudentsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [students, setStudents] = useState<DBStudent[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStudents = async () => {
      setLoading(true);
      const { data, error } = await supabase.from("students").select("*").order("created_at", { ascending: false });
      if (error) {
        setError(error.message);
        setStudents([]);
      } else {
        setStudents((data as DBStudent[]) || []);
      }
      setLoading(false);
    };

    fetchStudents();
  }, []);

  return (
    <Layout>
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold mb-1">Danh sách sinh viên</h2>
            <p className="text-sm text-slate-500">Quản lý sinh viên</p>
          </div>
          <div>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-4 py-2 bg-deepBlue text-white rounded hover:opacity-90"
            >
              Thêm sinh viên
            </button>
          </div>
        </div>

        {loading && <div className="p-4 bg-white rounded shadow">Đang tải dữ liệu...</div>}
        {error && <div className="p-4 bg-red-50 text-red-700 rounded mb-4">Lỗi: {error}</div>}

        {!loading && !error && (
          <StudentTable
            students={students.map((s) => ({
              id: s.id,
              name: s.name,
              studentId: s.student_code || "",
              className: s.class || "",
              status: s.status || "Hoạt động",
            }))}
          />
        )}

        <StudentModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </Layout>
  );
}


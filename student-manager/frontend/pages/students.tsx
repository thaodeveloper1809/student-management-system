import Layout from "../components/Layout";
import { useState } from "react";
import StudentTable from "../components/StudentTable";
import StudentModal from "../components/StudentModal";

const mockStudents = [
  { id: 1, name: "Nguyễn Văn A", studentId: "SV001", className: "KTPM01", status: "Hoạt động" },
  { id: 2, name: "Trần Thị B", studentId: "SV002", className: "KTPM01", status: "Tạm ngưng" },
  { id: 3, name: "Lê Văn C", studentId: "SV003", className: "KT01", status: "Hoạt động" },
  { id: 4, name: "Phạm Thị D", studentId: "SV004", className: "KT02", status: "Hoạt động" },
  { id: 5, name: "Hoàng Văn E", studentId: "SV005", className: "KTPM02", status: "Tốt nghiệp" },
];

export default function StudentsPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <Layout>
      <div>
        <div className="flex items-center justify-between mb-6">
          <div>
            <h2 className="text-xl font-semibold mb-1">Danh sách sinh viên</h2>
            <p className="text-sm text-slate-500">Quản lý sinh viên - dữ liệu mẫu</p>
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

        <StudentTable students={mockStudents} />

        <StudentModal open={isModalOpen} onClose={() => setIsModalOpen(false)} />
      </div>
    </Layout>
  );
}


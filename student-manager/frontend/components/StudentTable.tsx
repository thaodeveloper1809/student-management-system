type Student = {
  id: number;
  name: string;
  studentId: string;
  className: string;
  status: string;
};

export default function StudentTable({ students }: { students: Student[] }) {
  return (
    <div className="bg-white shadow rounded-lg overflow-auto">
      <table className="min-w-full divide-y divide-slate-200">
        <thead className="bg-slate-50">
          <tr>
            <th className="px-4 py-2 text-left text-sm font-medium text-slate-600">Họ tên</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-slate-600">Mã SV</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-slate-600">Lớp</th>
            <th className="px-4 py-2 text-left text-sm font-medium text-slate-600">Trạng thái</th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-slate-100">
          {students.map((s) => (
            <tr key={s.id} className="hover:bg-slate-50">
              <td className="px-4 py-3 text-sm text-slate-700">{s.name}</td>
              <td className="px-4 py-3 text-sm text-slate-700">{s.studentId}</td>
              <td className="px-4 py-3 text-sm text-slate-700">{s.className}</td>
              <td className="px-4 py-3 text-sm">
                <span
                  className={`inline-block px-2 py-1 rounded text-xs font-medium ${
                    s.status === "Hoạt động" ? "bg-green-100 text-green-800" : s.status === "Tốt nghiệp" ? "bg-blue-100 text-blue-800" : "bg-yellow-100 text-yellow-800"
                  }`}
                >
                  {s.status}
                </span>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}


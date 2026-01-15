import { X } from "lucide-react";

export default function StudentModal({ open, onClose }: { open: boolean; onClose: () => void }) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40" onClick={onClose} />
      <div className="bg-white rounded-lg shadow-lg z-10 w-full max-w-lg p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Thêm sinh viên</h3>
          <button onClick={onClose} className="p-1 rounded hover:bg-slate-100">
            <X />
          </button>
        </div>
        <form>
          <div className="grid grid-cols-1 gap-3">
            <input className="border p-2 rounded" placeholder="Họ tên" />
            <input className="border p-2 rounded" placeholder="Mã SV" />
            <input className="border p-2 rounded" placeholder="Lớp" />
            <select className="border p-2 rounded">
              <option>Hoạt động</option>
              <option>Tạm ngưng</option>
              <option>Tốt nghiệp</option>
            </select>
          </div>
          <div className="mt-4 flex justify-end gap-2">
            <button type="button" onClick={onClose} className="px-4 py-2 rounded border">
              Hủy
            </button>
            <button type="button" className="px-4 py-2 rounded bg-deepBlue text-white">
              Lưu (demo)
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}


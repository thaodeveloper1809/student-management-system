import { Bell, User } from "lucide-react";

export default function Header() {
  return (
    <header className="header">
      <div>
        <h1 className="text-lg font-semibold">Dashboard</h1>
        <p className="text-sm text-slate-500">Tổng quan hệ thống</p>
      </div>
      <div className="flex items-center gap-4">
        <button className="p-2 rounded hover:bg-slate-100">
          <Bell />
        </button>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center">
            <User />
          </div>
          <div className="text-sm">
            <div className="font-medium">Nguyễn Văn A</div>
            <div className="text-xs text-slate-500">Admin</div>
          </div>
        </div>
      </div>
    </header>
  );
}


import Link from "next/link";
import { Home, Users, BookOpen, Calendar } from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="sidebar p-6">
      <div className="mb-8 text-lg font-semibold">EduPanel</div>
      <nav className="flex flex-col gap-3">
        <Link href="/" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-white/10">
          <Home size={16} /> Dashboard
        </Link>
        <Link href="/students" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-white/10">
          <Users size={16} /> Sinh viên
        </Link>
        <Link href="/teachers" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-white/10">
          <BookOpen size={16} /> Giảng viên
        </Link>
        <Link href="/classes" className="flex items-center gap-3 px-3 py-2 rounded hover:bg-white/10">
          <Calendar size={16} /> Lớp học
        </Link>
      </nav>
    </aside>
  );
}


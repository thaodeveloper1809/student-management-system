import Sidebar from "./Sidebar";
import Header from "./Header";

type Props = {
  children: React.ReactNode;
};

export default function Layout({ children }: Props) {
  return (
    <div className="app-shell">
      <div className="sidebar">
        <Sidebar />
      </div>
      <main className="main">
        <Header />
        <div>{children}</div>
      </main>
    </div>
  );
}


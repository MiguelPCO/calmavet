import Sidebar from "@/components/dashboard/Sidebar";

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-blanco-calido">
      <Sidebar role="ADMIN" />
      <div className="flex-1 flex flex-col">
        <header className="h-20 border-b border-verde-calma/20 bg-white/50 backdrop-blur-sm flex items-center justify-between px-10">
          <h2 className="font-bold text-verde-profundo">Administración</h2>
          <div className="flex items-center gap-4">
            <span className="text-sm text-gris-piedra">Bienvenido, Admin</span>
            <div className="w-10 h-10 rounded-full bg-arena flex items-center justify-center font-bold text-carbon">
              A
            </div>
          </div>
        </header>
        <main className="p-10">
          {children}
        </main>
      </div>
    </div>
  );
}

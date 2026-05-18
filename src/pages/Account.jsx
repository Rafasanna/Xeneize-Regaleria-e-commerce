import { Heart, LogOut, Package, User } from "lucide-react";
import { Link, Navigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { formatPrice } from "../lib/utils";
import { useShopStore } from "../store/useShopStore";

export function Account() {
  const user = useShopStore((state) => state.user);
  const favorites = useShopStore((state) => state.favorites);
  const logout = useShopStore((state) => state.logout);

  if (!user) return <Navigate to="/login" replace />;

  const demoOrders = [
    { id: "XE-1024", status: "Preparando", total: 48700 },
    { id: "XE-1019", status: "Entregado", total: 23600 }
  ];

  return (
    <section className="container-page py-10">
      <div className="mb-8 flex flex-col justify-between gap-4 rounded-lg bg-white p-6 shadow-sm ring-1 ring-zinc-100 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-blush-100"><User className="h-6 w-6" /></span>
          <div>
            <h1 className="text-2xl font-semibold">{user.name}</h1>
            <p className="text-sm text-zinc-600">{user.email}</p>
          </div>
        </div>
        <Button variant="secondary" onClick={logout}><LogOut className="h-4 w-4" /> Salir</Button>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-zinc-100">
          <h2 className="flex items-center gap-2 text-lg font-semibold"><User className="h-5 w-5 text-blush-500" /> Datos</h2>
          <div className="mt-4 space-y-2 text-sm text-zinc-600">
            <p>Direccion demo: {user.address}</p>
            <p>Ciudad: Santa Elena, Entre Rios</p>
            <p>Preferencia: Retiro en local</p>
          </div>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-zinc-100">
          <h2 className="flex items-center gap-2 text-lg font-semibold"><Heart className="h-5 w-5 text-blush-500" /> Favoritos</h2>
          <p className="mt-4 text-3xl font-bold">{favorites.length}</p>
          <Link to="/favoritos" className="mt-4 inline-block text-sm font-semibold text-blush-500">Ver favoritos</Link>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-zinc-100">
          <h2 className="flex items-center gap-2 text-lg font-semibold"><Package className="h-5 w-5 text-blush-500" /> Pedidos demo</h2>
          <div className="mt-4 space-y-3">
            {demoOrders.map((order) => (
              <div key={order.id} className="flex items-center justify-between rounded-md bg-blush-50 p-3 text-sm">
                <span>{order.id} - {order.status}</span>
                <strong>{formatPrice(order.total)}</strong>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

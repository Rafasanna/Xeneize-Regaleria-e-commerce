import { Heart, LogOut, Package, User } from "lucide-react";
import { Link, Navigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { formatPrice } from "../lib/utils";
import { useShopStore } from "../store/useShopStore";

export function Account() {
  const user = useShopStore((state) => state.user);
  const favorites = useShopStore((state) => state.favorites);
  const orders = useShopStore((state) => state.orders);
  const logout = useShopStore((state) => state.logout);

  if (!user) return <Navigate to="/login" replace />;

  return (
    <section className="container-page py-10">
      <div className="mb-8 flex flex-col justify-between gap-4 rounded-lg bg-white p-6 shadow-sm ring-1 ring-coral/10 sm:flex-row sm:items-center">
        <div className="flex items-center gap-4">
          <span className="grid h-14 w-14 place-items-center rounded-full bg-steel text-coral"><User className="h-6 w-6" /></span>
          <div>
            <h1 className="text-2xl font-black">{user.name}</h1>
            <p className="text-sm text-warm">{user.email}</p>
          </div>
        </div>
        <Button variant="secondary" onClick={logout}><LogOut className="h-4 w-4" /> Salir</Button>
      </div>
      <div className="grid gap-6 lg:grid-cols-3">
        <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-coral/10">
          <h2 className="flex items-center gap-2 text-lg font-black"><User className="h-5 w-5 text-coral" /> Datos</h2>
          <div className="mt-4 space-y-2 text-sm text-warm">
            <p>Email: {user.email}</p>
            <p>Cuenta opcional guardada localmente.</p>
            <p>La compra principal funciona sin registro.</p>
          </div>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-coral/10">
          <h2 className="flex items-center gap-2 text-lg font-black"><Heart className="h-5 w-5 text-coral" /> Favoritos</h2>
          <p className="mt-4 text-3xl font-black">{favorites.length}</p>
          <Link to="/favoritos" className="mt-4 inline-block text-sm font-black text-coral">Ver favoritos</Link>
        </div>
        <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-coral/10">
          <h2 className="flex items-center gap-2 text-lg font-black"><Package className="h-5 w-5 text-coral" /> Pedidos</h2>
          {orders.length ? (
            <div className="mt-4 space-y-3">
              {orders.map((order) => (
              <div key={order.id} className="flex items-center justify-between rounded-md bg-steel p-3 text-sm">
                <span>{order.id} - {order.status}</span>
                <strong>{formatPrice(order.total)}</strong>
              </div>
              ))}
            </div>
          ) : (
            <p className="mt-4 text-sm text-warm">Todavía no hay pedidos registrados en este dispositivo.</p>
          )}
        </div>
      </div>
    </section>
  );
}

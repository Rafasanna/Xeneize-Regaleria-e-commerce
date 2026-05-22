import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { formatPrice } from "../lib/utils";
import { useShopStore } from "../store/useShopStore";

export function Cart() {
  const [delivery, setDelivery] = useState("Envío a domicilio");
  const cart = useShopStore((state) => state.cart);
  const updateQuantity = useShopStore((state) => state.updateQuantity);
  const removeFromCart = useShopStore((state) => state.removeFromCart);
  const subtotal = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.quantity, 0), [cart]);
  const shipping = 0;
  const total = subtotal + shipping;
  if (!cart.length) {
    return (
      <section className="container-page py-12">
        <div className="rounded-lg bg-white p-10 text-center shadow-sm ring-1 ring-coral/10">
          <ShoppingBag className="mx-auto h-11 w-11 text-coral" />
          <h1 className="mt-4 text-2xl font-black">Tu carrito esta vacio</h1>
          <p className="mt-2 text-sm text-warm">Agrega productos para avanzar con tu compra online.</p>
          <Link to="/productos" className="mt-6 inline-block"><Button>Ver productos</Button></Link>
        </div>
      </section>
    );
  }

  return (
    <section className="container-page py-6 sm:py-10">
      <h1 className="section-title">Carrito</h1>
      <div className="mt-6 grid gap-6 lg:mt-8 lg:grid-cols-[1fr_380px] lg:gap-8">
        <div className="space-y-4">
          {cart.map((item) => (
            <article key={item.id} className="grid grid-cols-[86px_1fr] gap-3 rounded-[1.25rem] bg-white p-3 shadow-sm ring-1 ring-coral/10 sm:grid-cols-[110px_1fr_auto] sm:gap-4 sm:p-4">
              <img src={item.image} alt={item.name} className="h-24 w-full rounded-[0.9rem] object-cover sm:h-28 sm:w-28 sm:rounded-md" />
              <div className="min-w-0">
                <p className="text-xs font-black uppercase tracking-wide text-coral">{item.category}</p>
                <h2 className="mt-1 truncate font-black">{item.name}</h2>
                <p className="mt-2 text-sm text-warm">{formatPrice(item.price)}</p>
              </div>
              <div className="col-span-2 flex items-center justify-between gap-4 sm:col-span-1 sm:flex-col sm:items-end">
                <div className="flex items-center rounded-full border border-coral/15">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="grid h-10 w-10 place-items-center text-coral"><Minus className="h-4 w-4" /></button>
                  <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="grid h-10 w-10 place-items-center text-coral"><Plus className="h-4 w-4" /></button>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="grid h-10 w-10 place-items-center rounded-full bg-steel text-ink hover:text-coral"><Trash2 className="h-4 w-4" /></button>
              </div>
            </article>
          ))}
        </div>
        <aside className="h-fit rounded-[1.25rem] bg-white p-5 shadow-sm ring-1 ring-coral/10">
          <h2 className="text-xl font-black">Resumen</h2>
          <div className="mt-5 grid gap-3 text-sm">
            <label className="flex items-center gap-3 rounded-lg border border-coral/15 p-3">
              <input type="radio" checked={delivery === "Envío a domicilio"} onChange={() => setDelivery("Envío a domicilio")} className="accent-coral" />
              Envío a domicilio
            </label>
            <label className="flex items-center gap-3 rounded-lg border border-coral/15 p-3">
              <input type="radio" checked={delivery === "Retiro en local"} onChange={() => setDelivery("Retiro en local")} className="accent-coral" />
              Retiro en local
            </label>
          </div>
          <div className="mt-6 space-y-3 border-t border-coral/10 pt-5 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div>
            <div className="flex justify-between"><span>Envío</span><strong>{delivery === "Envío a domicilio" ? "A confirmar" : formatPrice(0)}</strong></div>
            <div className="flex justify-between text-lg"><span>Total</span><strong>{formatPrice(total)}</strong></div>
          </div>
          <Link to="/checkout" className="mt-6 block">
            <Button className="w-full font-black">Avanzar al checkout</Button>
          </Link>
        </aside>
      </div>
    </section>
  );
}

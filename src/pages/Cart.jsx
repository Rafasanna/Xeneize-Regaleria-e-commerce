import { Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { buildWhatsAppUrl, formatPrice } from "../lib/utils";
import { useShopStore } from "../store/useShopStore";

export function Cart() {
  const [delivery, setDelivery] = useState("Envio a domicilio");
  const cart = useShopStore((state) => state.cart);
  const updateQuantity = useShopStore((state) => state.updateQuantity);
  const removeFromCart = useShopStore((state) => state.removeFromCart);
  const subtotal = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.quantity, 0), [cart]);
  const shipping = delivery === "Envio a domicilio" && subtotal > 0 ? 3500 : 0;
  const total = subtotal + shipping;
  const message = [
    "Hola, quiero consultar por este pedido de Xeneize Regaleria:",
    ...cart.map((item) => `- ${item.name} x${item.quantity}: ${formatPrice(item.price * item.quantity)}`),
    `Subtotal: ${formatPrice(subtotal)}`,
    `Entrega: ${delivery}`,
    `Total estimado: ${formatPrice(total)}`
  ].join("\n");

  if (!cart.length) {
    return (
      <section className="container-page py-12">
        <div className="rounded-lg bg-white p-10 text-center shadow-sm ring-1 ring-zinc-100">
          <ShoppingBag className="mx-auto h-11 w-11 text-blush-400" />
          <h1 className="mt-4 text-2xl font-semibold">Tu carrito esta vacio</h1>
          <p className="mt-2 text-sm text-zinc-600">Agrega productos para generar tu pedido por WhatsApp.</p>
          <Link to="/productos" className="mt-6 inline-block"><Button>Ver productos</Button></Link>
        </div>
      </section>
    );
  }

  return (
    <section className="container-page py-10">
      <h1 className="section-title">Carrito</h1>
      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="space-y-4">
          {cart.map((item) => (
            <article key={item.id} className="grid gap-4 rounded-lg bg-white p-4 shadow-sm ring-1 ring-zinc-100 sm:grid-cols-[110px_1fr_auto]">
              <img src={item.image} alt={item.name} className="h-28 w-full rounded-md object-cover sm:w-28" />
              <div>
                <p className="text-xs font-semibold uppercase tracking-wide text-blush-500">{item.category}</p>
                <h2 className="mt-1 font-semibold">{item.name}</h2>
                <p className="mt-2 text-sm text-zinc-600">{formatPrice(item.price)}</p>
              </div>
              <div className="flex items-center justify-between gap-4 sm:flex-col sm:items-end">
                <div className="flex items-center rounded-full border border-zinc-200">
                  <button onClick={() => updateQuantity(item.id, item.quantity - 1)} className="grid h-10 w-10 place-items-center"><Minus className="h-4 w-4" /></button>
                  <span className="w-8 text-center text-sm font-semibold">{item.quantity}</span>
                  <button onClick={() => updateQuantity(item.id, item.quantity + 1)} className="grid h-10 w-10 place-items-center"><Plus className="h-4 w-4" /></button>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="grid h-10 w-10 place-items-center rounded-full bg-blush-50 text-ink"><Trash2 className="h-4 w-4" /></button>
              </div>
            </article>
          ))}
        </div>
        <aside className="h-fit rounded-lg bg-white p-5 shadow-sm ring-1 ring-zinc-100">
          <h2 className="text-xl font-semibold">Resumen</h2>
          <div className="mt-5 grid gap-3 text-sm">
            <label className="flex items-center gap-3 rounded-lg border border-zinc-200 p-3">
              <input type="radio" checked={delivery === "Envio a domicilio"} onChange={() => setDelivery("Envio a domicilio")} />
              Envio a domicilio
            </label>
            <label className="flex items-center gap-3 rounded-lg border border-zinc-200 p-3">
              <input type="radio" checked={delivery === "Retiro en local"} onChange={() => setDelivery("Retiro en local")} />
              Retiro en local
            </label>
          </div>
          <div className="mt-6 space-y-3 border-t border-zinc-100 pt-5 text-sm">
            <div className="flex justify-between"><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div>
            <div className="flex justify-between"><span>Envio demo</span><strong>{formatPrice(shipping)}</strong></div>
            <div className="flex justify-between text-lg"><span>Total</span><strong>{formatPrice(total)}</strong></div>
          </div>
          <a href={buildWhatsAppUrl(message)} className="mt-6 block">
            <Button variant="blush" className="w-full">Finalizar pedido por WhatsApp</Button>
          </a>
        </aside>
      </div>
    </section>
  );
}

import { ArrowLeft, Minus, Plus, ShoppingBag, Trash2 } from "lucide-react";
import { useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { formatPrice } from "../lib/utils";
import { useShopStore } from "../store/useShopStore";

export function Cart() {
  const cart = useShopStore((state) => state.cart);
  const updateQuantity = useShopStore((state) => state.updateQuantity);
  const removeFromCart = useShopStore((state) => state.removeFromCart);
  const clearCart = useShopStore((state) => state.clearCart);
  const subtotal = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.quantity, 0), [cart]);

  useEffect(() => {
    cart.forEach((item) => {
      const stock = Number(item.stock ?? 0);
      if (stock <= 0) {
        removeFromCart(item.id);
      } else if (item.quantity > stock) {
        updateQuantity(item.id, stock);
      }
    });
  }, [cart, removeFromCart, updateQuantity]);

  if (!cart.length) {
    return (
      <section className="container-page py-12">
        <div className="rounded-lg bg-white p-10 text-center shadow-sm ring-1 ring-coral/10">
          <ShoppingBag className="mx-auto h-11 w-11 text-coral" />
          <h1 className="mt-4 text-2xl font-black">Tu carrito esta vacio</h1>
          <p className="mt-2 text-sm text-warm">Agrega productos para generar tu pedido por WhatsApp.</p>
          <Link to="/productos" className="mt-6 inline-block"><Button>Ver productos</Button></Link>
        </div>
      </section>
    );
  }

  return (
    <section className="container-page py-10">
      <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-end">
        <div>
          <Link to="/productos" className="inline-flex items-center gap-2 text-sm font-black text-coral">
            <ArrowLeft className="h-4 w-4" />
            Seguir comprando
          </Link>
          <h1 className="section-title mt-3">Carrito</h1>
          <p className="muted mt-2">{cartCountLabel(cart)} seleccionados para continuar la compra.</p>
        </div>
        <button onClick={clearCart} className="text-left text-sm font-black text-warm underline decoration-coral/30 underline-offset-4 transition hover:text-coral sm:text-right">
          Vaciar carrito
        </button>
      </div>

      <div className="mt-8 grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="space-y-4">
          {cart.map((item) => (
            <CartRow
              key={item.id}
              item={item}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          ))}
        </div>

        <aside className="h-fit rounded-lg bg-white p-5 shadow-soft ring-1 ring-coral/10">
          <h2 className="text-xl font-black">Resumen del pedido</h2>
          <div className="mt-6 space-y-3 text-sm">
            <div className="flex justify-between"><span>Productos</span><strong>{cart.reduce((sum, item) => sum + item.quantity, 0)}</strong></div>
            <div className="flex justify-between"><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div>
            <div className="flex justify-between border-t border-coral/10 pt-4 text-lg"><span>Total parcial</span><strong>{formatPrice(subtotal)}</strong></div>
          </div>
          <Link to="/checkout" className="mt-6 block">
            <Button className="w-full font-black">Continuar al checkout</Button>
          </Link>
          <p className="mt-3 text-center text-xs font-semibold leading-5 text-warm">
            El envío y el pago se completan en el siguiente paso.
          </p>
        </aside>
      </div>
    </section>
  );
}

function CartRow({ item, updateQuantity, removeFromCart }) {
  const stock = Number(item.stock ?? 0);
  const stockLeft = Math.max(0, stock - item.quantity);
  const maxReached = stockLeft <= 0;

  return (
    <article className="grid gap-4 rounded-lg bg-white p-4 shadow-sm ring-1 ring-coral/10 transition hover:shadow-soft sm:grid-cols-[120px_1fr_auto]">
      <Link to={`/producto/${item.id}`} className="overflow-hidden rounded-md bg-steel">
        <img src={item.image} alt={item.name} className="h-32 w-full object-cover transition duration-500 hover:scale-105 sm:h-full sm:min-h-32" />
      </Link>
      <div className="min-w-0">
        <p className="text-xs font-black uppercase tracking-wide text-coral">{item.category}</p>
        <Link to={`/producto/${item.id}`} className="mt-1 block text-lg font-black leading-tight text-ink hover:text-coral">
          {item.name}
        </Link>
        <p className="mt-1 text-sm font-semibold text-warm">{item.subcategory}</p>
      </div>
      <div className="flex items-center justify-between gap-4 border-t border-coral/10 pt-4 sm:flex-col sm:items-end sm:border-t-0 sm:pt-0">
        <div className="flex items-center rounded-full border border-coral/15 bg-white shadow-inner">
          <button
            onClick={() => updateQuantity(item.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
            className="grid h-10 w-10 place-items-center rounded-full text-coral transition hover:bg-blush-50 disabled:cursor-not-allowed disabled:opacity-35"
            aria-label="Restar producto"
          >
            <Minus className="h-4 w-4" />
          </button>
          <span className="w-10 text-center text-sm font-black tabular-nums">{item.quantity}</span>
          <button
            onClick={() => updateQuantity(item.id, item.quantity + 1)}
            disabled={maxReached}
            className="grid h-10 w-10 place-items-center rounded-full text-coral transition hover:bg-blush-50 disabled:cursor-not-allowed disabled:opacity-35"
            aria-label="Sumar producto"
          >
            <Plus className="h-4 w-4" />
          </button>
        </div>
        <div className="text-right">
          <p className="text-xl font-black text-ink">{formatPrice(item.price * item.quantity)}</p>
          <button onClick={() => removeFromCart(item.id)} className="mt-2 inline-flex items-center gap-1 text-xs font-black text-warm transition hover:text-coral">
            <Trash2 className="h-3.5 w-3.5" />
            Eliminar
          </button>
        </div>
      </div>
    </article>
  );
}

function cartCountLabel(cart) {
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  if (count === 1) return "1 producto";
  return `${count} productos`;
}

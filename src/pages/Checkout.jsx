import { CheckCircle2, CreditCard, MapPin, PackageCheck, UserRound } from "lucide-react";
import { useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { formatPrice } from "../lib/utils";
import { useShopStore } from "../store/useShopStore";

const steps = [
  { key: "datos", label: "Datos", icon: UserRound },
  { key: "entrega", label: "Entrega", icon: MapPin },
  { key: "pago", label: "Pago", icon: CreditCard },
  { key: "confirmacion", label: "Listo", icon: PackageCheck }
];

export function Checkout() {
  const cart = useShopStore((state) => state.cart);
  const clearCart = useShopStore((state) => state.clearCart);
  const [step, setStep] = useState(0);
  const [completedOrder, setCompletedOrder] = useState(null);
  const [form, setForm] = useState({
    name: "",
    phone: "",
    email: "",
    delivery: "Envio a domicilio",
    address: "",
    payment: "Tarjeta de debito/credito"
  });

  const subtotal = useMemo(() => cart.reduce((sum, item) => sum + item.price * item.quantity, 0), [cart]);
  const shipping = form.delivery === "Envio a domicilio" && subtotal > 0 ? 3500 : 0;
  const total = subtotal + shipping;

  if (!cart.length && !completedOrder) {
    return (
      <section className="container-page py-12">
        <div className="rounded-lg bg-white p-10 text-center shadow-sm ring-1 ring-coral/10">
          <h1 className="text-2xl font-black">No hay productos para pagar</h1>
          <p className="mt-2 text-sm text-warm">Agrega productos al carrito para iniciar el checkout.</p>
          <Link to="/productos" className="mt-6 inline-block"><Button>Ver productos</Button></Link>
        </div>
      </section>
    );
  }

  const updateForm = (field, value) => setForm((current) => ({ ...current, [field]: value }));
  const next = () => setStep((current) => Math.min(current + 1, steps.length - 1));
  const back = () => setStep((current) => Math.max(current - 1, 0));
  const confirmOrder = () => {
    setCompletedOrder({
      id: `XE-${Date.now().toString().slice(-6)}`,
      items: cart,
      subtotal,
      shipping,
      total
    });
    clearCart();
    setStep(3);
  };

  const summaryCart = completedOrder?.items ?? cart;
  const summarySubtotal = completedOrder?.subtotal ?? subtotal;
  const summaryShipping = completedOrder?.shipping ?? shipping;
  const summaryTotal = completedOrder?.total ?? total;

  return (
    <section className="container-page py-10">
      <div className="mb-8">
        <Link to="/carrito" className="text-sm font-black text-coral">Volver al carrito</Link>
        <h1 className="section-title mt-3">Checkout</h1>
      </div>

      <div className="mb-8 grid gap-2 sm:grid-cols-4">
        {steps.map(({ key, label, icon: Icon }, index) => (
          <div key={key} className={`flex items-center gap-2 rounded-full px-4 py-3 text-sm font-black ring-1 ${index <= step ? "bg-coral text-white ring-coral" : "bg-white text-warm ring-coral/10"}`}>
            <Icon className="h-4 w-4" />
            {label}
          </div>
        ))}
      </div>

      <div className="grid gap-8 lg:grid-cols-[1fr_380px]">
        <div className="rounded-lg bg-white p-6 shadow-sm ring-1 ring-coral/10">
          {step === 0 ? <CustomerStep form={form} updateForm={updateForm} /> : null}
          {step === 1 ? <DeliveryStep form={form} updateForm={updateForm} /> : null}
          {step === 2 ? <PaymentStep form={form} updateForm={updateForm} /> : null}
          {step === 3 ? <ConfirmationStep order={completedOrder?.id} /> : null}

          {step < 3 ? (
            <div className="mt-8 flex justify-between gap-3 border-t border-coral/10 pt-5">
              <Button variant="secondary" onClick={back} disabled={step === 0}>Atras</Button>
              {step === 2 ? (
                <Button onClick={confirmOrder}>Confirmar compra</Button>
              ) : (
                <Button onClick={next}>Continuar</Button>
              )}
            </div>
          ) : null}
        </div>

        <OrderSummary cart={summaryCart} subtotal={summarySubtotal} shipping={summaryShipping} total={summaryTotal} />
      </div>
    </section>
  );
}

function CustomerStep({ form, updateForm }) {
  return (
    <div>
      <h2 className="text-2xl font-black">Datos de contacto</h2>
      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Nombre y apellido" value={form.name} onChange={(value) => updateForm("name", value)} />
        <Field label="Telefono" value={form.phone} onChange={(value) => updateForm("phone", value)} />
        <Field label="Email" value={form.email} onChange={(value) => updateForm("email", value)} className="sm:col-span-2" />
      </div>
    </div>
  );
}

function DeliveryStep({ form, updateForm }) {
  return (
    <div>
      <h2 className="text-2xl font-black">Entrega</h2>
      <div className="mt-6 grid gap-3">
        {["Envio a domicilio", "Retiro en local"].map((option) => (
          <label key={option} className="flex cursor-pointer items-center gap-3 rounded-lg border border-coral/15 p-4 transition hover:bg-blush-50">
            <input type="radio" checked={form.delivery === option} onChange={() => updateForm("delivery", option)} className="accent-coral" />
            <span className="font-bold">{option}</span>
          </label>
        ))}
      </div>
      {form.delivery === "Envio a domicilio" ? (
        <Field label="Direccion de entrega" value={form.address} onChange={(value) => updateForm("address", value)} className="mt-5" />
      ) : (
        <p className="mt-5 rounded-lg bg-steel p-4 text-sm font-semibold text-warm">Retiro en Supremos Entrerriano 572, Santa Elena, Entre Rios.</p>
      )}
    </div>
  );
}

function PaymentStep({ form, updateForm }) {
  return (
    <div>
      <h2 className="text-2xl font-black">Pago simulado</h2>
      <div className="mt-6 grid gap-3">
        {["Tarjeta de debito/credito", "Transferencia bancaria", "Efectivo al retirar"].map((option) => (
          <label key={option} className="flex cursor-pointer items-center gap-3 rounded-lg border border-coral/15 p-4 transition hover:bg-blush-50">
            <input type="radio" checked={form.payment === option} onChange={() => updateForm("payment", option)} className="accent-coral" />
            <span className="font-bold">{option}</span>
          </label>
        ))}
      </div>
      <p className="mt-5 rounded-lg bg-blush-50 p-4 text-sm font-semibold text-warm">Demo frontend: no se procesa ningun pago real.</p>
    </div>
  );
}

function ConfirmationStep({ order }) {
  return (
    <div className="py-8 text-center">
      <CheckCircle2 className="mx-auto h-14 w-14 text-coral" />
      <h2 className="mt-4 text-3xl font-black">Compra simulada confirmada</h2>
      <p className="mt-2 text-sm font-semibold text-warm">Pedido {order}. El carrito fue vaciado para simular una compra finalizada.</p>
      <Link to="/productos" className="mt-6 inline-block"><Button>Volver a la tienda</Button></Link>
    </div>
  );
}

function Field({ label, value, onChange, className = "" }) {
  return (
    <label className={`block ${className}`}>
      <span className="text-sm font-black text-ink">{label}</span>
      <input value={value} onChange={(event) => onChange(event.target.value)} className="mt-2 h-12 w-full rounded-full border border-coral/15 px-4 text-sm outline-none transition focus:border-coral focus:ring-2 focus:ring-coral/20" />
    </label>
  );
}

function OrderSummary({ cart, subtotal, shipping, total }) {
  return (
    <aside className="h-fit rounded-lg bg-white p-5 shadow-soft ring-1 ring-coral/10">
      <h2 className="text-xl font-black">Resumen</h2>
      <div className="mt-5 grid gap-4">
        {cart.map((item) => (
          <div key={item.id} className="flex gap-3">
            <img src={item.image} alt={item.name} className="h-14 w-14 rounded-md object-cover" />
            <div className="min-w-0 flex-1">
              <p className="truncate text-sm font-black">{item.name}</p>
              <p className="text-xs font-semibold text-warm">x{item.quantity}</p>
            </div>
            <strong className="text-sm">{formatPrice(item.price * item.quantity)}</strong>
          </div>
        ))}
      </div>
      <div className="mt-6 space-y-3 border-t border-coral/10 pt-5 text-sm">
        <div className="flex justify-between"><span>Subtotal</span><strong>{formatPrice(subtotal)}</strong></div>
        <div className="flex justify-between"><span>Envio</span><strong>{formatPrice(shipping)}</strong></div>
        <div className="flex justify-between border-t border-coral/10 pt-4 text-lg"><span>Total</span><strong>{formatPrice(total)}</strong></div>
      </div>
    </aside>
  );
}

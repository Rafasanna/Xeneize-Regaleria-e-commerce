import { Mail, User } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/Button";
import { Logo } from "../components/ui/Logo";
import { useShopStore } from "../store/useShopStore";

export function Login() {
  const login = useShopStore((state) => state.login);
  const navigate = useNavigate();
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const submit = (event) => {
    event.preventDefault();
    login({ name: form.name || "Cliente Xeneize", email: form.email || "cliente@xeneize.com", address: "Supremos Entrerriano 572" });
    navigate("/mi-cuenta");
  };

  return (
    <section className="container-page grid min-h-[620px] items-center gap-8 py-10 lg:grid-cols-2">
      <div className="hidden overflow-hidden rounded-lg bg-blush-100 shadow-editorial ring-1 ring-coral/10 lg:block">
        <img src="https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=1200&q=85" alt="Regalos" className="h-[620px] w-full object-cover opacity-90 mix-blend-multiply" />
      </div>
      <div className="mx-auto w-full max-w-md rounded-lg bg-white p-6 shadow-soft ring-1 ring-coral/10 sm:p-8">
        <div className="mb-7 flex justify-center">
          <Logo />
        </div>
        <h1 className="text-center text-2xl font-black tracking-tight">Ingresar o crear cuenta</h1>
        <p className="mt-2 text-center text-sm text-warm">Demo sin backend, guardada en localStorage.</p>
        <form onSubmit={submit} className="mt-8 space-y-4">
          <label className="block">
            <span className="text-sm font-semibold">Nombre</span>
            <div className="mt-2 flex h-12 items-center rounded-full border border-coral/15 px-4 focus-within:border-coral focus-within:ring-2 focus-within:ring-coral/20">
              <User className="h-4 w-4 text-coral/65" />
              <input value={form.name} onChange={(event) => setForm({ ...form, name: event.target.value })} className="flex-1 bg-transparent px-3 text-sm outline-none" placeholder="Tu nombre" />
            </div>
          </label>
          <label className="block">
            <span className="text-sm font-semibold">Email</span>
            <div className="mt-2 flex h-12 items-center rounded-full border border-coral/15 px-4 focus-within:border-coral focus-within:ring-2 focus-within:ring-coral/20">
              <Mail className="h-4 w-4 text-coral/65" />
              <input type="email" value={form.email} onChange={(event) => setForm({ ...form, email: event.target.value })} className="flex-1 bg-transparent px-3 text-sm outline-none" placeholder="tu@email.com" />
            </div>
          </label>
          <label className="block">
            <span className="text-sm font-semibold">Contrasena</span>
            <input type="password" value={form.password} onChange={(event) => setForm({ ...form, password: event.target.value })} className="mt-2 h-12 w-full rounded-full border border-coral/15 px-4 text-sm outline-none focus:border-coral focus:ring-2 focus:ring-coral/20" placeholder="********" />
          </label>
          <Button className="w-full">Continuar</Button>
        </form>
      </div>
    </section>
  );
}

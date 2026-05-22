export const orderStatuses = [
  "pendiente",
  "pagado",
  "preparado",
  "entregado",
  "enviado",
  "cancelado"
];

export const paymentMethods = [
  "Mercado Pago (pendiente de configurar)",
  "Transferencia bancaria",
  "Efectivo al retirar"
];

export const deliveryMethods = [
  "Envío a domicilio",
  "Retiro por el local"
];

export const orderModelReference = {
  id: "XE-000000",
  items: [],
  total: 0,
  customer: {
    name: "",
    phone: "",
    email: "",
    address: ""
  },
  delivery: {
    method: "Retiro por el local",
    address: ""
  },
  payment: {
    method: "Mercado Pago (pendiente de configurar)",
    provider: "mercado-pago",
    status: "pendiente"
  },
  status: "pendiente"
};

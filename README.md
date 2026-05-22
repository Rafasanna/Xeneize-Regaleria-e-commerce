# Xeneize Regaleria

Monorepo para la tienda publica, el futuro panel administrativo y la API de Xeneize Regaleria.

## Estructura

```text
.
|-- apps/
|   |-- web/        Tienda publica actual
|   |-- admin/      Panel administrativo inicial
|   `-- api/        API Express inicial
|-- packages/
|   |-- ui/         Componentes React compartidos
|   `-- types/      Tipos TypeScript compartidos
|-- package.json
|-- pnpm-workspace.yaml
`-- .env.example
```

## Tecnologias

- pnpm workspaces
- React y Vite para `apps/web` y `apps/admin`
- Tailwind CSS en la tienda publica actual
- Express y TypeScript para `apps/api`
- TypeScript para `packages/ui` y `packages/types`

## Instalacion

Requiere Node.js y pnpm.

```bash
pnpm install
```

## Desarrollo

Levantar solo la tienda publica:

```bash
pnpm dev:web
```

Levantar solo el panel admin:

```bash
pnpm dev:admin
```

Levantar solo la API:

```bash
pnpm dev:api
```

Levantar los tres procesos en paralelo:

```bash
pnpm dev
```

La tienda usa el puerto de Vite `5173`, el admin esta configurado en `5174` y la API escucha en `4000` por defecto.

## Variables de entorno

Cada app tiene su propio `.env.example`.

- `apps/web/.env.example` define la URL de API y placeholders para Mercado Pago, Google Analytics y Meta Pixel.
- `apps/admin/.env.example` define la URL de API usada por el panel.
- `apps/api/.env.example` define el puerto, URLs permitidas y placeholders para base de datos, Mercado Pago y JWT.
- `.env.example` en la raiz resume las variables previstas para el monorepo.

Las integraciones externas todavia no estan implementadas en Sprint 0. Las variables se documentan para preparar los siguientes sprints.

## Comandos de workspace

```bash
pnpm build
pnpm lint
```

`pnpm build` ejecuta los builds disponibles por workspace. `pnpm lint` ejecuta las verificaciones disponibles por workspace.

## Sprint 0

- La tienda publica existente se conserva en `apps/web`.
- `apps/admin` deja una pantalla inicial y una estructura de features para productos, pedidos, cupones y configuracion.
- `apps/api` expone `GET /health` con `{ "status": "ok" }` y deja carpetas para modulos futuros.
- `packages/ui` inicia los componentes compartidos `Button`, `Input` y `Card`.
- `packages/types` inicia los contratos compartidos de productos, categorias, pedidos, cupones y usuarios admin.

## Proximos sprints

- Persistencia de catalogo y pedidos.
- Autenticacion para administracion.
- CRUD de productos, pedidos, cupones y configuracion.
- Integracion de Mercado Pago.
- Analitica y eventos de conversion.

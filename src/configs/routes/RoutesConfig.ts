import { ComponentType, JSX, lazy, LazyExoticComponent } from "react";

// import { CRUD_MODES } from "../constants/CRUD";
// import { EnumPermissions } from "../constants/General";

// type CRUD_CL = CRUD_MODES.CREATE | CRUD_MODES.LIST | ":mode";
// type IdOrParam = number | ":id";

const newRoute = (
  path: string | undefined = undefined,
  component: LazyExoticComponent<() => JSX.Element> | LazyExoticComponent<ComponentType<any>>,
  permissions = []
) => ({
  path,
  component,
  permissions,
});

const regexTest = (reg: string, string: string) => {
  const regex = new RegExp(`${reg.replace(/\//, "\\/")}`);
  return regex.test(string);
};

/** Declaração de referência de rotas para buscar link das rotas em outros arquivos */
const ROUTES = {
  HOME: {
    src: () => "/apollo-trading",
    path: (match: string) => regexTest("/{1}$", match),
  },
};

/** Declaração de rotas para roteamento da aplicação */
// Utilização de permissões:  newRoute(ROUTES.Admin(), import('pages/Admin/AdminPage'), [EnumPermissions.ADMIN]),
const RoutesConfig = [
  newRoute(
    ROUTES.HOME.src(),
    lazy(() => import("../../pages/Home/HomePage"))
  ),
];

// manter rota NotFound em ultimo lugar
RoutesConfig.push(
  newRoute(
    "*",
    lazy(() => import("../../pages/NotFound/NotFoundPage"))
  )
);

export { RoutesConfig, ROUTES };

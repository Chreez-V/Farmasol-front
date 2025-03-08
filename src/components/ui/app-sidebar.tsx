import { NavLink } from "react-router-dom";
import { Calendar, Home, Inbox, Search, Settings, ShoppingCart } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "./sidebar";

// Menu items.
const items = [
  {
    title: "Inicio",
    url: "/",
    icon: Home,
  },
  {
    title: "Ingreso de Personal",
    url: "/admin/IngresoPersonal",
    icon: Inbox,
  },
  {
    title: "Carga de Medicamentos",
    url: "/admin/carga-medicamentos",
    icon: Calendar,
  },
  {
    title: "Laboratorios Proveedores",
    url: "/admin/laboratorios",
    icon: Search,
  },
  {
    title: "Sucursales",
    url: "/admin/sucursales",
    icon: Settings,
  },
  {
    title: "Compras",
    url: "/admin/compras",
    icon: ShoppingCart,
  },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Application</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {items.map((item) => (
                <SidebarMenuItem key={item.title}>
                  <SidebarMenuButton asChild>
                    <NavLink
                      to={item.url}
                      className={({ isActive }) =>
                        `flex items-center gap-2 p-2 rounded ${isActive ? "bg-gray-200 font-semibold" : "hover:bg-gray-100"
                        }`
                      }
                    >
                      <item.icon size={20} />
                      <span>{item.title}</span>
                    </NavLink>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}


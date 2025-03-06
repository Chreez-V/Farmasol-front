"use client";

import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  SidebarProvider,
  SidebarTrigger,
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  SidebarGroupLabel,
  SidebarGroupContent,
  SidebarInset,
} from "@/components/ui/sidebar";
import { Calendar, CalendarPlus, Home, Inbox } from "lucide-react";

const items = [
  {
    title: "Inicio",
    url: "/",
    icon: Home,
  },
  {
    title: "Certificados",
    url: "/certificates",
    icon: Inbox,
  },
  {
    title: "Eventos Inscritos",
    url: "/registered",
    icon: Calendar,
  },
];

const adminItems = [
  {
    title: "Crear Taller",
    url: "/new/workshop",
    icon: CalendarPlus,
  },
  {
    title: "Crear Charla",
    url: "/new/talk",
    icon: CalendarPlus,
  },
];

interface Props {
  children: React.ReactNode;
}

export default function DashboardSidebar({ children }: Props) {
  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className="bg-background px-4 pt-4">
          <h1 className="text-4xl font-bold text-chetwode-500">CUDI</h1>
        </SidebarHeader>
        <SidebarContent className="bg-background">
          <SidebarGroup>
            <SidebarGroupLabel>Opciones</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {items.map((item) => (
                  <SidebarMenuItem key={item.title}>
                    <SidebarMenuButton asChild>
                      <a href={"/dashboard" + item.url}>
                        <item.icon />
                        <span>{item.title}</span>
                      </a>
                    </SidebarMenuButton>
                  </SidebarMenuItem>
                ))}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter className="bg-background p-4">
        </SidebarFooter>
      </Sidebar>
      <SidebarInset>
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger className="-ml-1" />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <h1 className="text-lg font-bold">Panel</h1>
        </header>
        <div className="flex flex-1 flex-col gap-4 p-8">{children}</div>
      </SidebarInset>
    </SidebarProvider>
  );
}

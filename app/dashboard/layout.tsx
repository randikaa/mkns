"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { 
  BarChart3, 
  Calendar, 
  ChevronRight, 
  LayoutDashboard, 
  LogOut, 
  Settings, 
  Users, 
  ClipboardList,
  User,
  Bell,
  Search
} from "lucide-react"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

const adminNavItems = [
  { title: "Overview", href: "/dashboard/admin", icon: LayoutDashboard },
  { title: "Clients", href: "/dashboard/admin/clients", icon: Users },
  { title: "Staff", href: "/dashboard/admin/staff", icon: Users },
  { title: "Schedules", href: "/dashboard/admin/schedules", icon: Calendar },
  { title: "Reports", href: "/dashboard/admin/reports", icon: BarChart3 },
]

const staffNavItems = [
  { title: "Overview", href: "/dashboard/staff", icon: LayoutDashboard },
  { title: "My Schedule", href: "/dashboard/staff/schedule", icon: Calendar },
  { title: "My Profile", href: "/dashboard/staff/profile", icon: User },
  { title: "Announcements", href: "/dashboard/staff/announcements", icon: Bell },
]

const clientNavItems = [
  { title: "Overview", href: "/dashboard/client", icon: LayoutDashboard },
  { title: "My Bookings", href: "/dashboard/client/bookings", icon: ClipboardList },
  { title: "Book a Service", href: "/dashboard/client/book", icon: Calendar },
  { title: "Invoices", href: "/dashboard/client/invoices", icon: BarChart3 },
]

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const pathname = usePathname()
  
  const getNavItems = () => {
    if (pathname.includes("/dashboard/admin")) return adminNavItems
    if (pathname.includes("/dashboard/staff")) return staffNavItems
    if (pathname.includes("/dashboard/client")) return clientNavItems
    return []
  }

  const roleLabel = pathname.includes("/dashboard/admin") 
    ? "Admin" 
    : pathname.includes("/dashboard/staff") 
      ? "Staff" 
      : "Client"

  const navItems = getNavItems()

  return (
    <div className="flex min-h-screen bg-slate-50/50">
      {/* Sidebar */}
      <aside className="fixed left-0 top-0 z-40 h-screen w-64 border-r bg-white transition-transform">
        <div className="flex h-full flex-col px-3 py-4">
          <Link href="/" className="mb-10 flex items-center gap-2 pl-2.5">
            <img
              src="/logo.png"
              alt="MKNS Logo"
              width={32}
              height={32}
              className="h-8 w-8"
            />
            <span className="text-xl font-bold tracking-tight">MKNS</span>
          </Link>
          
          <div className="mb-4 px-2 text-xs font-semibold uppercase tracking-wider text-slate-500">
            {roleLabel} Dashboard
          </div>

          <nav className="flex-1 space-y-1">
            {navItems.map((item) => {
              const isActive = pathname === item.href
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "group flex items-center rounded-lg p-2 text-sm font-medium transition-colors",
                    isActive 
                      ? "bg-emerald-50 text-emerald-700" 
                      : "text-slate-700 hover:bg-slate-100"
                  )}
                >
                  <item.icon className={cn(
                    "mr-3 h-5 w-5",
                    isActive ? "text-emerald-600" : "text-slate-400 group-hover:text-slate-500"
                  )} />
                  {item.title}
                </Link>
              )
            })}
          </nav>

          <div className="mt-auto border-t pt-4">
            <Button variant="ghost" className="w-full justify-start text-slate-700 hover:bg-red-50 hover:text-red-600" asChild>
              <Link href="/login">
                <LogOut className="mr-3 h-5 w-5" />
                Sign Out
              </Link>
            </Button>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="ml-64 flex w-full flex-col">
        {/* Header */}
        <header className="sticky top-0 z-30 flex h-16 w-full items-center justify-between border-b bg-white/80 px-8 backdrop-blur-md">
           <div className="flex flex-1 items-center gap-4">
             <div className="relative w-96">
                <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
                <Input 
                  placeholder="Search everything..." 
                  className="pl-10 h-9 bg-slate-50/50 border-slate-200"
                />
             </div>
           </div>
           
           <div className="flex items-center gap-4">
             <Button variant="ghost" size="icon" className="relative text-slate-500">
               <Bell className="h-5 w-5" />
               <span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-red-500 ring-2 ring-white" />
             </Button>
             <div className="h-8 w-px bg-slate-200" />
             <div className="flex items-center gap-3">
               <div className="text-right">
                 <p className="text-sm font-semibold text-slate-700">Nipun Sanju</p>
                 <p className="text-xs text-slate-500 capitalize">{roleLabel}</p>
               </div>
               <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-700 font-bold border-2 border-white shadow-sm">
                 NS
               </div>
             </div>
           </div>
        </header>

        {/* Page Content */}
        <main className="flex-1 p-8">
          {children}
        </main>
      </div>
    </div>
  )
}

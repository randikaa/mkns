"use client"

import { 
  Search, 
  Filter, 
  MoreVertical,
  Mail,
  Phone,
  MapPin,
  Loader2
} from "lucide-react"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Badge } from "@/components/ui/badge"
import AddClientDialog from "@/components/AddClientDialog"
import { useClients, type NewClientData } from "@/hooks/use-clients"
import { useState } from "react"

export default function AdminClientsPage() {
  const { clients, loading, error, addClient } = useClients()
  const [searchTerm, setSearchTerm] = useState("")

  const handleClientAdd = async (clientData: NewClientData) => {
    const result = await addClient(clientData)
    if (!result.success) {
      throw new Error(result.error || 'Failed to create client')
    }
  }

  const filteredClients = clients.filter(client =>
    client.companyName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.contactName.toLowerCase().includes(searchTerm.toLowerCase()) ||
    client.email.toLowerCase().includes(searchTerm.toLowerCase())
  )

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    })
  }
  return (
    <div className="space-y-8">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Client Management</h1>
          <p className="text-slate-500 mt-1">Manage all your client relationships and their service history.</p>
        </div>
        <AddClientDialog onClientAdd={handleClientAdd} />
      </div>

      {error && (
        <div className="p-4 text-sm text-red-600 bg-red-50 border border-red-200 rounded-md">
          Error loading clients: {error}
        </div>
      )}

      <Card className="border-none shadow-sm shadow-slate-200">
        <CardHeader className="border-b bg-slate-50/50">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
            <div className="relative w-full md:w-96">
              <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400" />
              <Input 
                placeholder="Search clients by name, email or location..." 
                className="pl-10 bg-white border-slate-200"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Button variant="outline" size="sm" className="gap-2 bg-white">
                <Filter className="h-4 w-4" /> Filter
              </Button>
              <Button variant="outline" size="sm" className="bg-white">Export</Button>
            </div>
          </div>
        </CardHeader>
        <CardContent className="p-0">
          {loading ? (
            <div className="flex items-center justify-center py-12">
              <Loader2 className="h-8 w-8 animate-spin text-emerald-600" />
              <span className="ml-2 text-slate-600">Loading clients...</span>
            </div>
          ) : filteredClients.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-slate-500">
                {searchTerm ? 'No clients found matching your search.' : 'No clients found. Add your first client to get started.'}
              </p>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b bg-slate-50/50">
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Client Info</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Contact Details</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Status</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider">Created</th>
                    <th className="px-6 py-4 text-xs font-bold text-slate-500 uppercase tracking-wider text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {filteredClients.map((client) => (
                    <tr key={client.id} className="hover:bg-slate-50/50 transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex flex-col">
                          <span className="font-bold text-slate-900 group-hover:text-emerald-700 transition-colors underline decoration-slate-200 decoration-2 underline-offset-4">
                            {client.companyName}
                          </span>
                          {client.address && (
                            <span className="text-sm text-slate-500 flex items-center gap-1 mt-1">
                              <MapPin className="h-3 w-3" /> {client.address}
                            </span>
                          )}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <p className="text-sm font-medium text-slate-700">{client.contactName}</p>
                          <div className="flex flex-col gap-0.5">
                            <span className="text-xs text-slate-500 flex items-center gap-1.5">
                              <Mail className="h-3 w-3" /> {client.email}
                            </span>
                            <span className="text-xs text-slate-500 flex items-center gap-1.5">
                              <Phone className="h-3 w-3" /> {client.phone}
                            </span>
                          </div>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <Badge variant={
                          client.status === "Active" ? "default" : 
                          client.status === "Pending" ? "outline" : "secondary"
                        } className={
                          client.status === "Active" ? "bg-emerald-50 text-emerald-700 hover:bg-emerald-100 border-none px-3 py-1" :
                          client.status === "Pending" ? "bg-amber-50 text-amber-700 border-none px-3 py-1" : "bg-slate-100 text-slate-600 border-none px-3 py-1"
                        }>
                          {client.status}
                        </Badge>
                      </td>
                      <td className="px-6 py-4 text-sm text-slate-600 font-medium">
                        {formatDate(client.createdAt)}
                      </td>
                      <td className="px-6 py-4 text-right">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="icon" className="h-8 w-8 text-slate-400 hover:text-slate-900">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end" className="w-48">
                            <DropdownMenuLabel>Actions</DropdownMenuLabel>
                            <DropdownMenuItem className="cursor-pointer">View Details</DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">Edit Client</DropdownMenuItem>
                            <DropdownMenuItem className="cursor-pointer">View Invoices</DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-rose-600 cursor-pointer">Archive Client</DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}

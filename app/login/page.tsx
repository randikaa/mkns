"use client"

import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent } from "@/components/ui/card"
import { toast } from "sonner"
import { Loader2 } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = async (e: React.FormEvent, role: string) => {
    e.preventDefault()
    setIsLoading(true)

    try {
      const response = await fetch("/api/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password, role }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Login failed")
      }

      toast.success("Login successful!")
      router.push(`/dashboard/${role}`)
    } catch (error: any) {
      toast.error(error.message || "An unexpected error occurred")
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="flex min-h-screen flex-col lg:flex-row">
      {/* Left side: Image */}
      <div className="relative hidden w-full lg:block lg:w-1/2">
        <img
          src="/images/login-background.png"
          alt="Professional cleaning service"
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent" />
        <div className="absolute bottom-12 left-12 right-12 z-10">
          <Link href="/" className="mb-8 flex items-center gap-2">
            <img
              src="/logo.png"
              alt="MKNS Logo"
              width={40}
              height={40}
              className="h-10 w-10 brightness-0 invert"
            />
            <span className="text-2xl font-bold tracking-tight text-white">MKNS</span>
          </Link>
          <h2 className="text-3xl font-bold text-white mb-4">
            Professional excellence in every sweep.
          </h2>
          <p className="text-lg text-gray-200">
            Join Australia's most trusted commercial and residential cleaning team.
          </p>
        </div>
      </div>

      {/* Right side: Form */}
      <div className="flex w-full items-center justify-center p-8 lg:w-1/2">
        <div className="mx-auto w-full max-w-md space-y-8">
          <div className="lg:hidden text-center mb-8">
             <Link href="/" className="inline-flex items-center gap-2">
              <img
                src="/logo.png"
                alt="MKNS Logo"
                width={32}
                height={32}
                className="h-8 w-8"
              />
              <span className="text-xl font-bold tracking-tight">MKNS</span>
            </Link>
          </div>

          <div className="text-center">
            <h1 className="text-3xl font-bold tracking-tight">Welcome Back</h1>
            <p className="mt-2 text-muted-foreground">Please enter your details to sign in.</p>
          </div>

          <Tabs defaultValue="client" className="w-full">
            <TabsList className="grid w-full grid-cols-3">
              <TabsTrigger value="client">Client</TabsTrigger>
              <TabsTrigger value="staff">Staff</TabsTrigger>
              <TabsTrigger value="admin">Admin</TabsTrigger>
            </TabsList>
            
            <Card className="mt-6 border-none shadow-none">
              <CardContent className="p-0 space-y-4">
                <TabsContent value="client" className="mt-0 space-y-4">
                  <form onSubmit={(e) => handleLogin(e, "client")} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="client-email">Client Email</Label>
                      <Input 
                        id="client-email" 
                        type="email" 
                        placeholder="m@example.com" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="client-password">Password</Label>
                        <Link
                          href="/login/forgot-password"
                          className="text-sm font-medium text-emerald-600 hover:text-emerald-500"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <Input 
                        id="client-password" 
                        type="password" 
                        required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <Button type="submit" disabled={isLoading} className="w-full bg-emerald-600 hover:bg-emerald-700">
                      {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                      Login as Client
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="staff" className="mt-0 space-y-4">
                  <form onSubmit={(e) => handleLogin(e, "staff")} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="staff-email">Staff Email / Employee ID</Label>
                      <Input 
                        id="staff-email" 
                        placeholder="S12345" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="staff-password">Password</Label>
                        <Link
                          href="/login/forgot-password"
                          className="text-sm font-medium text-emerald-600 hover:text-emerald-500"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <Input 
                        id="staff-password" 
                        type="password" 
                        required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <Button type="submit" disabled={isLoading} className="w-full bg-emerald-600 hover:bg-emerald-700">
                      {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                      Login as Staff
                    </Button>
                  </form>
                </TabsContent>

                <TabsContent value="admin" className="mt-0 space-y-4">
                  <form onSubmit={(e) => handleLogin(e, "admin")} className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="admin-email">Admin Username / Email</Label>
                      <Input 
                        id="admin-email" 
                        placeholder="admin" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                    </div>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between">
                        <Label htmlFor="admin-password">Password</Label>
                        <Link
                          href="/login/forgot-password"
                          className="text-sm font-medium text-emerald-600 hover:text-emerald-500"
                        >
                          Forgot password?
                        </Link>
                      </div>
                      <Input 
                        id="admin-password" 
                        type="password" 
                        required 
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                    </div>
                    <Button type="submit" disabled={isLoading} className="w-full bg-emerald-600 hover:bg-emerald-700">
                      {isLoading ? <Loader2 className="mr-2 h-4 w-4 animate-spin" /> : null}
                      Login as Admin
                    </Button>
                  </form>
                </TabsContent>
              </CardContent>
            </Card>
          </Tabs>

          <p className="text-center text-sm text-muted-foreground">
            Don't have an account?{" "}
            <Link href="/contact" className="font-semibold text-emerald-600 hover:text-emerald-500">
              Get in touch
            </Link>
          </p>
        </div>
      </div>
    </div>
  )
}

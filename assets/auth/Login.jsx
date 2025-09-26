import React, { useState } from "react";

export default function Login() {
  const [fullName, setFullName] = useState("");
  const [gmailAccount, setGmailAccount] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    // Add your login logic here
    alert(`Login submitted:\nNama Lengkap: ${fullName}\nAkun Gmail: ${gmailAccount}`);
  };

  const handleReset = () => {
    setFullName("");
    setGmailAccount("");
    setPassword("");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-background px-4">
      <div className="w-full max-w-md bg-muted p-8 rounded-md shadow-md">
        <h2 className="text-center text-primary text-xl font-semibold mb-6">Login</h2>
        <form onSubmit={handleLogin} className="space-y-5">
          <div className="flex flex-col">
            <label htmlFor="fullName" className="mb-1 text-muted-foreground text-sm">
              Nama Lengkap
            </label>
            <input
              id="fullName"
              type="text"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Masukkan nama lengkap Anda"
              className="border border-border rounded px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              required
              autoComplete="name"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="gmailAccount" className="mb-1 text-muted-foreground text-sm">
              Akun Gmail
            </label>
            <input
              id="gmailAccount"
              type="email"
              value={gmailAccount}
              onChange={(e) => setGmailAccount(e.target.value)}
              placeholder="Masukkan akun Gmail Anda"
              className="border border-border rounded px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              required
              autoComplete="email"
            />
          </div>

          <div className="flex flex-col">
            <label htmlFor="password" className="mb-1 text-muted-foreground text-sm">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Masukkan password Anda"
              className="border border-border rounded px-3 py-2 text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
              required
              autoComplete="current-password"
            />
          </div>

          <div className="flex justify-between">
            <button
              type="submit"
              className="bg-primary text-background px-4 py-2 rounded hover:bg-primary/90 transition"
            >
              Login
            </button>
            <button
              type="button"
              onClick={handleReset}
              className="bg-muted hover:bg-muted/80 text-muted-foreground px-4 py-2 rounded transition"
            >
              Reset
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
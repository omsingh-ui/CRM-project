import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { login } from "../api/authApi";
import { saveAuth } from "../utils/auth";
import Logo from "../components/Logo";

export default function Login() {
  const navigate = useNavigate();

  // Form State
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // UI State
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    if (e) e.preventDefault();
    if (!email || !password) {
      setError("Please fill in both email and password.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await login({
        email,
        password,
      });

      // Save Logged-in User session
      saveAuth(response.data.token, response.data.user);

      navigate("/dashboard", { replace: true });
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Invalid email or password. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div
      className="
      min-h-screen
      flex items-center justify-center
      bg-gradient-to-br
      from-slate-100
      to-white
      dark:from-zinc-950
      dark:to-zinc-900
      px-6
      py-12
    "
    >
      <div
        className="
        bg-white
        dark:bg-zinc-900
        w-full
        max-w-[450px]
        rounded-3xl
        shadow-sm
        border
        border-slate-100
        dark:border-zinc-800
        p-8
        sm:p-10
      "
      >
        {/* Header */}
        <div className="mb-8">
          <div className="flex justify-center">
            <Logo size="text-4xl" />
          </div>

          <h1
            className="
            mt-6
            text-center
            text-3xl
            font-bold
            text-slate-900
            dark:text-white
            "
          >
            Welcome Back
          </h1>

          <p
            className="
            mt-2
            text-center
            text-sm
            text-slate-500
            dark:text-slate-400
            "
          >
            Sign in to access your CRM workspace.
          </p>

          <div className="mt-4 text-center">
            <Link
              to="/"
              className="
              text-xs
              font-medium
              text-blue-700
              hover:text-blue-800
              dark:text-blue-400
              "
            >
              ← Back to Home
            </Link>
          </div>
        </div>

        <form onSubmit={handleLogin} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@company.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="
              w-full
              border
              border-slate-200
              dark:border-zinc-700
              bg-white
              dark:bg-zinc-800
              text-slate-900
              dark:text-white
              p-3.5
              rounded-xl
              outline-none
              focus:ring-2
              focus:ring-blue-500
              text-sm
            "
              required
            />
          </div>

          {/* Password */}
          <div>
            <div className="flex items-center justify-between mb-1">
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300">
                Password
              </label>
              <Link
                to="/forgot-password"
                className="text-xs font-medium text-blue-600 hover:text-blue-700 dark:text-blue-400"
              >
                Forgot Password?
              </Link>
            </div>
            <input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="
              w-full
              border
              border-slate-200
              dark:border-zinc-700
              bg-white
              dark:bg-zinc-800
              text-slate-900
              dark:text-white
              p-3.5
              rounded-xl
              outline-none
              focus:ring-2
              focus:ring-blue-500
              text-sm
            "
              required
            />
          </div>

          {/* Error */}
          {error && (
            <div
              className="
              p-3
              rounded-xl
              bg-red-50
              border
              border-red-200
              text-red-700
              text-xs
              font-medium
            "
            >
              {error}
            </div>
          )}

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="
            w-full
            mt-2
            bg-blue-600
            text-white
            p-3.5
            rounded-xl
            font-semibold
            text-sm
            hover:bg-blue-700
            transition
            disabled:opacity-60
            shadow-sm
          "
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>

        {/* Footer */}
        <div className="mt-6 text-center text-xs text-slate-500 dark:text-slate-400">
          Don&apos;t have an account?{" "}
          <Link
            to="/register"
            className="text-blue-600 font-semibold hover:underline dark:text-blue-400"
          >
            Create an Account
          </Link>
        </div>

        <p className="mt-6 text-center text-slate-400 dark:text-zinc-600 text-xs">
          Secure Login • Tech Marque CRM
        </p>
      </div>
    </div>
  );
}
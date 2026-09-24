import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { forgotPassword } from "../api/authApi";
import Logo from "../components/Logo";

export default function ForgotPassword() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [successData, setSuccessData] = useState(null);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!email) {
      setError("Please enter your registered email address.");
      return;
    }

    try {
      setLoading(true);
      setError("");
      setSuccessData(null);

      const response = await forgotPassword(email);
      setSuccessData(response.data);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Unable to process request. Please check the email and try again."
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
        max-w-[460px]
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
        <div className="mb-8 text-center">
          <div className="flex justify-center">
            <Logo size="text-4xl" />
          </div>

          <h1
            className="
            mt-6
            text-3xl
            font-bold
            text-slate-900
            dark:text-white
            "
          >
            Forgot Password
          </h1>

          <p
            className="
            mt-2
            text-sm
            text-slate-500
            dark:text-slate-400
            "
          >
            Enter your account email to receive a password reset token.
          </p>
        </div>

        {/* Success State */}
        {successData ? (
          <div className="space-y-5">
            <div className="rounded-2xl bg-emerald-50 border border-emerald-200 dark:bg-emerald-950/30 dark:border-emerald-800/40 p-5 text-emerald-800 dark:text-emerald-300">
              <div className="flex items-center gap-2 font-semibold text-sm">
                <span>✓</span> Reset Token Generated
              </div>
              <p className="mt-1 text-xs leading-relaxed text-emerald-700 dark:text-emerald-400">
                A secure reset token was created for <strong>{successData.email}</strong>. This token expires in 1 hour.
              </p>

              <div className="mt-4 p-3 bg-white dark:bg-zinc-900 rounded-xl border border-emerald-300 dark:border-emerald-800 text-center">
                <span className="text-[11px] uppercase font-bold tracking-wider text-slate-400 block mb-1">
                  Reset Token
                </span>
                <code className="text-xs font-mono font-bold text-blue-600 dark:text-blue-400 break-all select-all">
                  {successData.resetToken}
                </code>
              </div>
            </div>

            <button
              type="button"
              onClick={() =>
                navigate(
                  `/reset-password?token=${successData.resetToken}&email=${encodeURIComponent(
                    successData.email
                  )}`
                )
              }
              className="
              w-full
              bg-blue-600
              text-white
              p-3.5
              rounded-xl
              font-semibold
              text-sm
              hover:bg-blue-700
              transition
              shadow-sm
            "
            >
              Proceed to Reset Password →
            </button>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Account Email
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
              {loading ? "Generating Token..." : "Send Reset Token"}
            </button>
          </form>
        )}

        <div className="mt-8 text-center text-xs">
          <Link
            to="/login"
            className="text-blue-600 font-semibold hover:underline dark:text-blue-400"
          >
            ← Back to Login
          </Link>
        </div>

        <p className="mt-6 text-center text-slate-400 dark:text-zinc-600 text-xs">
          Secure Authentication • Tech Marque CRM
        </p>
      </div>
    </div>
  );
}

import { useState, useEffect } from "react";
import { Link, useNavigate, useParams, useSearchParams } from "react-router-dom";
import { resetPassword } from "../api/authApi";
import Logo from "../components/Logo";

export default function ResetPassword() {
  const navigate = useNavigate();
  const params = useParams();
  const [searchParams] = useSearchParams();

  const initialToken = params.token || searchParams.get("token") || "";
  const initialEmail = searchParams.get("email") || "";

  const [token, setToken] = useState(initialToken);
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (params.token) {
      setToken(params.token);
    } else if (searchParams.get("token")) {
      setToken(searchParams.get("token"));
    }
  }, [params.token, searchParams]);

  const handleSubmit = async (e) => {
    if (e) e.preventDefault();
    if (!token) {
      setError("Please provide the reset token.");
      return;
    }

    if (!newPassword || newPassword.length < 6) {
      setError("Password must be at least 6 characters long.");
      return;
    }

    if (newPassword !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      await resetPassword({
        token: token.trim(),
        password: newPassword,
      });

      setSuccess(true);
      setTimeout(() => {
        navigate("/login");
      }, 2500);
    } catch (err) {
      setError(
        err.response?.data?.message ||
          "Failed to reset password. The token may be invalid or expired."
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
            Reset Password
          </h1>

          <p
            className="
            mt-2
            text-sm
            text-slate-500
            dark:text-slate-400
            "
          >
            {initialEmail
              ? `Resetting password for ${initialEmail}`
              : "Enter your reset token and your new password."}
          </p>
        </div>

        {/* Success */}
        {success ? (
          <div className="rounded-2xl bg-emerald-50 border border-emerald-200 dark:bg-emerald-950/30 dark:border-emerald-800/40 p-5 text-center text-emerald-800 dark:text-emerald-300">
            <div className="text-2xl mb-2">🎉</div>
            <h3 className="font-bold text-sm">Password Reset Successful!</h3>
            <p className="mt-1 text-xs text-emerald-600 dark:text-emerald-400">
              Your password has been changed. Redirecting to login...
            </p>
            <div className="mt-4">
              <Link
                to="/login"
                className="text-xs font-semibold text-blue-600 hover:underline"
              >
                Click here if not redirected automatically →
              </Link>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Token */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Reset Token
              </label>
              <input
                type="text"
                placeholder="Paste your 40-character reset token"
                value={token}
                onChange={(e) => setToken(e.target.value)}
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
                text-xs
                font-mono
              "
                required
              />
            </div>

            {/* New Password */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                New Password
              </label>
              <input
                type="password"
                placeholder="At least 6 characters"
                value={newPassword}
                onChange={(e) => setNewPassword(e.target.value)}
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

            {/* Confirm Password */}
            <div>
              <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
                Confirm New Password
              </label>
              <input
                type="password"
                placeholder="Re-enter new password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
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
              {loading ? "Resetting Password..." : "Set New Password"}
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

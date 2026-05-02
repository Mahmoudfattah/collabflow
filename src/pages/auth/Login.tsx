import { useState } from "react";
import { Mail, Lock, Eye, EyeOff } from "lucide-react";
import InputField from "../../components/InputField";
import Divider from "../../components/Divider";
import { Link } from "react-router-dom";
// ─── Types ───────────────────────────────────────────────────
interface LoginForm {
  email: string;
  password: string;
}


// ─── Sub-components ──────────────────────────────────────────
function CollabFlowLogo() {
  return (
    <div className="flex flex-col items-center gap-3 mb-4">
      {/* Logo Icon */}
      <div className="w-14 h-14 rounded-2xl bg-[#494bd6] flex items-center justify-center shadow-lg shadow-[#494bd6]/30">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect x="3"  y="3"  width="10" height="10" rx="2" fill="white" opacity="0.9" />
          <rect x="15" y="3"  width="10" height="10" rx="2" fill="white" opacity="0.6" />
          <rect x="3"  y="15" width="10" height="10" rx="2" fill="white" opacity="0.6" />
          <rect x="15" y="15" width="10" height="10" rx="2" fill="white" opacity="0.9" />
        </svg>
      </div>

      {/* Brand Name */}
      <div className="text-center">
        <h1 className="text-xl pb-2 font-bold text-[#e4e1ed] tracking-tight">
          CollabFlow
        </h1>
        <p className="text-xs text-[#908fa0] mt-0.5 tracking-wide uppercase">
          Production workspace for modern teams
        </p>
      </div>
    </div>
  );
}




function GoogleButton() {
  return (
    <button
      type="button"
      className="
        w-full flex items-center justify-center gap-2.5
        bg-transparent border border-[#464554]
        rounded-md py-2.5
        text-sm font-medium text-[#c7c4d7]
        transition-all duration-150
        hover:bg-[#292932] hover:border-[#908fa0]
        active:scale-[0.99]
      "
    >
      {/* Google SVG */}
      <svg width="16" height="16" viewBox="0 0 24 24">
        <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
        <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
        <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
        <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
      </svg>
      Continue with Google
    </button>
  );
}

// ─── Main Component ───────────────────────────────────────────
export default function Login() {
  const [form, setForm] = useState<LoginForm>({ email: "", password: "" });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);


  
  function handleChange(field: keyof LoginForm) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      setForm((prev) => ({ ...prev, [field]: e.target.value }));
    };
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!form.email || !form.password) return;

    setIsLoading(true);
    try {
      // TODO: replace with real auth call (e.g. supabase.auth.signInWithPassword)
      await new Promise((res) => setTimeout(res, 1000));
      console.log("Login:", form.email);
    } finally {
      setIsLoading(false);
    }
  }

  const isDisabled = !form.email || !form.password || isLoading;

  return (
    // Full-page dark background matching design
   <div className="w-screen min-h-screen bg-[#0d0d15] flex flex-col items-center justify-center px-4">

      {/* Card */}
      <div className="w-full max-w-[400px]">

        {/* Logo */}
        <CollabFlowLogo />

        {/* Form card */}
        <div className="bg-[#1b1b23] border border-[#464554] rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">

          {/* Work Email */}
          <div className="flex flex-col gap-1.5 mb-4">
            <label
              htmlFor="email"
              className="text-[11px] font-semibold text-[#908fa0] uppercase tracking-widest"
            >
              Work Email
            </label>
            <InputField
              id="email"
              type="email"
              placeholder="name@company.com"
              value={form.email}
              onChange={handleChange("email")}
              autoComplete="email"
              icon={<Mail size={15} />}
            />
          </div>

          {/* Password */}
          <div className="flex flex-col gap-1.5 mb-6">
            <div className="flex items-center justify-between">
              <label
                htmlFor="password"
                className="text-[11px] font-semibold text-[#908fa0] uppercase tracking-widest"
              >
                Password
              </label>
              <button
                type="button"
                className="text-xs text-[#8083ff] hover:text-[#c0c1ff] transition-colors duration-150"
              >
                Forgot password?
              </button>
            </div>
            <InputField
              id="password"
              type={showPassword ? "text" : "password"}
              placeholder="••••••••"
              value={form.password}
              onChange={handleChange("password")}
              autoComplete="current-password"
              icon={<Lock size={15} />}
              rightSlot={
                <button
                  type="button"
                  onClick={() => setShowPassword((v) => !v)}
                  className="text-[#908fa0] hover:text-[#c7c4d7] transition-colors duration-150"
                  aria-label={showPassword ? "Hide password" : "Show password"}
                >
                  {showPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                </button>
              }
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            disabled={isDisabled}
            onClick={(e) => {
              const form = (e.target as HTMLElement).closest("div")?.querySelector("form");
              form?.requestSubmit();
            }}
            className="
              w-full py-2.5 rounded-md
              bg-[#494bd6] hover:bg-[#8083ff]
              text-white text-sm font-semibold
              transition-all duration-150
              disabled:opacity-40 disabled:cursor-not-allowed
              active:scale-[0.99]
              shadow-md shadow-[#494bd6]/30
            "
          >
            {isLoading ? (
               <>
                  <svg
                    className="animate-spin h-4 w-4"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle
                      className="opacity-25"
                      cx="12"
                      cy="12"
                      r="10"
                      stroke="currentColor"
                      strokeWidth="4"
                    />
                    <path
                      className="opacity-75"
                      fill="currentColor"
                      d="M4 12a8 8 0 018-8v8z"
                    />
                  </svg>
                  Sign in...
                </>
            ) : (
              "Sign In"
            )}
          </button>

          <Divider content="or" />
          <GoogleButton />
        </div>

        {/* Footer link */}
        <p className="text-center text-sm text-[#908fa0] mt-6">
          Don't have an account?{" "}
          <Link
            to="/"
            className="text-[#8083ff] hover:text-[#c0c1ff] font-medium transition-colors duration-150"
          >
            Sign up
          </Link>
        </p>

        {/* Bottom bar */}
        <div className="flex items-center justify-between mt-10 px-1">
          <div className="flex gap-4">
            <a href="#" className="text-xs text-[#908fa0] hover:text-[#c7c4d7] transition-colors">
              Support
            </a>
            <a href="#" className="text-xs text-[#908fa0] hover:text-[#c7c4d7] transition-colors">
              Status
            </a>
          </div>
          <span className="text-xs text-[#464554]">© 2024 COLLABFLOW</span>
        </div>
      </div>
    </div>
  );
}
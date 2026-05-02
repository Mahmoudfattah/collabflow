import { useState } from "react";
import { Mail, Lock, Eye, EyeOff, User, Shield } from "lucide-react";
import { Link } from "react-router-dom";

// ─── Types ────────────────────────────────────────────────────
interface RegisterForm {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  agreed: boolean;
}

interface InputFieldProps {
  id: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  icon: React.ReactNode;
  rightSlot?: React.ReactNode;
  autoComplete?: string;
}

// ─── InputField ───────────────────────────────────────────────
function InputField({
  id,
  type,
  placeholder,
  value,
  onChange,
  icon,
  rightSlot,
  autoComplete,
}: InputFieldProps) {
  return (
    <div className="relative flex items-center">
      <span className="absolute left-3 text-[#908fa0] pointer-events-none">
        {icon}
      </span>
      <input
        id={id}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        autoComplete={autoComplete}
        className="
          w-full
          bg-[#0d0d15]
          border border-[#464554]
         rounded-md
          pl-10 pr-10 py-2.5
          text-sm text-[#e4e1ed]
          placeholder:text-[#464554]
          outline-none
          transition-all duration-150
          focus:border-[#8083ff]
          focus:shadow-[0_0_0_2px_rgba(128,131,255,0.2)]
        "
      />
      {rightSlot && (
        <span className="absolute right-3">{rightSlot}</span>
      )}
    </div>
  );
}

// ─── Logo ─────────────────────────────────────────────────────
function CollabFlowLogo() {
  return (
    <div className="flex  flex-col items-center gap-3 mb-6 mt-18">
      <div className="w-14 h-14 rounded-2xl bg-[#494bd6] flex items-center justify-center shadow-lg shadow-[#494bd6]/30">
        <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
          <rect x="3"  y="3"  width="10" height="10" rx="2" fill="white" opacity="0.9" />
          <rect x="15" y="3"  width="10" height="10" rx="2" fill="white" opacity="0.6" />
          <rect x="3"  y="15" width="10" height="10" rx="2" fill="white" opacity="0.6" />
          <rect x="15" y="15" width="10" height="10" rx="2" fill="white" opacity="0.9" />
        </svg>
      </div>
      <div className="text-center">
        <h1 className="text-xl font-bold text-[#e4e1ed] tracking-tight">CollabFlow</h1>
        <p className="text-xs text-[#908fa0] mt-0.5 tracking-wide uppercase">
          Production Workspace
        </p>
      </div>
    </div>
  );
}

// ─── Divider ──────────────────────────────────────────────────
function Divider() {
  return (
    <div className="relative flex items-center gap-3 my-4">
      <div className="flex-1 h-px bg-[#464554]" />
      <span className="text-[10px] text-[#908fa0] tracking-widest uppercase">
        or continue with
      </span>
      <div className="flex-1 h-px bg-[#464554]" />
    </div>
  );
}

// ─── Social Buttons (Google + GitHub) ────────────────────────
function SocialButtons() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {/* Google */}
      <button
        type="button"
        className="
          flex items-center justify-center gap-2
          bg-transparent border border-[#464554]
         rounded-md py-2.5
          text-sm font-medium text-[#c7c4d7]
          transition-all duration-150
          hover:bg-[#292932] hover:border-[#908fa0]
          active:scale-[0.99]
        "
      >
        <svg width="15" height="15" viewBox="0 0 24 24">
          <path
            d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
            fill="#4285F4"
          />
          <path
            d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
            fill="#34A853"
          />
          <path
            d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
            fill="#FBBC05"
          />
          <path
            d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
            fill="#EA4335"
          />
        </svg>
        Google
      </button>

      {/* GitHub */}
      <button
        type="button"
        className="
          flex items-center justify-center gap-2
          bg-transparent border border-[#464554]
         rounded-md py-2.5
          text-sm font-medium text-[#c7c4d7]
          transition-all duration-150
          hover:bg-[#292932] hover:border-[#908fa0]
          active:scale-[0.99]
        "
      >
        <svg
          width="15"
          height="15"
          viewBox="0 0 24 24"
          fill="currentColor"
          className="text-[#c7c4d7]"
        >
          <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
        </svg>
        GitHub
      </button>
    </div>
  );
}

// ─── Main Component ───────────────────────────────────────────
export default function Register() {
  const [form, setForm] = useState<RegisterForm>({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    agreed: false,
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [passwordMismatch, setPasswordMismatch] = useState(false);

  function handleChange(field: keyof RegisterForm) {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const value =
        e.target.type === "checkbox" ? e.target.checked : e.target.value;
      setForm((prev) => ({ ...prev, [field]: value }));
      if (field === "password" || field === "confirmPassword") {
        setPasswordMismatch(false);
      }
    };
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (
      !form.fullName ||
      !form.email ||
      !form.password ||
      !form.confirmPassword ||
      !form.agreed
    )
      return;

    if (form.password !== form.confirmPassword) {
      setPasswordMismatch(true);
      return;
    }

    setIsLoading(true);
    try {
      // TODO: replace with supabase.auth.signUp
      await new Promise((res) => setTimeout(res, 1200));
      console.log("Registered:", form.email);
    } finally {
      setIsLoading(false);
    }
  }

  const isDisabled =
    !form.fullName ||
    !form.email ||
    !form.password ||
    !form.confirmPassword ||
    !form.agreed ||
    isLoading;

  return (
    <div className="w-screen min-h-screen  flex flex-col items-center justify-center px-4 py-10 ">
      <div className="w-full max-w-[400px]">

        {/* Logo */}
        <CollabFlowLogo />

        {/* Card */}
        <div className="bg-[#1b1b23] border border-[#464554] rounded-2xl p-8 shadow-[0_8px_32px_rgba(0,0,0,0.6)]">

          {/* Header */}
          <div className="mb-5">
            <h2 className="text-lg font-semibold text-[#e4e1ed]">Create Account</h2>
            <p className="text-sm text-[#908fa0] mt-0.5">
              Join the elite collaborative environment.
            </p>
          </div>

          <form onSubmit={handleSubmit} noValidate className="flex flex-col gap-4">

            {/* Full Name */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="fullName"
                className="text-[11px] font-semibold text-[#908fa0] uppercase tracking-widest"
              >
                Full Name
              </label>
              <InputField
                id="fullName"
                type="text"
                placeholder="Enter your full name"
                value={form.fullName}
                onChange={handleChange("fullName")}
                autoComplete="name"
                icon={<User size={15} />}
              />
            </div>

            {/* Work Email */}
            <div className="flex flex-col gap-1.5">
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
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="password"
                className="text-[11px] font-semibold text-[#908fa0] uppercase tracking-widest"
              >
                Password
              </label>
              <InputField
                id="password"
                type={showPassword ? "text" : "password"}
                placeholder="••••••••"
                value={form.password}
                onChange={handleChange("password")}
                autoComplete="new-password"
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

            {/* Confirm Password */}
            <div className="flex flex-col gap-1.5">
              <label
                htmlFor="confirmPassword"
                className="text-[11px] font-semibold text-[#908fa0] uppercase tracking-widest"
              >
                Confirm Password
              </label>
              <InputField
                id="confirmPassword"
                type={showConfirmPassword ? "text" : "password"}
                placeholder="••••••••"
                value={form.confirmPassword}
                onChange={handleChange("confirmPassword")}
                autoComplete="new-password"
                icon={<Shield size={15} />}
                rightSlot={
                  <button
                    type="button"
                    onClick={() => setShowConfirmPassword((v) => !v)}
                    className="text-[#908fa0] hover:text-[#c7c4d7] transition-colors duration-150"
                    aria-label={
                      showConfirmPassword ? "Hide password" : "Show password"
                    }
                  >
                    {showConfirmPassword ? <EyeOff size={15} /> : <Eye size={15} />}
                  </button>
                }
              />
              {passwordMismatch && (
                <p className="text-xs text-[#ff6b6b] mt-0.5">
                  Passwords do not match.
                </p>
              )}
            </div>

            {/* Terms checkbox */}
            <label className="flex items-start gap-2.5 cursor-pointer">
              <input
                type="checkbox"
                checked={form.agreed}
                onChange={handleChange("agreed")}
                className="mt-0.5 w-4 h-4 rounded-[4px] border border-[#464554] bg-[#0d0d15] accent-[#8083ff] cursor-pointer flex-shrink-0"
              />
              <span className="text-sm text-[#908fa0] leading-snug">
                I agree to the{" "}
                <a
                  href="#"
                  className="text-[#8083ff] hover:text-[#c0c1ff] transition-colors"
                >
                  Terms of Service
                </a>{" "}
                and{" "}
                <a
                  href="#"
                  className="text-[#8083ff] hover:text-[#c0c1ff] transition-colors"
                >
                  Privacy Policy
                </a>
                .
              </span>
            </label>

            {/* Submit */}
            <button
              type="submit"
              disabled={isDisabled}
              className="
                w-full py-2.5 rounded-md mt-1
                bg-[#494bd6] hover:bg-[#8083ff]
                text-white text-sm font-semibold
                transition-all duration-150
                disabled:opacity-40 disabled:cursor-not-allowed
                active:scale-[0.99]
                shadow-md shadow-[#494bd6]/30
                flex items-center justify-center gap-2
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
                  Creating account...
                </>
              ) : (
                "Create Account →"
              )}
            </button>
          </form>

          <Divider />
          <SocialButtons />
        </div>

        {/* Footer link */}
        <p className="text-center text-sm text-[#908fa0] my-3">
          Already have an account?{" "}
          <Link 
            
             to="login"
            className="text-[#8083ff] hover:text-[#c0c1ff] font-medium transition-colors duration-150"
          >
            Log in
          </Link>
        </p>

        {/* Bottom bar */}
        <div className="flex items-center justify-between mt-8 px-1">
          <div className="flex gap-4">
            <a
              href="#"
              className="text-xs text-[#908fa0] hover:text-[#c7c4d7] transition-colors"
            >
              Support
            </a>
            <a
              href="#"
              className="text-xs text-[#908fa0] hover:text-[#c7c4d7] transition-colors"
            >
              Status
            </a>
          </div>
          <span className="text-xs text-[#464554]">© 2024 COLLABFLOW</span>
        </div>
      </div>
    </div>
  );
}
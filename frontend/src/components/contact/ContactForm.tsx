import { useState } from "react";
import { contactAPI } from "../../library/api";

const inputClass =
  "w-full rounded-lg border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder:text-white/40 outline-none focus:border-lime-500/60";

const ContactForm = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [status, setStatus] = useState<null | "success" | "error">(null);

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setStatus(null);

    try {
      // ✅ correct API call
      await contactAPI(form);

      setStatus("success");
      setForm({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      setStatus("error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-md">
      <form onSubmit={onSubmit} className="space-y-4">
        <div>
          <label className="mb-2 block text-xs text-white/70">Name</label>
          <input
            name="name"
            value={form.name}
            onChange={onChange}
            placeholder="Enter your name"
            className={inputClass}
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-xs text-white/70">Email</label>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={onChange}
            placeholder="Enter your email"
            className={inputClass}
            required
          />
        </div>

        <div>
          <label className="mb-2 block text-xs text-white/70">Message</label>
          <textarea
            name="message"
            value={form.message}
            onChange={onChange}
            placeholder="Type your message"
            className={`${inputClass} min-h-[120px]`}
            required
          />
        </div>

        <button
          type="submit"
          disabled={loading}
          className="w-full rounded-lg bg-lime-500 py-3 text-sm font-bold text-black hover:bg-lime-400 disabled:opacity-60"
        >
          {loading ? "Sending..." : "Send your message"}
        </button>

        {status === "success" && (
          <p className="text-sm text-lime-400">
            Message sent successfully ✅
          </p>
        )}

        {status === "error" && (
          <p className="text-sm text-red-400">
            Failed to send message. Try again ❌
          </p>
        )}
      </form>
    </div>
  );
};

export default ContactForm;
"use client";

import { FormEvent, useMemo, useState } from "react";

type FormState = {
  name: string;
  email: string;
  phone: string;
  date: string;
  time: string;
  guests: string;
  notes: string;
  website: string;
};

const initialState: FormState = {
  name: "",
  email: "",
  phone: "",
  date: "",
  time: "",
  guests: "2",
  notes: "",
  website: "",
};

export function ReservationForm() {
  const [form, setForm] = useState<FormState>(initialState);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">(
    "idle",
  );
  const [message, setMessage] = useState("");

  const minDate = useMemo(() => new Date().toISOString().slice(0, 10), []);

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setMessage("");

    try {
      const response = await fetch("/api/reservations", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          ...form,
          guests: Number(form.guests),
        }),
      });

      const data: { ok?: boolean; message?: string; error?: string } =
        await response.json();

      if (!response.ok) {
        setStatus("error");
        setMessage(data.error ?? "Reservation request failed.");
        return;
      }

      setStatus("success");
      setMessage(data.message ?? "Reservation request submitted.");
      setForm(initialState);
    } catch {
      setStatus("error");
      setMessage("Network error. Please try again.");
    }
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="rounded-3xl border border-soft-beige/20 bg-soft-beige/5 p-5 md:p-6"
    >
      <div className="grid gap-4 md:grid-cols-2">
        <label className="text-xs uppercase tracking-[0.15em] text-soft-beige/70">
          Full Name
          <input
            required
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            className="mt-2 w-full rounded-xl border border-soft-beige/25 bg-charcoal/70 px-3 py-2 text-sm outline-none ring-accent-gold transition focus:ring"
          />
        </label>

        <label className="text-xs uppercase tracking-[0.15em] text-soft-beige/70">
          Email
          <input
            required
            type="email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            className="mt-2 w-full rounded-xl border border-soft-beige/25 bg-charcoal/70 px-3 py-2 text-sm outline-none ring-accent-gold transition focus:ring"
          />
        </label>

        <label className="text-xs uppercase tracking-[0.15em] text-soft-beige/70">
          Phone
          <input
            required
            type="tel"
            value={form.phone}
            onChange={(e) => setForm({ ...form, phone: e.target.value })}
            className="mt-2 w-full rounded-xl border border-soft-beige/25 bg-charcoal/70 px-3 py-2 text-sm outline-none ring-accent-gold transition focus:ring"
          />
        </label>

        <label className="text-xs uppercase tracking-[0.15em] text-soft-beige/70">
          Guests
          <input
            required
            min={1}
            max={12}
            type="number"
            value={form.guests}
            onChange={(e) => setForm({ ...form, guests: e.target.value })}
            className="mt-2 w-full rounded-xl border border-soft-beige/25 bg-charcoal/70 px-3 py-2 text-sm outline-none ring-accent-gold transition focus:ring"
          />
        </label>

        <label className="text-xs uppercase tracking-[0.15em] text-soft-beige/70">
          Date
          <input
            required
            min={minDate}
            type="date"
            value={form.date}
            onChange={(e) => setForm({ ...form, date: e.target.value })}
            className="mt-2 w-full rounded-xl border border-soft-beige/25 bg-charcoal/70 px-3 py-2 text-sm outline-none ring-accent-gold transition focus:ring"
          />
        </label>

        <label className="text-xs uppercase tracking-[0.15em] text-soft-beige/70">
          Time
          <input
            required
            type="time"
            value={form.time}
            onChange={(e) => setForm({ ...form, time: e.target.value })}
            className="mt-2 w-full rounded-xl border border-soft-beige/25 bg-charcoal/70 px-3 py-2 text-sm outline-none ring-accent-gold transition focus:ring"
          />
        </label>
      </div>

      <label className="mt-4 block text-xs uppercase tracking-[0.15em] text-soft-beige/70">
        Notes (Optional)
        <textarea
          rows={3}
          value={form.notes}
          onChange={(e) => setForm({ ...form, notes: e.target.value })}
          className="mt-2 w-full rounded-xl border border-soft-beige/25 bg-charcoal/70 px-3 py-2 text-sm outline-none ring-accent-gold transition focus:ring"
        />
      </label>

      <input
        tabIndex={-1}
        autoComplete="off"
        value={form.website}
        onChange={(e) => setForm({ ...form, website: e.target.value })}
        className="hidden"
        aria-hidden="true"
      />

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-5 w-full rounded-full bg-accent-gold px-6 py-3 text-sm font-semibold text-charcoal transition hover:opacity-90 disabled:opacity-60"
      >
        {status === "loading" ? "Submitting..." : "Request Reservation"}
      </button>

      {message ? (
        <p
          className={`mt-3 text-xs ${
            status === "success" ? "text-green-300" : "text-rose-300"
          }`}
        >
          {message}
        </p>
      ) : null}
    </form>
  );
}

'use client';

export default function NewsletterForm() {
  return (
    <div className="card-tcs p-8">
      <p className="text-tcs-white font-semibold text-lg mb-6">Join the Community</p>
      <form
        className="flex flex-col gap-4"
        onSubmit={(e) => {
          e.preventDefault();
          // Newsletter integration to be wired in a future sprint
        }}
      >
        <input
          type="email"
          placeholder="Enter your email"
          className="w-full bg-tcs-surface-2 border border-tcs-gray-700 rounded-lg px-4 py-3 text-tcs-white placeholder-tcs-gray-500 focus:outline-none focus:border-tcs-ice transition-colors"
        />
        <button type="submit" className="btn-primary w-full justify-center">
          Stay in the Loop
        </button>
      </form>
      <p className="text-tcs-gray-500 text-xs mt-4">
        No spam, ever. Unsubscribe anytime.
      </p>
    </div>
  );
}

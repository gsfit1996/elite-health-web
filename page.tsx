// Client Results page for Elite Health OS.
// This page is generated to replace the Gamma hosted client-results page.
// It uses centralised case data defined in src/content/clientResultsData.ts.

import { useState } from 'react';
import clientResultsData from '../../src/content/clientResultsData';

// Define the categories used for filtering.
const categories = [
  { key: 'all', label: 'All' },
  { key: 'fatLoss', label: 'Visible Fat Loss' },
  { key: 'energy', label: 'Energy & Health' },
  { key: 'strength', label: 'Strength & Performance' },
  { key: 'burnout', label: 'Burnout‑Proof' },
] as const;

export default function ClientResultsPage() {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');

  // Filter the case studies based on the selected category.
  const filteredCases = clientResultsData.filter((c) =>
    selectedCategory === 'all' ? true : c.category === selectedCategory
  );

  return (
    <main className="bg-black text-white min-h-screen">
      {/* Hero */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Busy weeks don’t have to mean getting softer or more tired.
        </h1>
        <p className="text-lg md:text-xl text-gray-300 mb-8">
          You can optimise your health without sacrificing travel, meetings or family time. See how our community did it.
        </p>
        <div className="flex justify-center space-x-4">
          {/* Replace this button with your reusable AuditCTA component if available */}
          <a
            href="/book" // Replace with your booking URL or use <AuditCTA /> component.
            className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
          >
            Book Your 15‑Minute Health Audit
          </a>
        </div>
      </section>

      {/* Outcome Filters */}
      <section className="max-w-6xl mx-auto px-4 py-8">
        <div className="flex flex-wrap justify-center gap-4">
          {categories.map((cat) => (
            <button
              key={cat.key}
              className={`px-4 py-2 rounded-md text-sm font-medium border ${
                selectedCategory === cat.key ? 'bg-white text-black' : 'bg-gray-800 text-gray-300 border-gray-600'
              }`}
              onClick={() => setSelectedCategory(cat.key)}
            >
              {cat.label}
            </button>
          ))}
        </div>
      </section>

      {/* Case Studies */}
      <section className="max-w-6xl mx-auto px-4 pb-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredCases.map((c) => (
          <div key={c.id} className="bg-gray-900 rounded-lg overflow-hidden shadow-md">
            <div className="flex gap-1">
              <img
                src={c.beforeImage}
                alt={`${c.displayName} before`}
                className="w-1/2 h-48 object-cover"
              />
              <img
                src={c.afterImage}
                alt={`${c.displayName} after`}
                className="w-1/2 h-48 object-cover"
              />
            </div>
            <div className="p-4">
              <h3 className="text-xl font-semibold mb-1">{c.displayName}</h3>
              <p className="text-sm text-gray-400 mb-2">{c.role}</p>
              <p className="text-sm mb-3">{c.challenge}</p>
              <ul className="list-disc list-inside text-sm space-y-1 mb-3">
                {c.changes.slice(0, 4).map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
              <p className="text-sm font-medium mb-4">{c.outcomeSummary}</p>
              <a
                href="/book" // Replace with your booking URL or CTA component.
                className="inline-block bg-white text-black px-4 py-2 rounded-md text-sm font-semibold hover:bg-gray-200 transition"
              >
                Book Your Audit
              </a>
            </div>
          </div>
        ))}
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 py-12">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-6 text-center">
          <div>
            <p className="text-4xl font-bold">750+</p>
            <p className="text-sm text-gray-400">Leaders transformed</p>
          </div>
          <div>
            <p className="text-4xl font-bold">10 kg</p>
            <p className="text-sm text-gray-400">Average fat loss in 12 weeks</p>
          </div>
          <div>
            <p className="text-4xl font-bold">3 × 30 min</p>
            <p className="text-sm text-gray-400">Weekly training commitment</p>
          </div>
          <div>
            <p className="text-4xl font-bold">0</p>
            <p className="text-sm text-gray-400">Macros tracked</p>
          </div>
        </div>
      </section>

      {/* Why This Works */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-3xl font-bold mb-6 text-center">Why This Works</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-900 p-6 rounded-md">
            <h3 className="text-xl font-semibold mb-2">No calorie counting</h3>
            <p className="text-sm text-gray-400">Focus on protein-first anchors and minimum effective dose nutrition—no macro tracking required.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-md">
            <h3 className="text-xl font-semibold mb-2">Efficient training</h3>
            <p className="text-sm text-gray-400">Three joint-smart sessions per week (<30 min each) to build strength and resilience.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-md">
            <h3 className="text-xl font-semibold mb-2">Built for travel & chaos</h3>
            <p className="text-sm text-gray-400">Travel-proof nutrition rules and weekend guardrails so you stay consistent anywhere.</p>
          </div>
          <div className="bg-gray-900 p-6 rounded-md">
            <h3 className="text-xl font-semibold mb-2">Weekly reviews</h3>
            <p className="text-sm text-gray-400">Performance reviews and constraint audits ensure rapid adjustments and accountability.</p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-900 py-12">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-3xl font-bold mb-6 text-center">Frequently Asked Questions</h2>
          <div className="space-y-4">
            {/* Each FAQ item is toggled on click. For simplicity, show all answers. */}
            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-lg font-semibold">How much time do I need to train?</h3>
              <p className="text-sm text-gray-400">Three sessions per week, each 15–30 minutes. These sessions are designed for busy schedules.</p>
            </div>
            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-lg font-semibold">What if I travel frequently?</h3>
              <p className="text-sm text-gray-400">We provide travel-proof nutrition guardrails and easy-to-do workouts you can perform anywhere.</p>
            </div>
            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-lg font-semibold">How is this different from other programs?</h3>
              <p className="text-sm text-gray-400">We remove decision fatigue and avoid macro counting, focusing on sustainability and longevity with weekly reviews.</p>
            </div>
            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-lg font-semibold">What results can I expect?</h3>
              <p className="text-sm text-gray-400">Most clients lose 10 kg in 12–16 weeks, regain 6 p.m. energy, and improve performance—results vary with commitment.</p>
            </div>
            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-lg font-semibold">What’s the minimum commitment?</h3>
              <p className="text-sm text-gray-400">We require a 12-week commitment to ensure meaningful change and habit formation.</p>
            </div>
            <div className="border-b border-gray-700 pb-4">
              <h3 className="text-lg font-semibold">What happens on the 15‑minute audit?</h3>
              <p className="text-sm text-gray-400">We diagnose your constraints, outline a high-level roadmap, and decide whether our OS is the right fit—no hard sell.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Ready to protect your body like you protect your business?</h2>
        <p className="text-lg text-gray-300 mb-6">Schedule your 15‑minute health audit today. You’ll leave with a clear roadmap and your first bottleneck to fix.</p>
        <a
          href="/book" // Replace with your booking URL or CTA component.
          className="bg-white text-black px-6 py-3 rounded-md font-semibold hover:bg-gray-200 transition"
        >
          Book Your 15‑Minute Health Audit
        </a>
        <p className="text-xs text-gray-500 mt-4">Results vary. Commitment and adherence affect outcomes.</p>
      </section>
    </main>
  );
}
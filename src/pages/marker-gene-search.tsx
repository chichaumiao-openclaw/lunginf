import React from 'react';

export default function MarkerGeneSearchPage() {
  return (
    <main className="container mx-auto px-6 py-10">
      <h1 className="text-3xl font-bold mb-4">Marker Gene Search</h1>
      <p className="text-gray-600 mb-6">
        Explore marker genes across lung development stages from early fetal to mature adult.
      </p>
      <section className="grid gap-4 md:grid-cols-2">
        <div className="rounded-lg border p-4">
          <h2 className="font-semibold mb-2">Search</h2>
          <p className="text-sm text-gray-500">Gene symbol lookup UI scaffold.</p>
        </div>
        <div className="rounded-lg border p-4">
          <h2 className="font-semibold mb-2">Results</h2>
          <p className="text-sm text-gray-500">Stage/cell-type marker results scaffold.</p>
        </div>
      </section>
    </main>
  );
}

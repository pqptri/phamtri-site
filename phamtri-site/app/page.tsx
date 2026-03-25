export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-black text-white">
      <h1 className="text-5xl font-bold mb-4">Trí Phạm</h1>
      <p className="text-lg text-gray-400 mb-6">
        Personal website of Pham Quốc Phương Trí
      </p>

      <div className="flex gap-4">
        <a href="https://linkedin.com" target="_blank" className="underline">
          LinkedIn
        </a>
        <a href="mailto:admin@phamtri.com" className="underline">
          Email
        </a>
      </div>
    </main>
  );
}
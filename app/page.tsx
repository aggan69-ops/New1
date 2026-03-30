export default function HomePage() {
  return (
    <main style={{ padding: 32, fontFamily: "Arial, sans-serif", maxWidth: 1000, margin: "0 auto" }}>
      <h1 style={{ fontSize: 36, marginBottom: 8 }}>CRM steg 10</h1>
      <p style={{ color: "#555", marginBottom: 24 }}>
        Komplett projektfil för deploy på Vercel.
      </p>

      <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
        <section style={{ border: "1px solid #ddd", borderRadius: 16, padding: 20, background: "white" }}>
          <h2>Det som finns med</h2>
          <ul>
            <li>Activity API</li>
            <li>Outlook token storage</li>
            <li>Telavox mock call logging</li>
            <li>Färdig startsida</li>
          </ul>
        </section>

        <section style={{ border: "1px solid #ddd", borderRadius: 16, padding: 20, background: "white" }}>
          <h2>API-endpoints</h2>
          <ul>
            <li>GET /api/activities</li>
            <li>POST /api/activities</li>
            <li>POST /api/integrations/outlook/store-token</li>
            <li>POST /api/integrations/telavox/mock-call</li>
          </ul>
        </section>
      </div>
    </main>
  );
}

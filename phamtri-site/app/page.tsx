export default function Home() {
  return (
    <main style={{
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
      background: "#000",
      color: "white"
    }}>
      <h1 style={{ fontSize: "48px" }}>
        Phạm Quốc Phương Trí
      </h1>
      <p style={{ marginTop: "10px", opacity: 0.7 }}>
        Personal Website • HKU • Finance & Philosophy
      </p>
    </main>
  );
}
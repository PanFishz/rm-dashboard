import type { CSSProperties } from "react";

const PIN_GRADIENTS = {
  red:    "radial-gradient(circle at 35% 30%, #ff6b6b, #b32d2d)",
  yellow: "radial-gradient(circle at 35% 30%, #ffd76b, #b3851d)",
  green:  "radial-gradient(circle at 35% 30%, #6bff8a, #1d8a3a)",
  blue:   "radial-gradient(circle at 35% 30%, #6b8aff, #1d2d8a)",
} as const;

function Pin({ color, top, left }: { color: keyof typeof PIN_GRADIENTS; top: number; left: string }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "absolute", top, left,
        width: 12, height: 12, borderRadius: "50%",
        background: PIN_GRADIENTS[color],
        boxShadow: "0 2px 3px rgba(0,0,0,0.5)",
        zIndex: 2,
      }}
    />
  );
}

const F = {
  serif:  "var(--font-dm-serif), 'DM Serif Display', serif",
  hand:   "var(--font-caveat), 'Caveat', cursive",
  mono:   "var(--font-ibm-plex), 'IBM Plex Mono', monospace",
  sans:   "var(--font-space-grotesk), 'Space Grotesk', sans-serif",
};

// 16-point starburst — outer R=50%, inner r=38%, starting at top (270°), step 22.5°
const BURST_POLY = "polygon(50% 0%, 57% 13%, 69% 4%, 71% 18%, 85% 15%, 82% 29%, 96% 31%, 87% 43%, 100% 50%, 87% 57%, 96% 69%, 82% 71%, 85% 85%, 71% 82%, 69% 96%, 57% 87%, 50% 100%, 43% 87%, 31% 96%, 29% 82%, 15% 85%, 18% 71%, 4% 69%, 13% 57%, 0% 50%, 13% 43%, 4% 31%, 18% 29%, 15% 15%, 29% 18%, 31% 4%, 43% 13%)";

const PROJECTS = [
  { id: 'locate',  title: 'Locate an Image', emoji: '📍', short: 'where was this photo taken?', color: '#ff8a76', color2: '#ffc6cd', ink: '#5a1a26', year: '2025' },
  { id: 'wander',  title: 'Wanderlist',       emoji: '✈️', short: 'plan · track · roam',         color: '#3ddc97', color2: '#aef3cf', ink: '#0e3d28', year: '2024' },
  { id: 'wordual', title: 'Wordual',           emoji: '📝', short: 'vocabulary duels',            color: '#a07bff', color2: '#d9cbff', ink: '#28194d', year: '2024' },
  { id: 'poker',   title: 'Team Poker',        emoji: '🃏', short: 'bring your friends. all in.', color: '#ff8a3d', color2: '#ffd9a8', ink: '#5e2a0c', year: '2023' },
  { id: 'kitty',   title: 'Kitty Cafe',        emoji: '🐱', short: 'roguelite diner dash',        color: '#ff9ec4', color2: '#ffe0ec', ink: '#5a1f3e', year: '2026' },
];

export default function Home() {
  return (
    <main
      style={{
        background: "#a87149",
        backgroundImage: [
          "radial-gradient(rgba(255,255,255,0.04) 1px, transparent 1.5px)",
          "radial-gradient(rgba(0,0,0,0.1) 0.6px, transparent 1px)",
        ].join(","),
        backgroundSize: "8px 8px, 3px 3px",
        minHeight: "100svh",
        display: "flex",
        flexDirection: "column",
        fontFamily: F.sans,
        color: "#2a241c",
        maxWidth: 420,
        margin: "0 auto",
        paddingBottom: 60,
      }}
    >
      {/* HEADER */}
      <header
        style={{
          padding: "14px 20px 12px",
          display: "flex",
          alignItems: "center",
          gap: 10,
          color: "#fff8e4",
          flexShrink: 0,
        }}
      >
        <div
          aria-hidden="true"
          style={{
            width: 36, height: 36, borderRadius: "50%",
            background: "#fff8e4", color: "#a87149",
            display: "flex", alignItems: "center", justifyContent: "center",
            fontFamily: F.serif, fontSize: 20, fontWeight: 600,
            flexShrink: 0,
          }}
        >
          R
        </div>
        <div style={{ flex: 1, minWidth: 0 }}>
          <div style={{ fontFamily: F.serif, fontSize: 22, lineHeight: 1 }}>
            my projects.
          </div>
          <div style={{ fontFamily: F.hand, fontSize: 15, opacity: 0.85 }}>
            the wall — by rin meyers
          </div>
        </div>
        <div
          style={{
            padding: "4px 10px",
            background: "rgba(255,248,228,0.18)",
            border: "1px solid rgba(255,248,228,0.4)",
            borderRadius: 999,
            fontFamily: F.mono,
            fontSize: 10, letterSpacing: "0.14em",
            flexShrink: 0,
          }}
        >
          05 PINNED
        </div>
      </header>

      {/* CORK SURFACE */}
      <div style={{ position: "relative", height: 1060, margin: "0 12px" }}>

        {/* 1 · Polaroid — Locate an Image */}
        <a
          href="https://www.locateanimage.rinmeyers.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Locate an Image — find where a photo was taken using AI"
          className="cork-item"
          style={{
            "--rot": "-7deg",
            position: "absolute", top: 12, left: 14,
            width: 200,
            background: "#fff",
            padding: "8px 8px 32px",
            boxShadow: "0 12px 22px rgba(0,0,0,0.3)",
            display: "block", textDecoration: "none",
          } as CSSProperties}
        >
          <Pin color="red" top={-6} left="42%" />
          <div
            style={{
              height: 140,
              background: "linear-gradient(160deg, #ffc6cd, #ff8a76)",
              display: "flex", alignItems: "center", justifyContent: "center",
            }}
          >
            <span style={{ fontSize: 66, filter: "drop-shadow(0 3px 6px rgba(0,0,0,0.2))" }}>
              📍
            </span>
          </div>
          <div style={{ marginTop: 6, fontFamily: F.hand, fontSize: 20, lineHeight: 1, color: "#1a1714" }}>
            Locate an Image
          </div>
          <div style={{ fontFamily: F.hand, fontSize: 14, color: "#6b5a3e" }}>
            &apos;25
          </div>
        </a>

        {/* 2 · Circle sticker — Wanderlist */}
        <a
          href="https://www.wanderlist.rinmeyers.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Wanderlist — track and plan your travel adventures around the world"
          className="cork-item"
          style={{
            "--rot": "8deg",
            position: "absolute", top: 34, right: 14,
            display: "block", textDecoration: "none",
          } as CSSProperties}
        >
          <Pin color="yellow" top={-4} left="46%" />
          <div
            style={{
              width: 158, height: 158, borderRadius: "50%",
              background: "#3ddc97", border: "6px solid #fff",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              boxShadow: "0 12px 22px rgba(0,0,0,0.28)",
              textAlign: "center",
            }}
          >
            <div style={{ fontSize: 42 }}>✈️</div>
            <div style={{ fontFamily: F.serif, fontSize: 22, lineHeight: 0.95, color: "#0e3d28" }}>
              Wanderlist
            </div>
            <div style={{ fontFamily: F.hand, fontSize: 13, color: "#0e3d28", marginTop: 1 }}>
              roam ✦
            </div>
          </div>
        </a>

        {/* 3 · Sticky note — decorative */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute", top: 220, left: 14,
            transform: "rotate(-4deg)",
            width: 130, height: 130,
            background: "#ffeb6e", padding: 14,
            boxShadow: "0 10px 18px rgba(0,0,0,0.2)",
            fontFamily: F.hand, color: "#5a4a2a",
            fontSize: 18, lineHeight: 1.1,
          }}
        >
          ☆ tap any of these to visit the project ↓
        </div>

        {/* 4 · Dark sticker — Wordual */}
        <a
          href="https://www.wordual.rinmeyers.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Wordual — a competitive vocabulary word game"
          className="cork-item"
          style={{
            "--rot": "-3deg",
            position: "absolute", top: 240, right: 14,
            width: 200, padding: 12,
            background: "#1a1714", color: "#fff",
            borderRadius: 14, border: "3px solid #fff",
            boxShadow: "0 12px 22px rgba(0,0,0,0.3)",
            display: "block", textDecoration: "none",
          } as CSSProperties}
        >
          <Pin color="green" top={-5} left="46%" />
          <div style={{ display: "flex", gap: 3, marginBottom: 8, justifyContent: "center" }}>
            {["W", "O", "R", "D", "U", "A", "L"].map((letter, i) => (
              <div
                key={i}
                style={{
                  width: 18, height: 22, borderRadius: 3,
                  background: i < 3 ? "#a07bff" : "#3a2d5a",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontWeight: 700, fontSize: 11,
                }}
              >
                {letter}
              </div>
            ))}
          </div>
          <div style={{ fontFamily: F.serif, fontSize: 20, lineHeight: 1, textAlign: "center" }}>
            Wordual 📝
          </div>
          <div style={{ fontFamily: F.hand, fontSize: 14, color: "#d9cbff", textAlign: "center", marginTop: 2 }}>
            vocab duels
          </div>
        </a>

        {/* 5 · Ticket stub — decorative */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute", top: 410, left: 18,
            transform: "rotate(6deg)",
            width: 180,
            background: "#fff8e4", padding: "12px 14px",
            boxShadow: "0 10px 18px rgba(0,0,0,0.18)",
            borderTop: "4px solid #ff5d7a",
            borderBottom: "4px solid #ff5d7a",
          }}
        >
          <div style={{ fontFamily: F.mono, fontSize: 9, letterSpacing: "0.16em", textTransform: "uppercase", color: "#6b5a3e" }}>
            ADMIT ONE
          </div>
          <div style={{ fontFamily: F.serif, fontSize: 18, lineHeight: 1, marginTop: 4, color: "#1a1714" }}>
            rin&apos;s archive
          </div>
          <div style={{ fontFamily: F.hand, fontSize: 16, color: "#6b5a3e" }}>
            no expiry ♡
          </div>
        </div>

        {/* 6 · Playing card — Team Poker */}
        <a
          href="https://www.teampoker.rinmeyers.com"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Team Poker — play poker with your friends"
          className="cork-item"
          style={{
            "--rot": "-8deg",
            position: "absolute", top: 420, right: 24,
            width: 170, height: 228,
            background: "#fff",
            borderRadius: 10, border: "3px solid #fff",
            boxShadow: "0 12px 22px rgba(0,0,0,0.28)",
            padding: 10,
            display: "block", textDecoration: "none",
          } as CSSProperties}
        >
          <Pin color="red" top={-5} left="48%" />
          {/* Top-left corner index */}
          <div
            style={{
              position: "absolute", top: 8, left: 10,
              fontFamily: F.serif, fontSize: 22,
              color: "#ff8a3d", lineHeight: 1,
            }}
          >
            A<div style={{ fontSize: 13 }}>♠</div>
          </div>
          {/* Bottom-right corner index */}
          <div
            style={{
              position: "absolute", bottom: 8, right: 10,
              fontFamily: F.serif, fontSize: 22,
              color: "#ff8a3d", lineHeight: 1,
              transform: "rotate(180deg)",
            }}
          >
            A<div style={{ fontSize: 13 }}>♠</div>
          </div>
          {/* Center */}
          <div
            style={{
              height: "100%",
              display: "flex", flexDirection: "column",
              alignItems: "center", justifyContent: "center",
              textAlign: "center",
            }}
          >
            <span style={{ fontSize: 52 }}>🃏</span>
            <div style={{ fontFamily: F.serif, fontSize: 18, color: "#1a1714", marginTop: 4 }}>
              Team Poker
            </div>
            <div style={{ fontFamily: F.hand, fontSize: 13, color: "#6b5a3e", marginTop: 2 }}>
              all in ♠
            </div>
          </div>
        </a>

        {/* 7 · Kitty Cafe — pink starburst sticker */}
        {(() => {
          const C = PROJECTS[4];
          return (
            <a
              href="https://www.kittycafe.rinmeyers.com"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Kitty Cafe — roguelite diner dash"
              className="cork-item"
              style={{
                all: "unset" as CSSProperties["all"],
                cursor: "pointer",
                position: "absolute", top: 670, left: 28,
                width: 182, height: 182, transform: "rotate(-5deg)",
                display: "block",
              }}
            >
              <Pin color="red" top={2} left="46%" />
              {/* outer white burst — die-cut border */}
              <div style={{
                position: "absolute", inset: 0,
                background: "#fff", clipPath: BURST_POLY,
                filter: "drop-shadow(0 10px 14px rgba(0,0,0,0.28))",
              }} />
              {/* inner colored burst */}
              <div style={{
                position: "absolute", inset: 8,
                background: `linear-gradient(160deg, ${C.color2} 0%, ${C.color} 100%)`,
                clipPath: BURST_POLY,
                display: "flex", flexDirection: "column",
                alignItems: "center", justifyContent: "center",
                textAlign: "center", color: C.ink, padding: "0 22px",
              }}>
                <div style={{
                  fontFamily: F.mono,
                  fontSize: 9, letterSpacing: "0.2em", textTransform: "uppercase",
                  opacity: 0.7, marginBottom: 1,
                }}>★ new ★</div>
                <div style={{ fontSize: 40, lineHeight: 1 }}>{C.emoji}</div>
                <div style={{ fontFamily: F.serif, fontSize: 20, lineHeight: 0.95, marginTop: 2 }}>{C.title}</div>
                <div style={{ fontFamily: F.hand, fontSize: 14, marginTop: 1, opacity: 0.85 }}>{C.short}</div>
              </div>
            </a>
          );
        })()}

        {/* "← just shipped!" handwritten note */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute", top: 672, left: 190,
            transform: "rotate(-6deg)",
            fontFamily: F.hand, fontSize: 16, color: "#fff8e4",
            textShadow: "0 1px 2px rgba(0,0,0,0.3)",
            whiteSpace: "nowrap",
          }}
        >
          ← just shipped!
        </div>

        {/* 8 · Doodled arrow — decorative */}
        <div
          aria-hidden="true"
          style={{
            position: "absolute", top: 840, left: "30%",
            fontFamily: F.hand, fontSize: 18, color: "#fff8e4",
            transform: "rotate(-3deg)",
            textShadow: "0 1px 2px rgba(0,0,0,0.3)",
          }}
        >
          more on the way →
        </div>

        {/* 9 · Email tag */}
        <a
          href="mailto:r.meyers.in@gmail.com"
          aria-label="Email Rin Meyers — r.meyers.in@gmail.com"
          className="cork-item"
          style={{
            "--rot": "1deg",
            position: "absolute", top: 890, left: 24, right: 24,
            padding: 12,
            background: "#fff8e4", borderRadius: 10,
            boxShadow: "0 10px 18px rgba(0,0,0,0.2)",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            textDecoration: "none",
          } as CSSProperties}
        >
          <Pin color="blue" top={-5} left="50%" />
          <div>
            <div style={{ fontFamily: F.hand, fontSize: 22, color: "#1a1714", lineHeight: 1 }}>
              say hi?
            </div>
            <div style={{ fontFamily: F.mono, fontSize: 10, color: "#6b5a3e", letterSpacing: "0.06em" }}>
              r.meyers.in@gmail.com
            </div>
          </div>
          <span style={{ fontSize: 22 }} aria-hidden="true">✉</span>
        </a>
      </div>
    </main>
  );
}

import { ImageResponse } from "next/og";
import { siteConfig } from "@/config/site";

export const alt = "CLIMON — Laboratorio Clínico en Santa Cruz, Bolivia";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpenGraphImage() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: 72,
        background: "#f5f7f4",
        color: "#006156",
        fontFamily: "sans-serif",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid #dbe2dc",
          paddingBottom: 28,
        }}
      >
        <span style={{ fontSize: 40, letterSpacing: -2 }}>
          {siteConfig.name}
        </span>
        <span style={{ fontSize: 22 }}>{siteConfig.descriptor}</span>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          fontSize: 78,
          letterSpacing: -4,
          lineHeight: 1.1,
        }}
      >
        <span>Precisión para cuidar</span>
        <span>lo que importa.</span>
      </div>
      <div style={{ display: "flex", fontSize: 21 }}>{siteConfig.location}</div>
    </div>,
    size,
  );
}

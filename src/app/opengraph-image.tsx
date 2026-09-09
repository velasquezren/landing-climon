/* ImageResponse renders native image elements rather than next/image. */
import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { siteConfig } from "@/config/site";

export const alt = "CLIMON — Laboratorio Clínico de la Clínica Montalvo";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const logo = await readFile(join(process.cwd(), "public/brand/logo-climon.png"), "base64");
const photo = await readFile(join(process.cwd(), "public/images/climon-microscopia.jpeg"), "base64");

export default function OpenGraphImage() {
  return new ImageResponse(
    <div style={{ width: "100%", height: "100%", display: "flex", background: "#ffffff", color: "#14201e", fontFamily: "sans-serif" }}>
      <div style={{ width: 670, padding: "30px 54px 48px", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 24 }}>
          <img src={`data:image/png;base64,${logo}`} width={126} height={126} alt="CLIMON" />
          <span style={{ fontSize: 17, color: "#006156" }}>LABORATORIO CLÍNICO</span>
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 65, letterSpacing: -3, lineHeight: 1.08 }}>
          <span>Resultados para tu salud.</span>
          <span style={{ color: "#006156", marginTop: 12 }}>La vocación de cuidarte.</span>
        </div>
        <span style={{ fontSize: 20, color: "#006156" }}>{siteConfig.clinicName} · {siteConfig.location}</span>
      </div>
      <div style={{ width: 530, height: 630, display: "flex", position: "relative" }}>
        <img src={`data:image/jpeg;base64,${photo}`} width={530} height={630} alt="Profesional de CLIMON en el microscopio" style={{ objectFit: "cover" }} />
        <div style={{ position: "absolute", bottom: 0, left: 0, right: 0, background: "#006156", color: "white", display: "flex", padding: "28px 32px", fontSize: 23 }}>Ciencia con atención humana.</div>
      </div>
    </div>,
    size,
  );
}

import { useState } from "react";

// ── THEME ─────────────────────────────────────────────────────────────────────
const GREEN = "#2e7d32";
const DARK_NAVY = "#0d1b2a";
const LIGHT_GREEN_BG = "#f0f7f0";
const WHITE = "#ffffff";

// ── SHARED STYLES ──────────────────────────────────────────────────────────────
const navStyle = {
  display: "flex", alignItems: "center", justifyContent: "space-between",
  padding: "14px 40px", background: WHITE, position: "sticky", top: 0, zIndex: 100,
  borderBottom: "1px solid #e8e8e8",
};
const logoStyle = { display: "flex", alignItems: "center", gap: 8, fontWeight: 700, fontSize: 20, color: GREEN };
const navLinksStyle = { display: "flex", gap: 28, alignItems: "center" };
const navLinkStyle = (active) => ({
  textDecoration: "none", color: active ? GREEN : "#333", fontSize: 14,
  fontWeight: active ? 600 : 400, cursor: "pointer",
});
const btnGreen = {
  background: GREEN, color: WHITE, border: "none", borderRadius: 6,
  padding: "9px 20px", fontSize: 14, fontWeight: 600, cursor: "pointer",
};
const btnOutline = {
  background: "transparent", color: WHITE, border: `1.5px solid ${WHITE}`,
  borderRadius: 6, padding: "9px 20px", fontSize: 14, fontWeight: 600, cursor: "pointer",
};
const sectionTitle = { fontSize: 28, fontWeight: 700, margin: "0 0 8px" };
const greenHero = {
  background: GREEN, color: WHITE, padding: "48px 40px 56px",
};
const footerStyle = {
  background: DARK_NAVY, color: "#ccc", padding: "48px 40px 24px",
};

// ── LOGO SVG ──────────────────────────────────────────────────────────────────
const Logo = () => (
  <span style={logoStyle}>
    <svg width="28" height="28" viewBox="0 0 28 28" fill="none">
      <circle cx="14" cy="14" r="14" fill={GREEN} />
      <text x="7" y="19" fontSize="13" fill="white" fontWeight="bold">N</text>
    </svg>
    nithub
    <span style={{ fontSize: 10, color: GREEN, verticalAlign: "super" }}>✦</span>
  </span>
);

// ── FOOTER ────────────────────────────────────────────────────────────────────
const Footer = () => (
  <footer style={footerStyle}>
    <div style={{ display: "flex", gap: 48, flexWrap: "wrap", marginBottom: 32 }}>
      <div style={{ minWidth: 160 }}>
        <Logo />
        <p style={{ fontSize: 12, marginTop: 12, color: "#aaa" }}>Follow us</p>
        <div style={{ display: "flex", gap: 10, marginBottom: 12 }}>
          {["ig", "tw", "in"].map(s => (
            <span key={s} style={{ background: "#1e2e3e", borderRadius: "50%", width: 28, height: 28, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 11, color: WHITE }}>{s}</span>
          ))}
        </div>
        <p style={{ fontSize: 12, color: "#aaa", margin: "4px 0" }}>Contact us</p>
        <p style={{ fontSize: 12, margin: "2px 0" }}>Nithub2017@hotmail.com</p>
        <p style={{ fontSize: 12 }}>+2348023455678</p>
      </div>
      <div>
        <p style={{ fontWeight: 600, color: WHITE, marginBottom: 8 }}>About Us</p>
        <p style={{ fontSize: 13, marginBottom: 4 }}>Who we are</p>
        <p style={{ fontSize: 13 }}>The Management</p>
      </div>
      <div>
        <p style={{ fontWeight: 600, color: WHITE, marginBottom: 8 }}>Services</p>
        <p style={{ fontSize: 13, marginBottom: 4 }}>Wi-fi</p>
        <p style={{ fontSize: 13, marginBottom: 4 }}>Security assured</p>
        <p style={{ fontSize: 13 }}>Comfortability and Accessibility</p>
      </div>
      <div>
        <p style={{ fontWeight: 600, color: WHITE, marginBottom: 8 }}>Address</p>
        <p style={{ fontSize: 13 }}>University of Lagos,<br />Akoka Yaba, Lagos<br />101283</p>
      </div>
    </div>
    <hr style={{ borderColor: "#1e2e3e", margin: "0 0 16px" }} />
    <p style={{ textAlign: "center", fontSize: 12, color: "#888" }}>Copyright © 2023 NitHub. All rights reserved.</p>
  </footer>
);

// ── GET IN TOUCH BANNER ───────────────────────────────────────────────────────
const GetInTouch = () => (
  <div style={{ background: DARK_NAVY, borderRadius: 12, padding: "40px 32px", textAlign: "center", margin: "48px 40px" }}>
    <h2 style={{ color: WHITE, margin: "0 0 8px", fontSize: 26 }}>Get in touch</h2>
    <p style={{ color: "#aaa", marginBottom: 20, fontSize: 14 }}>For all enquires and questions on these trainings,<br />please reach out to us.</p>
    <div style={{ display: "flex", justifyContent: "center", gap: 24, flexWrap: "wrap", fontSize: 14, color: "#ccc" }}>
      <span>📞 08074355678</span>
      <span>|</span>
      <span>✉ Kelegbe435@gmail.com</span>
    </div>
  </div>
);

// ── NAV ───────────────────────────────────────────────────────────────────────
const Nav = ({ page, setPage }) => {
  const links = ["Home", "Programs", "Events", "Blog"];
  return (
    <nav style={navStyle}>
      <div onClick={() => setPage("Home")} style={{ cursor: "pointer" }}><Logo /></div>
      <div style={navLinksStyle}>
        {links.map(l => (
          <span key={l} onClick={() => setPage(l)} style={navLinkStyle(page === l)}>{l}</span>
        ))}
        <button style={btnGreen} onClick={() => setPage("Home")}>Contact Us</button>
      </div>
    </nav>
  );
};

// ── GREEN PAGE HEADER (used on Programs, Events, Blog) ────────────────────────
const PageHeader = ({ title, subtitle, activeLink, links, setPage }) => (
  <div style={{ ...greenHero, marginBottom: 0 }}>
    <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 32 }}>
      <div onClick={() => setPage("Home")} style={{ cursor: "pointer" }}><Logo /></div>
      <div style={navLinksStyle}>
        {["Home", "Programs", "Events", "Blog"].map(l => (
          <span key={l} onClick={() => setPage(l)} style={{ ...navLinkStyle(l === activeLink), color: l === activeLink ? "#aaffaa" : "rgba(255,255,255,0.85)" }}>{l}</span>
        ))}
      </div>
    </nav>
    <h1 style={{ fontSize: 48, fontWeight: 400, margin: "0 0 12px", fontFamily: "Georgia, serif" }}>{title}</h1>
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-end", flexWrap: "wrap", gap: 16 }}>
      <p style={{ margin: 0, maxWidth: 340, fontSize: 15, lineHeight: 1.6, opacity: 0.9 }}>{subtitle}</p>
      <div style={{ textAlign: "right", fontSize: 12, opacity: 0.85 }}>
        <p style={{ margin: "0 0 6px" }}>Socials</p>
        <div style={{ display: "flex", gap: 8 }}>
          {["ig", "tw", "in"].map(s => <span key={s} style={{ background: "rgba(255,255,255,0.2)", borderRadius: "50%", width: 26, height: 26, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 10 }}>{s}</span>)}
        </div>
      </div>
    </div>
  </div>
);

// ════════════════════════════════════════════════════════════════════════════════
// HOME PAGE
// ════════════════════════════════════════════════════════════════════════════════
const HomePage = ({ setPage }) => {
  const services = [
    { title: "Training on disruptive technologies", color: "#1a2e1a" },
    { title: "Incubation for tech startups", desc: "Our tech incubator provides a full business infrastructure, ensuring a distraction-free work environment.", color: "#1a2a1a" },
    { title: "Hardware prototype development", color: "#2a2a1a" },
    { title: "IT consultancy", color: "#1a1a2a" },
  ];
  const events = [
    { title: "Design Event", date: "May 26th 2022", time: "12:00PM" },
    { title: "Nitdev Programme", date: "Jan May 2021", time: "12:00PM", highlight: true },
    { title: "Design Event", date: "May 26th 2022", time: "12:00PM" },
  ];
  const reviews = [
    { name: "Ayomide Fagboyje", role: "Intern", text: "The environment in Nithub builds you up for the present and also for the future. The skills wrought in me through Nithub gave me confidence to participate in my first ever Hackathon and also win it with my team." },
    { name: "Olumide Ogunfare", role: "Technology summer analyst", text: "I was able to seamlessly work remotely and provide value to a fortune 500 company in the topnotch work space facility provided by the hub. The excellent customer service is second to none and I highly recommend this hub for a productive work environment." },
  ];

  return (
    <div>
      {/* HERO */}
      <div style={{ display: "flex", minHeight: 340, background: WHITE, position: "relative", overflow: "hidden" }}>
        <div style={{ flex: 1, padding: "48px 40px", maxWidth: 420 }}>
          <h1 style={{ fontSize: 32, fontWeight: 700, lineHeight: 1.3, margin: "0 0 16px" }}>
            The Ultimate <span style={{ color: GREEN }}>Tech Hub</span> for Entrepreneurs and Innovators!"
          </h1>
          <p style={{ fontSize: 13, color: "#555", marginBottom: 24, lineHeight: 1.6 }}>
            At Nithub, we're passionate about helping entrepreneurs turn their dreams into reality.
          </p>
          <button style={{ ...btnGreen, display: "flex", alignItems: "center", gap: 6 }}>▶ Play video</button>
        </div>
        <div style={{ flex: 1, display: "flex", gap: 4, overflow: "hidden" }}>
          <div style={{ flex: 1, background: "linear-gradient(135deg, #b8d4b8 0%, #7aaa7a 100%)", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ textAlign: "center", color: DARK_NAVY, fontWeight: 700, fontSize: 13, padding: 16 }}>
              <div style={{ fontSize: 18, fontWeight: 900 }}>STOP TALKING.</div>
              <div style={{ fontSize: 18, fontWeight: 900 }}>START MAKING.</div>
              <div style={{ fontSize: 11, fontWeight: 400, marginTop: 4 }}>A GUIDE TO DESIGN</div>
            </div>
          </div>
          <div style={{ flex: 1, background: "#2a2a2a", display: "flex", alignItems: "center", justifyContent: "center" }}>
            <div style={{ color: WHITE, fontSize: 40, opacity: 0.3 }}>👏</div>
          </div>
        </div>
      </div>

      {/* FEATURES */}
      <div style={{ background: LIGHT_GREEN_BG, padding: "36px 40px", display: "flex", justifyContent: "center", gap: 64, flexWrap: "wrap", borderLeft: `6px solid ${GREEN}` }}>
        {[
          { icon: "🌱", label: "Supportive community and empowered individuals" },
          { icon: "💻", label: "State-of-the-art work spaces" },
          { icon: "🌐", label: "Personal growth in a dynamic tech environment" },
        ].map((f, i) => (
          <div key={i} style={{ textAlign: "center", maxWidth: 140 }}>
            <div style={{ background: GREEN, width: 48, height: 48, borderRadius: 12, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 22, margin: "0 auto 10px" }}>{f.icon}</div>
            <p style={{ fontSize: 12, color: "#444", margin: 0, lineHeight: 1.5 }}>{f.label}</p>
          </div>
        ))}
      </div>

      {/* WHY NITHUB */}
      <div style={{ background: DARK_NAVY, display: "flex", gap: 40, padding: "48px 40px", alignItems: "center", flexWrap: "wrap" }}>
        <div style={{ flex: 1, minWidth: 240 }}>
          <p style={{ color: "#aaa", margin: "0 0 6px", fontSize: 13 }}>Why</p>
          <h2 style={{ color: WHITE, fontSize: 28, fontWeight: 700, margin: "0 0 16px" }}>NITHUB ?</h2>
          <p style={{ color: "#bbb", fontSize: 13, lineHeight: 1.7, marginBottom: 16 }}>
            At Nithub, we're more than just a tech hub — we're a gateway to limitless possibilities. Step into a world where innovation reigns supreme, and your tech dreams become a reality.
          </p>
          <p style={{ color: "#bbb", fontSize: 13, lineHeight: 1.7, marginBottom: 24 }}>
            Connect with industry experts, successful entrepreneurs, and like-minded individuals who share your passion.
          </p>
          <button style={{ background: "transparent", border: `1px solid ${GREEN}`, color: GREEN, borderRadius: 6, padding: "8px 18px", fontSize: 13, cursor: "pointer" }}>Learn More</button>
        </div>
        <div style={{ flex: 1, minWidth: 240, background: "#1e2e3e", height: 240, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
          <div style={{ fontSize: 64, opacity: 0.4 }}>😊</div>
        </div>
      </div>

      {/* OUR SERVICES */}
      <div style={{ padding: "48px 40px", background: WHITE }}>
        <p style={{ fontSize: 13, color: "#888", margin: "0 0 6px" }}>Our Services</p>
        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 28, flexWrap: "wrap", gap: 12 }}>
          <h2 style={{ ...sectionTitle, maxWidth: 340 }}>
            Fueling tech excellence, empowering innovators, <span style={{ color: GREEN }}>transforming</span> tomorrow.
          </h2>
          <div style={{ width: 48, height: 3, background: GREEN, marginTop: 16 }} />
        </div>
        <div style={{ display: "flex", gap: 12, overflowX: "auto", paddingBottom: 8 }}>
          {services.map((s, i) => (
            <div key={i} style={{ minWidth: 180, height: 200, background: s.color, borderRadius: 8, padding: 16, display: "flex", flexDirection: "column", justifyContent: "flex-end", flex: "0 0 auto" }}>
              <p style={{ color: WHITE, fontWeight: 600, fontSize: 13, margin: "0 0 4px" }}>{s.title}</p>
              {s.desc && <p style={{ color: "#bbb", fontSize: 11, margin: 0, lineHeight: 1.5 }}>{s.desc}</p>}
            </div>
          ))}
        </div>
      </div>

      {/* EVENTS PREVIEW */}
      <div style={{ padding: "0 40px 48px", background: WHITE, display: "flex", gap: 32, flexWrap: "wrap", alignItems: "flex-start" }}>
        <div style={{ width: 200, minHeight: 220, background: DARK_NAVY, borderRadius: 8, padding: 20, flexShrink: 0, display: "flex", flexDirection: "column", justifyContent: "flex-end" }}>
          <span style={{ color: GREEN, fontSize: 16, fontWeight: 700 }}>Nidus Ideation</span>
          <p style={{ color: "#aaa", fontSize: 11, margin: "4px 0 0" }}>The Entrepreneurs workshop: Using design thinking to ignite early stage success.</p>
        </div>
        <div style={{ flex: 1, minWidth: 240 }}>
          {events.map((e, i) => (
            <div key={i} style={{ display: "flex", alignItems: "center", justifyContent: "space-between", padding: "14px 0", borderBottom: "1px solid #eee", background: e.highlight ? LIGHT_GREEN_BG : "transparent", paddingLeft: e.highlight ? 12 : 0, borderLeft: e.highlight ? `3px solid ${GREEN}` : "none" }}>
              <div>
                <p style={{ margin: 0, fontWeight: 600, fontSize: 14 }}>{e.title}</p>
                <p style={{ margin: "3px 0 0", fontSize: 12, color: "#888" }}>{e.date}</p>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                <span style={{ fontSize: 12, color: "#888" }}>{e.time}</span>
                <button style={{ background: "none", border: "none", color: GREEN, fontSize: 12, cursor: "pointer", fontWeight: 600 }}>READ MORE</button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* PARTNERS */}
      <div style={{ padding: "40px", background: "#f8f8f8", textAlign: "center" }}>
        <p style={{ margin: "0 0 4px", fontSize: 13, color: "#888" }}>Some of our</p>
        <h3 style={{ margin: "0 0 28px", color: GREEN, fontSize: 22, fontWeight: 700 }}>Partners</h3>
        <div style={{ display: "flex", justifyContent: "center", gap: 48, flexWrap: "wrap", alignItems: "center" }}>
          {[
            { name: "Microsoft", color: "#737373" },
            { name: "IBM", color: "#1F70C1" },
            { name: "mongoDB", color: "#47A248" },
            { name: "Google", color: "#4285F4" },
          ].map(p => (
            <span key={p.name} style={{ fontSize: 18, fontWeight: 700, color: p.color }}>{p.name}</span>
          ))}
        </div>
      </div>

      {/* HOST EVENT CTA */}
      <div style={{ margin: "40px", background: DARK_NAVY, borderRadius: 12, padding: "40px 32px", position: "relative", overflow: "hidden" }}>
        <h2 style={{ color: WHITE, fontSize: 24, margin: "0 0 20px", maxWidth: 280, lineHeight: 1.4 }}>Need a space to host an event</h2>
        <button style={btnGreen}>Contact Us</button>
      </div>

      {/* REVIEWS */}
      <div style={{ padding: "48px 40px" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, marginBottom: 32 }}>
          <h2 style={sectionTitle}>Inspiring reviews</h2>
          <div style={{ width: 48, height: 3, background: GREEN }} />
        </div>
        <div style={{ display: "flex", gap: 24, flexWrap: "wrap" }}>
          {reviews.map((r, i) => (
            <div key={i} style={{ flex: 1, minWidth: 240, background: "#f8f8f8", borderRadius: 8, padding: 24 }}>
              <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
                <div style={{ width: 40, height: 40, borderRadius: "50%", background: "#ddd", flexShrink: 0 }} />
                <div>
                  <p style={{ margin: 0, fontWeight: 600, fontSize: 14, color: GREEN }}>{r.name}</p>
                  <p style={{ margin: 0, fontSize: 12, color: "#888" }}>{r.role}</p>
                </div>
              </div>
              <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7, margin: 0 }}>{r.text}</p>
            </div>
          ))}
        </div>
      </div>

      {/* READY CTA */}
      <div style={{ margin: "0 40px 40px", background: DARK_NAVY, borderRadius: 12, padding: "48px 32px", textAlign: "center" }}>
        <h2 style={{ color: WHITE, fontSize: 26, margin: "0 0 8px" }}>Ready to get started?</h2>
        <p style={{ color: "#aaa", marginBottom: 24, fontSize: 14 }}>Feel free to talk to one of our experts.</p>
        <button style={btnGreen}>Contact Us</button>
      </div>

      <Footer />
    </div>
  );
};

// ════════════════════════════════════════════════════════════════════════════════
// PROGRAMS PAGE
// ════════════════════════════════════════════════════════════════════════════════
const ProgramsPage = ({ setPage }) => {
  const [activeTab, setActiveTab] = useState("Training");
  const tabs = ["Training", "Startup Incubation", "Product Development", "Workspaces"];

  const courses = [
    { title: "Cybersecurity", bg: "#e8e8e8" },
    { title: "Python", bg: "#1a1a1a" },
    { title: "3D design & Printing", bg: "#2a2a3a" },
    { title: "Product Design", bg: "#f0f0f0" },
    { title: "No-CODE Development", bg: "#ffd700" },
    { title: "Frontend Develoment", bg: "#1a1a3a" },
    { title: "IoT and Robotics", bg: "#e0e0e0" },
    { title: "Data Analysis", bg: "#f5f5f5" },
    { title: "Mobile APP Development", bg: "#2a2a2a" },
    { title: "Backend Development", bg: "#e8f0e8" },
  ];

  const incubationCriteria = [
    "Have the potential to scale.",
    "Have a management team consisting of up to 3 members which include a technical lead and founder(s) that are fully committed to the business.",
    "Have a functional product that leverages technology.",
    "Have a revenue model and be generating revenue.",
    "Have gained Users/customers. Been in operations (since launch date) for at least 6 months.",
  ];

  const productSteps = [
    { n: 1, title: "Lightning-Fast Prototyping", desc: "Quickly visualize and refine your product idea, saving time and resources in the development process.", side: "left" },
    { n: 2, title: "Rapid Innovation", desc: "Stay ahead of the curve by swiftly adapting to changing market demands and customer feedback.", side: "right" },
    { n: 3, title: "Dream Product", desc: "Turn your vision into reality faster than ever before, achieving your product goals with speed and precision.", side: "left" },
    { n: 4, title: "MVP Development", desc: "Test the viability of your concept in the market, ensuring maximum value with minimal investment.", side: "right" },
    { n: 5, title: "Real World Testing", desc: "Gather valuable insights from actual users to fine-tune your product for optimal performance and satisfaction.", side: "left" },
  ];

  return (
    <div>
      <PageHeader title="Programs" subtitle="Fueling tech excellence, empowering innovators, transforming tomorrow." activeLink="Programs" setPage={setPage} />

      {/* TABS */}
      <div style={{ background: WHITE, padding: "16px 40px", borderBottom: "1px solid #eee", display: "flex", gap: 8, flexWrap: "wrap" }}>
        <p style={{ margin: "0 16px 8px 0", fontSize: 11, color: "#888", fontWeight: 600, alignSelf: "center" }}>CATEGORIES</p>
        {tabs.map(t => (
          <button key={t} onClick={() => setActiveTab(t)} style={{ background: activeTab === t ? GREEN : "transparent", color: activeTab === t ? WHITE : "#555", border: `1px solid ${activeTab === t ? GREEN : "#ccc"}`, borderRadius: 4, padding: "6px 14px", fontSize: 13, cursor: "pointer" }}>{t}</button>
        ))}
      </div>

      {/* TRAINING TAB */}
      {activeTab === "Training" && (
        <div style={{ padding: "40px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 24 }}>
            {courses.map((c, i) => (
              <div key={i} style={{ background: WHITE, borderRadius: 8, boxShadow: "0 1px 6px rgba(0,0,0,0.08)", overflow: "hidden" }}>
                <div style={{ height: 140, background: c.bg, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ fontSize: 32, opacity: 0.4 }}>📚</span>
                </div>
                <div style={{ padding: 16 }}>
                  <h3 style={{ margin: "0 0 8px", fontSize: 15, fontWeight: 600 }}>{c.title}</h3>
                  <p style={{ fontSize: 12, color: "#666", lineHeight: 1.6, margin: "0 0 14px" }}>Upon completion of the Data Analysis course, you will be equipped with a comprehensive skill set to analyze and present data effectively.</p>
                  <button style={{ background: LIGHT_GREEN_BG, border: "none", color: GREEN, fontSize: 12, padding: "6px 12px", borderRadius: 20, cursor: "pointer", fontWeight: 500 }}>Learn more →</button>
                </div>
              </div>
            ))}
          </div>
          <GetInTouch />
        </div>
      )}

      {/* STARTUP INCUBATION TAB */}
      {activeTab === "Startup Incubation" && (
        <div style={{ padding: "40px" }}>
          <h1 style={{ textAlign: "center", fontSize: 34, fontWeight: 700, marginBottom: 12 }}>start-up Incubation</h1>
          <p style={{ textAlign: "center", color: "#555", fontSize: 14, marginBottom: 32, lineHeight: 1.6 }}>From expert mentorship to funding opportunities, NITHUB has everything you need to launch and grow your startup</p>
          <div style={{ background: "#000", height: 260, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 40 }}>
            <span style={{ fontSize: 40, color: GREEN, cursor: "pointer" }}>▶</span>
          </div>
          <h2 style={{ fontSize: 20, fontWeight: 700, marginBottom: 12 }}>What is start-up incubation?</h2>
          <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7, marginBottom: 40 }}>NITHUB is your one-stop platform for startup success. We provide all the essential support and resources you need to turn your idea into a thriving business. From expert mentorship to funding opportunities, NITHUB has everything you need to launch and grow your startup. Join us today and let's build the future of entrepreneurship together!</p>
          <div style={{ marginBottom: 32 }}>
            <h3 style={{ fontSize: 16, fontWeight: 700, display: "flex", alignItems: "center", gap: 8 }}>Incubation 🏢</h3>
            <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7 }}>This is a 7-month program focused on helping ventures with some level of traction & revenue to build businesses that can grow into global sustainable companies.</p>
            <p style={{ fontSize: 13, color: "#333", fontWeight: 600, lineHeight: 1.7, marginBottom: 24 }}>Startups will access up to $25k during the program and have direct access to follow-on funding of up to $250k from Growth Capital, free office space for the team, free credits for partner products, business support and access to a network of partners and more. To be eligible to apply, startups must meet the following criteria:</p>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 20 }}>
              {incubationCriteria.map((c, i) => (
                <div key={i} style={{ display: "flex", gap: 10, alignItems: "flex-start" }}>
                  <span style={{ color: GREEN, fontSize: 16, flexShrink: 0 }}>💎</span>
                  <p style={{ fontSize: 13, color: "#555", margin: 0, lineHeight: 1.6 }}>{c}</p>
                </div>
              ))}
            </div>
          </div>
          <GetInTouch />
        </div>
      )}

      {/* PRODUCT DEVELOPMENT TAB */}
      {activeTab === "Product Development" && (
        <div>
          <div style={{ background: "#c8a000", minHeight: 280, display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", padding: "40px", textAlign: "center", position: "relative", overflow: "hidden" }}>
            <h1 style={{ fontSize: 34, fontWeight: 700, color: WHITE, margin: "0 0 12px", position: "relative", zIndex: 1 }}>Product Devlopment</h1>
            <p style={{ color: "rgba(255,255,255,0.9)", fontSize: 14, maxWidth: 400, lineHeight: 1.6, marginBottom: 24, position: "relative", zIndex: 1 }}>In the realm of product development, we specialize in harnessing cutting-edge technologies to bring your ideas to life</p>
            <button style={{ background: DARK_NAVY, color: WHITE, border: "none", borderRadius: 6, padding: "10px 24px", fontSize: 14, cursor: "pointer", fontWeight: 600, position: "relative", zIndex: 1 }}>Book a session</button>
          </div>
          <div style={{ padding: "48px 40px" }}>
            <div style={{ display: "flex", gap: 32, alignItems: "center", marginBottom: 48, flexWrap: "wrap" }}>
              <div style={{ flex: 1, minWidth: 220, background: "#000", height: 200, borderRadius: 8, display: "flex", alignItems: "center", justifyContent: "center" }}>
                <span style={{ color: GREEN, fontSize: 36, cursor: "pointer" }}>▶</span>
              </div>
              <div style={{ flex: 1, minWidth: 220 }}>
                <h2 style={{ fontSize: 28, fontWeight: 700, margin: "0 0 16px", lineHeight: 1.3 }}>Building Successful Companies</h2>
                <p style={{ fontSize: 13, color: "#555", lineHeight: 1.7 }}>our commitment to innovation and excellence remains steadfast. In the realm of product development, we specialize in harnessing cutting-edge technologies to bring your ideas to life. Here are some key offerings that set us apart.</p>
              </div>
            </div>
            <h3 style={{ textAlign: "center", color: GREEN, fontSize: 24, fontWeight: 700, marginBottom: 40 }}>How?</h3>
            <div style={{ maxWidth: 600, margin: "0 auto" }}>
              {productSteps.map((s, i) => (
                <div key={i} style={{ display: "flex", gap: 24, marginBottom: 40, alignItems: "flex-start", flexDirection: s.side === "right" ? "row-reverse" : "row" }}>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontWeight: 600, fontSize: 14, textDecoration: "underline", margin: "0 0 6px" }}>{s.title}:</p>
                    <p style={{ fontSize: 13, color: "#555", margin: 0, lineHeight: 1.6 }}>{s.desc}</p>
                  </div>
                  <div style={{ width: 40, textAlign: "center", color: "#ccc", fontSize: 20, fontWeight: 300, paddingTop: 4, flexShrink: 0 }}>{s.n}</div>
                  <div style={{ flex: 1 }} />
                </div>
              ))}
            </div>
          </div>
          <GetInTouch />
        </div>
      )}

      {/* WORKSPACES TAB */}
      {activeTab === "Workspaces" && (
        <div style={{ padding: "60px 40px", textAlign: "center" }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, marginBottom: 16 }}>Our Workspaces</h2>
          <p style={{ fontSize: 14, color: "#555", maxWidth: 480, margin: "0 auto 40px", lineHeight: 1.7 }}>State-of-the-art facilities designed to help you focus, collaborate, and build the future of tech at the University of Lagos.</p>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 20, maxWidth: 700, margin: "0 auto" }}>
            {["Open Workspace", "Private Offices", "Meeting Rooms", "Event Hall", "Wi-Fi & Power", "24/7 Access"].map((w, i) => (
              <div key={i} style={{ background: LIGHT_GREEN_BG, borderRadius: 8, padding: "24px 16px", borderLeft: `3px solid ${GREEN}` }}>
                <p style={{ margin: 0, fontWeight: 600, fontSize: 14, color: DARK_NAVY }}>{w}</p>
              </div>
            ))}
          </div>
          <GetInTouch />
        </div>
      )}

      <Footer />
    </div>
  );
};

// ════════════════════════════════════════════════════════════════════════════════
// EVENTS PAGE
// ════════════════════════════════════════════════════════════════════════════════
const EventsPage = ({ setPage }) => {
  const events = [
    { title: "Nidus Ideation", desc: "The Entrepreneurs workshop: Using design thinking to ignite early stage success.", date: "Date:26th of April 2023 | 11:00AM", tag: "Design", bg: DARK_NAVY, accent: GREEN },
    { title: "LAB 2 FAB", desc: "Turn your ideas and research outputs to products.", date: "Date:20th of April 2023 | 11:00AM", tag: "Design", bg: "#1a1a4a", accent: "#6060ff" },
    { title: "NITDATA 2.1", desc: "The Entrepreneurs workshop: Using design thinking to ignite early stage success.", date: "Date:26th of April 2023 | 11:00AM", tag: "Design", bg: "#0a2a0a", accent: GREEN },
  ];

  return (
    <div>
      <PageHeader title="Events" subtitle="" activeLink="Events" setPage={setPage} />
      <div style={{ padding: "32px 40px" }}>
        <p style={{ color: GREEN, fontSize: 13, marginBottom: 24 }}>All events</p>
        {events.map((e, i) => (
          <div key={i} style={{ display: "flex", gap: 32, padding: "32px 0", borderBottom: "1px solid #eee", alignItems: "flex-start", flexWrap: "wrap", background: i % 2 === 1 ? "#f8f8f8" : WHITE }}>
            {i % 2 === 0 ? (
              <>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 10px" }}>{e.title}</h3>
                  <p style={{ fontSize: 13, color: "#555", marginBottom: 8, lineHeight: 1.6 }}>{e.desc}</p>
                  <p style={{ fontSize: 12, color: "#888", marginBottom: 8 }}>Click on the link to register</p>
                  <p style={{ fontSize: 12, color: "#888", marginBottom: 12 }}>{e.date}</p>
                  <span style={{ background: "#f0f0f0", borderRadius: 4, padding: "3px 10px", fontSize: 12, borderLeft: `3px solid ${GREEN}` }}>{e.tag}</span>
                </div>
                <div style={{ width: 200, height: 160, background: e.bg, borderRadius: 8, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: e.accent, fontSize: 20, fontWeight: 700 }}>{e.title}</span>
                </div>
              </>
            ) : (
              <>
                <div style={{ width: 200, height: 160, background: e.bg, borderRadius: 8, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center" }}>
                  <span style={{ color: e.accent, fontSize: 20, fontWeight: 700 }}>{e.title}</span>
                </div>
                <div style={{ flex: 1, minWidth: 200 }}>
                  <h3 style={{ fontSize: 18, fontWeight: 700, margin: "0 0 10px" }}>{e.title}</h3>
                  <p style={{ fontSize: 13, color: "#555", marginBottom: 8, lineHeight: 1.6 }}>{e.desc}</p>
                  <p style={{ fontSize: 12, color: "#888", marginBottom: 8 }}>Click on the link to register</p>
                  <p style={{ fontSize: 12, color: "#888", marginBottom: 12 }}>{e.date}</p>
                  <span style={{ background: "#f0f0f0", borderRadius: 4, padding: "3px 10px", fontSize: 12, borderLeft: `3px solid ${GREEN}` }}>{e.tag}</span>
                </div>
              </>
            )}
          </div>
        ))}
        {/* Pagination */}
        <div style={{ display: "flex", justifyContent: "center", gap: 8, padding: "32px 0" }}>
          {[1, 2, 3].map(n => (
            <button key={n} style={{ width: 32, height: 32, border: `1px solid ${n === 1 ? GREEN : "#ddd"}`, background: n === 1 ? GREEN : "transparent", color: n === 1 ? WHITE : "#555", borderRadius: 4, cursor: "pointer", fontSize: 13 }}>{n}</button>
          ))}
        </div>
      </div>
      <GetInTouch />
      <Footer />
    </div>
  );
};

// ════════════════════════════════════════════════════════════════════════════════
// BLOG PAGE
// ════════════════════════════════════════════════════════════════════════════════
const BlogPage = ({ setPage, setCurrentPost }) => {
  const trending = Array(6).fill({ title: "The Future of Robotics: Amazing Ways Robots Will Change the World", date: "Feb 8, 2024", read: "4 min read" });
  const articles = [
    { title: "What is Internet of Things(IoT)?", desc: "Do you not wonder how a thing (phone) can connect to another thing (coffee machine)? Well, that is the technology of Internet of Things, popularly called IoT.", date: "Feb 4, 2024", read: "8 min read", tag: "IOT", emoji: "🔵" },
    { title: "Accelerate business growth with innovation.", desc: "First of all, incorporating innovation into your business can boost profits and client satisfaction. The smallest things can serve as the foundation for innovations in your company.", date: "Feb 4, 2024", read: "8 min read", tag: "Business", emoji: "⚫" },
    { title: "Benefit of Open source and Free training for career growth.", desc: "First of all, incorporating innovation into your business can boost profits and client satisfaction. The smallest things can serve as the foundation for innovations in your company.", date: "Feb 4, 2024", read: "8 min read", tag: "Learning", emoji: "🟡" },
    { title: "The Future of Robotics: Amazing Ways Robots Will Change the World", desc: "First of all, incorporating innovation into your business can boost profits and client satisfaction. The smallest things can serve as the foundation for innovations in your company.", date: "Feb 4, 2024", read: "8 min read", tag: "Robotics", emoji: "🤖" },
  ];
  const topics = ["Programming", "Data Science", "Technology", "Self Improvement", "Writing", "Relationships", "Machine Learning", "Productivity"];

  return (
    <div>
      <PageHeader title="Blog" subtitle="We are always ready to fill you in and indulge your curiosity." activeLink="Blog" setPage={setPage} />
      <div style={{ padding: "32px 40px" }}>
        {/* Trending */}
        <h3 style={{ fontSize: 15, fontWeight: 600, marginBottom: 20 }}>Trending Topics</h3>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16, marginBottom: 40 }}>
          {trending.map((t, i) => (
            <div key={i} style={{ display: "flex", gap: 10 }}>
              <span style={{ color: "#ccc", fontSize: 12, flexShrink: 0, paddingTop: 2 }}>0{i + 1}</span>
              <div>
                <p style={{ fontSize: 13, fontWeight: 600, margin: "0 0 4px", lineHeight: 1.4, cursor: "pointer" }} onClick={() => { setCurrentPost(t); setPage("BlogPost"); }}>{t.title}</p>
                <p style={{ fontSize: 11, color: "#888", margin: 0 }}>{t.date} · {t.read}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Articles + Sidebar */}
        <div style={{ display: "flex", gap: 40 }}>
          <div style={{ flex: 2 }}>
            {articles.map((a, i) => (
              <div key={i} style={{ display: "flex", gap: 16, paddingBottom: 24, marginBottom: 24, borderBottom: "1px solid #eee" }}>
                <div style={{ flex: 1 }}>
                  <h3 style={{ fontSize: 15, fontWeight: 700, margin: "0 0 6px", cursor: "pointer" }} onClick={() => { setCurrentPost(a); setPage("BlogPost"); }}>{a.title}</h3>
                  <p style={{ fontSize: 12, color: "#666", marginBottom: 8, lineHeight: 1.6 }}>{a.desc}</p>
                  <p style={{ fontSize: 11, color: "#888", margin: "0 0 6px" }}>{a.date} · {a.read}</p>
                  <span style={{ background: "#f0f0f0", borderRadius: 4, padding: "2px 8px", fontSize: 11 }}>{a.tag}</span>
                </div>
                <div style={{ width: 80, height: 70, background: "#e8e8e8", borderRadius: 6, flexShrink: 0, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 28 }}>{a.emoji}</div>
              </div>
            ))}
          </div>
          <div style={{ flex: 1, minWidth: 180 }}>
            <p style={{ fontSize: 13, fontWeight: 600, marginBottom: 12 }}>Discover more of what matters to you</p>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8, marginBottom: 12 }}>
              {topics.map(t => (
                <span key={t} style={{ background: "#f0f0f0", borderRadius: 20, padding: "5px 12px", fontSize: 12, cursor: "pointer" }}>{t}</span>
              ))}
            </div>
            <button style={{ background: "none", border: "none", color: GREEN, fontSize: 13, cursor: "pointer", fontWeight: 500 }}>See more topics</button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

// ════════════════════════════════════════════════════════════════════════════════
// BLOG POST PAGE
// ════════════════════════════════════════════════════════════════════════════════
const BlogPostPage = ({ post, setPage }) => (
  <div>
    <div style={{ background: "#2e7d32", padding: "16px 40px" }}>
      <nav style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
        <div onClick={() => setPage("Home")} style={{ cursor: "pointer" }}><Logo /></div>
        <div style={navLinksStyle}>
          {["Home", "Programs", "Events", "Blog"].map(l => (
            <span key={l} onClick={() => setPage(l)} style={{ ...navLinkStyle(false), color: "rgba(255,255,255,0.85)" }}>{l}</span>
          ))}
        </div>
      </nav>
    </div>
    <div style={{ maxWidth: 640, margin: "0 auto", padding: "48px 24px" }}>
      <h1 style={{ fontSize: 28, fontWeight: 700, margin: "0 0 12px", lineHeight: 1.4 }}>The Future of Robotics : Amazing ways Robots will change the world.</h1>
      <p style={{ fontSize: 13, color: "#888", marginBottom: 24, lineHeight: 1.6 }}>Do you not wonder how a thing (phone) can connect to another thing (coffee machine)? Well, that is the technology of Internet of Things, popularly called IoT.</p>
      <div style={{ display: "flex", gap: 32, marginBottom: 24, fontSize: 12, color: "#888" }}>
        <div><span style={{ display: "block", fontWeight: 600, color: "#333", marginBottom: 2 }}>Date</span>Feb 8, 2024</div>
        <div><span style={{ display: "block", fontWeight: 600, color: "#333", marginBottom: 2 }}>Read time</span>4 min read</div>
      </div>
      <div style={{ height: 280, background: "#2a3a2a", borderRadius: 8, marginBottom: 32, display: "flex", alignItems: "center", justifyContent: "center" }}>
        <span style={{ fontSize: 64 }}>🤖</span>
      </div>
      {[
        "In the ever-evolving landscape of technology, one phenomenon stands out as a beacon of innovation: robotics. From science fiction fantasies to real-world applications, robots are poised to transform virtually every aspect of our lives in ways both astounding and awe-inspiring.",
        "Imagine a world where robots serve as our tireless companions, augmenting our capabilities and enhancing our quality of life. Picture autonomous vehicles navigating bustling city streets with precision and efficiency, revolutionizing transportation and reducing traffic congestion.",
        "But the impact of robotics extends far beyond the realm of convenience and healthcare. In agriculture, robots are revolutionizing farming practices, increasing efficiency, and sustainability while minimizing the need for manual labor.",
        "Furthermore, robots are poised to play a crucial role in disaster response and environmental conservation efforts. From search and rescue missions in hazardous conditions to monitoring and protecting fragile ecosystems, robots offer unparalleled capabilities.",
        "In conclusion, the future of robotics holds tremendous promise for humanity. As we continue to push the boundaries of innovation and explore new frontiers, robots will play an increasingly integral role in shaping the world of tomorrow.",
      ].map((p, i) => (
        <p key={i} style={{ fontSize: 13, color: "#444", lineHeight: 1.8, marginBottom: 18 }}>{p}</p>
      ))}
    </div>
    <Footer />
  </div>
);

// ════════════════════════════════════════════════════════════════════════════════
// APP ROOT
// ════════════════════════════════════════════════════════════════════════════════
export default function App() {
  const [page, setPage] = useState("Home");
  const [currentPost, setCurrentPost] = useState(null);

  return (
    <div style={{ fontFamily: "system-ui, -apple-system, sans-serif", color: "#1a1a1a", minHeight: "100vh" }}>
      {page !== "BlogPost" && <Nav page={page} setPage={setPage} />}
      {page === "Home" && <HomePage setPage={setPage} />}
      {page === "Programs" && <ProgramsPage setPage={setPage} />}
      {page === "Events" && <EventsPage setPage={setPage} />}
      {page === "Blog" && <BlogPage setPage={setPage} setCurrentPost={setCurrentPost} />}
      {page === "BlogPost" && <BlogPostPage post={currentPost} setPage={setPage} />}
    </div>
  );
}

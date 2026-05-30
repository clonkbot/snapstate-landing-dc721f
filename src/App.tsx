import { useState, useEffect } from 'react';

function App() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white antialiased selection:bg-white/10">
      {/* Navigation */}
      <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-black/80 backdrop-blur-xl border-b border-white/[0.04]' : ''}`}>
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-14 sm:h-16">
            <div className="flex items-center gap-3 sm:gap-4">
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-lg border border-white/[0.08] bg-[#0A0A0C] flex items-center justify-center">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" className="text-white/80">
                  <rect x="3" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                  <rect x="13" y="3" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                  <rect x="3" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                  <rect x="13" y="13" width="8" height="8" rx="1" stroke="currentColor" strokeWidth="1.5"/>
                </svg>
              </div>
              <span className="text-[15px] font-medium tracking-[-0.01em] text-white/90">SnapState</span>
            </div>

            <div className="hidden sm:flex items-center gap-6 lg:gap-8">
              <a href="#engine" className="text-[13px] text-white/50 hover:text-white/80 transition-colors">Core Engine</a>
              <a href="#architecture" className="text-[13px] text-white/50 hover:text-white/80 transition-colors">Architecture</a>
              <button className="px-4 py-1.5 text-[13px] text-white/80 border border-white/[0.08] rounded-md hover:border-white/[0.15] hover:bg-white/[0.02] transition-all">
                Download
              </button>
            </div>

            <button className="sm:hidden p-2 -mr-2">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="text-white/60">
                <path d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 lg:pt-40 pb-16 sm:pb-20 lg:pb-24 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center px-3 py-1.5 rounded-full border border-white/[0.06] bg-white/[0.02] mb-6 sm:mb-8">
            <span className="text-[11px] sm:text-xs font-mono tracking-wider text-white/40">v2.3.0 CORE RELEASE</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-[-0.03em] leading-[0.95] mb-5 sm:mb-6 hero-gradient">
            Your workspace,<br />perfected.
          </h1>

          <p className="text-base sm:text-lg text-white/40 max-w-2xl mx-auto leading-relaxed mb-8 sm:mb-10 px-2">
            A low-level native macOS utility to preserve and restore layout state. Capture window coordinates, monitor configurations, and active browser states instantly.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4">
            <button className="w-full sm:w-auto px-6 py-3 bg-white text-black text-[14px] font-medium rounded-lg hover:bg-white/90 transition-colors">
              Download Disk Image (.dmg)
            </button>
            <button className="w-full sm:w-auto px-6 py-3 text-[14px] text-white/70 border border-white/[0.08] rounded-lg hover:border-white/[0.15] hover:bg-white/[0.02] transition-all">
              View Repository
            </button>
          </div>
        </div>
      </section>

      {/* Mac Interface Frame */}
      <section className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28 lg:pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="rounded-xl sm:rounded-2xl border border-white/[0.06] bg-[#0A0A0C] overflow-hidden shadow-2xl shadow-black/50">
            {/* Window Header */}
            <div className="h-10 sm:h-11 border-b border-white/[0.04] flex items-center justify-between px-3 sm:px-4">
              <div className="flex items-center gap-1.5 sm:gap-2">
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/10"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/10"></div>
                <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full bg-white/10"></div>
              </div>
              <span className="text-[10px] sm:text-[11px] font-mono text-white/25 tracking-wide hidden xs:block">SnapState HUD Environment — Menu Bar View</span>
              <div className="w-12 sm:w-16"></div>
            </div>

            {/* Window Body */}
            <div className="aspect-video bg-gradient-to-b from-[#0A0A0C] to-[#050506] flex items-center justify-center relative">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.01)_0%,transparent_70%)]"></div>
              <div className="text-center z-10 px-4">
                <div className="w-14 h-14 sm:w-16 sm:h-16 mx-auto mb-4 rounded-xl border border-white/[0.06] bg-white/[0.02] flex items-center justify-center">
                  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="text-white/20 sm:scale-110">
                    <polygon points="5,3 19,12 5,21" fill="currentColor"/>
                  </svg>
                </div>
                <p className="text-xs sm:text-sm text-white/20 font-mono">Demo Preview</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Specifications Grid */}
      <section id="engine" className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28 lg:pb-32">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 border border-white/[0.06] rounded-xl overflow-hidden">
            <SpecItem
              title="Window Coordinate Mapping"
              badge="CGWindowListCopyWindowInfo"
              borderRight
              borderBottom
            />
            <SpecItem
              title="Deep Browser Session Spying"
              badge="NSAppleScript Integration"
              borderBottom
              noBorderRightMobile
            />
            <SpecItem
              title="Hardware Topology Auditing"
              badge="NSApplication.didChangeScreenParameters"
              borderRight
            />
            <SpecItem
              title="Zero-Footprint Background Pipeline"
              badge="LSUIElement Subsystem"
              noBorderRightMobile
            />
          </div>
        </div>
      </section>

      {/* Subsystem Architecture Table */}
      <section id="architecture" className="px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28 lg:pb-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-xs font-mono text-white/30 tracking-widest mb-6 sm:mb-8">SUBSYSTEM ARCHITECTURE</h2>

          <div className="space-y-0">
            <ArchRow
              label="Window Mutations"
              description="Leverages low-level AXUIElementSetAttributeValue system calls to programmatically inject kAXPositionAttribute and kAXSizeAttribute directly onto target window targets."
            />
            <ArchRow
              label="State Serialization"
              description="Stores layout contexts into ~/Library/Application Support/SnapState/states.json using strict ISO-8601 timestamps and an optimized schema layout."
            />
            <ArchRow
              label="Settling Routines"
              description="Implements a precise 1.2-second post-launch thread settling interval to allow heavy system apps to spawn target window elements safely before layout adjustment."
              isLast
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-white/[0.04] px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto py-6 sm:py-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 sm:gap-0">
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-6 text-center sm:text-left">
              <span className="text-[12px] sm:text-[13px] text-white/25">&copy; 2024 SnapState</span>
              <div className="flex items-center gap-4 sm:gap-6">
                <a href="#" className="text-[12px] sm:text-[13px] text-white/25 hover:text-white/40 transition-colors">Privacy</a>
                <a href="#" className="text-[12px] sm:text-[13px] text-white/25 hover:text-white/40 transition-colors">Terms</a>
              </div>
            </div>
            <span className="text-[11px] sm:text-[12px] text-white/15 font-mono">Engineered by Arush, age 15</span>
          </div>

          {/* Attribution Footer */}
          <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-white/[0.03] text-center">
            <span className="text-[10px] sm:text-[11px] text-white/15">Requested by @soulsnipes23 · Built by @clonkbot</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

function SpecItem({ title, badge, borderRight, borderBottom, noBorderRightMobile }: {
  title: string;
  badge: string;
  borderRight?: boolean;
  borderBottom?: boolean;
  noBorderRightMobile?: boolean;
}) {
  return (
    <div className={`p-5 sm:p-6 lg:p-8 bg-[#0A0A0C] ${borderBottom ? 'border-b border-white/[0.06]' : ''} ${borderRight ? (noBorderRightMobile ? 'sm:border-r' : 'border-r-0 sm:border-r') : ''} ${noBorderRightMobile ? '' : ''} border-white/[0.06]`}>
      <h3 className="text-[14px] sm:text-[15px] font-medium text-white/80 mb-3 sm:mb-4">{title}</h3>
      <code className="inline-block px-2 sm:px-3 py-1.5 text-[10px] sm:text-[11px] font-mono text-white/40 bg-white/[0.03] border border-white/[0.06] rounded-md break-all">
        {badge}
      </code>
    </div>
  );
}

function ArchRow({ label, description, isLast }: { label: string; description: string; isLast?: boolean }) {
  return (
    <div className={`grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-3 lg:gap-8 py-5 sm:py-6 ${!isLast ? 'border-b border-white/[0.04]' : ''}`}>
      <div className="text-[13px] sm:text-[14px] font-medium text-white/60">{label}</div>
      <div className="text-[13px] sm:text-[14px] text-white/30 leading-relaxed">{description}</div>
    </div>
  );
}

export default App;

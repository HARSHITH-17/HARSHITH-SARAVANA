import { Mail, Phone, MapPin, Send, Clock, Globe } from "lucide-react";

export default function Contact() {
  return (
    <div className="pt-40 pb-20 container mx-auto px-6 relative z-10">
      <div className="text-center max-w-3xl mx-auto mb-24">
        <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tighter uppercase font-heading text-white">
          Establish <span className="text-gradient">Link</span>
        </h1>
        <p className="text-gray-400 text-xl font-light leading-relaxed">
          Ready to optimize your manufacturing pipeline or need expert CAD/CAM consulting? Reach out and schedule a strategy session.
        </p>
      </div>

      <div className="grid lg:grid-cols-5 gap-12 items-start relative pb-10">
        {/* Background Highlight */}
        <div className="absolute top-1/2 left-0 w-full h-[150%] bg-[#00D4FF]/5 blur-[100px] rounded-full z-0 pointer-events-none -translate-y-1/2 mix-blend-screen" />
        
        {/* Contact Info */}
        <div className="lg:col-span-2 space-y-6 relative z-10">
          <div className="glass-card p-6 flex items-center gap-6 group hover:border-[#00D4FF]/40 border border-[#00D4FF]/10 transition-all overflow-hidden relative">
            <div className="absolute inset-0 bg-[#00D4FF]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-14 h-14 rounded-2xl bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,212,255,0.1)] relative z-10">
              <Mail size={24} strokeWidth={1.5} />
            </div>
            <div className="relative z-10">
              <div className="text-[10px] text-[#00D4FF] uppercase tracking-[0.2em] font-black mb-1">Email Endpoint</div>
              <a href="mailto:info.harshiths@gmail.com" className="text-gray-200 hover:text-white transition-colors font-medium">info.harshiths@gmail.com</a>
            </div>
          </div>

          <div className="glass-card p-6 flex items-center gap-6 group hover:border-[#00D4FF]/40 border border-[#00D4FF]/10 transition-all overflow-hidden relative">
            <div className="absolute inset-0 bg-[#00D4FF]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-14 h-14 rounded-2xl bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,212,255,0.1)] relative z-10">
              <Phone size={24} strokeWidth={1.5} />
            </div>
            <div className="relative z-10">
              <div className="text-[10px] text-[#00D4FF] uppercase tracking-[0.2em] font-black mb-1">Voice Comm</div>
              <a href="tel:+918431270367" className="text-gray-200 hover:text-white transition-colors font-medium">+91 8431270367</a>
            </div>
          </div>

          <div className="glass-card p-6 flex items-center gap-6 group hover:border-[#00D4FF]/40 border border-[#00D4FF]/10 transition-all overflow-hidden relative">
            <div className="absolute inset-0 bg-[#00D4FF]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-14 h-14 rounded-2xl bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,212,255,0.1)] relative z-10">
              <MapPin size={24} strokeWidth={1.5} />
            </div>
            <div className="relative z-10">
              <div className="text-[10px] text-[#00D4FF] uppercase tracking-[0.2em] font-black mb-1">HQ Coordinates</div>
              <div className="text-gray-200 font-medium tracking-tight">Bengaluru, Karnataka, India</div>
            </div>
          </div>

          <div className="glass-card p-6 flex items-center gap-6 group hover:border-[#00D4FF]/40 border border-[#00D4FF]/10 transition-all overflow-hidden relative">
            <div className="absolute inset-0 bg-[#00D4FF]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-14 h-14 rounded-2xl bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,212,255,0.1)] relative z-10">
              <Clock size={24} strokeWidth={1.5} />
            </div>
            <div className="relative z-10">
              <div className="text-[10px] text-[#00D4FF] uppercase tracking-[0.2em] font-black mb-1">Operating Window</div>
              <div className="text-gray-200 font-medium tracking-tight">Mon – Sat, 9AM – 7PM IST</div>
            </div>
          </div>

          <div className="glass-card p-6 flex items-center gap-6 group hover:border-[#00D4FF]/40 border border-[#00D4FF]/10 transition-all overflow-hidden relative">
            <div className="absolute inset-0 bg-[#00D4FF]/5 opacity-0 group-hover:opacity-100 transition-opacity" />
            <div className="w-14 h-14 rounded-2xl bg-[#00D4FF]/10 flex items-center justify-center text-[#00D4FF] shrink-0 group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(0,212,255,0.1)] relative z-10">
              <Globe size={24} strokeWidth={1.5} />
            </div>
            <div className="relative z-10">
              <div className="text-[10px] text-[#00D4FF] uppercase tracking-[0.2em] font-black mb-1">Global Profile</div>
              <a href="https://linkedin.com/in/harshithsaravanan" target="_blank" rel="noreferrer" className="text-gray-200 hover:text-white transition-colors font-medium">LinkedIn Network</a>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <div className="lg:col-span-3 glass-card p-10 xl:p-14 border border-[#00D4FF]/20 relative z-10 overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#00D4FF]/10 blur-[80px] pointer-events-none" />
          
          <h2 className="text-3xl font-bold text-white mb-10 tracking-tighter uppercase">Transmit Signal</h2>
          <form action="https://formspree.io/f/meepvraa" method="POST" className="space-y-8 relative z-10">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-3">
                <label className="text-[10px] text-[#00D4FF] uppercase tracking-[0.2em] font-black">Operator Name</label>
                <input name="name" type="text" required className="w-full bg-[#050816]/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00D4FF]/80 focus:ring-1 focus:ring-[#00D4FF]/50 transition-all placeholder:text-gray-600 font-light" placeholder="Your full designation" />
              </div>
              <div className="space-y-3">
                <label className="text-[10px] text-[#00D4FF] uppercase tracking-[0.2em] font-black">Response Frequency (Email)</label>
                <input name="email" type="email" required className="w-full bg-[#050816]/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00D4FF]/80 focus:ring-1 focus:ring-[#00D4FF]/50 transition-all placeholder:text-gray-600 font-light" placeholder="contact@organization.com" />
              </div>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] text-[#00D4FF] uppercase tracking-[0.2em] font-black">Entity / Organization</label>
              <input name="organization" type="text" className="w-full bg-[#050816]/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00D4FF]/80 focus:ring-1 focus:ring-[#00D4FF]/50 transition-all placeholder:text-gray-600 font-light" placeholder="Corporate identifier" />
            </div>
            <div className="space-y-3">
              <label className="text-[10px] text-[#00D4FF] uppercase tracking-[0.2em] font-black">Required Capability</label>
              <select name="service" className="w-full bg-[#050816]/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00D4FF]/80 focus:ring-1 focus:ring-[#00D4FF]/50 transition-all appearance-none cursor-pointer font-light">
                <option value="" className="bg-[#050816] text-gray-400">Select protocol...</option>
                <option value="cad" className="bg-[#050816]">CAD Design &amp; Product Development</option>
                <option value="cam" className="bg-[#050816]">CAM Programming &amp; CNC Support</option>
                <option value="training" className="bg-[#050816]">Autodesk Software Training</option>
                <option value="mould" className="bg-[#050816]">Mould Design &amp; Tool Room Consulting</option>
                <option value="consulting" className="bg-[#050816]">Engineering Sales Consultation</option>
                <option value="workflow" className="bg-[#050816]">Workflow Optimization</option>
                <option value="other" className="bg-[#050816]">Other Inquiry</option>
              </select>
            </div>
            <div className="space-y-3">
              <label className="text-[10px] text-[#00D4FF] uppercase tracking-[0.2em] font-black">Data Payload (Message)</label>
              <textarea name="message" rows={6} required className="w-full bg-[#050816]/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-[#00D4FF]/80 focus:ring-1 focus:ring-[#00D4FF]/50 transition-all placeholder:text-gray-600 font-light resize-none" placeholder="Detail your project requirements, technical challenges, and operational objectives..." />
            </div>
            <button type="submit" className="w-full relative py-5 rounded-xl bg-[#00D4FF] text-[#050816] font-bold uppercase tracking-[0.1em] text-sm overflow-hidden transition-all hover:scale-[1.02] hover:shadow-[0_0_40px_rgba(0,212,255,0.4)] active:scale-[0.98] group">
              <span className="relative z-10 flex items-center justify-center gap-3">
                <Send size={18} />
                Execute Transmission
              </span>
              <div className="absolute inset-0 bg-white opacity-0 group-hover:opacity-20 transition-opacity" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

import React, { useState } from "react";
import { candidateConfig, getWhatsAppUrl } from "../config/candidateConfig";
import { 
  MessageCircle, 
  HelpCircle, 
  MessageSquare, 
  Copy, 
  Check, 
  ExternalLink,
  ShieldCheck,
  Send
} from "lucide-react";

export const FeedbackSection: React.FC = () => {
  const [copiedNumber, setCopiedNumber] = useState(false);
  const [customQuestion, setCustomQuestion] = useState("");

  const handleCopyNumber = () => {
    navigator.clipboard.writeText(`+${candidateConfig.whatsappNumber}`);
    setCopiedNumber(true);
    setTimeout(() => setCopiedNumber(false), 2000);
  };

  const formattedNumber = `+${candidateConfig.whatsappNumber.slice(0, 3)} ${candidateConfig.whatsappNumber.slice(3, 6)} ${candidateConfig.whatsappNumber.slice(6, 9)} ${candidateConfig.whatsappNumber.slice(9)}`;

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#F4F7FB] border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <p className="text-xs font-bold uppercase tracking-widest text-[#C9A34A] mb-2">
            Open Dialogue & Engagement
          </p>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#092C5C] font-heading tracking-tight mb-4">
            YOUR VOICE MATTERS. LET'S TALK.
          </h2>
          <div className="w-16 h-1 bg-[#C9A34A] mx-auto mb-6" />
          <p className="text-base sm:text-lg text-slate-700 leading-relaxed font-normal">
            An effective departmental agenda should remain open to questions, suggestions, and constructive feedback. Reach out directly to discuss how we can build a stronger NACOS together.
          </p>
        </div>

        {/* WhatsApp Interaction Box */}
        <div className="max-w-3xl mx-auto bg-white rounded-2xl border border-slate-200 shadow-md p-8 sm:p-10 relative overflow-hidden">
          
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-slate-200 mb-8">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-500 text-white flex items-center justify-center shadow-sm shrink-0">
                <MessageCircle className="w-7 h-7" />
              </div>
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-emerald-700">
                  Direct WhatsApp Hotline
                </p>
                <h3 className="text-xl font-bold text-[#092C5C] font-heading">
                  Mr. Clarity Consultation Line
                </h3>
              </div>
            </div>

            {/* Configurable Number Display */}
            <div className="flex items-center gap-2">
              <span className="font-mono text-sm font-semibold text-slate-800 bg-[#F4F7FB] px-3 py-1.5 rounded border border-slate-200">
                {formattedNumber}
              </span>
              <button
                type="button"
                onClick={handleCopyNumber}
                className="p-2 rounded bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
                title="Copy phone number"
                aria-label="Copy phone number"
              >
                {copiedNumber ? <Check className="w-4 h-4 text-emerald-600" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
          </div>

          {/* Prompt-mandated Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
            
            {/* BUTTON 1: ASK A QUESTION */}
            <a
              href={getWhatsAppUrl("question", customQuestion ? `Question: ${customQuestion}` : undefined)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl bg-[#092C5C] hover:bg-[#1558A6] text-white transition-all shadow-sm flex flex-col justify-between group border border-[#092C5C]"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-white/10 flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors">
                  <HelpCircle className="w-5 h-5 text-[#C9A34A]" />
                </div>
                <h4 className="text-base font-bold font-heading mb-1 flex items-center gap-2">
                  <span>ASK A QUESTION</span>
                  <ExternalLink className="w-4 h-4 opacity-70" />
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed">
                  Have a question about any specific pillar, academic initiative, or feasibility detail? Inquire directly.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-white/10 flex items-center justify-between text-xs text-[#E2C479] font-medium">
                <span>Opens WhatsApp</span>
                <span className="font-mono text-[10px]">Prefilled prompt →</span>
              </div>
            </a>

            {/* BUTTON 2: SHARE YOUR FEEDBACK */}
            <a
              href={getWhatsAppUrl("feedback", customQuestion ? `Feedback: ${customQuestion}` : undefined)}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-xl bg-[#F4F7FB] hover:bg-[#EAEFF7] text-[#092C5C] transition-all shadow-2xs flex flex-col justify-between group border border-slate-300"
            >
              <div>
                <div className="w-10 h-10 rounded-lg bg-white flex items-center justify-center mb-4 border border-slate-200 group-hover:border-[#092C5C] transition-colors">
                  <MessageSquare className="w-5 h-5 text-[#1558A6]" />
                </div>
                <h4 className="text-base font-bold font-heading mb-1 flex items-center gap-2">
                  <span>SHARE YOUR FEEDBACK</span>
                  <ExternalLink className="w-4 h-4 opacity-70" />
                </h4>
                <p className="text-xs text-slate-600 leading-relaxed">
                  Share recommendations, welfare observations, or constructive critique to refine our collective agenda.
                </p>
              </div>
              <div className="mt-6 pt-3 border-t border-slate-200 flex items-center justify-between text-xs text-[#1558A6] font-medium">
                <span>Opens WhatsApp</span>
                <span className="font-mono text-[10px]">Prefilled prompt →</span>
              </div>
            </a>

          </div>

          {/* Optional Pre-type Note */}
          <div className="bg-[#F4F7FB] p-4 rounded-xl border border-slate-200 mb-6">
            <label htmlFor="custom-topic" className="block text-xs font-bold uppercase tracking-wider text-slate-700 mb-1.5">
              Want to attach a specific note or topic to your WhatsApp message? (Optional)
            </label>
            <div className="flex gap-2">
              <input
                id="custom-topic"
                type="text"
                placeholder="e.g. Question about 300L exam tutorials or SIWES placement support..."
                value={customQuestion}
                onChange={(e) => setCustomQuestion(e.target.value)}
                className="flex-1 text-xs px-3 py-2 bg-white border border-slate-200 rounded-md focus:outline-none focus:ring-1 focus:ring-[#092C5C] text-slate-800 placeholder:text-slate-400"
              />
            </div>
            <p className="text-[11px] text-slate-500 mt-1.5">
              Clicking either button above will automatically attach this text to your WhatsApp message.
            </p>
          </div>

          {/* Transparency and direct access reassurance */}
          <div className="flex items-center gap-2 text-xs text-slate-500 pt-4 border-t border-slate-100">
            <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
            <span>Direct candidate correspondence · No intermediary bots or automated filters</span>
          </div>

        </div>

      </div>
    </section>
  );
};

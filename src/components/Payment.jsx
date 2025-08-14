"use client";
import React, { useState, useRef, useEffect } from "react";
import { Heart, ChevronUp, Copy, Check, Coffee, Smartphone } from "lucide-react";
import QRCode from "react-qr-code";

const SupportButton = ({
  theme = "light",
  upiId,
  payeeName,
  upiMsg,
  buyMeCoffeeUrl,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown on outside click
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Close dropdown on Escape key
  useEffect(() => {
    const handleEscape = (event) => {
      if (event.key === "Escape") setIsOpen(false);
    };
    document.addEventListener("keydown", handleEscape);
    return () => document.removeEventListener("keydown", handleEscape);
  }, []);

  // Copy UPI ID
  const copyUpiId = async () => {
    try {
      await navigator.clipboard.writeText(upiId);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      console.error("Failed to copy");
    }
  };

  const handleBuyMeCoffee = () => {
    window.open(buyMeCoffeeUrl, "_blank", "noopener,noreferrer");
  };

  const upiUrl = `upi://pay?pa=${upiId}&pn=${encodeURIComponent(payeeName)}&tn=${encodeURIComponent(upiMsg)}&cu=INR`;

  return (
    <div ref={dropdownRef} className="fixed bottom-6 right-4 sm:right-6 z-50">
      {/* Dropdown */}
      <div
        className={`absolute bottom-16 right-0 w-[90vw] max-w-xs sm:w-72 md:w-64 lg:w-72 rounded-xl backdrop-blur-md border shadow-xl transform transition-all duration-300 ease-out origin-bottom-right
          ${isOpen ? "opacity-100 scale-100 translate-y-0" : "opacity-0 scale-95 translate-y-2 pointer-events-none"}
          ${theme === "dark" ? "bg-black/40 border-white/10" : "bg-white border-gray-300"}
        `}
      >
        <div className="p-3 sm:p-4 space-y-3">
          {/* Buy Me Coffee */}
          <button
            onClick={handleBuyMeCoffee}
            className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer
              ${theme === "dark" ? "hover:bg-white/10 text-white/90 hover:text-white" : "hover:bg-gray-300/50 text-gray-800 hover:text-gray-900"}
            `}
          >
            <div className="w-8 h-8 bg-yellow-500 rounded-lg flex items-center justify-center">
              <Coffee className="w-4 h-4 text-white" />
            </div>
            <span className="font-medium text-base">Buy Me Coffee</span>
          </button>

          {/* UPI Payment */}
          <div
            onClick={copyUpiId}
            className={`w-full flex flex-col items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 cursor-pointer
              ${theme === "dark" ? "hover:bg-white/10 text-white/90 hover:text-white" : "hover:bg-gray-300/50 text-gray-800 hover:text-gray-900"}
            `}
          >
            <div className="flex items-center gap-3 w-full">
              <div className="w-8 h-8 bg-green-500 rounded-lg flex items-center justify-center">
                <Smartphone className="w-4 h-4 text-white" />
              </div>
              <div className="flex-1 text-left">
                <div className="font-medium text-base">UPI Payment</div>
                <div className={`text-sm ${theme === "dark" ? "text-white/60" : "text-gray-600"}`}>
                  Scan QR or copy UPI ID
                </div>
              </div>
              <button className="w-8 h-8 flex items-center justify-center rounded transition" tabIndex={-1}>
                {copied ? <Check className="w-5 h-5 text-green-500" /> : <Copy className={`w-4 h-4 ${theme === "dark" ? "text-white/60" : "text-gray-500"}`} />}
              </button>
            </div>

            <div className="bg-white p-3 rounded-lg flex flex-col items-center w-full sm:w-auto">
              <QRCode value={upiUrl} size={120} bgColor="#fff" fgColor="#222" />
              <div className="mt-2 text-center text-sm text-gray-500 break-words">
                UPI ID: <span className="font-mono text-gray-800">{upiId}</span>
              </div>
              <div className="text-xs text-gray-500 mt-1">Scan to pay with any UPI app</div>
            </div>

            {copied && (
              <div
                className={`px-3 py-2 rounded-lg text-sm text-center
                  ${theme === "dark" ? "bg-green-500/20 text-green-300" : "bg-green-100 text-green-700"}
                `}
              >
                UPI ID copied to clipboard!
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Floating Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-12 h-12 sm:w-14 sm:h-14 rounded-full backdrop-blur-md border shadow-xl flex items-center justify-center transition-all duration-300
          ${theme === "dark" ? "bg-black/50 border-white/10 hover:bg-black/40" : "bg-white border-gray-300 hover:bg-gray-50"}
          ${isOpen ? "rotate-180" : "rotate-0"}
        `}
        aria-label="Support options"
      >
        {isOpen ? <ChevronUp className={`w-6 h-6 ${theme === "dark" ? "text-white/80" : "text-gray-600"}`} /> : <Heart className={`w-6 h-6 ${theme === "dark" ? "text-white/80" : "text-red-600"}`} />}
      </button>
    </div>
  );
};

export default SupportButton;

/**
 * Simple toast notification utility — lightweight alternative to react-hot-toast
 * Uses native browser APIs for a clean, non-blocking notification experience
 */

type ToastType = "success" | "error" | "info"

interface ToastOptions {
  duration?: number
  position?: "top" | "bottom"
}

export function toast(message: string, type: ToastType = "info", options: ToastOptions = {}) {
  const { duration = 3000, position = "top" } = options

  // Create toast element
  const toastEl = document.createElement("div")
  toastEl.textContent = message
  toastEl.className = `fixed ${position === "top" ? "top-4" : "bottom-4"} right-4 z-[9999] px-4 py-3 rounded-lg shadow-lg text-sm font-medium animate-slide-in max-w-sm`
  
  // Apply type-specific styles
  if (type === "success") {
    toastEl.className += " bg-green-500 text-white"
  } else if (type === "error") {
    toastEl.className += " bg-red-500 text-white"
  } else {
    toastEl.className += " bg-blue-500 text-white"
  }

  document.body.appendChild(toastEl)

  // Auto-remove after duration
  setTimeout(() => {
    toastEl.style.opacity = "0"
    toastEl.style.transform = "translateX(100%)"
    toastEl.style.transition = "all 0.3s ease"
    setTimeout(() => toastEl.remove(), 300)
  }, duration)
}

toast.success = (message: string, options?: ToastOptions) => toast(message, "success", options)
toast.error = (message: string, options?: ToastOptions) => toast(message, "error", options)
toast.info = (message: string, options?: ToastOptions) => toast(message, "info", options)

export default function WhatsAppFAB() {
  const whatsappUrl =
    'https://wa.me/919035077840?text=' +
    encodeURIComponent('Hello Swink Tattoo Studio, I would like to chat about getting a tattoo.');

  return (
    <aside aria-label="Floating WhatsApp Contact">
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Swink Tattoo Studio on WhatsApp"
        className="fixed bottom-20 right-4 sm:right-6 md:bottom-8 md:right-8 z-40 group flex items-center gap-2.5 bg-[#25D366] text-white p-3.5 sm:p-4 rounded-full shadow-[0_6px_25px_rgba(37,211,102,0.45)] hover:shadow-[0_8px_35px_rgba(37,211,102,0.65)] hover:scale-105 active:scale-95 transition-all duration-300"
      >
        {/* Official WhatsApp SVG Icon */}
        <svg
          className="w-7 h-7 sm:w-8 sm:h-8 fill-current"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M17.507 14.307l-.009.075c-.239.98-1.074 1.777-2.079 1.986-.541.112-1.096.096-1.624-.047-1.121-.303-2.186-.874-3.136-1.681-.976-.828-1.782-1.849-2.38-2.996-.282-.54-.455-1.127-.512-1.733-.058-.62.067-1.246.36-1.788.358-.663.974-1.156 1.705-1.365.239-.068.49-.074.733-.016.241.057.458.188.625.378l1.085 1.233c.306.348.435.817.354 1.278-.08.461-.365.86-.777 1.086l-.41.226c.382.793.926 1.498 1.597 2.071.673.575 1.464.998 2.324 1.242l.379-.311c.365-.3.856-.413 1.32-.303.464.11.854.409 1.052.805l.634 1.27c.108.217.151.46.126.702zM12 2C6.477 2 2 6.477 2 12c0 1.892.524 3.662 1.433 5.177L2 22l4.982-1.402A9.957 9.957 0 0012 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18.182c-1.642 0-3.18-.475-4.48-1.298l-.322-.202-3.328.936.953-3.238-.21-.336A8.146 8.146 0 013.818 12C3.818 7.481 7.481 3.818 12 3.818c4.519 0 8.182 3.637 8.182 8.182 0 4.519-3.663 8.182-8.182 8.182z" />
        </svg>

        {/* Desktop Expandable Label */}
        <span className="hidden md:inline-block pr-1 font-semibold text-sm tracking-wide">
          Chat on WhatsApp
        </span>

        {/* Notification indicator */}
        <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-brand-gold"></span>
        </span>
      </a>
    </aside>
  );
}

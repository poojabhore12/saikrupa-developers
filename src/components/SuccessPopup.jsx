export default function SuccessPopup({ show }) {

  if (!show) return null;

  return (
    <div className="fixed top-6 right-6 bg-green-500 text-white px-6 py-3 rounded-lg shadow-lg z-50">
      Message ready! Opening WhatsApp...
    </div>
  );
}
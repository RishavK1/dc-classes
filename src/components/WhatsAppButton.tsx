import { MessageCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function WhatsAppButton() {
  const handleClick = () => {
    window.open('https://wa.me/919315111110?text=Hi, I want to know more about DC Classes', '_blank');
  };

  return (
    <Button
      onClick={handleClick}
      className="fixed bottom-24 md:bottom-6 right-6 z-40 w-14 h-14 rounded-full bg-[#25D366] hover:bg-[#20BA5A] text-white shadow-lg hover:shadow-xl transition-all"
      size="icon"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle className="h-6 w-6" />
    </Button>
  );
}

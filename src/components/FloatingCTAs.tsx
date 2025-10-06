import { Button } from '@/components/ui/button';
import { Phone, MessageCircle, FileText } from 'lucide-react';

export default function FloatingCTAs() {
  const handleCall = () => {
    window.location.href = 'tel:+919315111110';
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/919315111110?text=Hi, I want to know more about DC Classes', '_blank');
  };

  const handleEnquire = () => {
    // Scroll to lead form
    const form = document.querySelector('#lead-form');
    form?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white border-t shadow-lg">
      <div className="grid grid-cols-3 gap-2 p-2">
        <Button 
          onClick={handleCall}
          className="flex flex-col items-center py-3 h-auto"
          variant="outline"
        >
          <Phone className="h-5 w-5 mb-1" />
          <span className="text-xs">Call</span>
        </Button>
        
        <Button 
          onClick={handleWhatsApp}
          className="flex flex-col items-center py-3 h-auto bg-[#25D366] hover:bg-[#20BA5A] text-white"
        >
          <MessageCircle className="h-5 w-5 mb-1" />
          <span className="text-xs">WhatsApp</span>
        </Button>
        
        <Button 
          onClick={handleEnquire}
          className="flex flex-col items-center py-3 h-auto cta-button"
        >
          <FileText className="h-5 w-5 mb-1" />
          <span className="text-xs">Enquire</span>
        </Button>
      </div>
    </div>
  );
}

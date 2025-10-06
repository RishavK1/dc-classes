import { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';
import { Send } from 'lucide-react';

export default function LeadForm() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    course: '',
    center: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    toast.success('Thank you! Our counsellor will contact you soon.', {
      description: 'We typically respond within 2 hours during business hours.'
    });

    setFormData({
      name: '',
      phone: '',
      course: '',
      center: ''
    });
    
    setIsSubmitting(false);
  };

  return (
    <section className="section-padding bg-muted">
      <div className="container-custom">
        <div className="max-w-2xl mx-auto">
          <Card>
            <CardHeader className="text-center">
              <CardTitle className="text-3xl font-bold mb-2">
                Get Free Counselling
              </CardTitle>
              <CardDescription className="text-base">
                Share your details and our expert counsellor will guide you to the right course
              </CardDescription>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Label htmlFor="name">Full Name *</Label>
                  <Input
                    id="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                  />
                </div>

                <div>
                  <Label htmlFor="phone">Phone Number *</Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="10-digit mobile number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    required
                    pattern="[0-9]{10}"
                  />
                </div>

                <div>
                  <Label htmlFor="course">Interested Course *</Label>
                  <Select
                    value={formData.course}
                    onValueChange={(value) => setFormData({ ...formData, course: value })}
                    required
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select a course" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="cbse-6-10">CBSE VI-X</SelectItem>
                      <SelectItem value="cbse-11-12">CBSE XI-XII</SelectItem>
                      <SelectItem value="jee">JEE Main & Advanced</SelectItem>
                      <SelectItem value="neet">NEET</SelectItem>
                      <SelectItem value="nda">NDA</SelectItem>
                      <SelectItem value="ias">IAS/IPS</SelectItem>
                      <SelectItem value="clat">CLAT</SelectItem>
                      <SelectItem value="sat">SAT</SelectItem>
                      <SelectItem value="ielts">IELTS</SelectItem>
                      <SelectItem value="not-sure">Not Sure / Need Guidance</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <div>
                  <Label htmlFor="center">Preferred Center</Label>
                  <Select
                    value={formData.center}
                    onValueChange={(value) => setFormData({ ...formData, center: value })}
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select nearest center" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="karnal-main">Karnal Main Campus</SelectItem>
                      <SelectItem value="karnal-model-town">Karnal Model Town</SelectItem>
                      <SelectItem value="panipat">Panipat Center</SelectItem>
                      <SelectItem value="kurukshetra">Kurukshetra Center</SelectItem>
                      <SelectItem value="online">Online Classes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>

                <Button 
                  type="submit" 
                  className="w-full cta-button"
                  size="lg"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting...' : 'Submit & Get Call Back'}
                  {!isSubmitting && <Send className="ml-2 h-4 w-4" />}
                </Button>

                <p className="text-xs text-center text-muted-foreground">
                  By submitting, you agree to receive calls/messages from DC Classes
                </p>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}

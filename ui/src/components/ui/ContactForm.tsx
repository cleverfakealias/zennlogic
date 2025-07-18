import React from 'react';
import ReCAPTCHA from 'react-google-recaptcha';
import {
  Box,
  TextField,
  Button,
  Typography,
  Alert,
} from '@mui/material';

interface ContactFormProps {
  onSubmit?: (data: { name: string; email: string; message: string; captchaToken: string | null }) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ onSubmit }) => {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    message: ''
  });
  const [captchaToken, setCaptchaToken] = React.useState<string | null>(null);
  const [showCaptchaError, setShowCaptchaError] = React.useState(false);
  const recaptchaRef = React.useRef<ReCAPTCHA>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!captchaToken) {
      setShowCaptchaError(true);
      return;
    }

    if (onSubmit) {
      onSubmit({ ...formData, captchaToken });
    }
    
    // Reset form
    setFormData({ name: '', email: '', message: '' });
    setCaptchaToken(null);
    setShowCaptchaError(false);
    if (recaptchaRef.current) {
      recaptchaRef.current.reset();
    }
  };

  const handleCaptchaChange = (token: string | null) => {
    setCaptchaToken(token);
    if (token) {
      setShowCaptchaError(false);
    }
  };

  const handleChange = (field: string) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({
      ...prev,
      [field]: e.target.value
    }));
  };

  return (
    <Box sx={{ mt: 4, mb: 8 }}>
      <Typography variant="h5" component="h2" gutterBottom>
        Send a Message
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ mt: 2 }}>
        <TextField
          fullWidth
          label="Name"
          value={formData.name}
          onChange={handleChange('name')}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Email"
          type="email"
          value={formData.email}
          onChange={handleChange('email')}
          margin="normal"
          required
        />
        <TextField
          fullWidth
          label="Message"
          multiline
          rows={4}
          value={formData.message}
          onChange={handleChange('message')}
          margin="normal"
          required
        />
        
        {/* reCAPTCHA */}
        <Box sx={{ mt: 3, mb: 2 }}>
          <ReCAPTCHA
            ref={recaptchaRef}
            sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"} // Test key
            onChange={handleCaptchaChange}
            theme="light"
          />
          {showCaptchaError && (
            <Alert severity="error" sx={{ mt: 1 }}>
              Please complete the reCAPTCHA verification.
            </Alert>
          )}
        </Box>

        <Button
          type="submit"
          variant="contained"
          sx={{ mt: 2 }}
          fullWidth
        >
          Send Message
        </Button>
      </Box>
    </Box>
  );
};

export default ContactForm;
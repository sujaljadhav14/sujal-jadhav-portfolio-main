# Contact Form Backend Setup Guide

## Option 1: EmailJS (Recommended - Best Control & Reliability)

### Step 1: Install EmailJS
```bash
npm install @emailjs/browser
```

### Step 2: Create EmailJS Account
1. Go to [emailjs.com](https://emailjs.com)
2. Sign up for a free account
3. Set up an email service (Gmail, Outlook, etc.)
4. Create an email template
5. Get your service ID, template ID, and public key

### Step 3: Create EmailJS Configuration
Create a new file: `src/config/emailjs.js`

```javascript
export const emailjsConfig = {
  serviceId: 'YOUR_SERVICE_ID',
  templateId: 'YOUR_TEMPLATE_ID',
  publicKey: 'YOUR_PUBLIC_KEY'
};
```

### Step 4: Update Contact Component for EmailJS
The Contact component is already configured for EmailJS. Just update the configuration file with your credentials.

## Option 2: Netlify Forms (For Netlify Deployment)

### Step 1: Update Contact Component
Add `data-netlify="true"` to your form:

```javascript
<form onSubmit={handleSubmit} data-netlify="true" className="space-y-6">
  {/* Add hidden input for Netlify */}
  <input type="hidden" name="form-name" value="contact" />
  {/* ... rest of form fields */}
</form>
```

### Step 2: Deploy to Netlify
1. Push your code to GitHub
2. Connect your repository to Netlify
3. Forms will be automatically detected and handled

## Option 3: Custom Backend API

### Step 1: Create Backend API
Create a simple Express.js backend or use any backend framework of your choice.

### Step 2: Update Contact Component
Replace the form submission with your API endpoint:

```javascript
const handleSubmit = async (e) => {
  e.preventDefault();
  setIsSubmitting(true);
  
  try {
    const response = await fetch('/api/contact', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });
    
    if (response.ok) {
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } else {
      setSubmitStatus('error');
    }
  } catch (error) {
    setSubmitStatus('error');
  } finally {
    setIsSubmitting(false);
    setTimeout(() => setSubmitStatus(null), 5000);
  }
};
```

## Testing Your Setup

1. **EmailJS**: Check your email after form submission
2. **Netlify**: Check Netlify dashboard for form submissions
3. **Custom API**: Check your backend logs

## Troubleshooting

### Common Issues:
1. **CORS errors**: Make sure your backend allows requests from your frontend domain
2. **Form not submitting**: Check browser console for errors
3. **Emails not received**: Check spam folder and service configuration

### Debug Mode:
Add console logs to debug form submission:

```javascript
console.log('Form data:', formData);
console.log('Submission result:', result);
```

## Security Considerations

1. **Rate limiting**: Implement rate limiting to prevent spam
2. **Validation**: Always validate data on both frontend and backend
3. **CAPTCHA**: Consider adding reCAPTCHA for additional protection
4. **HTTPS**: Always use HTTPS in production

## Next Steps

1. Choose your preferred backend solution
2. Follow the setup instructions
3. Test the form thoroughly
4. Deploy and test in production
5. Monitor form submissions and spam 
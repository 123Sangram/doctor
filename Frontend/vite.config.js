import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    //इसका उद्देश्य आपके React Application के लिए लोकल सर्वर चलाना और कस्टम सेटिंग्स लागू करना है।
    //डिफ़ॉल्ट पोर्ट: Vite का डिफ़ॉल्ट पोर्ट 5173 होता है।
 // कस्टम पोर्ट: port: 3000 से हम चाहते हैं कि हमारा ऐप http://localhost:3000 पर चले।
  }
})

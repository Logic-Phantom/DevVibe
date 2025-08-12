'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Download, X, Smartphone } from 'lucide-react';

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: 'accepted' | 'dismissed';
    platform: string;
  }>;
  prompt(): Promise<void>;
}

const PWAInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showPrompt, setShowPrompt] = useState(false);
  const [isInstalled, setIsInstalled] = useState(false);
  const [hasShownPrompt, setHasShownPrompt] = useState(false);

  useEffect(() => {
    // Check if app is already installed
    const checkIfInstalled = () => {
      if (window.matchMedia('(display-mode: standalone)').matches || 
          (window.navigator as any).standalone === true) {
        setIsInstalled(true);
        return true;
      }
      return false;
    };

    // Check immediately
    if (checkIfInstalled()) return;

    // Listen for beforeinstallprompt event
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      console.log('PWA install prompt triggered');
      setDeferredPrompt(e as BeforeInstallPromptEvent);
      
      // Show prompt after a delay to not interrupt user experience
      setTimeout(() => {
        if (!hasShownPrompt && !isInstalled) {
          setShowPrompt(true);
          setHasShownPrompt(true);
        }
      }, 3000);
    };

    // Listen for appinstalled event
    const handleAppInstalled = () => {
      console.log('PWA installed successfully');
      setIsInstalled(true);
      setShowPrompt(false);
      setDeferredPrompt(null);
    };

    // Check periodically for standalone mode
    const interval = setInterval(checkIfInstalled, 1000);

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    window.addEventListener('appinstalled', handleAppInstalled);

    // Show manual install prompt if conditions are met
    const showManualPrompt = () => {
      if (!isInstalled && !hasShownPrompt && !showPrompt) {
        // Check if PWA criteria are met
        const hasManifest = !!document.querySelector('link[rel="manifest"]');
        const hasServiceWorker = 'serviceWorker' in navigator;
        
        if (hasManifest && hasServiceWorker) {
          setTimeout(() => {
            setShowPrompt(true);
            setHasShownPrompt(true);
          }, 5000);
        }
      }
    };

    // Show manual prompt after delay
    const manualPromptTimer = setTimeout(showManualPrompt, 8000);

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
      window.removeEventListener('appinstalled', handleAppInstalled);
      clearInterval(interval);
      clearTimeout(manualPromptTimer);
    };
  }, [isInstalled, hasShownPrompt, showPrompt]);

  const handleInstallClick = async () => {
    if (!deferredPrompt) {
      // Fallback: show instructions
      alert('PWA 설치를 위해 브라우저 주소창 옆의 설치 아이콘을 클릭하거나, 브라우저 메뉴에서 "홈 화면에 추가"를 선택하세요.');
      setShowPrompt(false);
      return;
    }

    try {
      deferredPrompt.prompt();
      const { outcome } = await deferredPrompt.userChoice;
      
      if (outcome === 'accepted') {
        console.log('User accepted the install prompt');
      } else {
        console.log('User dismissed the install prompt');
      }
    } catch (error) {
      console.error('Error during PWA install:', error);
    }
    
    setDeferredPrompt(null);
    setShowPrompt(false);
  };

  const handleDismiss = () => {
    setShowPrompt(false);
  };

  if (isInstalled || !showPrompt) return null;

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0, y: 100, scale: 0.8 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        exit={{ opacity: 0, y: 100, scale: 0.8 }}
        transition={{ duration: 0.3, type: "spring" }}
        className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-50"
      >
        <div className="bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl shadow-2xl p-6 max-w-sm mx-4">
          <div className="flex items-start space-x-4">
            <div className="flex-shrink-0">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-purple-600 rounded-xl flex items-center justify-center">
                <Smartphone size={24} className="text-white" />
              </div>
            </div>
            
            <div className="flex-1 min-w-0">
              <h3 className="text-lg font-semibold text-gray-900 mb-1">
                앱으로 설치
              </h3>
              <p className="text-sm text-gray-600 mb-4">
                Forest_LIM 포트폴리오를 홈 화면에 추가하여 더 빠르게 접근하세요.
              </p>
              
              <div className="flex space-x-3">
                <motion.button
                  onClick={handleInstallClick}
                  className="flex-1 bg-gradient-to-r from-blue-500 to-purple-600 text-white px-4 py-2 rounded-xl font-medium text-sm hover:shadow-lg transition-all duration-300 flex items-center justify-center space-x-2"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <Download size={16} />
                  <span>설치</span>
                </motion.button>
                
                <motion.button
                  onClick={handleDismiss}
                  className="px-4 py-2 text-gray-500 hover:text-gray-700 hover:bg-gray-100 rounded-xl transition-all duration-300"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <X size={16} />
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default PWAInstallPrompt;

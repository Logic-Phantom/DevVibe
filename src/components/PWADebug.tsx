'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Info, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const PWADebug = () => {
  const [pwaStatus, setPwaStatus] = useState({
    hasManifest: false,
    hasServiceWorker: false,
    isInstalled: false,
    canInstall: false,
    serviceWorkerRegistered: false
  });

  useEffect(() => {
    const checkPWAStatus = () => {
      const status = {
        hasManifest: !!document.querySelector('link[rel="manifest"]'),
        hasServiceWorker: 'serviceWorker' in navigator,
        isInstalled: window.matchMedia('(display-mode: standalone)').matches || 
                    (window.navigator as any).standalone === true,
        canInstall: false,
        serviceWorkerRegistered: false
      };

      // Check service worker registration
      if (status.hasServiceWorker) {
        navigator.serviceWorker.getRegistrations().then((registrations) => {
          status.serviceWorkerRegistered = registrations.length > 0;
          setPwaStatus({ ...status });
        });
      }

      // Check if can install
      if ('serviceWorker' in navigator && status.hasManifest) {
        status.canInstall = true;
      }

      setPwaStatus(status);
    };

    checkPWAStatus();
    
    // Check periodically
    const interval = setInterval(checkPWAStatus, 2000);
    
    return () => clearInterval(interval);
  }, []);

  const getStatusIcon = (status: boolean) => {
    return status ? (
      <CheckCircle size={16} className="text-green-500" />
    ) : (
      <XCircle size={16} className="text-red-500" />
    );
  };

  const getStatusText = (status: boolean) => {
    return status ? '정상' : '문제 있음';
  };

  // Only show in development or when there are issues
  if (process.env.NODE_ENV === 'production' && 
      pwaStatus.hasManifest && 
      pwaStatus.hasServiceWorker && 
      pwaStatus.serviceWorkerRegistered) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed top-20 right-4 bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-xl shadow-lg p-4 max-w-xs z-40"
    >
      <div className="flex items-center space-x-2 mb-3">
        <Info size={16} className="text-blue-500" />
        <h3 className="text-sm font-semibold text-gray-900">PWA 상태</h3>
      </div>
      
      <div className="space-y-2 text-xs">
        <div className="flex items-center justify-between">
          <span className="text-gray-600">매니페스트</span>
          <div className="flex items-center space-x-2">
            {getStatusIcon(pwaStatus.hasManifest)}
            <span className={pwaStatus.hasManifest ? 'text-green-600' : 'text-red-600'}>
              {getStatusText(pwaStatus.hasManifest)}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-600">서비스 워커</span>
          <div className="flex items-center space-x-2">
            {getStatusIcon(pwaStatus.hasServiceWorker)}
            <span className={pwaStatus.hasServiceWorker ? 'text-green-600' : 'text-red-600'}>
              {getStatusText(pwaStatus.hasServiceWorker)}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-600">SW 등록</span>
          <div className="flex items-center space-x-2">
            {getStatusIcon(pwaStatus.serviceWorkerRegistered)}
            <span className={pwaStatus.serviceWorkerRegistered ? 'text-green-600' : 'text-red-600'}>
              {getStatusText(pwaStatus.serviceWorkerRegistered)}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-600">설치 가능</span>
          <div className="flex items-center space-x-2">
            {getStatusIcon(pwaStatus.canInstall)}
            <span className={pwaStatus.canInstall ? 'text-green-600' : 'text-red-600'}>
              {getStatusText(pwaStatus.canInstall)}
            </span>
          </div>
        </div>
        
        <div className="flex items-center justify-between">
          <span className="text-gray-600">설치됨</span>
          <div className="flex items-center space-x-2">
            {getStatusIcon(pwaStatus.isInstalled)}
            <span className={pwaStatus.isInstalled ? 'text-green-600' : 'text-red-600'}>
              {pwaStatus.isInstalled ? '설치됨' : '설치 안됨'}
            </span>
          </div>
        </div>
      </div>
      
      {!pwaStatus.hasManifest && (
        <div className="mt-3 p-2 bg-red-50 border border-red-200 rounded-lg">
          <p className="text-xs text-red-600">
            매니페스트 파일이 없습니다. public/manifest.json을 확인하세요.
          </p>
        </div>
      )}
      
      {!pwaStatus.serviceWorkerRegistered && pwaStatus.hasServiceWorker && (
        <div className="mt-3 p-2 bg-yellow-50 border border-yellow-200 rounded-lg">
          <p className="text-xs text-yellow-600">
            서비스 워커가 등록되지 않았습니다. public/sw.js를 확인하세요.
          </p>
        </div>
      )}
    </motion.div>
  );
};

export default PWADebug;

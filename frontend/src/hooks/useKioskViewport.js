import { useEffect } from 'react';

const BASE_WIDTH = 1920;
const BASE_HEIGHT = 1080;
const MIN_SCALE = 0.45;
const MAX_SCALE = 2;

const clamp = (value, minimum, maximum) => Math.min(Math.max(value, minimum), maximum);

export default function useKioskViewport() {
  useEffect(() => {
    const root = document.documentElement;
    const viewport = window.visualViewport;

    const getBaseDimension = (variableName, fallback) => {
      const rawValue = getComputedStyle(root).getPropertyValue(variableName).trim();
      const parsedValue = Number.parseFloat(rawValue);
      return Number.isFinite(parsedValue) && parsedValue > 0 ? parsedValue : fallback;
    };

    const updateViewport = () => {
      const width = viewport?.width || window.innerWidth;
      const height = viewport?.height || window.innerHeight;
      const baseWidth = getBaseDimension('--kiosk-base-width', BASE_WIDTH);
      const baseHeight = getBaseDimension('--kiosk-base-height', BASE_HEIGHT);
      const rawScale = Math.min(width / baseWidth, height / baseHeight);
      const scale = clamp(rawScale || 1, MIN_SCALE, MAX_SCALE);

      const offsetX = Math.max(0, (width - baseWidth * scale) / 2);
      const offsetY = Math.max(0, (height - baseHeight * scale) / 2);
      const orientation = width >= height ? 'landscape' : 'portrait';

      root.style.setProperty('--kiosk-scale', `${scale}`);
      root.style.setProperty('--kiosk-offset-x', `${offsetX}px`);
      root.style.setProperty('--kiosk-offset-y', `${offsetY}px`);
      root.style.setProperty('--viewport-width', `${width}px`);
      root.style.setProperty('--viewport-height', `${height}px`);
      root.style.setProperty('--kiosk-orientation', orientation);
      root.dataset.kioskOrientation = orientation;
    };

    updateViewport();
    window.addEventListener('resize', updateViewport);
    window.addEventListener('orientationchange', updateViewport);
    viewport?.addEventListener('resize', updateViewport);

    return () => {
      window.removeEventListener('resize', updateViewport);
      window.removeEventListener('orientationchange', updateViewport);
      viewport?.removeEventListener('resize', updateViewport);
    };
  }, []);
}

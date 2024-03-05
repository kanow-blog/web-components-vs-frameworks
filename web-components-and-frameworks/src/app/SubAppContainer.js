'use client';

import {useCallback, useRef, useState} from 'react';
import { useSubAppInjector } from '@/app/useSubAppInjector';

export function SubAppContainer() {
  const containerRef = useRef(null);
  const subAppInstance = useRef(null);
  const [isAppInjected, setIsAppInjected] = useState(false);
  const [appModuleLoading, SubApp] = useSubAppInjector();
  const onAppClose = useCallback(() => {
    if (containerRef === null || subAppInstance.current === null) {
      return void 0;
    }
    subAppInstance.current.remove();
    subAppInstance.current = null;
    setIsAppInjected(() => false);
  }, [containerRef, subAppInstance]);
  const onSubAppInject = useCallback(() => {
    if (appModuleLoading || containerRef.current === null || SubApp === null) {
      return void 0;
    }
    const subApp = new SubApp(containerRef.current, onAppClose);
    subAppInstance.current = subApp;
    subAppInstance.current.mount();
    setIsAppInjected(() => true);
  }, [appModuleLoading, containerRef.current]);
  return (
    <section>
      <h2>Sub app Container</h2>
      {isAppInjected === false && <button onClick={onSubAppInject}>Inject sub app</button>}
      <div
        style={{ border: '1rem solid red', width: '800px', height: '600px' }}
        ref={containerRef}
      ></div>
    </section>
  );
}

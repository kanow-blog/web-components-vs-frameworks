import {useEffect, useState} from 'react';

export function useSubAppInjector() {
  const [appModule, setAppModule] = useState([true, null]);
  useEffect(() => {
    import('../app-service/SubAppWrapper')
      .then((module) => {
        setAppModule(() => [false, module.SubAppWrapper]);
        console.info('SubApp module loaded');
      })
      .catch((e) => {
        setAppModule(() => [false, null]);
        console.error('Error occurred while loading external module.\n', e);
      });
  }, []);
  return appModule;
}

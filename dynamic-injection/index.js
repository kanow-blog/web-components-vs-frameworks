let appModule = null;

const appContainer = document.querySelector('#container');
const injectAppBtn = document.querySelector('#inject-app');

const appLoader = document.createElement('h3');
appLoader.style.color = 'red';
appLoader.textContent = `-------------- Loading app... --------------`;

function wait(ms) {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

const onAppClose = () => {
  appContainer.childNodes.forEach((node) => node.remove());
  injectAppBtn.disabled = false;
  appContainer.append(injectAppBtn);
};

const importAppModule = async () => {
  appContainer.append(appLoader);
  await wait(2000);
  let module = null;
  try {
    module = await import('./KKApplication.js');
  } catch (_e) {
    console.log(`Couldn't load app`);
  } finally {
    appLoader.remove();
  }
  return module.KKApplication;
};

const injectApp = () => {
  injectAppBtn.remove();
  const appToInject = new appModule();
  appToInject.setOnAppCloseCallback(onAppClose);
  appToInject.setExternalCallback(() => {
    alert('Callback passed as parameter');
  });
  appContainer.append(appToInject);
};

injectAppBtn.addEventListener('click', async () => {
  injectAppBtn.disabled = true;
  if (appModule === null) {
    appModule = await importAppModule();
  }
  injectApp();
  injectAppBtn.disabled = false;
});

import { internalFunction } from '@/app-service/helpers';

export function SubApp({ onAppClose }) {
  return (
    <section>
      <h2>Sub app</h2>
          <button style={{padding: '2px', margin: '8px'}} onClick={onAppClose}>Close app</button>
          <button style={{padding: '2px', margin: '8px'}} onClick={internalFunction}>Call internal API</button>
    </section>
  );
}

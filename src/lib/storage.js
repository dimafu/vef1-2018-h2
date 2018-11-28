/**
 * Sækir og vistar í localStorage
 */

// Fast sem skilgreinir heiti á lykli sem vistað er undir í localStorage
const LOCALSTORAGE_KEY = 'assess_status';

/**
 * Sækir gögn úr localStorage. Skilað sem röðuðum lista á forminu:
 * { finished: <status>, name: <nafn> }
 *
 * @returns {array} Raðað fylki af svörum eða tóma fylkið ef ekkert vistað.
 */
export function load() {
  const statusJson = localStorage.getItem(LOCALSTORAGE_KEY);
  const status = JSON.parse(statusJson) || [];
  console.log(status);
}

/**
 * Vista status
 *
 * @param {string} slug Nafn þess sem á að vista
 * @param {boolean} finished status sem á að vista
 */
export function save(slug, finished) {
  const status = load();

  status.push({ slug, finished });
  localStorage.setItem(LOCALSTORAGE_KEY, JSON.stringify(status));
}

/**
 * Hreinsa öll status úr localStorage
 */
export function clear() {
  localStorage.removeItem(LOCALSTORAGE_KEY);
}
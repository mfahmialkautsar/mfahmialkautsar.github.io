/**
 *
 * @param {number} timeout
 * @returns {Promise<void>}
 */
function sleep(timeout) {
  return new Promise(
    /** @param {() => void} resolve */
    (resolve) => {
      setTimeout(resolve, timeout);
    }
  );
}

export { sleep };

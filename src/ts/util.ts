function sleep(timeout: number) {
  return new Promise<void>((resolve, reject) => {
    setTimeout(resolve, timeout);
  });
}

export {sleep};

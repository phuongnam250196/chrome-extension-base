export function save(key: string, value: any) {
  chrome.storage.sync.set({ [key]: value })
}

export function load(key: string): Promise<any> {
  return new Promise((resolve) => {
    chrome.storage.sync.get([key], (res: { [x: string]: any }) => resolve(res[key]))
  })
}

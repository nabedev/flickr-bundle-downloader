// eslint-disable-next-line import/prefer-default-export
export const fetchResponseText = async (
  url: string,
  signal: AbortSignal
): Promise<string> => {
  if (signal.aborted) {
    throw new DOMException('The user aborted a request.', 'AbortError')
  }

  const response = await fetch(url, { signal })
  return response.text()
}

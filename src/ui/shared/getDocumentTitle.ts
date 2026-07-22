export function getDocumentTitle(pageTitle?: string | null) {
  if (!pageTitle) {
    return 'Chog';
  }
  return `Chog · ${pageTitle}`;
}

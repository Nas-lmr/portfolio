export async function checkLinkAvailability(
  url: string,
  fallbackURL: string
): Promise<string> {
  try {
    const response = await fetch(url, {
      method: "HEAD",
    });

    return response.ok ? url : fallbackURL;
  } catch (error) {
    console.error(`Erreur lors de la vérification du lien: ${url}`, error);
    return fallbackURL;
  }
}

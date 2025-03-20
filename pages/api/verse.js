export default function handler(req, res) {
  const { surah, verse } = req.query;
  if (!surah || !verse) {
    res.status(400).json({ error: 'Missing surah or verse parameter' });
    return;
  }

  // Dummy data; replace with actual data retrieval logic
  const arabic = `Arabic text for ${surah} verse ${verse}`;
  const transliteration = `Transliteration for ${surah} verse ${verse}`;

  res.status(200).json({ arabic, transliteration });
} 
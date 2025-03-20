import path from 'path';
import fs from 'fs';

export default async function handler(req, res) {
  if (req.method !== 'GET') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    // Read the Quran.json file
    let filePath = path.join(process.cwd(), 'quran.json');
    if (!fs.existsSync(filePath)) {
      filePath = path.join(process.cwd(), 'public', 'quran.json');
    }
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const quranData = JSON.parse(fileContents);

    // Transform the data to match our API structure
    const transformedData = Object.entries(quranData).reduce((acc, [surahKey, surahData]) => {
      let surahNumber, surahName;
      if (surahKey.includes('. ')) {
        [surahNumber, surahName] = surahKey.split('. ');
      } else {
        surahNumber = surahKey;
        surahName = surahKey;
      }

      acc[surahNumber] = {
        name: surahName,
        verses: Object.entries(surahData).reduce((versesAcc, [verseNumber, verseData]) => {
          versesAcc[verseNumber] = {
            translation: (verseData.Translation || '').trim()
          };
          return versesAcc;
        }, {})
      };
      return acc;
    }, {});

    // Set CORS headers
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET');
    res.setHeader('Content-Type', 'application/json');

    return res.status(200).json({
      success: true,
      data: transformedData
    });
  } catch (error) {
    console.error('Error loading Quran data:', error);
    return res.status(500).json({
      success: false,
      error: 'Failed to load Quran data'
    });
  }
} 
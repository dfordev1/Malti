import React from 'react';

function Footer() {
  return (
    <footer className="footer">
      <small>
        <p>
          © 2024 Il-Quran bil-Malti <br />
          Maltese Translation of Quran<br />
          Il-Qoran Imqaddes <br />
          Published by World Islamic Call Society, Tripoli - Libya
        </p>
      </small>
      <div>
        <a
          href="https://www.instagram.com/malta_islam/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 10px', textDecoration: 'none', color: '#333', fontWeight: 'bold' }}
        >
          Instagram
        </a>
        |
        <a
          href="https://x.com/MaltaIslam"
          target="_blank"
          rel="noopener noreferrer"
          style={{ margin: '0 10px', textDecoration: 'none', color: '#333', fontWeight: 'bold' }}
        >
          X
        </a>
      </div>
      <div>
        <a href="https://maltaislam.netlify.app" style={{ fontWeight: 'bold' }}>
          Skopri l-Iżlam (Website)
        </a>
        <br />
        <a href="/Skopri%20l-Islam.pdf" download>
          Skopri l-Iżlam (Book)
        </a>
      </div>
    </footer>
  );
}

export default Footer; 
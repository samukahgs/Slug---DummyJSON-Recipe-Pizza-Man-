import Link from 'next/link';
import './footerstyle.css';

export default function FooterCOMP() {
  return (
    <footer>
          <ul className="lista">
            <div className="icone">
              <img src="./imagens/instagrampng.png" width="24px"/>
              <li>Instagram </li>
            </div>
            <div className="icone">
              <img src="./imagens/facebookpng.png" width="24px"/>
              <li>Facebook</li>
            </div>
          </ul>
        </footer>
  );
}
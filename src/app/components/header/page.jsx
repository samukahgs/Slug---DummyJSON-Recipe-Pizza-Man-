import Link from 'next/link';
import './headerstyle.css';

export default function HeaderCOMP() {
  return (
    <header>
      <div className="headertotal">
        <div className="headera">
          <div>
            <img src="/imagens/logosfundo.png" className="imagem" width={100} alt="Logo" />
            </div>
        </div>
      </div>
    </header>
  );
}
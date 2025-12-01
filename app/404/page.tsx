'use client'

import Link from 'next/link'
import { Button } from '../components/ui/button'

export default function NotFoundPage() {
  return (
    <div className="p-10 relative z-10 page-content text-center">
      <h1 className="text-6xl font-serif mb-4 text-gold">404</h1>
      <h2 className="text-2xl font-serif mb-6">Seite nicht gefunden</h2>
      <p className="opacity-80 mb-8">
        Die gesuchte Seite existiert nicht oder der Zugriff ist nicht autorisiert.
      </p>
      <Link href="/">
        <Button variant="primary">Zurück zur Startseite</Button>
      </Link>
    </div>
  );
}
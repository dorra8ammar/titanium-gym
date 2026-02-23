import { activitesData } from '@/lib/data/activites'
import { notFound } from 'next/navigation'
import Image from 'next/image'
import Link from 'next/link'
import Breadcrumb from '@/components/ui/Breadcrumb'

interface Props {
  params: {
    slug: string
  }
}

export default function ActiviteDetailPage({ params }: Props) {
  const activite = activitesData[params.slug]
  
  if (!activite) {
    notFound()
  }

  return (
    <div className="container mx-auto px-4 sm:px-10 max-w-[1300px]">
      <Breadcrumb 
        items={[
          { label: 'Accueil', href: '/' },
          { label: 'Activités', href: '/activites' },
          { label: activite.categorie, href: `/activites?categorie=${activite.categorie.toLowerCase()}` },
          { label: activite.titre, active: true }
        ]} 
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 py-12">
        {/* Image */}
        <div className="rounded-2xl overflow-hidden border border-border-subtle h-[450px]">
          <Image 
            src={activite.image} 
            alt={activite.titre}
            width={800}
            height={600}
            className="w-full h-full object-cover"
          />
        </div>

        {/* Contenu */}
        <div>
          <div className="text-gold text-xs uppercase tracking-widest mb-4">{activite.categorie}</div>
          <h1 className="text-4xl font-semibold text-white mb-6">{activite.titre}</h1>

          {/* Meta infos */}
          <div className="grid grid-cols-2 gap-6 bg-black-card p-6 rounded-xl border border-border-subtle mb-8">
            <div className="flex items-center gap-4">
              <i className="fas fa-clock text-gold text-xl w-8"></i>
              <div>
                <div className="text-text-darkgray text-xs uppercase">Durée</div>
                <div className="text-white">{activite.duree}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <i className="fas fa-dumbbell text-gold text-xl w-8"></i>
              <div>
                <div className="text-text-darkgray text-xs uppercase">Matériel</div>
                <div className="text-white">{activite.materiel}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <i className="fas fa-chart-line text-gold text-xl w-8"></i>
              <div>
                <div className="text-text-darkgray text-xs uppercase">Intensité</div>
                <div className="text-white">{activite.intensite}</div>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <i className="fas fa-users text-gold text-xl w-8"></i>
              <div>
                <div className="text-text-darkgray text-xs uppercase">Pour qui ?</div>
                <div className="text-white">{activite.pourqui}</div>
              </div>
            </div>
          </div>

          {/* Description */}
          <div className="mb-6">
            <h3 className="text-gold text-lg font-medium mb-3">DESCRIPTION</h3>
            <p className="text-text-gray text-sm leading-relaxed">{activite.description}</p>
          </div>

          {/* Bienfaits */}
          <div className="mb-6">
            <h3 className="text-gold text-lg font-medium mb-3">BIENFAITS</h3>
            <ul className="space-y-2">
              {activite.bienfaits.map((bienfait, index) => (
                <li key={index} className="flex items-center gap-3 text-text-gray text-sm">
                  <i className="fas fa-check-circle text-gold text-sm"></i>
                  {bienfait}
                </li>
              ))}
            </ul>
          </div>

          {/* Recommandations */}
          <div className="mb-6">
            <h3 className="text-gold text-lg font-medium mb-3">RECOMMANDATIONS</h3>
            <p className="text-text-gray text-sm leading-relaxed">{activite.recommandations}</p>
          </div>

          <Link 
            href="/activites"
            className="inline-flex items-center gap-2 text-gold text-xs uppercase tracking-wider border-b border-gold-dim pb-1 hover:gap-3 transition-all"
          >
            <i className="fas fa-arrow-left"></i> RETOUR AUX ACTIVITÉS
          </Link>
        </div>
      </div>

      {/* Vous aimerez aussi */}
      {activite.aussi && activite.aussi.length > 0 && (
        <div className="py-12 border-t border-border-subtle">
          <h2 className="text-2xl font-medium text-white mb-8">VOUS AIMEREZ AUSSI...</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {activite.aussi.map(id => {
              const autre = activitesData[id]
              return autre ? (
                <div key={id} className="bg-black-card p-6 rounded-xl border border-border-subtle hover:border-border-gold-light transition-all">
                  <h4 className="text-gold text-lg font-medium mb-2">{autre.titre}</h4>
                  <p className="text-text-gray text-sm mb-4">{autre.categorie} • {autre.duree}</p>
                  <Link 
                    href={`/activites/${autre.id}`}
                    className="text-gold text-xs uppercase tracking-wider border-b border-gold-dim pb-1 hover:border-gold transition-all"
                  >
                    DÉCOUVRIR
                  </Link>
                </div>
              ) : null
            })}
          </div>
        </div>
      )}
    </div>
  )
}
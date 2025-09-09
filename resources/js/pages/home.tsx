import React from 'react';
import { Head, Link } from '@inertiajs/react';

interface News {
    id: number;
    title: string;
    excerpt: string;
    slug: string;
    category: string;
    image?: string;
    published_at: string;
    creator: {
        name: string;
    };
}

interface Gallery {
    id: number;
    title: string;
    image: string;
    category: string;
}

interface Facility {
    id: number;
    name: string;
    description: string;
    icon: string;
}

interface Extracurricular {
    id: number;
    name: string;
    description: string;
    category: string;
    current_members: number;
    max_members: number;
}

interface SchoolProfile {
    name: string;
    tagline: string;
    vision: string;
    mission: string;
}

interface Props {
    featured_news: News[];
    featured_gallery: Gallery[];
    facilities: Facility[];
    extracurriculars: Extracurricular[];
    school_profile: SchoolProfile;
    [key: string]: unknown;
}

const getIconForFacility = (iconName: string): string => {
    const iconMap: { [key: string]: string } = {
        'book-open': '📚',
        'computer-desktop': '💻',
        'building-office-2': '🏢',
        'trophy': '🏆',
        'beaker': '🧪',
        'tv': '📺',
        'language': '🗣️',
        'wrench-screwdriver': '🔧',
        'heart': '❤️',
        'building-library': '📚',
        'home': '🏠',
    };
    return iconMap[iconName] || '🏢';
};

const categoryColors: { [key: string]: string } = {
    berita: 'bg-blue-500',
    pengumuman: 'bg-red-500', 
    prestasi: 'bg-yellow-500',
    kegiatan: 'bg-green-500',
};

export default function Home({ 
    featured_news, 
    featured_gallery, 
    facilities, 
    extracurriculars, 
    school_profile 
}: Props) {
    return (
        <>
            <Head title={`${school_profile.name} - ${school_profile.tagline}`} />
            
            {/* Navigation */}
            <nav className="bg-black shadow-lg border-b border-yellow-500/20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex justify-between h-16">
                        <div className="flex items-center">
                            <Link href="/" className="flex items-center space-x-3">
                                <div className="w-10 h-10 bg-yellow-500 rounded-lg flex items-center justify-center">
                                    <span className="text-black font-bold text-xl">🎓</span>
                                </div>
                                <div>
                                    <div className="text-yellow-500 font-bold text-lg">SMKN 1 Majalengka</div>
                                </div>
                            </Link>
                        </div>
                        <div className="hidden md:flex items-center space-x-8">
                            <Link href="/" className="text-white hover:text-yellow-500 transition-colors">Beranda</Link>
                            <Link href="/profil" className="text-white hover:text-yellow-500 transition-colors">Profil</Link>
                            <Link href="/berita" className="text-white hover:text-yellow-500 transition-colors">Berita</Link>
                            <Link href="/galeri" className="text-white hover:text-yellow-500 transition-colors">Galeri</Link>
                            <Link href="/akademik" className="text-white hover:text-yellow-500 transition-colors">Akademik</Link>
                            <Link href="/ppdb" className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold transition-all transform hover:scale-105">PPDB 2024</Link>
                        </div>
                    </div>
                </div>
            </nav>

            {/* Hero Section */}
            <section className="relative bg-gradient-to-br from-black via-gray-900 to-blue-900 min-h-screen flex items-center">
                <div className="absolute inset-0 bg-black/60"></div>
                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="text-center">
                        <div className="inline-flex items-center bg-yellow-500/10 border border-yellow-500/20 rounded-full px-6 py-2 mb-8">
                            <span className="text-yellow-500 font-semibold">⭐ Sekolah Unggulan</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-7xl font-bold mb-6">
                            <span className="text-white">SMK Negeri 1</span>
                            <br />
                            <span className="text-yellow-500 bg-gradient-to-r from-yellow-400 to-yellow-500 bg-clip-text text-transparent">
                                Majalengka
                            </span>
                        </h1>
                        
                        <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto leading-relaxed">
                            {school_profile.tagline}
                        </p>
                        
                        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                            <Link 
                                href="/ppdb" 
                                className="group bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 hover:shadow-2xl hover:shadow-yellow-500/25 flex items-center"
                            >
                                📚 Daftar Sekarang
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                            <Link 
                                href="/profil" 
                                className="group border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center"
                            >
                                🏫 Tentang Kami
                                <span className="ml-2 group-hover:translate-x-1 transition-transform">→</span>
                            </Link>
                        </div>
                        
                        {/* Quick Stats */}
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 max-w-4xl mx-auto">
                            <div className="text-center p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10">
                                <div className="text-3xl font-bold text-yellow-500">8+</div>
                                <div className="text-gray-300 mt-1">Program Keahlian</div>
                            </div>
                            <div className="text-center p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10">
                                <div className="text-3xl font-bold text-yellow-500">1200+</div>
                                <div className="text-gray-300 mt-1">Siswa Aktif</div>
                            </div>
                            <div className="text-center p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10">
                                <div className="text-3xl font-bold text-yellow-500">80+</div>
                                <div className="text-gray-300 mt-1">Tenaga Pendidik</div>
                            </div>
                            <div className="text-center p-6 bg-white/5 backdrop-blur rounded-xl border border-white/10">
                                <div className="text-3xl font-bold text-yellow-500">25+</div>
                                <div className="text-gray-300 mt-1">Tahun Berpengalaman</div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Featured News */}
            {featured_news.length > 0 && (
                <section className="bg-gray-900 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white mb-4">
                                📰 Berita & <span className="text-yellow-500">Pengumuman</span>
                            </h2>
                            <p className="text-gray-400 text-xl">Informasi terkini dari SMKN 1 Majalengka</p>
                        </div>
                        
                        <div className="grid md:grid-cols-3 gap-8 mb-12">
                            {featured_news.map((news) => (
                                <Link key={news.id} href={`/berita/${news.slug}`}>
                                    <div className="group bg-white/5 backdrop-blur rounded-xl overflow-hidden border border-white/10 hover:border-yellow-500/50 transition-all hover:shadow-2xl hover:shadow-yellow-500/10 transform hover:-translate-y-2">
                                        {news.image && (
                                            <div className="h-48 bg-gradient-to-br from-yellow-500/20 to-blue-600/20 flex items-center justify-center">
                                                <span className="text-6xl">📰</span>
                                            </div>
                                        )}
                                        <div className="p-6">
                                            <div className="flex items-center mb-3">
                                                <span className={`${categoryColors[news.category] || 'bg-gray-500'} text-white text-xs px-2 py-1 rounded-full`}>
                                                    {news.category.toUpperCase()}
                                                </span>
                                                <span className="text-gray-400 text-sm ml-3">
                                                    {new Date(news.published_at).toLocaleDateString('id-ID')}
                                                </span>
                                            </div>
                                            <h3 className="text-white font-bold text-lg mb-2 group-hover:text-yellow-500 transition-colors line-clamp-2">
                                                {news.title}
                                            </h3>
                                            <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                                                {news.excerpt}
                                            </p>
                                            <div className="flex items-center text-yellow-500 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                                                Baca Selengkapnya <span className="ml-1">→</span>
                                            </div>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        
                        <div className="text-center">
                            <Link 
                                href="/berita" 
                                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                            >
                                Lihat Semua Berita
                                <span className="ml-2">→</span>
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* Facilities */}
            {facilities.length > 0 && (
                <section className="bg-black py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white mb-4">
                                🏢 Fasilitas <span className="text-yellow-500">Unggulan</span>
                            </h2>
                            <p className="text-gray-400 text-xl">Sarana dan prasarana terbaik untuk mendukung pembelajaran</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {facilities.map((facility) => (
                                <div key={facility.id} className="group bg-white/5 backdrop-blur p-6 rounded-xl border border-white/10 hover:border-yellow-500/50 transition-all hover:bg-white/10 text-center">
                                    <div className="bg-yellow-500/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500/30 transition-colors">
                                        <span className="text-2xl">{getIconForFacility(facility.icon)}</span>
                                    </div>
                                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-yellow-500 transition-colors">
                                        {facility.name}
                                    </h3>
                                    <p className="text-gray-400 text-sm leading-relaxed">
                                        {facility.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                        
                        <div className="text-center mt-12">
                            <Link 
                                href="/fasilitas" 
                                className="inline-flex items-center border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-6 py-3 rounded-lg font-semibold transition-all"
                            >
                                Lihat Semua Fasilitas
                                <span className="ml-2">→</span>
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* Extracurriculars */}
            {extracurriculars.length > 0 && (
                <section className="bg-gray-900 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white mb-4">
                                🎯 Ekstrakurikuler <span className="text-yellow-500">Pilihan</span>
                            </h2>
                            <p className="text-gray-400 text-xl">Kembangkan bakat dan minat di luar jam pelajaran</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {extracurriculars.map((ekskul) => (
                                <div key={ekskul.id} className="group bg-white/5 backdrop-blur p-6 rounded-xl border border-white/10 hover:border-yellow-500/50 transition-all hover:bg-white/10">
                                    <div className="flex items-center justify-between mb-4">
                                        <h3 className="text-white font-bold text-lg group-hover:text-yellow-500 transition-colors">
                                            {ekskul.name}
                                        </h3>
                                        <span className="bg-yellow-500/20 text-yellow-500 text-xs px-2 py-1 rounded-full">
                                            {ekskul.category}
                                        </span>
                                    </div>
                                    
                                    <p className="text-gray-400 text-sm mb-4 leading-relaxed">
                                        {ekskul.description}
                                    </p>
                                    
                                    <div className="flex items-center justify-between text-sm">
                                        <div className="flex items-center text-gray-400">
                                            <span className="mr-1">👥</span>
                                            {ekskul.current_members}/{ekskul.max_members} anggota
                                        </div>
                                        <div className="text-yellow-500 font-semibold">
                                            {((ekskul.current_members / ekskul.max_members) * 100).toFixed(0)}% terisi
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                        
                        <div className="text-center mt-12">
                            <Link 
                                href="/ekstrakurikuler" 
                                className="inline-flex items-center bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold transition-all transform hover:scale-105"
                            >
                                Lihat Semua Ekstrakurikuler
                                <span className="ml-2">→</span>
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* Gallery Preview */}
            {featured_gallery.length > 0 && (
                <section className="bg-black py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white mb-4">
                                📸 Galeri <span className="text-yellow-500">Kegiatan</span>
                            </h2>
                            <p className="text-gray-400 text-xl">Dokumentasi kegiatan dan pencapaian siswa</p>
                        </div>
                        
                        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                            {featured_gallery.map((item) => (
                                <Link key={item.id} href={`/galeri/${item.id}`}>
                                    <div className="group aspect-square bg-gradient-to-br from-yellow-500/20 to-blue-600/20 rounded-xl overflow-hidden border border-white/10 hover:border-yellow-500/50 transition-all hover:scale-105 flex items-center justify-center relative">
                                        <span className="text-4xl">📸</span>
                                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                                            <span className="text-white font-semibold text-sm text-center px-2">
                                                {item.title}
                                            </span>
                                        </div>
                                    </div>
                                </Link>
                            ))}
                        </div>
                        
                        <div className="text-center mt-12">
                            <Link 
                                href="/galeri" 
                                className="inline-flex items-center border-2 border-yellow-500 text-yellow-500 hover:bg-yellow-500 hover:text-black px-6 py-3 rounded-lg font-semibold transition-all"
                            >
                                Lihat Semua Galeri
                                <span className="ml-2">→</span>
                            </Link>
                        </div>
                    </div>
                </section>
            )}

            {/* CTA Section */}
            <section className="bg-gradient-to-r from-yellow-500 to-yellow-400 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h2 className="text-4xl font-bold text-black mb-4">
                        🚀 Siap Bergabung dengan SMKN 1 Majalengka?
                    </h2>
                    <p className="text-black/80 text-xl mb-8 max-w-3xl mx-auto">
                        Wujudkan cita-cita dan raih masa depan gemilang bersama kami. Daftar sekarang dan jadilah bagian dari keluarga besar SMKN 1 Majalengka!
                    </p>
                    
                    <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                        <Link 
                            href="/ppdb" 
                            className="bg-black hover:bg-gray-800 text-yellow-500 px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 flex items-center"
                        >
                            📝 Daftar PPDB 2024
                            <span className="ml-2">→</span>
                        </Link>
                        <Link 
                            href="/saran" 
                            className="border-2 border-black text-black hover:bg-black hover:text-yellow-500 px-8 py-4 rounded-xl font-bold text-lg transition-all flex items-center"
                        >
                            💬 Kirim Saran
                            <span className="ml-2">→</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Footer */}
            <footer className="bg-black border-t border-yellow-500/20 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid md:grid-cols-4 gap-8">
                        <div className="md:col-span-2">
                            <div className="flex items-center space-x-3 mb-4">
                                <div className="w-12 h-12 bg-yellow-500 rounded-lg flex items-center justify-center">
                                    <span className="text-black font-bold text-2xl">🎓</span>
                                </div>
                                <div>
                                    <div className="text-yellow-500 font-bold text-xl">SMKN 1 Majalengka</div>
                                    <div className="text-gray-400 text-sm">{school_profile.tagline}</div>
                                </div>
                            </div>
                            <p className="text-gray-400 mb-6 leading-relaxed">
                                {school_profile.vision}
                            </p>
                            <div className="flex space-x-4">
                                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-yellow-500/20 transition-colors cursor-pointer">
                                    <span className="text-yellow-500">📘</span>
                                </div>
                                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-yellow-500/20 transition-colors cursor-pointer">
                                    <span className="text-yellow-500">📱</span>
                                </div>
                                <div className="w-10 h-10 bg-white/5 rounded-lg flex items-center justify-center hover:bg-yellow-500/20 transition-colors cursor-pointer">
                                    <span className="text-yellow-500">📺</span>
                                </div>
                            </div>
                        </div>
                        
                        <div>
                            <h3 className="text-white font-bold text-lg mb-4">Menu Utama</h3>
                            <ul className="space-y-2">
                                <li><Link href="/profil" className="text-gray-400 hover:text-yellow-500 transition-colors">Profil Sekolah</Link></li>
                                <li><Link href="/berita" className="text-gray-400 hover:text-yellow-500 transition-colors">Berita</Link></li>
                                <li><Link href="/galeri" className="text-gray-400 hover:text-yellow-500 transition-colors">Galeri</Link></li>
                                <li><Link href="/akademik" className="text-gray-400 hover:text-yellow-500 transition-colors">Akademik</Link></li>
                                <li><Link href="/ekstrakurikuler" className="text-gray-400 hover:text-yellow-500 transition-colors">Ekstrakurikuler</Link></li>
                                <li><Link href="/ppdb" className="text-gray-400 hover:text-yellow-500 transition-colors">PPDB</Link></li>
                            </ul>
                        </div>
                        
                        <div>
                            <h3 className="text-white font-bold text-lg mb-4">Kontak</h3>
                            <div className="space-y-3">
                                <div className="flex items-start space-x-3">
                                    <span className="text-yellow-500 mt-1 flex-shrink-0">📍</span>
                                    <span className="text-gray-400 text-sm">
                                        Jl. Budi Utomo No. 1, Majalengka Kulon, Kab. Majalengka, Jawa Barat
                                    </span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-yellow-500">📞</span>
                                    <span className="text-gray-400 text-sm">(0233) 281234</span>
                                </div>
                                <div className="flex items-center space-x-3">
                                    <span className="text-yellow-500">📧</span>
                                    <span className="text-gray-400 text-sm">info@smkn1majalengka.sch.id</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between">
                        <div className="text-gray-400 text-sm">
                            © 2024 SMKN 1 Majalengka. All rights reserved.
                        </div>
                        <div className="flex items-center space-x-6 mt-4 md:mt-0">
                            <Link href="/saran" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">Saran & Kritik</Link>
                            <Link href="/kontak" className="text-gray-400 hover:text-yellow-500 text-sm transition-colors">Kontak</Link>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    );
}
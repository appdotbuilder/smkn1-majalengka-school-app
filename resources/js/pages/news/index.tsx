import React from 'react';
import { Head, Link, router } from '@inertiajs/react';

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

interface PaginationLink {
    url: string | null;
    label: string;
    active: boolean;
}

interface Props {
    news: {
        data: News[];
        links: PaginationLink[];
        meta: {
            total: number;
        };
    };
    featured_news: News[];
    filters: {
        category?: string;
        search?: string;
    };
    categories: { [key: string]: string };
    [key: string]: unknown;
}

const categoryColors: { [key: string]: string } = {
    berita: 'bg-blue-500',
    pengumuman: 'bg-red-500', 
    prestasi: 'bg-yellow-500',
    kegiatan: 'bg-green-500',
};

const categoryEmojis: { [key: string]: string } = {
    berita: '📰',
    pengumuman: '📢',
    prestasi: '🏆',
    kegiatan: '🎯',
};

export default function NewsIndex({ news, featured_news, filters, categories }: Props) {
    const [searchQuery, setSearchQuery] = React.useState(filters.search || '');

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        router.get('/berita', { 
            search: searchQuery,
            category: filters.category 
        }, { 
            preserveState: true 
        });
    };

    const handleCategoryFilter = (category: string) => {
        router.get('/berita', { 
            category: category === filters.category ? '' : category,
            search: filters.search 
        }, { 
            preserveState: true 
        });
    };

    return (
        <>
            <Head title="Berita & Pengumuman - SMKN 1 Majalengka" />
            
            {/* Navigation */}
            <nav className="bg-black shadow-lg border-b border-yellow-500/20 sticky top-0 z-50">
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
                            <Link href="/berita" className="text-yellow-500 font-semibold">Berita</Link>
                            <Link href="/galeri" className="text-white hover:text-yellow-500 transition-colors">Galeri</Link>
                            <Link href="/ppdb" className="bg-yellow-500 hover:bg-yellow-400 text-black px-4 py-2 rounded-lg font-semibold transition-all">PPDB 2024</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-yellow-500 to-yellow-400 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-flex items-center bg-black/10 rounded-full px-6 py-2 mb-8">
                            <span className="text-black font-semibold">📰 Berita & Pengumuman Terbaru</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
                            Info Terkini
                        </h1>
                        
                        <p className="text-xl text-black/80 mb-8 max-w-3xl mx-auto">
                            Dapatkan informasi terbaru tentang kegiatan, pengumuman, prestasi, dan berita dari SMKN 1 Majalengka
                        </p>

                        {/* Search Bar */}
                        <form onSubmit={handleSearch} className="max-w-md mx-auto">
                            <div className="relative">
                                <input
                                    type="text"
                                    value={searchQuery}
                                    onChange={(e) => setSearchQuery(e.target.value)}
                                    placeholder="Cari berita..."
                                    className="w-full pl-12 pr-4 py-3 bg-black/20 border border-black/30 rounded-xl text-black placeholder-black/60 focus:border-black focus:ring-black"
                                />
                                <span className="absolute left-4 top-1/2 transform -translate-y-1/2 text-black/60">🔍</span>
                                <button
                                    type="submit"
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-black text-yellow-500 px-4 py-1.5 rounded-lg font-semibold text-sm hover:bg-gray-800 transition-colors"
                                >
                                    Cari
                                </button>
                            </div>
                        </form>
                    </div>
                </section>

                {/* Category Filter */}
                <section className="bg-gray-900 py-8 border-b border-white/10">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex flex-wrap justify-center gap-4">
                            <button
                                onClick={() => handleCategoryFilter('')}
                                className={`px-6 py-2 rounded-full font-semibold transition-all ${
                                    !filters.category 
                                        ? 'bg-yellow-500 text-black' 
                                        : 'bg-white/10 text-white hover:bg-white/20'
                                }`}
                            >
                                📋 Semua
                            </button>
                            {Object.entries(categories).map(([key, value]) => (
                                <button
                                    key={key}
                                    onClick={() => handleCategoryFilter(key)}
                                    className={`px-6 py-2 rounded-full font-semibold transition-all flex items-center ${
                                        filters.category === key 
                                            ? 'bg-yellow-500 text-black' 
                                            : 'bg-white/10 text-white hover:bg-white/20'
                                    }`}
                                >
                                    {categoryEmojis[key]} {value}
                                </button>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Featured News */}
                {featured_news.length > 0 && (
                    <section className="py-20 bg-black">
                        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl font-bold text-white mb-4">
                                    ⭐ Berita <span className="text-yellow-500">Unggulan</span>
                                </h2>
                            </div>
                            
                            <div className="grid md:grid-cols-3 gap-8">
                                {featured_news.map((item) => (
                                    <Link key={item.id} href={`/berita/${item.slug}`}>
                                        <article className="group bg-white/5 backdrop-blur rounded-xl overflow-hidden border border-white/10 hover:border-yellow-500/50 transition-all hover:shadow-2xl hover:shadow-yellow-500/10 transform hover:-translate-y-2">
                                            <div className="h-48 bg-gradient-to-br from-yellow-500/20 to-blue-600/20 flex items-center justify-center">
                                                <div className="text-center">
                                                    <div className="text-4xl mb-2">{categoryEmojis[item.category]}</div>
                                                    <span className={`${categoryColors[item.category] || 'bg-gray-500'} text-white text-xs px-3 py-1 rounded-full`}>
                                                        UNGGULAN
                                                    </span>
                                                </div>
                                            </div>
                                            <div className="p-6">
                                                <div className="flex items-center mb-3">
                                                    <span className={`${categoryColors[item.category] || 'bg-gray-500'} text-white text-xs px-2 py-1 rounded-full`}>
                                                        {item.category.toUpperCase()}
                                                    </span>
                                                    <span className="text-gray-400 text-sm ml-3 flex items-center">
                                                        📅 {new Date(item.published_at).toLocaleDateString('id-ID')}
                                                    </span>
                                                </div>
                                                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-yellow-500 transition-colors line-clamp-2">
                                                    {item.title}
                                                </h3>
                                                <p className="text-gray-400 text-sm line-clamp-3 mb-4">
                                                    {item.excerpt}
                                                </p>
                                                <div className="flex items-center justify-between">
                                                    <div className="flex items-center text-gray-400 text-xs">
                                                        👤 {item.creator.name}
                                                    </div>
                                                    <div className="flex items-center text-yellow-500 font-semibold text-sm group-hover:translate-x-2 transition-transform">
                                                        Baca <span className="ml-1">→</span>
                                                    </div>
                                                </div>
                                            </div>
                                        </article>
                                    </Link>
                                ))}
                            </div>
                        </div>
                    </section>
                )}

                {/* News List */}
                <section className="py-20 bg-gray-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="flex items-center justify-between mb-12">
                            <h2 className="text-3xl font-bold text-white">
                                📄 Semua Berita
                            </h2>
                            <div className="text-gray-400 text-sm">
                                {news.meta.total} artikel ditemukan
                            </div>
                        </div>
                        
                        {news.data.length > 0 ? (
                            <>
                                <div className="grid gap-8">
                                    {news.data.map((item) => (
                                        <Link key={item.id} href={`/berita/${item.slug}`}>
                                            <article className="group bg-white/5 backdrop-blur rounded-xl p-6 border border-white/10 hover:border-yellow-500/50 transition-all hover:bg-white/10">
                                                <div className="flex flex-col md:flex-row gap-6">
                                                    <div className="md:w-48 h-32 bg-gradient-to-br from-yellow-500/20 to-blue-600/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                                        <div className="text-center">
                                                            <div className="text-2xl mb-1">{categoryEmojis[item.category]}</div>
                                                            <span className={`${categoryColors[item.category] || 'bg-gray-500'} text-white text-xs px-2 py-1 rounded-full`}>
                                                                {item.category.toUpperCase()}
                                                            </span>
                                                        </div>
                                                    </div>
                                                    
                                                    <div className="flex-1">
                                                        <div className="flex items-center mb-3 text-gray-400 text-sm">
                                                            📅 {new Date(item.published_at).toLocaleDateString('id-ID', {
                                                                weekday: 'long',
                                                                year: 'numeric',
                                                                month: 'long',
                                                                day: 'numeric'
                                                            })}
                                                            <span className="mx-2">•</span>
                                                            👤 {item.creator.name}
                                                        </div>
                                                        
                                                        <h3 className="text-white font-bold text-xl mb-3 group-hover:text-yellow-500 transition-colors line-clamp-2">
                                                            {item.title}
                                                        </h3>
                                                        
                                                        <p className="text-gray-400 mb-4 line-clamp-3">
                                                            {item.excerpt}
                                                        </p>
                                                        
                                                        <div className="flex items-center text-yellow-500 font-semibold group-hover:translate-x-2 transition-transform">
                                                            Baca selengkapnya <span className="ml-2">→</span>
                                                        </div>
                                                    </div>
                                                </div>
                                            </article>
                                        </Link>
                                    ))}
                                </div>
                                
                                {/* Pagination */}
                                {news.links && news.links.length > 3 && (
                                    <div className="flex items-center justify-center mt-12">
                                        <div className="flex space-x-2">
                                            {news.links.map((link, index) => (
                                                link.url ? (
                                                    <Link
                                                        key={index}
                                                        href={link.url}
                                                        className={`px-4 py-2 rounded-lg font-semibold transition-all ${
                                                            link.active
                                                                ? 'bg-yellow-500 text-black'
                                                                : 'bg-white/10 text-white hover:bg-white/20'
                                                        }`}
                                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                                    />
                                                ) : (
                                                    <span
                                                        key={index}
                                                        className="px-4 py-2 text-gray-500"
                                                        dangerouslySetInnerHTML={{ __html: link.label }}
                                                    />
                                                )
                                            ))}
                                        </div>
                                    </div>
                                )}
                            </>
                        ) : (
                            <div className="text-center py-20">
                                <span className="text-6xl mb-4 block">📰</span>
                                <h3 className="text-xl font-bold text-gray-400 mb-2">Tidak ada berita ditemukan</h3>
                                <p className="text-gray-500 mb-6">
                                    {filters.search || filters.category 
                                        ? 'Coba ubah filter atau kata kunci pencarian'
                                        : 'Belum ada berita yang dipublikasikan'
                                    }
                                </p>
                                <Link 
                                    href="/berita"
                                    className="inline-flex items-center bg-yellow-500 hover:bg-yellow-400 text-black px-6 py-3 rounded-lg font-semibold transition-all"
                                >
                                    Lihat Semua Berita
                                </Link>
                            </div>
                        )}
                    </div>
                </section>
            </div>
        </>
    );
}
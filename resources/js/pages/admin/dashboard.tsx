import React from 'react';
import { Head, Link } from '@inertiajs/react';

interface Stats {
    total_news: number;
    published_news: number;
    total_gallery: number;
    ppdb_registrations: number;
    pending_ppdb: number;
    accepted_ppdb: number;
    total_feedback: number;
    unread_feedback: number;
}

interface News {
    id: number;
    title: string;
    category: string;
    created_at: string;
}

interface PpdbRegistration {
    id: number;
    full_name: string;
    status: string;
    registered_at: string;
}

interface Feedback {
    id: number;
    name: string;
    subject: string;
    status: string;
    created_at: string;
}

interface Props {
    stats: Stats;
    recent_news: News[];
    recent_ppdb: PpdbRegistration[];
    recent_feedback: Feedback[];
    [key: string]: unknown;
}

export default function AdminDashboard({ stats, recent_news, recent_ppdb, recent_feedback }: Props) {
    return (
        <>
            <Head title="Admin Dashboard - SMKN 1 Majalengka" />
            
            <div className="min-h-screen bg-gray-100 py-12">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="mb-8">
                        <h1 className="text-3xl font-bold text-gray-900">📊 Dashboard Admin</h1>
                        <p className="text-gray-600">Selamat datang di dashboard admin SMKN 1 Majalengka</p>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white p-6 rounded-lg shadow">
                            <div className="flex items-center">
                                <div className="p-3 bg-blue-100 rounded-full">
                                    <span className="text-2xl">📰</span>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600">Total Berita</p>
                                    <p className="text-2xl font-bold text-gray-900">{stats.total_news}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow">
                            <div className="flex items-center">
                                <div className="p-3 bg-green-100 rounded-full">
                                    <span className="text-2xl">📚</span>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600">Pendaftar PPDB</p>
                                    <p className="text-2xl font-bold text-gray-900">{stats.ppdb_registrations}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow">
                            <div className="flex items-center">
                                <div className="p-3 bg-yellow-100 rounded-full">
                                    <span className="text-2xl">⏳</span>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600">PPDB Pending</p>
                                    <p className="text-2xl font-bold text-gray-900">{stats.pending_ppdb}</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="bg-white p-6 rounded-lg shadow">
                            <div className="flex items-center">
                                <div className="p-3 bg-purple-100 rounded-full">
                                    <span className="text-2xl">💬</span>
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-600">Feedback Baru</p>
                                    <p className="text-2xl font-bold text-gray-900">{stats.unread_feedback}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                        {/* Recent News */}
                        <div className="bg-white rounded-lg shadow">
                            <div className="p-6 border-b border-gray-200">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-lg font-semibold text-gray-900">📰 Berita Terbaru</h2>
                                    <Link 
                                        href="/admin/news" 
                                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                                    >
                                        Lihat Semua
                                    </Link>
                                </div>
                            </div>
                            <div className="p-6">
                                {recent_news.length > 0 ? (
                                    <div className="space-y-4">
                                        {recent_news.map((news) => (
                                            <div key={news.id} className="border-l-4 border-blue-400 pl-4">
                                                <h3 className="font-medium text-gray-900 line-clamp-2">{news.title}</h3>
                                                <p className="text-sm text-gray-500 mt-1">
                                                    {news.category} • {new Date(news.created_at).toLocaleDateString('id-ID')}
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-gray-500">Belum ada berita</p>
                                )}
                            </div>
                        </div>

                        {/* Recent PPDB */}
                        <div className="bg-white rounded-lg shadow">
                            <div className="p-6 border-b border-gray-200">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-lg font-semibold text-gray-900">📚 Pendaftar PPDB</h2>
                                    <Link 
                                        href="/admin/ppdb" 
                                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                                    >
                                        Lihat Semua
                                    </Link>
                                </div>
                            </div>
                            <div className="p-6">
                                {recent_ppdb.length > 0 ? (
                                    <div className="space-y-4">
                                        {recent_ppdb.map((ppdb) => (
                                            <div key={ppdb.id} className="border-l-4 border-green-400 pl-4">
                                                <h3 className="font-medium text-gray-900">{ppdb.full_name}</h3>
                                                <p className="text-sm text-gray-500 mt-1">
                                                    <span className={`inline-block px-2 py-1 rounded-full text-xs ${
                                                        ppdb.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
                                                        ppdb.status === 'accepted' ? 'bg-green-100 text-green-800' :
                                                        'bg-red-100 text-red-800'
                                                    }`}>
                                                        {ppdb.status}
                                                    </span>
                                                    <span className="ml-2">{new Date(ppdb.registered_at).toLocaleDateString('id-ID')}</span>
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-gray-500">Belum ada pendaftar</p>
                                )}
                            </div>
                        </div>

                        {/* Recent Feedback */}
                        <div className="bg-white rounded-lg shadow">
                            <div className="p-6 border-b border-gray-200">
                                <div className="flex items-center justify-between">
                                    <h2 className="text-lg font-semibold text-gray-900">💬 Feedback Terbaru</h2>
                                    <Link 
                                        href="/admin/feedback" 
                                        className="text-blue-600 hover:text-blue-800 text-sm font-medium"
                                    >
                                        Lihat Semua
                                    </Link>
                                </div>
                            </div>
                            <div className="p-6">
                                {recent_feedback.length > 0 ? (
                                    <div className="space-y-4">
                                        {recent_feedback.map((feedback) => (
                                            <div key={feedback.id} className="border-l-4 border-purple-400 pl-4">
                                                <h3 className="font-medium text-gray-900 line-clamp-2">{feedback.subject}</h3>
                                                <p className="text-sm text-gray-500 mt-1">
                                                    {feedback.name} • 
                                                    <span className={`ml-1 inline-block px-2 py-1 rounded-full text-xs ${
                                                        feedback.status === 'unread' ? 'bg-red-100 text-red-800' :
                                                        feedback.status === 'read' ? 'bg-yellow-100 text-yellow-800' :
                                                        'bg-green-100 text-green-800'
                                                    }`}>
                                                        {feedback.status}
                                                    </span>
                                                </p>
                                            </div>
                                        ))}
                                    </div>
                                ) : (
                                    <p className="text-gray-500">Belum ada feedback</p>
                                )}
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="mt-8 bg-white rounded-lg shadow p-6">
                        <h2 className="text-lg font-semibold text-gray-900 mb-4">⚡ Aksi Cepat</h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                            <Link 
                                href="/admin/news/create"
                                className="flex items-center p-4 bg-blue-50 hover:bg-blue-100 rounded-lg transition-colors"
                            >
                                <span className="text-2xl mr-3">📝</span>
                                <div>
                                    <div className="font-medium text-gray-900">Tulis Berita</div>
                                    <div className="text-sm text-gray-600">Buat berita baru</div>
                                </div>
                            </Link>
                            
                            <Link 
                                href="/admin/ppdb"
                                className="flex items-center p-4 bg-green-50 hover:bg-green-100 rounded-lg transition-colors"
                            >
                                <span className="text-2xl mr-3">📋</span>
                                <div>
                                    <div className="font-medium text-gray-900">Kelola PPDB</div>
                                    <div className="text-sm text-gray-600">Lihat pendaftar</div>
                                </div>
                            </Link>
                            
                            <Link 
                                href="/admin/feedback"
                                className="flex items-center p-4 bg-purple-50 hover:bg-purple-100 rounded-lg transition-colors"
                            >
                                <span className="text-2xl mr-3">💬</span>
                                <div>
                                    <div className="font-medium text-gray-900">Balas Feedback</div>
                                    <div className="text-sm text-gray-600">Tanggapi masukan</div>
                                </div>
                            </Link>
                            
                            <div className="flex items-center p-4 bg-gray-50 rounded-lg">
                                <span className="text-2xl mr-3">📊</span>
                                <div>
                                    <div className="font-medium text-gray-900">Export Data</div>
                                    <div className="text-sm text-gray-600">Fitur akan segera hadir</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
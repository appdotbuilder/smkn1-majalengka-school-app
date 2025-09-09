import React from 'react';
import { Head, Link, useForm } from '@inertiajs/react';

interface Props {
    majors: { [key: string]: string };
    [key: string]: unknown;
}

interface PpdbFormData {
    full_name: string;
    nik: string;
    nisn: string;
    gender: string;
    birth_place: string;
    birth_date: string;
    address: string;
    phone: string;
    email: string;
    school_origin: string;
    final_score: string;
    major_choice1: string;
    major_choice2: string;
    father_name: string;
    mother_name: string;
    parent_phone: string;
    parent_occupation: string;
    [key: string]: string;
}

export default function PpdbIndex({ majors }: Props) {
    const { data, setData, post, processing, errors } = useForm<PpdbFormData>({
        full_name: '',
        nik: '',
        nisn: '',
        gender: '',
        birth_place: '',
        birth_date: '',
        address: '',
        phone: '',
        email: '',
        school_origin: '',
        final_score: '',
        major_choice1: '',
        major_choice2: '',
        father_name: '',
        mother_name: '',
        parent_phone: '',
        parent_occupation: '',
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        post('/ppdb');
    };

    return (
        <>
            <Head title="PPDB 2024 - SMKN 1 Majalengka" />
            
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
                        <div className="flex items-center space-x-4">
                            <Link href="/" className="text-white hover:text-yellow-500 transition-colors">Kembali ke Beranda</Link>
                        </div>
                    </div>
                </div>
            </nav>

            <div className="min-h-screen bg-gradient-to-br from-black via-gray-900 to-blue-900">
                {/* Hero Section */}
                <section className="bg-gradient-to-r from-yellow-500 to-yellow-400 py-20">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <div className="inline-flex items-center bg-black/10 rounded-full px-6 py-2 mb-8">
                            <span className="text-black font-semibold">📚 Pendaftaran Peserta Didik Baru</span>
                        </div>
                        
                        <h1 className="text-5xl md:text-6xl font-bold text-black mb-6">
                            PPDB 2024
                        </h1>
                        
                        <p className="text-xl text-black/80 mb-8 max-w-3xl mx-auto">
                            Bergabunglah dengan SMKN 1 Majalengka dan wujudkan impian menjadi lulusan yang berkompeten, berkarakter, dan siap kerja!
                        </p>

                        {/* Quick Info */}
                        <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
                            <div className="bg-black/10 p-6 rounded-xl">
                                <span className="text-2xl block mb-2">📅</span>
                                <div className="text-black font-bold">Periode Pendaftaran</div>
                                <div className="text-black/80 text-sm">1 Juni - 30 Juni 2024</div>
                            </div>
                            <div className="bg-black/10 p-6 rounded-xl">
                                <span className="text-2xl block mb-2">👥</span>
                                <div className="text-black font-bold">8 Program Keahlian</div>
                                <div className="text-black/80 text-sm">Pilih sesuai minat & bakatmu</div>
                            </div>
                            <div className="bg-black/10 p-6 rounded-xl">
                                <span className="text-2xl block mb-2">✅</span>
                                <div className="text-black font-bold">Gratis Biaya</div>
                                <div className="text-black/80 text-sm">Pendaftaran 100% gratis</div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Requirements */}
                <section className="py-20 bg-gray-900">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white mb-4">
                                📋 Syarat & Ketentuan <span className="text-yellow-500">PPDB</span>
                            </h2>
                        </div>
                        
                        <div className="grid md:grid-cols-2 gap-8">
                            <div className="bg-white/5 backdrop-blur p-8 rounded-xl border border-white/10">
                                <h3 className="text-xl font-bold text-yellow-500 mb-6 flex items-center">
                                    📄 Persyaratan Umum
                                </h3>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">✅</span>
                                        Lulusan SMP/MTs atau sederajat
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">✅</span>
                                        Nilai rata-rata minimal 7.0
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">✅</span>
                                        Usia maksimal 21 tahun
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">✅</span>
                                        Berkelakuan baik
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">✅</span>
                                        Sehat jasmani dan rohani
                                    </li>
                                </ul>
                            </div>
                            
                            <div className="bg-white/5 backdrop-blur p-8 rounded-xl border border-white/10">
                                <h3 className="text-xl font-bold text-yellow-500 mb-6 flex items-center">
                                    ⚠️ Dokumen yang Diperlukan
                                </h3>
                                <ul className="space-y-3 text-gray-300">
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">✅</span>
                                        Fotokopi Ijazah SMP/MTs
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">✅</span>
                                        Fotokopi SKHUN
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">✅</span>
                                        Fotokopi KK & KTP Orangtua
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">✅</span>
                                        Pas foto 3x4 (3 lembar)
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-green-500 mr-3 mt-0.5 flex-shrink-0">✅</span>
                                        Surat keterangan sehat
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Program Keahlian */}
                <section className="py-20 bg-black">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white mb-4">
                                🎯 Program <span className="text-yellow-500">Keahlian</span>
                            </h2>
                            <p className="text-gray-400 text-xl">Pilih program keahlian sesuai minat dan bakatmu</p>
                        </div>
                        
                        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {Object.entries(majors).map(([key]) => (
                                <div key={key} className="bg-white/5 backdrop-blur p-6 rounded-xl border border-white/10 hover:border-yellow-500/50 transition-all hover:bg-white/10 text-center group">
                                    <div className="bg-yellow-500/20 w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:bg-yellow-500/30 transition-colors">
                                        <span className="text-2xl">🎓</span>
                                    </div>
                                    <h3 className="text-white font-bold text-lg mb-2 group-hover:text-yellow-500 transition-colors">
                                        {key.split(' ').slice(0, 3).join(' ')}
                                    </h3>
                                    <p className="text-gray-400 text-sm">
                                        ({key.split(' ').map(word => word.charAt(0)).join('').slice(0, 3)})
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Registration Form */}
                <section className="py-20 bg-gray-900">
                    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center mb-16">
                            <h2 className="text-4xl font-bold text-white mb-4">
                                📝 Formulir <span className="text-yellow-500">Pendaftaran</span>
                            </h2>
                            <p className="text-gray-400 text-xl">Isi formulir dengan data yang lengkap dan benar</p>
                        </div>
                        
                        <form onSubmit={handleSubmit} className="bg-white/5 backdrop-blur p-8 rounded-xl border border-white/10">
                            {/* Data Siswa */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-yellow-500 mb-6 flex items-center">
                                    👤 Data Siswa
                                </h3>
                                
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-300 font-semibold mb-2">Nama Lengkap *</label>
                                        <input
                                            type="text"
                                            value={data.full_name}
                                            onChange={(e) => setData('full_name', e.target.value)}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-yellow-500"
                                            placeholder="Masukkan nama lengkap"
                                            required
                                        />
                                        {errors.full_name && <p className="text-red-400 text-sm mt-1">{errors.full_name}</p>}
                                    </div>
                                    
                                    <div>
                                        <label className="block text-gray-300 font-semibold mb-2">NIK *</label>
                                        <input
                                            type="text"
                                            value={data.nik}
                                            onChange={(e) => setData('nik', e.target.value)}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-yellow-500"
                                            placeholder="16 digit NIK"
                                            maxLength={16}
                                            required
                                        />
                                        {errors.nik && <p className="text-red-400 text-sm mt-1">{errors.nik}</p>}
                                    </div>
                                    
                                    <div>
                                        <label className="block text-gray-300 font-semibold mb-2">NISN *</label>
                                        <input
                                            type="text"
                                            value={data.nisn}
                                            onChange={(e) => setData('nisn', e.target.value)}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-yellow-500"
                                            placeholder="10 digit NISN"
                                            maxLength={10}
                                            required
                                        />
                                        {errors.nisn && <p className="text-red-400 text-sm mt-1">{errors.nisn}</p>}
                                    </div>
                                    
                                    <div>
                                        <label className="block text-gray-300 font-semibold mb-2">Jenis Kelamin *</label>
                                        <select
                                            value={data.gender}
                                            onChange={(e) => setData('gender', e.target.value)}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-yellow-500 focus:ring-yellow-500"
                                            required
                                        >
                                            <option value="">Pilih jenis kelamin</option>
                                            <option value="L">Laki-laki</option>
                                            <option value="P">Perempuan</option>
                                        </select>
                                        {errors.gender && <p className="text-red-400 text-sm mt-1">{errors.gender}</p>}
                                    </div>
                                    
                                    <div>
                                        <label className="block text-gray-300 font-semibold mb-2">Tempat Lahir *</label>
                                        <input
                                            type="text"
                                            value={data.birth_place}
                                            onChange={(e) => setData('birth_place', e.target.value)}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-yellow-500"
                                            placeholder="Tempat lahir"
                                            required
                                        />
                                        {errors.birth_place && <p className="text-red-400 text-sm mt-1">{errors.birth_place}</p>}
                                    </div>
                                    
                                    <div>
                                        <label className="block text-gray-300 font-semibold mb-2">Tanggal Lahir *</label>
                                        <input
                                            type="date"
                                            value={data.birth_date}
                                            onChange={(e) => setData('birth_date', e.target.value)}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-yellow-500 focus:ring-yellow-500"
                                            required
                                        />
                                        {errors.birth_date && <p className="text-red-400 text-sm mt-1">{errors.birth_date}</p>}
                                    </div>
                                    
                                    <div className="md:col-span-2">
                                        <label className="block text-gray-300 font-semibold mb-2">Alamat Lengkap *</label>
                                        <textarea
                                            value={data.address}
                                            onChange={(e) => setData('address', e.target.value)}
                                            rows={3}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-yellow-500"
                                            placeholder="Alamat lengkap"
                                            required
                                        />
                                        {errors.address && <p className="text-red-400 text-sm mt-1">{errors.address}</p>}
                                    </div>
                                    
                                    <div>
                                        <label className="block text-gray-300 font-semibold mb-2">No. Telepon *</label>
                                        <input
                                            type="tel"
                                            value={data.phone}
                                            onChange={(e) => setData('phone', e.target.value)}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-yellow-500"
                                            placeholder="08xxxxxxxxxx"
                                            required
                                        />
                                        {errors.phone && <p className="text-red-400 text-sm mt-1">{errors.phone}</p>}
                                    </div>
                                    
                                    <div>
                                        <label className="block text-gray-300 font-semibold mb-2">Email *</label>
                                        <input
                                            type="email"
                                            value={data.email}
                                            onChange={(e) => setData('email', e.target.value)}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-yellow-500"
                                            placeholder="email@example.com"
                                            required
                                        />
                                        {errors.email && <p className="text-red-400 text-sm mt-1">{errors.email}</p>}
                                    </div>
                                </div>
                            </div>

                            {/* Data Akademik */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-yellow-500 mb-6 flex items-center">
                                    🏢 Data Akademik
                                </h3>
                                
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-300 font-semibold mb-2">Asal Sekolah *</label>
                                        <input
                                            type="text"
                                            value={data.school_origin}
                                            onChange={(e) => setData('school_origin', e.target.value)}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-yellow-500"
                                            placeholder="Nama sekolah asal"
                                            required
                                        />
                                        {errors.school_origin && <p className="text-red-400 text-sm mt-1">{errors.school_origin}</p>}
                                    </div>
                                    
                                    <div>
                                        <label className="block text-gray-300 font-semibold mb-2">Nilai Akhir (Rata-rata) *</label>
                                        <input
                                            type="number"
                                            step="0.01"
                                            min="0"
                                            max="100"
                                            value={data.final_score}
                                            onChange={(e) => setData('final_score', e.target.value)}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-yellow-500"
                                            placeholder="0.00"
                                            required
                                        />
                                        {errors.final_score && <p className="text-red-400 text-sm mt-1">{errors.final_score}</p>}
                                    </div>
                                    
                                    <div>
                                        <label className="block text-gray-300 font-semibold mb-2">Pilihan Jurusan 1 *</label>
                                        <select
                                            value={data.major_choice1}
                                            onChange={(e) => setData('major_choice1', e.target.value)}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-yellow-500 focus:ring-yellow-500"
                                            required
                                        >
                                            <option value="">Pilih jurusan</option>
                                            {Object.entries(majors).map(([key]) => (
                                                <option key={key} value={key}>{key}</option>
                                            ))}
                                        </select>
                                        {errors.major_choice1 && <p className="text-red-400 text-sm mt-1">{errors.major_choice1}</p>}
                                    </div>
                                    
                                    <div>
                                        <label className="block text-gray-300 font-semibold mb-2">Pilihan Jurusan 2 (Opsional)</label>
                                        <select
                                            value={data.major_choice2}
                                            onChange={(e) => setData('major_choice2', e.target.value)}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white focus:border-yellow-500 focus:ring-yellow-500"
                                        >
                                            <option value="">Pilih jurusan kedua</option>
                                            {Object.entries(majors).map(([key]) => (
                                                <option key={key} value={key} disabled={key === data.major_choice1}>{key}</option>
                                            ))}
                                        </select>
                                        {errors.major_choice2 && <p className="text-red-400 text-sm mt-1">{errors.major_choice2}</p>}
                                    </div>
                                </div>
                            </div>

                            {/* Data Orang Tua */}
                            <div className="mb-8">
                                <h3 className="text-xl font-bold text-yellow-500 mb-6 flex items-center">
                                    👨‍👩‍👧‍👦 Data Orang Tua
                                </h3>
                                
                                <div className="grid md:grid-cols-2 gap-6">
                                    <div>
                                        <label className="block text-gray-300 font-semibold mb-2">Nama Ayah *</label>
                                        <input
                                            type="text"
                                            value={data.father_name}
                                            onChange={(e) => setData('father_name', e.target.value)}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-yellow-500"
                                            placeholder="Nama ayah"
                                            required
                                        />
                                        {errors.father_name && <p className="text-red-400 text-sm mt-1">{errors.father_name}</p>}
                                    </div>
                                    
                                    <div>
                                        <label className="block text-gray-300 font-semibold mb-2">Nama Ibu *</label>
                                        <input
                                            type="text"
                                            value={data.mother_name}
                                            onChange={(e) => setData('mother_name', e.target.value)}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-yellow-500"
                                            placeholder="Nama ibu"
                                            required
                                        />
                                        {errors.mother_name && <p className="text-red-400 text-sm mt-1">{errors.mother_name}</p>}
                                    </div>
                                    
                                    <div>
                                        <label className="block text-gray-300 font-semibold mb-2">No. Telepon Orang Tua *</label>
                                        <input
                                            type="tel"
                                            value={data.parent_phone}
                                            onChange={(e) => setData('parent_phone', e.target.value)}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-yellow-500"
                                            placeholder="08xxxxxxxxxx"
                                            required
                                        />
                                        {errors.parent_phone && <p className="text-red-400 text-sm mt-1">{errors.parent_phone}</p>}
                                    </div>
                                    
                                    <div>
                                        <label className="block text-gray-300 font-semibold mb-2">Pekerjaan Orang Tua</label>
                                        <input
                                            type="text"
                                            value={data.parent_occupation}
                                            onChange={(e) => setData('parent_occupation', e.target.value)}
                                            className="w-full px-4 py-3 bg-white/10 border border-white/20 rounded-lg text-white placeholder-gray-400 focus:border-yellow-500 focus:ring-yellow-500"
                                            placeholder="Pekerjaan orang tua"
                                        />
                                        {errors.parent_occupation && <p className="text-red-400 text-sm mt-1">{errors.parent_occupation}</p>}
                                    </div>
                                </div>
                            </div>

                            <div className="flex items-center justify-center">
                                <button
                                    type="submit"
                                    disabled={processing}
                                    className="bg-yellow-500 hover:bg-yellow-400 text-black px-8 py-4 rounded-xl font-bold text-lg transition-all transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center"
                                >
                                    {processing ? (
                                        <>
                                            <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-black mr-2"></div>
                                            Mengirim Pendaftaran...
                                        </>
                                    ) : (
                                        <>
                                            📝 Daftar Sekarang
                                        </>
                                    )}
                                </button>
                            </div>
                        </form>
                    </div>
                </section>
            </div>
        </>
    );
}
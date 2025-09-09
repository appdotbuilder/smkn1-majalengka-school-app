<?php

namespace Database\Seeders;

use App\Models\User;
use App\Models\News;
use App\Models\Gallery;
use App\Models\Facility;
use App\Models\Extracurricular;
use App\Models\SchoolProfile;
use App\Models\PpdbRegistration;
use App\Models\Feedback;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        // Create admin user
        $admin = User::factory()->create([
            'name' => 'Admin SMKN 1 Majalengka',
            'email' => 'admin@smkn1majalengka.sch.id',
            'password' => Hash::make('password'),
        ]);

        // Create regular test user
        User::factory()->create([
            'name' => 'Test User',
            'email' => 'test@example.com',
            'password' => Hash::make('password'),
        ]);

        // School profile data
        $schoolProfiles = [
            [
                'key' => 'school_name',
                'value' => 'SMK Negeri 1 Majalengka',
                'type' => 'text',
                'description' => 'Nama sekolah'
            ],
            [
                'key' => 'school_tagline',
                'value' => 'Unggul dalam Prestasi, Prima dalam Karakter',
                'type' => 'text',
                'description' => 'Tagline sekolah'
            ],
            [
                'key' => 'school_vision',
                'value' => 'Menjadi SMK yang unggul, berkarakter, dan berdaya saing global dalam mencetak lulusan yang profesional, kreatif, dan berakhlak mulia.',
                'type' => 'text',
                'description' => 'Visi sekolah'
            ],
            [
                'key' => 'school_mission',
                'value' => json_encode([
                    'Menyelenggarakan pendidikan kejuruan yang berkualitas dan relevan dengan kebutuhan industri',
                    'Mengembangkan karakter siswa yang berakhlak mulia dan berjiwa pancasila',
                    'Meningkatkan kompetensi guru dan tenaga kependidikan secara berkelanjutan',
                    'Menyediakan sarana dan prasarana pembelajaran yang modern dan memadai',
                    'Membangun kemitraan strategis dengan dunia usaha dan dunia industri'
                ]),
                'type' => 'json',
                'description' => 'Misi sekolah'
            ],
            [
                'key' => 'school_address',
                'value' => 'Jl. Budi Utomo No. 1, Majalengka Kulon, Kec. Majalengka, Kabupaten Majalengka, Jawa Barat 45418',
                'type' => 'text',
                'description' => 'Alamat sekolah'
            ],
            [
                'key' => 'school_phone',
                'value' => '(0233) 281234',
                'type' => 'text',
                'description' => 'Nomor telepon sekolah'
            ],
            [
                'key' => 'school_email',
                'value' => 'info@smkn1majalengka.sch.id',
                'type' => 'text',
                'description' => 'Email sekolah'
            ],
        ];

        foreach ($schoolProfiles as $profile) {
            SchoolProfile::create($profile);
        }

        // Create news with admin as creator
        News::factory(20)->create(['created_by' => $admin->id]);
        News::factory(3)->featured()->create(['created_by' => $admin->id]);

        // Create gallery items
        Gallery::factory(30)->create(['created_by' => $admin->id]);
        Gallery::factory(6)->featured()->create(['created_by' => $admin->id]);

        // Create facilities
        $facilities = [
            [
                'name' => 'Perpustakaan',
                'description' => 'Perpustakaan modern dengan koleksi buku yang lengkap dan akses internet gratis untuk mendukung pembelajaran siswa.',
                'icon' => 'book-open',
                'sort_order' => 1,
            ],
            [
                'name' => 'Laboratorium Komputer',
                'description' => 'Laboratorium komputer dengan perangkat terbaru dan koneksi internet cepat untuk praktik TIK dan programming.',
                'icon' => 'computer-desktop',
                'sort_order' => 2,
            ],
            [
                'name' => 'Laboratorium Bahasa',
                'description' => 'Fasilitas pembelajaran bahasa dengan audio visual dan sistem multimedia interaktif.',
                'icon' => 'language',
                'sort_order' => 3,
            ],
            [
                'name' => 'Laboratorium IPA',
                'description' => 'Laboratorium sains lengkap dengan peralatan praktikum fisika, kimia, dan biologi.',
                'icon' => 'beaker',
                'sort_order' => 4,
            ],
            [
                'name' => 'Workshop Teknik',
                'description' => 'Workshop lengkap untuk praktik teknik kendaraan ringan dan sepeda motor dengan peralatan industri.',
                'icon' => 'wrench-screwdriver',
                'sort_order' => 5,
            ],
            [
                'name' => 'Studio Multimedia',
                'description' => 'Studio multimedia dengan peralatan editing video, audio, dan desain grafis profesional.',
                'icon' => 'tv',
                'sort_order' => 6,
            ],
            [
                'name' => 'Aula Serbaguna',
                'description' => 'Aula dengan kapasitas 500 orang untuk berbagai kegiatan sekolah dan acara resmi.',
                'icon' => 'building-office-2',
                'sort_order' => 7,
            ],
            [
                'name' => 'Lapangan Olahraga',
                'description' => 'Lapangan olahraga multifungsi untuk kegiatan basket, voli, futsal, dan berbagai cabang olahraga.',
                'icon' => 'trophy',
                'sort_order' => 8,
            ],
        ];

        foreach ($facilities as $facility) {
            Facility::create($facility);
        }

        // Create extracurriculars
        $extracurriculars = [
            [
                'name' => 'Robotika',
                'description' => 'Ekstrakurikuler robotika untuk mengembangkan keterampilan programming dan engineering.',
                'coach' => 'Budi Santoso, S.Kom',
                'schedule' => 'Rabu 15:00-17:00',
                'location' => 'Lab Komputer',
                'category' => 'teknologi',
                'max_members' => 25,
                'current_members' => 20,
            ],
            [
                'name' => 'English Club',
                'description' => 'Klub bahasa Inggris untuk meningkatkan kemampuan berbahasa Inggris siswa.',
                'coach' => 'Sari Indrawati, S.Pd',
                'schedule' => 'Kamis 14:00-16:00',
                'location' => 'Lab Bahasa',
                'category' => 'bahasa',
                'max_members' => 30,
                'current_members' => 25,
            ],
            [
                'name' => 'Basket',
                'description' => 'Ekstrakurikuler basket untuk mengembangkan bakat olahraga siswa.',
                'coach' => 'Ahmad Fauzi, S.Pd',
                'schedule' => 'Selasa & Jumat 15:30-17:30',
                'location' => 'Lapangan Basket',
                'category' => 'olahraga',
                'max_members' => 20,
                'current_members' => 18,
            ],
            [
                'name' => 'Paduan Suara',
                'description' => 'Ekstrakurikuler paduan suara untuk mengembangkan bakat seni musik siswa.',
                'coach' => 'Dewi Lestari, S.Pd',
                'schedule' => 'Senin 15:00-17:00',
                'location' => 'Aula Sekolah',
                'category' => 'seni',
                'max_members' => 40,
                'current_members' => 35,
            ],
            [
                'name' => 'PMR (Palang Merah Remaja)',
                'description' => 'Ekstrakurikuler PMR untuk melatih keterampilan pertolongan pertama dan kemanusiaan.',
                'coach' => 'Rina Sari, S.Kep',
                'schedule' => 'Sabtu 08:00-10:00',
                'location' => 'UKS',
                'category' => 'lainnya',
                'max_members' => 30,
                'current_members' => 22,
            ],
            [
                'name' => 'Pramuka',
                'description' => 'Ekstrakurikuler pramuka wajib untuk siswa kelas X dan sukarela untuk kelas XI-XII.',
                'coach' => 'Drs. Suhardi',
                'schedule' => 'Sabtu 14:00-16:00',
                'location' => 'Lapangan Sekolah',
                'category' => 'lainnya',
                'max_members' => 100,
                'current_members' => 85,
            ],
        ];

        foreach ($extracurriculars as $extracurricular) {
            Extracurricular::create($extracurricular);
        }

        // Create sample PPDB registrations
        PpdbRegistration::factory(50)->create();
        PpdbRegistration::factory(10)->accepted()->create();
        PpdbRegistration::factory(5)->rejected()->create();

        // Create sample feedback
        Feedback::factory(30)->create();
        Feedback::factory(10)->replied()->create(['replied_by' => $admin->id]);
        Feedback::factory(5)->unread()->create();
    }
}

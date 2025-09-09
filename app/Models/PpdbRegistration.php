<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\PpdbRegistration
 *
 * @property int $id
 * @property string $full_name
 * @property string $nik
 * @property string $nisn
 * @property string $gender
 * @property string $birth_place
 * @property \Illuminate\Support\Carbon $birth_date
 * @property string $address
 * @property string $phone
 * @property string $email
 * @property string $school_origin
 * @property float $final_score
 * @property string $major_choice1
 * @property string|null $major_choice2
 * @property string $father_name
 * @property string $mother_name
 * @property string $parent_phone
 * @property string|null $parent_occupation
 * @property string $status
 * @property string|null $notes
 * @property \Illuminate\Support\Carbon $registered_at
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration query()
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereAddress($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereBirthDate($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereBirthPlace($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereEmail($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereFatherName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereFinalScore($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereFullName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereGender($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereMajorChoice1($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereMajorChoice2($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereMotherName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereNik($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereNisn($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereNotes($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereParentOccupation($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereParentPhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration wherePhone($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereRegisteredAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereSchoolOrigin($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereStatus($value)
 * @method static \Illuminate\Database\Eloquent\Builder|PpdbRegistration whereUpdatedAt($value)
 * @method static \Database\Factories\PpdbRegistrationFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class PpdbRegistration extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'full_name',
        'nik',
        'nisn',
        'gender',
        'birth_place',
        'birth_date',
        'address',
        'phone',
        'email',
        'school_origin',
        'final_score',
        'major_choice1',
        'major_choice2',
        'father_name',
        'mother_name',
        'parent_phone',
        'parent_occupation',
        'status',
        'notes',
        'registered_at',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'birth_date' => 'date',
        'final_score' => 'decimal:2',
        'registered_at' => 'datetime',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get the age of the student.
     */
    public function getAgeAttribute(): int
    {
        return (int) $this->birth_date->diffInYears(now());
    }

    /**
     * Get formatted gender.
     */
    public function getGenderTextAttribute(): string
    {
        return $this->gender === 'L' ? 'Laki-laki' : 'Perempuan';
    }
}
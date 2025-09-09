<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\Extracurricular
 *
 * @property int $id
 * @property string $name
 * @property string $description
 * @property string|null $image
 * @property string|null $coach
 * @property string|null $schedule
 * @property string|null $location
 * @property string $category
 * @property bool $is_active
 * @property int $max_members
 * @property int $current_members
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular query()
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular whereCategory($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular whereCoach($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular whereCurrentMembers($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular whereImage($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular whereIsActive($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular whereLocation($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular whereMaxMembers($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular whereName($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular whereSchedule($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|Extracurricular active()
 * @method static \Database\Factories\ExtracurricularFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class Extracurricular extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'name',
        'description',
        'image',
        'coach',
        'schedule',
        'location',
        'category',
        'is_active',
        'max_members',
        'current_members',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'is_active' => 'boolean',
        'max_members' => 'integer',
        'current_members' => 'integer',
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Scope a query to only include active extracurriculars.
     */
    public function scopeActive($query)
    {
        return $query->where('is_active', true);
    }

    /**
     * Check if the extracurricular is full.
     */
    public function isFull(): bool
    {
        return $this->current_members >= $this->max_members;
    }

    /**
     * Get available slots.
     */
    public function getAvailableSlotsAttribute(): int
    {
        return max(0, $this->max_members - $this->current_members);
    }
}
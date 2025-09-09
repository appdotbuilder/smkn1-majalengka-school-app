<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

/**
 * App\Models\SchoolProfile
 *
 * @property int $id
 * @property string $key
 * @property string $value
 * @property string $type
 * @property string|null $description
 * @property \Illuminate\Support\Carbon|null $created_at
 * @property \Illuminate\Support\Carbon|null $updated_at
 * 
 * @method static \Illuminate\Database\Eloquent\Builder|SchoolProfile newModelQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|SchoolProfile newQuery()
 * @method static \Illuminate\Database\Eloquent\Builder|SchoolProfile query()
 * @method static \Illuminate\Database\Eloquent\Builder|SchoolProfile whereCreatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SchoolProfile whereDescription($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SchoolProfile whereId($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SchoolProfile whereKey($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SchoolProfile whereType($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SchoolProfile whereUpdatedAt($value)
 * @method static \Illuminate\Database\Eloquent\Builder|SchoolProfile whereValue($value)
 * @method static \Database\Factories\SchoolProfileFactory factory($count = null, $state = [])
 * 
 * @mixin \Eloquent
 */
class SchoolProfile extends Model
{
    use HasFactory;

    /**
     * The attributes that are mass assignable.
     *
     * @var list<string>
     */
    protected $fillable = [
        'key',
        'value',
        'type',
        'description',
    ];

    /**
     * The attributes that should be cast.
     *
     * @var array<string, string>
     */
    protected $casts = [
        'created_at' => 'datetime',
        'updated_at' => 'datetime',
    ];

    /**
     * Get a school profile value by key.
     */
    public static function getValue(string $key, $default = null)
    {
        $profile = static::where('key', $key)->first();
        
        if (!$profile) {
            return $default;
        }

        return match ($profile->type) {
            'json' => json_decode($profile->value, true),
            'boolean' => (bool) $profile->value,
            'integer' => (int) $profile->value,
            'float' => (float) $profile->value,
            default => $profile->value,
        };
    }

    /**
     * Set a school profile value by key.
     */
    public static function setValue(string $key, $value, string $type = 'text', ?string $description = null): self
    {
        $processedValue = match ($type) {
            'json' => json_encode($value),
            'boolean' => $value ? '1' : '0',
            default => (string) $value,
        };

        return static::updateOrCreate(
            ['key' => $key],
            [
                'value' => $processedValue,
                'type' => $type,
                'description' => $description,
            ]
        );
    }
}
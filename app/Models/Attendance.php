<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Builder;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Attendance extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'email',
        'subject',
        'attended_at',
    ];

    public $timestamps = true;

    public function scopeFiltered(Builder $query, array $filters): Builder
    {
        return $query
            ->when(!empty($filters['subject']), fn ($q) => $q->where('subject', $filters['subject']))
            ->when(!empty($filters['date']), fn ($q) => $q->whereDate('attended_at', $filters['date']))
            ->when(!empty($filters['date_from']), fn ($q) => $q->whereDate('attended_at', '>=', $filters['date_from']))
            ->when(!empty($filters['date_to']), fn ($q) => $q->whereDate('attended_at', '<=', $filters['date_to']));
    }
}
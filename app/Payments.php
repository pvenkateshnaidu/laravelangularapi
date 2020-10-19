<?php

/**
 * Created by Reliese Model.
 */

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;


class Payments extends Model
{
	protected $table = 'payments';
	protected $primaryKey = 'paymentId';

	protected $fillable = [
		'amount','transferDate','confirmationNumber','paymentStatus','userId'
	];
    public function user_details()
    {
        return $this->belongsTo(User::class, 'userId');
    }

}
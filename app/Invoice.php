<?php

/**
 * Created by Reliese Model.
 */

namespace App;

use Carbon\Carbon;
use Illuminate\Database\Eloquent\Collection;
use Illuminate\Database\Eloquent\Model;


class Invoices extends Model
{
	protected $table = 'invoices';
	protected $primaryKey = 'invoiceId';

	protected $fillable = [
		'invoiceDate','description','hours','rate','printName','amount','signature'
	];
    public function user_details()
    {
        return $this->belongsTo(User::class, 'userId');
    }

}

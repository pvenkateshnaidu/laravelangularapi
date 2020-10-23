<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Invoices;
use Carbon\Carbon;
use Auth;
class InvoicesController extends Controller
{
    public function __construct()
    {
        $this->middleware('auth:api');
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        //

     //   $timesheet = Payments::where('userId','=',Auth::user()->id)
     $timesheet = Invoices::with('user_details')
        ->orderBy('created_at', 'DESC')
        ->get();
        return response()->json(['timesheet' => $timesheet ], 200);
    }
    public function store(Request $request)
    {
        $this->validate($request, [
            'amount' => 'required',
         //   'date' => 'unique:employeetimesheet,fromDate,NULL,timeSheetId,userId,'.Auth::user()->id
        ]);

        $user = Invoices::create([
            'amount' => $request->amount,
            'date' => $request->date,
            'services' => $request->services,
            'userId' => Auth::user()->id,
            'hours' => $request->hours,
            'invoiceNumber' => $request->invoiceNumber,
            'rate' => $request->rate,
            'printName' =>$request->printName,
            'signature' =>$request->signature,
            'created_at' => Carbon::now()
        ]);

        return response()->json(['user' => "Invoice Created Successfully"], 200);
    }
    public function show($id)
    {
        //
        $user = Invoices::with('user_details')->find($id);

       $currentUser =Auth::user();
        return response()->json(['payment' =>$user,"user"=>$currentUser], 200);
    }
 /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {

        $user = Invoices::find($id);
        return response()->json(['payment' => $user], 200);
    }


}

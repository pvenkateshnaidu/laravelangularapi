<?php

namespace App\Http\Controllers\Admin;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\Payments;
use Carbon\Carbon;
use Auth;
class PaymentsController extends Controller
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
     $timesheet = Payments::with('user_details')
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

        $user = Payments::create([
            'amount' => $request->amount,
            'transferDate' => $request->transferDate,
            'confirmationNumber' => $request->confirmationNumber,
            'userId' => $request->userId,
            'paymentStatus' => $request->paymentStatus,
            'created_at' => Carbon::now()
        ]);

        return response()->json(['user' => "Payment Created Successfully"], 200);
    }
    public function show($id)
    {
        //
        $user = Payments::with('user_details')->find($id);

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

        $user = Payments::find($id);
        return response()->json(['payment' => $user], 200);
    }
    public function update(Request $request, $id)
    {
        $this->validate($request, [
            'duration' => 'required',
        //   'fromDate'    => 'required|unique:employeetimesheet,fromDate,'.$id.',timeSheetId,userId,'.Auth::user()->id
           //'fromDate'    => 'required|unique:employeetimesheet,fromDate,' . $id . ',id',
        ]);
        $result= TimeSheet::where('fromDate', '=', $request->fromDate)
        ->where('userId', '=', Auth::user()->id)
        ->where('timeSheetId', '!=', $id)
        ->get();

       if(empty(count($result))){


        $user = TimeSheet::find($id);
        $user->update([
            'duration' => $request->duration,
            'fromDate' => $request->fromDate,
            'assignment' => $request->assignment,
            'serviceCode' => $request->serviceCode

        ]);
            return response()->json(['user' => $user,'message' => 'Timesheet Updated Successfully'], 200);

               }else{
                return response()->json(['message' => 'Date Field filed already Exist'], 400);

               }



    }


}
